// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  CreateShipmentAddress,
  createShipmentAddress,
  createShipmentAddressRequest,
  createShipmentAddressResponse,
} from '../../common/create-shipment-address';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createEventShipmentAddressRequestPayload = z.lazy(() => {
  return z.object({
    eventId: z.string(),
    entityId: z.string(),
    address: createShipmentAddress,
    addressType: z.string(),
  });
});

/**
 *
 * @typedef  {CreateEventShipmentAddressRequestPayload} createEventShipmentAddressRequestPayload
 * @property {string} - Event ID
 * @property {string} - Shipment Entity ID
 * @property {CreateShipmentAddress}
 * @property {string} - Address Type
 */
export type CreateEventShipmentAddressRequestPayload = z.infer<typeof createEventShipmentAddressRequestPayload>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createEventShipmentAddressRequestPayloadResponse = z.lazy(() => {
  return z
    .object({
      eventId: z.string(),
      entityId: z.string(),
      address: createShipmentAddressResponse,
      addressType: z.string(),
    })
    .transform((data) => ({
      eventId: data['eventId'],
      entityId: data['entityId'],
      address: data['address'],
      addressType: data['addressType'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createEventShipmentAddressRequestPayloadRequest = z.lazy(() => {
  return z
    .object({
      eventId: z.string(),
      entityId: z.string(),
      address: createShipmentAddressRequest,
      addressType: z.string(),
    })
    .transform((data) => ({
      eventId: data['eventId'],
      entityId: data['entityId'],
      address: data['address'],
      addressType: data['addressType'],
    }));
});
