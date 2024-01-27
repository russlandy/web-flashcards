"use strict";
const arrQuestions = require("../../src/questions");
const question = require("../models/question");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const questionObj = arrQuestions.map((question) => ({
      ...question,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert("Questions", questionObj);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions");
  },
};
