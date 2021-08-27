import sequelize from "./index.js";
import Category from "./models/Category.js";
import Product from "./models/Product.js";
import User from "./models/User.js";
import Reviews from "./models/Reviews.js";

Product.belongsTo(Category, { foreignKey: { allowNull: false } });
Category.hasMany(Product, { foreignKey: { allowNull: false } });

Product.belongsToMany(User, { through: { model: Reviews } });

Reviews.belongsTo(User, { foreignKey: { allowNull: false } });
User.hasMany(Reviews, { foreignKey: { allowNull: false } });

export default { Category, sequelize, Product, Reviews, User };
