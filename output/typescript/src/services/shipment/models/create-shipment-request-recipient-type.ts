// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const createShipmentRequestRecipientType = z.union([
  z.literal('event_venue'),
  z.literal('client'),
  z.literal('host'),
  z.literal('npo'),
  z.literal('goodera'),
]);

export type CreateShipmentRequestRecipientType = z.infer<typeof createShipmentRequestRecipientType>;
