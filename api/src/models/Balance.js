const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "balance",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      income: {
        type: DataTypes.INTEGER,
      },
      expense: {
        type: DataTypes.INTEGER,
      },
      date: {
        type: DataTypes.STRING,
      },
      concept: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      timestamps: false,
    }
  );
};
