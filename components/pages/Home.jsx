const React = require("react");
const Layout = require("../Layout");

function Home({ title = "Flashcards" }) {
  return (
    <Layout title={title}>
      <div className="wrapper_header">
        <div className="header">
          <h1>Flashcards</h1>
          <div className="nav-bar">
            <a href="/regPage">register</a>
            <a href="/login">login</a>
            <a href="/">home</a>
          </div>
        </div>
      </div>
      <div className="wrapper_cards">
        <h2>Flashcard Decks</h2>
        <div className="nav-body">
          <div className="row-1">
            <a href="/Nighthawk Trivia">Nighthawk Trivia</a>
            <a href="/World Capitals">World Capitals</a>
            <a href="/German Vocabulary">German Vocabulary</a>
          </div>
          <div className="row-2">
            <a href="/Important Dates">Important Dates</a>
            <a href="/Otter Facts">Otter Facts</a>
            <a href="/Animal Noises">Animal Noises</a>
          </div>
          <div className="row-3">
            <a href="/Rocket Scientists">Rocket Scientists</a>
            <a href="/Board Games">Board Games</a>
            <a href="/Business Ethics">Business Ethics</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Home;
