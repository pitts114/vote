var path = process.cwd()
var PollHandler = require(path + "/app/controllers/pollHandler.server.js")

module.exports = function(app, express) {

  var pollHandler = new PollHandler()

//API stuff
app.route("/api/new")
  .post((req, res)=>{
    var title = req.body.title
    var choices = req.body.choices.replace(', ',',').split(',')
    pollHandler.newPoll(res, title, choices)
  })

app.route("/api/poll/:id")
  .get((req, res)=>{
    console.log("Getting a poll")
    pollHandler.findPoll(res, req.params.id)
  })
  .delete((req,res)=>{
    pollHandler.deletePoll(res, req.params.id)
  })
  .post((req,res)=>{
    pollHandler.vote(res, req.params.id, req.body.choice)
  })

app.get("/api/polls", (req,res)=>{
  pollHandler.findAllPolls(res)
})

//serve react files
app.use(express.static(path + '/client/build'))

app.use("/api.html", express.static(path + "/app/public/api.html"))
app.use("/public/css", express.static(path + '/app/public/css'))
app.use("/public/js",express.static(path + '/app/public/js'))

}
