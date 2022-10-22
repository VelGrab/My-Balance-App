const express = require("express");
const router = express.Router();
const { Balance } = require("../../../db.js");

/* A route that is going to be used to get the income of a user. */
router.get("/income/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const balance = await Balance.findAll({
      attributes: ["income", "date", "concept", "id", "userId", "comment"],
      where: {
        userId,
      },
    });
    if (balance) {
      res.status(200).json(balance);
    } else {
      res.status(404).send("No se encontraron ingresos");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

/* A route that is going to be used to get the expense of a user. */
router.get("/expense/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const balance = await Balance.findAll({
      attributes: ["expense", "date", "concept", "id", "userId", "comment"],
      where: {
        userId,
      },
    });
    if (balance) {
      res.status(200).json(balance);
    } else {
      res.status(404).send("No se encontraron egresos");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

/* Creating a new income balance. */
router.post("/income/:userId", async (req, res) => {
  const { userId } = req.params;

  const { income, concept, date, comment } = req.body;

  try {
    const incomeBalance = await Balance.create({
      income,
      concept,
      comment,
      date,
      userId,
    });
    res.status(200).json(incomeBalance);
  } catch (error) {
    res.status(400).send(error);
  }
});

/* Creating a new expense balance. */
router.post("/expense/:userId", async (req, res) => {
  const { userId } = req.params;

  const { expense, concept, date, comment } = req.body;

  try {
    const expenseBalance = await Balance.create({
      expense,
      concept,
      comment,
      date,
      userId,
    });
    res.status(200).json(expenseBalance);
  } catch (error) {
    res.status(400).send(error);
  }
});

/* Updating the balance of a user. */
router.put("/:userId", async (req, res) => {
  const { userId } = req.params;

  const { id, income, expense, concept, date, comment } = req.body;

  try {
    const expenseBalance = await Balance.update(
      {
        income,
        expense,
        concept,
        date,
        comment,
      },
      {
        where: {
          id,
          userId,
        },
      }
    );
    res.status(200).json(expenseBalance);
  } catch (error) {
    res.status(400).send(error);
  }
});

/* Deleting the balance of a user. */
router.delete("/:userId", async (req, res) => {
  const { userId } = req.params;

  const { id } = req.body;

  try {
    const expenseBalance = await Balance.destroy({
      where: {
        id,
        userId,
      },
    });
    res.status(200).json(expenseBalance);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
