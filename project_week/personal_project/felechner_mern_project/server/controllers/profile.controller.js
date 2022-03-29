
const axios = require("axios");

const config = {
    'headers': {
        'X-Authorization': 'ggwgkkkcg480wksoo00kwsws080scowow44'
    }
}










module.exports.findProfile = (req, res) => {
    axios.get("https://xbl.io/api/v2/account", config)
    .then(profileInfo => {
        console.log(profileInfo.data)
        res.json({results: profileInfo.data})
    })
    .catch(err => console.log(err));
}
module.exports.findAchievements = (req, res) => {
    axios.get("https://xbl.io/api/v2/achievements", config)
    .then(achievementInfo => {
        console.log(achievementInfo.data)
        res.json({results: achievementInfo.data})
    })
    .catch(err => console.log(err));
}
module.exports.findFriends = (req, res) => {
    axios.get("https://xbl.io/api/v2/friends", config)
    .then(friendsList => {
        console.log(friendsList.data)
        res.json({results: friendsList.data})
    })
    .catch(err => console.log(err));
}















// Public URL --> https://xbl.io/app/auth/6d78d895-23e6-4de4-afa4-6dd76a8bf367
// ggwgkkkcg480wksoo00kwsws080scowow44 API KEY
// 6d78d895-23e6-4de4-afa4-6dd76a8bf367 APP KEY