const express = require('express');
const router = express.Router();

const Budget = require('./budgetModel');

router.route('/')
  .post((req, res) => {
    const budget = new Budget(req.body);
    budget.save()
      .then(budget => res.status(201).json(budget))
      .catch(err => res.status(500).json(err));
  })

module.exports = router;