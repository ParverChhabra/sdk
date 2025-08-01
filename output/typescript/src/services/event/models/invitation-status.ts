// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const invitationStatus = z.union([
  z.literal('pending'),
  z.literal('cancelled'),
  z.literal('needs_action'),
  z.literal('accepted'),
  z.literal('rejected'),
  z.literal('maybe'),
]);

export type InvitationStatus = z.infer<typeof invitationStatus>;
