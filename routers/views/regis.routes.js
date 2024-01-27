const Registration = require("../../components/pages/Registration");
const { User } = require("../../db/models");

const router = require("express").Router();

router.get("/", (req, res) => {
  const page = res.renderComponent(Registration);
  res.send(page);
});

router.post("/", async (req, res) => {
  const login = req.body.login;
  const password = req.body.password;
  const repitPassword = req.body.password_repit;
  console.log(login, password, repitPassword);
  try {
    const loginCheck = await User.findAll({
      raw: true,
      where: { login },
    });
    console.log("logincheck ", loginCheck);
    if (loginCheck.length === 0 && password === repitPassword) {
      await User.create({ login, password, points: 0 });
      res.redirect("/");
    } else {
      res.send("This username already busy or your password doesn't match");
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
