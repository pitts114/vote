var path = process.cwd()
var PollHandler = require(path + "/app/controllers/pollHandler.server.js")

module.exports = function(app, express) {

  var pollHandler = new PollHandler()

  app.route("/api/new")
    .get((req, res)=>{
      pollHandler.newPoll(res)
    })



//serve react files
app.use(express.static(path + '/client/build'))

app.use("/public/css", express.static(path + '/app/public/css'))
app.use("/public/js",express.static(path + '/app/public/js'))

}
