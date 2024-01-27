const router = require("express").Router();
const Home = require("../../components/pages/Home")

router.get("/", (req, res) => {
    const page = res.renderComponent(Home)
    res.send(page)
})

module.exports = router