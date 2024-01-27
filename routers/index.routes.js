const router = require("express").Router();

const RoundStat = require("./views/roundstat.routes")
const Profile = require("./views/profile.routes")
const Home = require("./views/home.routes")
const Card = require("./views/card.routes")

router.use("/round-stat", RoundStat)
router.use("/profile", Profile)
router.use("/", Home)
router.use("/card", Card)

module.exports = router;