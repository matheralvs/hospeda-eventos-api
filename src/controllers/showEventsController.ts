import { Request, Response } from "express";

import { Controller } from ".";
import { eventRepository } from "@repositories/eventRepository";

export class ShowEventController implements Controller {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const event = await eventRepository.show(id);

      let eventWithAddress;

      if (event) {
        eventWithAddress = {
          id: event.id,
          name: event.name,
          privacy: event.privacy,
          description: event.description,
          initialDate: event.initialDate,
          initialTime: event.initialTime,
          address: {
            id: event.addresses?.id,
            city: event.addresses?.city,
            state: event.addresses?.state,
            zipCode: event.addresses?.zipCode,
            street: event.addresses?.street,
            complement: event.addresses?.complement,
            neighborhood: event.addresses?.neighborhood,
            number: event.addresses?.number,
          },
        };
      }

      return response.json(eventWithAddress);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }

      throw error;
    }
  }
}

export const showEventController = new ShowEventController();
