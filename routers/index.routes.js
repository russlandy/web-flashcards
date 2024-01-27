const router = require("express").Router();

const RoundStat = require("./views/roundstat.routes");
const Profile = require("./views/profile.routes");
const Home = require("./views/home.routes");
const Card = require("./views/card.routes");
const Login = require("./views/login.routes");
const Registration = require("./views/regis.routes");

router.use("/round-stat", RoundStat);
router.use("/profile", Profile);
router.use("/", Home);
router.use("/card", Card);
router.use("/login", Login);
router.use("/regPage", Registration);

module.exports = router;
