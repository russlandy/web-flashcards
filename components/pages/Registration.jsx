const React = require("react");
const Layout = require("../Layout");

function Registration({ title = "Registration" }) {
  return (
    <Layout title={title}>
      <div className="login">
        <h2 className="login_title">Registration</h2>
        <form className="login_form" action="/regPage" method="post">
          <input
            className="login_input"
            type="text"
            name="login"
            id="login"
            placeholder="login"
          />
          <input
            className="login_input"
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          <input
            className="login_input"
            type="password"
            name="password_repit"
            id="password_repit"
            placeholder="repit password"
          />
          <button className="login_btn" type="submit">
            Вперед!
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = Registration;
