import { eventRepository } from "@repositories/eventRepository";
import { Controller } from ".";
import { Request, Response } from "express";

export class ListEventController implements Controller {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const eventsData = await eventRepository.list();

      const events = eventsData.map((event) => ({
        id: event.id,
        name: event.name,
        privacy: event.privacy,
        city: event.addresses?.city,
        state: event.addresses?.state,
        initialDate: event.initialDate,
        initialTime: event.initialTime,
      }));

      return response.json(events);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }

      throw error;
    }
  }
}

export const listEventController = new ListEventController();
