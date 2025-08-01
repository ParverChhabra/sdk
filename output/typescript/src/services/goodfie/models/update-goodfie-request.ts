// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const updateGoodfieRequest = z.lazy(() => {
  return z.object({
    showOnEventPage: z.boolean().optional(),
    showOnThankyouPage: z.boolean().optional(),
  });
});

/**
 *
 * @typedef  {UpdateGoodfieRequest} updateGoodfieRequest
 * @property {boolean}
 * @property {boolean}
 */
export type UpdateGoodfieRequest = z.infer<typeof updateGoodfieRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const updateGoodfieRequestResponse = z.lazy(() => {
  return z
    .object({
      showOnEventPage: z.boolean().optional(),
      showOnThankyouPage: z.boolean().optional(),
    })
    .transform((data) => ({
      showOnEventPage: data['showOnEventPage'],
      showOnThankyouPage: data['showOnThankyouPage'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const updateGoodfieRequestRequest = z.lazy(() => {
  return z
    .object({
      showOnEventPage: z.boolean().optional(),
      showOnThankyouPage: z.boolean().optional(),
    })
    .transform((data) => ({
      showOnEventPage: data['showOnEventPage'],
      showOnThankyouPage: data['showOnThankyouPage'],
    }));
});
