import express, { json } from "express";

import cors from "cors";

import { eventRouter } from "@routes/event.routes";

const app = express();
const port = process.env.PORT;

app.use(json());
app.use(cors());

app.use("/event", eventRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port} 🚀`);
});
