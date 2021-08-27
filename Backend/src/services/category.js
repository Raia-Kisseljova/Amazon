import express from "express";
import db from "../db/establishConnection.js";
const Category = db.Category;
const Product = db.Product;

const categoryRouter = express.Router();

categoryRouter
  .route("/")
  .get(async (req, res, next) => {
    try {
      const data = await Category.findAll({ include: Product });
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await Category.create(req.body);
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

categoryRouter
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const data = await Category.findByPk(req.params.id);
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
      const data = await Category.update(req.body, {
        where: { id: req.params.id },
        returning: true,
      });
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const rows = await Category.destroy({
        where: {
          id: req.params.id,
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

export default categoryRouter;
