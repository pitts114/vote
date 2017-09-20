var path = process.cwd()
var PollHandler = require(path + "/app/controllers/pollHandler.server.js")
var UserHandler = require(path + "/app/controllers/userHandler.server.js")

module.exports = function(app, express, passport) {

  function IsLoggedIn(req,res,next){
    if (req.isAuthenticated()){
      return next()
    }
    else {
      res.json({"status":"Logged Out"})
    }
  }

  app.get("/logout", (req, res)=>{
    req.logout()
    res.redirect("/")
  })


  app.route("/api/user") //get the logged in user's info
    .get(IsLoggedIn, (req,res)=>{
      res.json(req.user.github)
    })

  app.route("/auth/github").get(passport.authenticate("github")) //go to github and login
  app.route("/auth/github/callback").get(passport.authenticate("github", {
    successRedirect: "/",
    failureRedirect: "/"
  }))

  var pollHandler = new PollHandler()

//API stuff
app.route("/api/new")
  .post((req, res)=>{
    var owner = getVoter(req)
    var title = req.body.title
    var choices = req.body.choices.replace(/\s*,\s*/g, ",").split(',')
    pollHandler.newPoll(res, title, choices, owner)
  })

app.route("/api/poll/:id")
  .get((req, res)=>{
    console.log("User " + req.sessionID + " is getting some poll info")
    pollHandler.findPoll(res, req.params.id)
  })

  .delete((req,res)=>{
    var voter = getVoter(req)
    pollHandler.deletePoll(res, req.params.id, voter)
  })

  .post((req,res)=>{
    console.log(req.session.passport)
    var voter = getVoter(req)
    pollHandler.vote(res, req.params.id, req.body.choice, voter)
  })

app.get("/api/polls", (req,res)=>{
  //console.log(req.query.limit)
  if (!req.query.page){
    pollHandler.findAllPolls(res, 0, 0) //most recent
  }
  else {
    pollHandler.findAllPolls(res, req.query.page, req.query.limit)
  }
})


//serve react files
app.use(express.static(path + '/client/build'))

app.use("/public/css", express.static(path + '/app/public/css'))
app.use("/public/js",express.static(path + '/app/public/js'))
app.use("/public/fonts", express.static(path + '/app/public/fonts'))

}


function getVoter(req){
  if (req.session.passport){
    return req.session.passport.user
  }
  else {
    return req.sessionID
  }

}
