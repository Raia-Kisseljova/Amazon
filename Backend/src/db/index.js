import { Sequelize } from "sequelize";

const { PGDATABASE, PGUSERNAME, PGPASSWORD, PGHOST, PGPORT } = process.env;

const sequelize = new Sequelize(PGDATABASE, PGUSERNAME, PGPASSWORD, {
  host: PGHOST,
  port: PGPORT,
  dialect: "postgres",
});

const testConnection = async () => {
  try {
    sequelize.authenticate().then(() => {
      console.log("All good ( π¦ ) from testing connection");
    });
  } catch (error) {
    console.log("πΌπΌπΌ", error);
  }
};

testConnection();

export default sequelize;
