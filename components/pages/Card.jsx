const React = require("react");
const Layout = require("../Layout");
const Question = require("./Question");

function Card({ questions, user }) {
  return (
    <Layout>
      <div className="wrapper_header">
      <div className='card-header'>
        <h1>Flashcards</h1>
        <div className='card-nav-bar'>
          <a href={`/profile/${user}`}>{user}</a>
          <a href='/logout'>logout</a>
          <a href='/'>home</a>
          </div>
        </div>
      </div>
      <div className="wrapper_cards questions">
        {questions.map((question) => {
          return <Question key={question.id} question={question} />;
        })}
      </div>
    </Layout>
  );
}
module.exports = Card;
