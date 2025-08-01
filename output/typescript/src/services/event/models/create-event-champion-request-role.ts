// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const createEventChampionRequestRole = z.union([
  z.literal('VOLUNTEER'),
  z.literal('CHAMPION'),
  z.literal('POC'),
]);

export type CreateEventChampionRequestRole = z.infer<typeof createEventChampionRequestRole>;
