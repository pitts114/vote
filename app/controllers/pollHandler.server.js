var Polls = require("../models/polls.js")
const resultsPerPage = 10

function PollHandler() {
  this.newPoll = function(res, title, choices, owner){
    if (!title || choices.length === 0){
      res.json({error:"Please do not leave the title or choices blank"})
      return
    }

    var choicesArr = choices.map((element)=>{
      return {choice: element, votes: 0}
    })

    var poll = new Polls({
      title: title,
      choices: choicesArr,
      owner: owner
    })

    poll.save((err)=>{
      if (err){
        console.log("Something went wrong when saving the poll")
        res.json({
          status: "error"
        })
        throw (err)
      }
      else {
        res.json({
          status: 200,
          id: poll._id,
          title: title,
          choices: choices
        })
      }
    })
  }

  this.findAllPolls = function(res, pageNumber, pageLimit) {
    var limit
    if (pageLimit && pageLimit !== 0){
      limit = pageLimit
    }
    else {
      limit = resultsPerPage
    }

    Polls.find({},{"choices._id": false}).skip(pageNumber*limit)
      .exec((err, results)=>{
        if (err){
          console.log("Error finding all polls")
          throw err
        }
        //console.log(results)
        if (results[0]){
          var obj = {
            current: "/api/polls?page=" + pageNumber + "&limit=" + limit
            //previous: "",
            //current: "",
            //next: "",
            //polls
          }
          if (pageNumber>0){
            var page = Number(pageNumber) - 1
            obj.previous = "/api/polls?page=" + page + "&limit=" + limit
          }
          if (limit < results.length){
            var page = Number(pageNumber) + 1
            obj.next = "api/polls?page=" + page + "&limit=" + limit
          }
          obj.polls = results.filter((val, index, arr)=>{
            return index < limit
          })

          res.json(obj)

        }
        else{
          res.json({"status":"There are no polls!"})
        }

      })
  }

  this.findPoll = function(res, id){
    Polls.findOne({"_id": id}).exec((err, results)=>{
      if (err) throw err
      if (results){
        res.json(results)
      }
      else {
        res.json({"status": "No poll found with that id"})
      }
    })
  }

//TODO Make more efficient calls to db
  this.vote = function(res, id, choice, voter){

    Polls.findOne({"_id":id, "choices.choice":choice, "voters":voter}).exec((err,results)=>{
      if (err) throw err
      if (results){
        res.json({"status":"You already voted!"})
      }
      else {
        Polls.findOneAndUpdate({"_id":id, "choices.choice":choice}, {$inc: {"choices.$.votes": 1}, $push: {voters:voter}} ,{new:true})
        .exec((err, results)=>{
          if (err) throw err
          res.json(results)
        })
      }
    })
  }

  this.deletePoll = function(res, id, owner){
    Polls.findOne({"_id":id}).exec((err,result)=>{
      if (result.owner === owner){
        Polls.remove({"_id":id}).exec((err, results)=>{
          if (results.result.n === 0){
            res.json({"status": "Poll does not exist: No poll was deleted."})
          }
          else {
            res.json({"status": "Poll deleted."})
          }
        })
      }
      else {
        res.json({"error":"You are not the owner of this poll!"})
      }
    })
  }

  this.pollsByOwner = function(res, owner){
    Polls.find({"owner":owner}, '_id title').exec((err,results)=>{
      if (err) throw err
      var obj = {
        owner: owner,
        polls: results
      }
      res.json(obj)
    })
  }

}

module.exports = PollHandler
