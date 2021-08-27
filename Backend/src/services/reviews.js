import express from "express";
import db from "../db/establishConnection.js";
const User = db.User;
const Reviews = db.Reviews;

const reviewRouter = express.Router();

reviewRouter
  .route("/")
  .get(async (req, res, next) => {
    try {
      const data = await Reviews.findAll({ include: User });

      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await Reviews.create(req.body);
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

reviewRouter
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const data = await Reviews.findByPk(req.params.id);
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
      const data = await Reviews.update(req.body, {
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
      const rows = await Reviews.destroy({
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

export default reviewRouter;
