"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const topicArr = [{ title: "Leopards" }, { title: "Racoons" }];
    const topicObj = topicArr.map((topic) => ({
      ...topic,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert("Topics", topicObj);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Topics");
  },
};
