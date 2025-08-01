// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  CreateShipmentAddress,
  createShipmentAddress,
  createShipmentAddressRequest,
  createShipmentAddressResponse,
} from '../../common/create-shipment-address';
import {
  CreateShipmentRequestRecipientType,
  createShipmentRequestRecipientType,
} from './create-shipment-request-recipient-type';
import {
  CreateShipmentRequestSenderType,
  createShipmentRequestSenderType,
} from './create-shipment-request-sender-type';
import { Type_, type_ } from './type_';
import { CreateShipmentRequestCarrier, createShipmentRequestCarrier } from './create-shipment-request-carrier';
import {
  CreateShipmentRequestDispatchType,
  createShipmentRequestDispatchType,
} from './create-shipment-request-dispatch-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createShipmentRequest = z.lazy(() => {
  return z.object({
    recipientAddress: createShipmentAddress,
    recipientAddressId: z.string(),
    recipientType: createShipmentRequestRecipientType,
    senderAddress: createShipmentAddress,
    senderAddressId: z.string(),
    senderType: createShipmentRequestSenderType,
    eventId: z.string(),
    type: type_,
    title: z.string(),
    carrier: createShipmentRequestCarrier.optional(),
    dispatchType: createShipmentRequestDispatchType,
    dispatchDate: z.string().optional(),
    trackingId: z.string().optional(),
    trackingLink: z.string().optional(),
    note: z.string().optional(),
    expectedDeliveryDate: z.string().optional(),
    deliveryChallanUrl: z.string().optional(),
    sezFormsUrl: z.string().optional(),
    materialListUrl: z.string().optional(),
  });
});

/**
 *
 * @typedef  {CreateShipmentRequest} createShipmentRequest
 * @property {CreateShipmentAddress}
 * @property {string} - ID of the recipient address
 * @property {CreateShipmentRequestRecipientType} - Type of the recipient
 * @property {CreateShipmentAddress}
 * @property {string} - ID of the sender address
 * @property {CreateShipmentRequestSenderType} - Type of the sender
 * @property {string} - ID of the associated event
 * @property {Type_} - Type of the shipment
 * @property {string} - Title of the shipment
 * @property {CreateShipmentRequestCarrier} - Carrier of the shipment
 * @property {CreateShipmentRequestDispatchType} - Dispatch type of the shipment
 * @property {string} - Dispatch date
 * @property {string} - Tracking ID of the shipment
 * @property {string} - Tracking link for the shipment
 * @property {string} - Additional notes for the shipment
 * @property {string} - Expected delivery date
 * @property {string} - Delivery challan URL for the shipment
 * @property {string} - SEZ forms URL for the shipment
 * @property {string} - Material list URL for the shipment
 */
export type CreateShipmentRequest = z.infer<typeof createShipmentRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createShipmentRequestResponse = z.lazy(() => {
  return z
    .object({
      recipientAddress: createShipmentAddressResponse,
      recipientAddressId: z.string(),
      recipientType: createShipmentRequestRecipientType,
      senderAddress: createShipmentAddressResponse,
      senderAddressId: z.string(),
      senderType: createShipmentRequestSenderType,
      eventId: z.string(),
      type: type_,
      title: z.string(),
      carrier: createShipmentRequestCarrier.optional(),
      dispatchType: createShipmentRequestDispatchType,
      dispatchDate: z.string().optional(),
      trackingId: z.string().optional(),
      trackingLink: z.string().optional(),
      note: z.string().optional(),
      expectedDeliveryDate: z.string().optional(),
      deliveryChallanUrl: z.string().optional(),
      sezFormsUrl: z.string().optional(),
      materialListUrl: z.string().optional(),
    })
    .transform((data) => ({
      recipientAddress: data['recipientAddress'],
      recipientAddressId: data['recipientAddressId'],
      recipientType: data['recipientType'],
      senderAddress: data['senderAddress'],
      senderAddressId: data['senderAddressId'],
      senderType: data['senderType'],
      eventId: data['eventId'],
      type: data['type'],
      title: data['title'],
      carrier: data['carrier'],
      dispatchType: data['dispatchType'],
      dispatchDate: data['dispatchDate'],
      trackingId: data['trackingId'],
      trackingLink: data['trackingLink'],
      note: data['note'],
      expectedDeliveryDate: data['expectedDeliveryDate'],
      deliveryChallanUrl: data['deliveryChallanUrl'],
      sezFormsUrl: data['sezFormsUrl'],
      materialListUrl: data['materialListUrl'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createShipmentRequestRequest = z.lazy(() => {
  return z
    .object({
      recipientAddress: createShipmentAddressRequest,
      recipientAddressId: z.string(),
      recipientType: createShipmentRequestRecipientType,
      senderAddress: createShipmentAddressRequest,
      senderAddressId: z.string(),
      senderType: createShipmentRequestSenderType,
      eventId: z.string(),
      type: type_,
      title: z.string(),
      carrier: createShipmentRequestCarrier.optional(),
      dispatchType: createShipmentRequestDispatchType,
      dispatchDate: z.string().optional(),
      trackingId: z.string().optional(),
      trackingLink: z.string().optional(),
      note: z.string().optional(),
      expectedDeliveryDate: z.string().optional(),
      deliveryChallanUrl: z.string().optional(),
      sezFormsUrl: z.string().optional(),
      materialListUrl: z.string().optional(),
    })
    .transform((data) => ({
      recipientAddress: data['recipientAddress'],
      recipientAddressId: data['recipientAddressId'],
      recipientType: data['recipientType'],
      senderAddress: data['senderAddress'],
      senderAddressId: data['senderAddressId'],
      senderType: data['senderType'],
      eventId: data['eventId'],
      type: data['type'],
      title: data['title'],
      carrier: data['carrier'],
      dispatchType: data['dispatchType'],
      dispatchDate: data['dispatchDate'],
      trackingId: data['trackingId'],
      trackingLink: data['trackingLink'],
      note: data['note'],
      expectedDeliveryDate: data['expectedDeliveryDate'],
      deliveryChallanUrl: data['deliveryChallanUrl'],
      sezFormsUrl: data['sezFormsUrl'],
      materialListUrl: data['materialListUrl'],
    }));
});
