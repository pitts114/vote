module.exports = function(app) {

  var path = process.cwd()

  app.route("/")
    .get((req, res)=>{
      res.sendFile(path + "/public/index.html")
    })

  app.route("*").get((req, res)=>{
    res.redirect("/")
  })
}
