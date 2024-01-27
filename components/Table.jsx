const React = require("react");

module.exports = function Table({ topic, user }) {
  return (
    <>
      <h3>{topic.title}</h3>
      <table border="1">
        <tr>
          <th>Date</th>
          <th>Card in Deck</th>
          <th>User's points</th>
        </tr>
        <tr>
          <th>{topic.updatedAt.toString().slice(0, 24)}</th>
          <th>5</th>
          <th>{user.points}</th>
        </tr>
      </table>
    </>
  );
};
