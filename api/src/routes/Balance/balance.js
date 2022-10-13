const express = require("express");
const router = express.Router();
const { Balance } = require("../../../db.js");

/* A route that is going to be used to get the income of a user. */
router.get("/income/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const balance = await Balance.findAll({
      attributes: ["income", "date", "concept", "id", "userId"],
      where: {
        userId: id,
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
router.get("/expense/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const balance = await Balance.findAll({
      attributes: ["expense", "date", "concept", "id", "userId"],
      where: {
        userId: id,
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
router.post("/income/:id", async (req, res) => {
  const { id } = req.params;

  const { income, concept, date } = req.body;

  try {
    const incomeBalance = await Balance.create({
      income,
      concept,
      date,
      userId: id,
    });
    res.status(200).json(incomeBalance);
  } catch (error) {
    res.status(400).send(error);
  }
});

/* Creating a new expense balance. */
router.post("/expense/:id", async (req, res) => {
  const { id } = req.params;

  const { expense, concept, date } = req.body;

  try {
    const expenseBalance = await Balance.create({
      expense,
      concept,
      date,
      userId: id,
    });
    res.status(200).json(expenseBalance);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put("/", async (req, res) => {
  res.send("Ok");
});

router.delete("/", async (req, res) => {
  res.send("Ok");
});

module.exports = router;
