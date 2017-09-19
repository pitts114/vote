var Users = require("../models.users.js")

function UserHandler(){
  this.getInfo() = function(req, res){
    Users.findOne({"github.id":req.user.github.id}, {"_id": false})
      .exec((err,result)=>{
        if (err) throw err

        res.json({
          id: result.id,
          displayName: results.displayName
        })
      })
  {
}
