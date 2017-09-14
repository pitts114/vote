module.exports = function(app, express) {

  var path = process.cwd()

  app.get("/lol", (req, res)=>{
    res.send("lol")
    res.end()
  })



//serve react files
app.use(express.static(path + '/client/build'))

app.use("/public", express.static(path + '/public'))

//catch all other responses
app.get("*", (req, res)=>{
  res.send("404 not found")
})


}
