import express from "express";
import db from "../db/establishConnection.js";
const User = db.User;
const Reviews = db.Reviews;

const userRouter = express.Router();

userRouter
  .route("/")
  .get(async (req, res, next) => {
    try {
      const data = await User.findAll({ include: Reviews });

      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await User.create(req.body);
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

userRouter
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const data = await User.findByPk(req.params.id);
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
      const data = await User.update(req.body, {
        where: { productId: req.params.id },
        returning: true,
      });
      res.send(data[1][0]);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const rows = await User.destroy({
        where: {
          productId: req.params.id,
        },
      });
      if (rows > 0) {
        res.status(204).send();
      } else {
        res.status(404).send();
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

export default userRouter;
