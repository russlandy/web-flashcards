const router = require("express").Router();
const Card = require("../../components/pages/Card")

router.get("/:id", (req, res) => {
    const page = res.renderComponent(Card)
    res.send(page)
})

module.exports = router;