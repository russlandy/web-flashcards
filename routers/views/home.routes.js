const router = require('express').Router();
const Home = require('../../components/pages/Home');
const { Topic } = require('../../db/models');

router.get('/', async (req, res) => {
  const topics = await Topic.findAll({ raw: true });
  const page = res.renderComponent(Home, { topics });
  res.send(page);
});

module.exports = router;
