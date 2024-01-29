const Profile = require("../../components/pages/Profile");
const { User, Topic } = require("../../db/models")

const router = require("express").Router();

router.get("/:id", async(req, res) => {
    const { id } = req.params;
    const user = await User.findOne({raw: true ,where: {id: Number(id)}})
    const topics = await Topic.findAll({raw: true})
    const page = res.renderComponent(Profile, {user, topics});
    console.log(user.id);
    res.send(page)
})

module.exports = router