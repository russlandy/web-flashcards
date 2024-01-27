"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Topic }) {
      Question.belongsTo(Topic, { foreignKey: "topicID" });
    }
  }
  Question.init(
    {
      question: DataTypes.STRING,
      answer: DataTypes.STRING,
      topicID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Topics",
        },
      },
    },
    {
      sequelize,
      modelName: "Question",
    }
  );
  return Question;
};
