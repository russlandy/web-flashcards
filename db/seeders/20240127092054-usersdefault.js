"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [
      { login: "Eduard", password: "12345", points: 0 },
      { login: "Nikolay", password: "12345", points: 0 },
      { login: "Alex", password: "12345", points: 0 },
      { login: "Ruslan", password: "12345", points: 0 },
    ];

    const usersArr = users.map((user) => ({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert("Users", usersArr);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users");
  },
};
