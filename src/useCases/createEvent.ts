import { CreateEventInput, CreateEventOutput } from "@dtos/createEventDTO";

import { EventRepository, eventRepository } from "@repositories/eventRepository";

import { UseCase } from ".";

export class CreateEventUseCase implements UseCase<CreateEventInput, CreateEventOutput> {
  constructor(private repository: EventRepository) {}

  async execute(input: CreateEventInput): Promise<CreateEventOutput> {
    await this.repository.createWithAddress(input);
  }
}

export const createEventUseCase = new CreateEventUseCase(eventRepository);
