import { Request, Response } from "express";

import { createEventUseCase } from "@useCases/createEvent";

import { Controller } from ".";

export class CreateEventController implements Controller {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, privacy, description, address, initialDate, initialTime } = request.body;

      await createEventUseCase.execute({
        name,
        privacy,
        description,
        address,
        initialDate,
        initialTime,
      });

      return response.json({ message: "Event created successfully" });
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }

      throw error;
    }
  }
}

export const createEventController = new CreateEventController();
