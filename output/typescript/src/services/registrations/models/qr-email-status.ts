// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const qrEmailStatus = z.union([z.literal('pending'), z.literal('sent')]);

export type QrEmailStatus = z.infer<typeof qrEmailStatus>;
