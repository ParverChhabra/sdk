// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { CreateUserRequest, createUserRequestRequest } from '../common/create-user-request';
import { UpdateUserRequest, updateUserRequestRequest } from '../common/update-user-request';

export class UserService extends BaseService {
  /**
   *
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>}
   */
  async userControllerMe(requestConfig?: RequestConfig): Promise<HttpResponse<void>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/v2/user/me')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 200,
      })
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .build();
    return this.client.call<void>(request);
  }

  /**
   *
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>}
   */
  async userControllerList(requestConfig?: RequestConfig): Promise<HttpResponse<void>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/v2/user')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 200,
      })
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .build();
    return this.client.call<void>(request);
  }

  /**
   *
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>}
   */
  async userControllerCreate(body: CreateUserRequest, requestConfig?: RequestConfig): Promise<HttpResponse<void>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/v2/user')
      .setRequestSchema(createUserRequestRequest)
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 201,
      })
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<void>(request);
  }

  /**
   *
   * @param {string} id -
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>}
   */
  async userControllerGet(id: string, requestConfig?: RequestConfig): Promise<HttpResponse<void>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/v2/user/{id}')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 200,
      })
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'id',
        value: id,
      })
      .build();
    return this.client.call<void>(request);
  }

  /**
   *
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>}
   */
  async userControllerUpdate(body: UpdateUserRequest, requestConfig?: RequestConfig): Promise<HttpResponse<void>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('PUT')
      .setPath('/v2/user/{id}')
      .setRequestSchema(updateUserRequestRequest)
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 200,
      })
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<void>(request);
  }

  /**
   *
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>}
   */
  async userControllerGetImplicitPermissionForUser(requestConfig?: RequestConfig): Promise<HttpResponse<void>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/v2/user/{id}/implicit_permissions')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 200,
      })
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .build();
    return this.client.call<void>(request);
  }

  /**
   *
   * @param {string} id -
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>}
   */
  async userControllerGetRolesForUser(id: string, requestConfig?: RequestConfig): Promise<HttpResponse<void>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/v2/user/{id}/roles')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 200,
      })
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'id',
        value: id,
      })
      .build();
    return this.client.call<void>(request);
  }

  /**
   *
   * @param {string} id -
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>}
   */
  async userControllerGetPermissionsForUser(id: string, requestConfig?: RequestConfig): Promise<HttpResponse<void>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/v2/user/{id}/permissions')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 200,
      })
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'id',
        value: id,
      })
      .build();
    return this.client.call<void>(request);
  }

  /**
   *
   * @param {string} id -
   * @param {string} roleId -
   * @param {RequestConfig} requestConfig - (Optional) The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>}
   */
  async userControllerAddUserToRole(
    id: string,
    roleId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<void>> {
    const request = new RequestBuilder()
      .setBaseUrl(requestConfig?.baseUrl || this.config.baseUrl || this.config.environment || Environment.DEFAULT)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/v2/user/{id}/role/{role_id}')
      .setRequestSchema(z.any())
      .addAccessTokenAuth(this.config.token, 'Bearer')
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.undefined(),
        contentType: ContentType.NoContent,
        status: 201,
      })
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'id',
        value: id,
      })
      .addPathParam({
        key: 'role_id',
        value: roleId,
      })
      .build();
    return this.client.call<void>(request);
  }
}
