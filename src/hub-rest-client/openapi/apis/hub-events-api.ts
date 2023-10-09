/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster Hub REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ErrorResponse } from '../models';
// @ts-ignore
import { HubEvent } from '../models';
// @ts-ignore
import { ListEvents200Response } from '../models';
/**
 * HubEventsApi - axios parameter creator
 * @export
 */
export const HubEventsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get an event by its ID
         * @param {number} eventId The Hub Id of the event
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEventById: async (eventId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'eventId' is not null or undefined
            assertParamExists('getEventById', 'eventId', eventId)
            const localVarPath = `/v1/eventById`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (eventId !== undefined) {
                localVarQueryParameter['event_id'] = eventId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get a page of Hub events
         * @param {number} [fromEventId] An optional Hub Id to start getting events from. This is also returned from the API as nextPageEventId, which can be used to page through all the Hub events. Set it to 0 to start from the first event
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listEvents: async (fromEventId?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/events`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (fromEventId !== undefined) {
                localVarQueryParameter['from_event_id'] = fromEventId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * HubEventsApi - functional programming interface
 * @export
 */
export const HubEventsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = HubEventsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get an event by its ID
         * @param {number} eventId The Hub Id of the event
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEventById(eventId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HubEvent>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEventById(eventId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get a page of Hub events
         * @param {number} [fromEventId] An optional Hub Id to start getting events from. This is also returned from the API as nextPageEventId, which can be used to page through all the Hub events. Set it to 0 to start from the first event
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listEvents(fromEventId?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListEvents200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listEvents(fromEventId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * HubEventsApi - factory interface
 * @export
 */
export const HubEventsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = HubEventsApiFp(configuration)
    return {
        /**
         * 
         * @summary Get an event by its ID
         * @param {HubEventsApiGetEventByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEventById(requestParameters: HubEventsApiGetEventByIdRequest, options?: AxiosRequestConfig): AxiosPromise<HubEvent> {
            return localVarFp.getEventById(requestParameters.eventId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get a page of Hub events
         * @param {HubEventsApiListEventsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listEvents(requestParameters: HubEventsApiListEventsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<ListEvents200Response> {
            return localVarFp.listEvents(requestParameters.fromEventId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getEventById operation in HubEventsApi.
 * @export
 * @interface HubEventsApiGetEventByIdRequest
 */
export interface HubEventsApiGetEventByIdRequest {
    /**
     * The Hub Id of the event
     * @type {number}
     * @memberof HubEventsApiGetEventById
     */
    readonly eventId: number
}

/**
 * Request parameters for listEvents operation in HubEventsApi.
 * @export
 * @interface HubEventsApiListEventsRequest
 */
export interface HubEventsApiListEventsRequest {
    /**
     * An optional Hub Id to start getting events from. This is also returned from the API as nextPageEventId, which can be used to page through all the Hub events. Set it to 0 to start from the first event
     * @type {number}
     * @memberof HubEventsApiListEvents
     */
    readonly fromEventId?: number
}

/**
 * HubEventsApi - object-oriented interface
 * @export
 * @class HubEventsApi
 * @extends {BaseAPI}
 */
export class HubEventsApi extends BaseAPI {
    /**
     * 
     * @summary Get an event by its ID
     * @param {HubEventsApiGetEventByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HubEventsApi
     */
    public getEventById(requestParameters: HubEventsApiGetEventByIdRequest, options?: AxiosRequestConfig) {
        return HubEventsApiFp(this.configuration).getEventById(requestParameters.eventId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get a page of Hub events
     * @param {HubEventsApiListEventsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HubEventsApi
     */
    public listEvents(requestParameters: HubEventsApiListEventsRequest = {}, options?: AxiosRequestConfig) {
        return HubEventsApiFp(this.configuration).listEvents(requestParameters.fromEventId, options).then((request) => request(this.axios, this.basePath));
    }
}
