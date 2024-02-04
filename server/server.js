import express from "express";
import cors from "cors";
import Database from "better-sqlite3";
const app = express();
app.use(cors());
app.use(express.json());
const db = Database("database.db");

app.listen("4040", () => {
  console.log("server is working on port4040");
});

app.get("/reviews", (request, response) => {
  try {
    let reviews = db.prepare(`SELECT * FROM reviews`).all();
    response.status(200).json(reviews);
    return;
  } catch (err) {
    response.status(500).json(err);
  }
});

//create post request for new form data on route of my choice.
app.post("/reviews", (request, response) => {
  try {
    console.log("Message received");
    const reaction = request.body.reaction;
    const username = request.body.username;
    const message = request.body.message;
    const newReview = db
      .prepare(
        `INSERT INTO reviews (reaction, username, message) VALUES (?,?,?)`
      )
      .run(reaction, username, message);
    response.status(200).json(newReview);
  } catch (err) {
    response.status(500).json(err);
  }
});

// app.post("/reviews", (request, response))
