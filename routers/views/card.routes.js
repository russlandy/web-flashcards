const router = require('express').Router();
const Card = require('../../components/pages/Card');
const { Question, Topic } = require('../../db/models');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const questions = await Question.findAll({
    raw: true,
    where: { topicID: Number(id) },
    include: {
      model: Topic,
    },
  });
  const page = res.renderComponent(Card, { questions });
  res.send(page);
});

module.exports = router;
