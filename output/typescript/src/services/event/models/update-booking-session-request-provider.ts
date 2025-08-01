// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const updateBookingSessionRequestProvider = z.union([
  z.literal('benevity'),
  z.literal('app_goodera'),
  z.literal('yourcause'),
  z.literal('cvp'),
]);

export type UpdateBookingSessionRequestProvider = z.infer<typeof updateBookingSessionRequestProvider>;
