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
  console.log(login, password);
  try {
    const loginCheck = await User.findAll({
      raw: true,
      where: { login },
    });
    console.log("logincheck ", loginCheck);
    if (loginCheck && loginCheck[0].password === password) {
      res.redirect("/");
    } else {
      res.send("Login or password not true");
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
