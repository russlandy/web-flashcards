const router = require("express").Router()
const RoundStat = require("../../components/pages/RoundStat")

router.get("/id", (req, res) => {
    const page = res.renderComponent(RoundStat)
    res.send(page)
})

module.exports = router