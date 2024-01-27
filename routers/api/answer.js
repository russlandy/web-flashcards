const router = require('express').Router();
const { Question } = require('../../db/models/index');

router.route('/:id').post(async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  const answer = await Question.findOne({
    raw: true,
    where: { topicID: Number(id) },
  });
  if (text === answer.answer) {
    res.json({ message: 'True' });
  } else {
    res.json({ message: 'False' });
  }
});

module.exports = router;
