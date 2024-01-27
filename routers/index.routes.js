const router = require("express").Router();

const RoundStat = require("./views/roundstat.routes")
const Profile = require("./views/profile.routes")

router.use("/round-stat", RoundStat)
router.use("/profile", Profile)

module.exports = router;