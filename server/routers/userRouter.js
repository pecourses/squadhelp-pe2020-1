const { Router } = require('express');
const checkToken = require('../middlewares/checkToken');
const userController = require('../controllers/userController');

const userRouter = Router();

userRouter.get(
  '/transactions',
  checkToken.checkToken,
  userController.getTransactions);

module.exports = userRouter;
