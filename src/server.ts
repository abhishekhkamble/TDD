import express from "express";
import bodyParser from "body-parser";
import type { Request, Response, Express } from "express";
let app: Express = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("TDD");
});

app.post("/register", (req: Request, res: Response) => {
  if (!req.body.name) {
    res.status(400).json("You need to pass name");
    return;
  }
  res.sendStatus(201);
});

app.post("/user", (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!password || !username) {
    res.sendStatus(400);
    return;
  }
  res.send({ userId: 1 });
});

export default app;
