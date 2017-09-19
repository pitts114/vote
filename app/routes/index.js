var path = process.cwd()
var PollHandler = require(path + "/app/controllers/pollHandler.server.js")
var UserHandler = require(path + "/app/controllers/userHandler.server.js")

module.exports = function(app, express, passport) {

  function IsLoggedIn(req,res,next){
    if (req.isAuthenticated()){
      return next()
    }
    else {
      res.redirect("/login")
    }
  }

  app.route("/login").get((req, res)=>{
    res.sendFile(path + "/app/public/login.html")
  })

  app.get("/logout", (req, res)=>{
    req.logout()
    res.redirect("/login")
  })

  app.get("/profile", (req,res)=>{
    res.sendFile(path + "/app/public/profile.html")
  })

  app.route("/api/user/:id")
    .get(IsLoggedIn, (req,res)=>{
      res.json(req.user.github)
    })

  app.route("/auth/github").get(passport.authenticate("github"))

  app.route("/auth/github/callback").get(passport.authenticate("github", {
    successRedirect: "/",
    failureRedirect: "/login"
  }))

  var pollHandler = new PollHandler()

//API stuff
app.route("/api/new")
  .post((req, res)=>{
    var title = req.body.title
    var choices = req.body.choices.replace(/\s*,\s*/g, ",").split(',')
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
  if (!req.query.page){
    pollHandler.findAllPolls(res, 0) //most recent
  }
  else {
    pollHandler.findAllPolls(res, req.query.page)
  }
})

app.get("/api", (req,res)=>{
  res.sendFile(path + "/app/public/api.html")
})

//serve react files
app.use(express.static(path + '/client/build'))

app.use("/public/css", express.static(path + '/app/public/css'))
app.use("/public/js",express.static(path + '/app/public/js'))
app.use("/public/fonts", express.static(path + '/app/public/fonts'))

}
