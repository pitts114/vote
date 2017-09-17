var path = process.cwd()
var PollHandler = require(path + "/app/controllers/pollHandler.server.js")

module.exports = function(app, express) {

  var pollHandler = new PollHandler()

/*

  app.route("/api/new")
    .post((req, res)=>{
      var title = req.query.title
      var choices = req.query.choices.replace(' ','').split(',')
      pollHandler.newPoll(res, title, choices)
    })

  app.route("/api/polls")
    .get((req, res)=>{
      pollHandler.findAllPolls(res)
    })
*/

app.route("/poll/:pollid")
  .get((req,res)=>{

  })


//serve react files
app.use(express.static(path + '/client/build'))

app.use("/public/css", express.static(path + '/app/public/css'))
app.use("/public/js",express.static(path + '/app/public/js'))

}
