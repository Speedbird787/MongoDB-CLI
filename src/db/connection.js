require("dotenv").config();
const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI);
//url of DB in mongo_uri .env file

//async await used to connect to DB

const connection = async () => {
  try {
    await client.connect();
    const db = client.db("Movies");
    return db.collection("Movie");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { client, connection };