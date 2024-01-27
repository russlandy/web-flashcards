const React = require("react");
const Layout = require("../Layout");

function Login({ title = "Login" }) {
  return (
    <Layout title={title}>
      <div className="login">
        <h2 className="login_title">Войти</h2>
        <form className="login_form" action="/login" method="post">
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
          <button className="login_btn" type="submit">
            Вперед!
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = Login;
