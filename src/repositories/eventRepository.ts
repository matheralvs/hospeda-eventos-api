import { prisma } from "@lib/prisma";

import { CreateEventInput } from "@dtos/createEventDTO";
import { UpdateEventInput } from "@dtos/updateEventDTO";

export class EventRepository {
  async createWithAddress(event: CreateEventInput) {
    const { address, ...eventData } = event;

    await prisma.event.create({
      data: {
        ...eventData,
        addresses: {
          create: address,
        },
      },
    });
  }

  async update(id: string, event: UpdateEventInput) {
    const { address, ...eventData } = event;

    await prisma.event.update({
      where: {
        id,
      },
      data: {
        ...eventData,
        addresses: {
          update: address,
        },
      },
    });
  }

  async findById(id: string) {
    const eventData = await prisma.event.findUnique({
      where: {
        id,
      },
    });

    return eventData;
  }

  async list() {
    const eventData = await prisma.event.findMany({
      include: {
        addresses: true,
      },
    });

    return eventData;
  }

  async show(id: string) {
    const eventData = await prisma.event.findUnique({
      where: {
        id,
      },
      include: {
        addresses: true,
      },
    });

    return eventData;
  }

  async deleteById(id: string) {
    await prisma.event.delete({
      where: {
        id,
      },
    });
  }
}

export const eventRepository = new EventRepository();
