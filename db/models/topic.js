"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    static associate({ Question }) {
      Topic.hasMany(Question, { foreignKey: "TopicID" });
      // define association here
    }
  }
  Topic.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Topic",
    }
  );
  return Topic;
};
