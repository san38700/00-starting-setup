const express = require('express');

const router = express.Router();

const expenseController = require('../controllers/expense');

router.post('/expense/add-expense',expenseController.addExpense)

router.get('/expense/get-expense',expenseController.getExpense)

router.delete('/expense/delete-expense/:id',expenseController.deleteExpense)

router.delete('/expense/edit-expense/:id',expenseController.editExpense)

module.exports = router