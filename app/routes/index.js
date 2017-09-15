module.exports = function(app, express) {

  var path = process.cwd()

  app.get("/lol", (req, res)=>{
    res.send("lol")
    res.end()
  })



//serve react files
app.use(express.static(path + '/client/build'))

app.use("/public/css", express.static(path + '/app/public/css'))
app.use("/public/js",express.static(path + '/app/public/js'))

//catch all other responses
/*
app.get("*", (req, res)=>{
  res.send("404 not found")
})
*/

}
