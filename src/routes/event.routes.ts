import { Router } from "express";

import { createEventController } from "@controllers/createEventController";
import { showEventController } from "@controllers/showEventsController";
import { deleteEventController } from "@controllers/deleteEventController";
import { updateEventController } from "@controllers/updateEventController";
import { listEventController } from "@controllers/listEventController";

const eventRouter = Router();

eventRouter.post("/", createEventController.handle);
eventRouter.get("/list", listEventController.handle);
eventRouter.get("/show/:id", showEventController.handle);
eventRouter.put("/:id", updateEventController.handle);
eventRouter.delete("/:id", deleteEventController.handle);

export { eventRouter };
