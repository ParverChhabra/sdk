// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createPartnerShippingAddress = z.lazy(() => {
  return z.object({
    line1: z.string().optional(),
    line2: z.string().optional(),
    recipientName: z.string().optional(),
    email: z.string().optional(),
    phoneNumber: z.string().optional(),
    isdCode: z.string().optional(),
    title: z.string().optional(),
    latitude: z.string().optional(),
    longitude: z.string().optional(),
    city: z.string(),
    province: z.string().optional(),
    postalCode: z.string().optional(),
    country: z.string(),
    url: z.string().optional(),
    metadata: z.any().optional(),
  });
});

/**
 *
 * @typedef  {CreatePartnerShippingAddress} createPartnerShippingAddress
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {any}
 */
export type CreatePartnerShippingAddress = z.infer<typeof createPartnerShippingAddress>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createPartnerShippingAddressResponse = z.lazy(() => {
  return z
    .object({
      line1: z.string().optional(),
      line2: z.string().optional(),
      recipientName: z.string().optional(),
      email: z.string().optional(),
      phoneNumber: z.string().optional(),
      isdCode: z.string().optional(),
      title: z.string().optional(),
      latitude: z.string().optional(),
      longitude: z.string().optional(),
      city: z.string(),
      province: z.string().optional(),
      postalCode: z.string().optional(),
      country: z.string(),
      url: z.string().optional(),
      metadata: z.any().optional(),
    })
    .transform((data) => ({
      line1: data['line1'],
      line2: data['line2'],
      recipientName: data['recipientName'],
      email: data['email'],
      phoneNumber: data['phoneNumber'],
      isdCode: data['isdCode'],
      title: data['title'],
      latitude: data['latitude'],
      longitude: data['longitude'],
      city: data['city'],
      province: data['province'],
      postalCode: data['postalCode'],
      country: data['country'],
      url: data['url'],
      metadata: data['metadata'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createPartnerShippingAddressRequest = z.lazy(() => {
  return z
    .object({
      line1: z.string().optional(),
      line2: z.string().optional(),
      recipientName: z.string().optional(),
      email: z.string().optional(),
      phoneNumber: z.string().optional(),
      isdCode: z.string().optional(),
      title: z.string().optional(),
      latitude: z.string().optional(),
      longitude: z.string().optional(),
      city: z.string(),
      province: z.string().optional(),
      postalCode: z.string().optional(),
      country: z.string(),
      url: z.string().optional(),
      metadata: z.any().optional(),
    })
    .transform((data) => ({
      line1: data['line1'],
      line2: data['line2'],
      recipientName: data['recipientName'],
      email: data['email'],
      phoneNumber: data['phoneNumber'],
      isdCode: data['isdCode'],
      title: data['title'],
      latitude: data['latitude'],
      longitude: data['longitude'],
      city: data['city'],
      province: data['province'],
      postalCode: data['postalCode'],
      country: data['country'],
      url: data['url'],
      metadata: data['metadata'],
    }));
});
