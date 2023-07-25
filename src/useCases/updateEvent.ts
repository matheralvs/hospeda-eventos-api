import { EventRepository, eventRepository } from "@repositories/eventRepository";

import { UseCase } from ".";
import { UpdateEventInput, UpdateEventOutput } from "@dtos/updateEventDTO";

export class UpdateEventUseCase implements UseCase<UpdateEventInput, UpdateEventOutput> {
  constructor(private repository: EventRepository) {}

  async execute(input: UpdateEventInput): Promise<UpdateEventOutput> {
    const event = await this.repository.findById(input.id);

    if (!event) {
      throw new Error("Event not found");
    }

    await this.repository.update(input.id, input);
  }
}

export const updateEventUseCase = new UpdateEventUseCase(eventRepository);
