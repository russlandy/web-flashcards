const React = require('react');
const Layout = require('../Layout');
const Question = require('./Question');

function Card({ questions = [] }) {
  return (
    <Layout>
      <div>
        <Question />
        {questions.map((question) => (
          <Question key={question.id} question={question} />
        ))}
      </div>
    </Layout>
  );
}
module.exports = Card;
