import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

app.listen("4040", () => {
  console.log("server is working on port4040");
});

//create post request for new form data on route of my choice.
app.post("/newreview", (request, response) => {
  console.log("Message received");
  response.status(200).json({ message: "received", youSent: request.body });
});

//create get request
