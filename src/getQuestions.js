const { sequelize, Question, Topic } = require("../db/models");

async function connect() {
  try {
    await sequelize.authenticate();
    console.log("super!!!!");
  } catch (err) {
    console.log(err);
  }
}
// connect();

async function getQuestions(id) {
  try {
    const questions = await Question.findAll({
      raw: true,
      where: { topicID: id },
      include: {
        model: Topic,
      },
    });
    const arrQuestions = questions.map((questions) => questions.question);
    const arrAnswers = questions.map((questions) => questions.answer);
    console.log(arrQuestions, arrAnswers);
  } catch (err) {
    console.log(err);
  }
}
getQuestions(2);

module.exports = getQuestions;
