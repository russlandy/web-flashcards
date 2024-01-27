const router = require("express").Router();
const { Question, User } = require("../../db/models/index");

router.route("/:id").post(async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  const answer = await Question.findOne({
    raw: true,
    where: { id: Number(id) },
  });
  if (text === answer.answer) {
    const localLogin = res.app.locals.login;
    const { points } = await User.findOne({ where: { login: localLogin } });
    await User.update({ points: points + 1 }, { where: { login: localLogin } });
    res.json({ message: "True" });
  } else {
    res.json({ message: "False" });
  }
});

module.exports = router;
