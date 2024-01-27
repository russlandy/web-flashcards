const router = require("express").Router()
const RoundStat = require("../../components/pages/RoundStat")
const { Topic } = require("../../db/models")
const { User } = require("../../db/models")

router.get("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({raw:true, where: {id: Number(id)}})
        console.log(user);
        const page = res.renderComponent(RoundStat,({user}))
        res.send(page)
    } catch ({message}) {
        res.json({message})
    }

})

module.exports = router