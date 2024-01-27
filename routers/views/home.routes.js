const router = require('express').Router();
const Home = require('../../components/pages/Home');
const { Topic, User } = require('../../db/models');

router.get('/', async (req, res) => {
  const user = req.app.locals.id
  const topics = await Topic.findAll({ raw: true });
  const page = res.renderComponent(Home, { topics, user });
  res.send(page);
});

module.exports = router;
