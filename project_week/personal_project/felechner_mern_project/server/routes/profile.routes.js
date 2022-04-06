

const ProfileController = require("../controllers/profile.controller")


module.exports = (app)=>{
    app.get("/api/profile", ProfileController.findProfile)  
    app.get("/api/achievements", ProfileController.findAchievements)  
    app.get("/api/friends", ProfileController.findFriends)  
    // app.get("/api/conversations", ProfileController.findMessages)  
    app.get("/api/gameclips", ProfileController.findClips)  
}

