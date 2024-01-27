const Login = require("../../components/pages/Login");
const { User } = require("../../db/models");

const router = require("express").Router();

router.get("/", (req, res) => {
  const page = res.renderComponent(Login);
  res.send(page);
});

router.post("/", async (req, res) => {
  const login = req.body.login;
  const password = req.body.password;
  const user = await User.findOne({where: {login}})
  try {
    const loginCheck = await User.findAll({
      raw: true,
      where: { login },
    });
    if (loginCheck && loginCheck[0].password === password) {
      res.app.locals.login = login;
      res.app.locals.id = loginCheck[0].id;
      res.redirect("/");
    } else {
      res.send("Login or password not true");
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
