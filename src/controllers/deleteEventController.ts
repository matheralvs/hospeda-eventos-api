import { Request, Response } from "express";

import { eventRepository } from "@repositories/eventRepository";

import { Controller } from ".";

export class DeleteEventController implements Controller {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      await eventRepository.deleteById(id);

      return response.json({ message: "Event deleted successfully" });
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }

      throw error;
    }
  }
}

export const deleteEventController = new DeleteEventController();
