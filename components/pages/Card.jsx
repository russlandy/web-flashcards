const React = require('react');
const Layout = require('../Layout');
const Question = require('./Question');

function Card({ questions }) {
  return (
    <Layout>
      <div className='card-header'>
        <h1>Flashcards</h1>
        <div className='card-nav-bar'>
          <a href='/username'>username</a>
          <a href='/logout'>logout</a>
          <a href='/'>home</a>
        </div>
      </div>
      <div>
        {questions.map((question) => {
          return <Question key={question.id} question={question} />;
        })}
      </div>
    </Layout>
  );
}
module.exports = Card;
