import { Request, Response } from "express";

import { updateEventUseCase } from "@useCases/updateEvent";

import { Controller } from ".";

export class UpdateEventController implements Controller {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const { name, privacy, description, address, initialDate, initialTime } = request.body;

      await updateEventUseCase.execute({
        id,
        name,
        privacy,
        description,
        address,
        initialDate,
        initialTime,
      });

      return response.json({ message: "Event updated successfully" });
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }

      throw error;
    }
  }
}

export const updateEventController = new UpdateEventController();
