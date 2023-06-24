const mongodb = require("mongodb");
const Client = mongodb.MongoClient;

const throwDataBase = async (_) => {
  const connection = await Client.connect(
    "mongodb+srv://praveenkumarr:Rch8WthDmxFj5JYF@cluster0.eps7eee.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log('connection held');
  let database = connection.db("nodeProject");

  if (!database) console.log("Not Connected Database");
  return database;
};
module.exports = { throwDataBase };
