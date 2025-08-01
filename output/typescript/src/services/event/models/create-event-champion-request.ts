// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { CreateEventChampionRequestRole, createEventChampionRequestRole } from './create-event-champion-request-role';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createEventChampionRequest = z.lazy(() => {
  return z.object({
    email: z.string(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    role: createEventChampionRequestRole.optional(),
    phone: z.string().optional(),
    isdCode: z.string().optional(),
  });
});

/**
 *
 * @typedef  {CreateEventChampionRequest} createEventChampionRequest
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {CreateEventChampionRequestRole}
 * @property {string}
 * @property {string}
 */
export type CreateEventChampionRequest = z.infer<typeof createEventChampionRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createEventChampionRequestResponse = z.lazy(() => {
  return z
    .object({
      email: z.string(),
      firstName: z.string().optional(),
      lastName: z.string().optional(),
      role: createEventChampionRequestRole.optional(),
      phone: z.string().optional(),
      isdCode: z.string().optional(),
    })
    .transform((data) => ({
      email: data['email'],
      firstName: data['firstName'],
      lastName: data['lastName'],
      role: data['role'],
      phone: data['phone'],
      isdCode: data['isdCode'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createEventChampionRequestRequest = z.lazy(() => {
  return z
    .object({
      email: z.string(),
      firstName: z.string().optional(),
      lastName: z.string().optional(),
      role: createEventChampionRequestRole.optional(),
      phone: z.string().optional(),
      isdCode: z.string().optional(),
    })
    .transform((data) => ({
      email: data['email'],
      firstName: data['firstName'],
      lastName: data['lastName'],
      role: data['role'],
      phone: data['phone'],
      isdCode: data['isdCode'],
    }));
});
