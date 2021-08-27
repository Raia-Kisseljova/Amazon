import sequelize from "../index.js";
import s from "sequelize";
const { DataTypes } = s;

const Reviews = sequelize.define(
  "review",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    review: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false }
);

export default Reviews;
