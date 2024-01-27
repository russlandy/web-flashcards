const Profile = require("../../components/pages/Profile");

const router = require("express").Router();

router.get("/id", (req, res) => {
    const page = res.renderComponent(Profile);
    res.send(page)
})

module.exports = router