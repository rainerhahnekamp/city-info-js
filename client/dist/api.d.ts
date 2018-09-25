/**
 * City Info
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/// <reference path="../custom.d.ts" />
import { Configuration } from "./configuration";
/**
 *
 * @export
 */
export declare const COLLECTION_FORMATS: {
    csv: string;
    ssv: string;
    tsv: string;
    pipes: string;
};
/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}
/**
 *
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}
/**
 *
 * @export
 * @class BaseAPI
 */
export declare class BaseAPI {
    protected basePath: string;
    protected fetch: FetchAPI;
    protected configuration: Configuration | undefined;
    constructor(configuration?: Configuration, basePath?: string, fetch?: FetchAPI);
}
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export declare class RequiredError extends Error {
    field: string;
    name: "RequiredError";
    constructor(field: string, msg?: string);
}
/**
 *
 * @export
 * @interface City
 */
export interface City {
    /**
     *
     * @type {string}
     * @memberof City
     */
    name?: string;
    /**
     *
     * @type {number}
     * @memberof City
     */
    population?: number;
    /**
     *
     * @type {number}
     * @memberof City
     */
    size?: number;
}
/**
 * DefaultApi - fetch parameter creator
 * @export
 */
export declare const DefaultApiFetchParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @param {City} [city]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addCity(city?: City, options?: any): FetchArgs;
    /**
     *
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCity(name: string, options?: any): FetchArgs;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCities(options?: any): FetchArgs;
};
/**
 * DefaultApi - functional programming interface
 * @export
 */
export declare const DefaultApiFp: (configuration?: Configuration) => {
    /**
     *
     * @param {City} [city]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addCity(city?: City, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<City[]>;
    /**
     *
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCity(name: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<City[]>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCities(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<City[]>;
};
/**
 * DefaultApi - factory interface
 * @export
 */
export declare const DefaultApiFactory: (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) => {
    /**
     *
     * @param {City} [city]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addCity(city?: City, options?: any): Promise<City[]>;
    /**
     *
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteCity(name: string, options?: any): Promise<City[]>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCities(options?: any): Promise<City[]>;
};
/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export declare class DefaultApi extends BaseAPI {
    /**
     *
     * @param {City} [city]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    addCity(city?: City, options?: any): Promise<City[]>;
    /**
     *
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    deleteCity(name: string, options?: any): Promise<City[]>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    listCities(options?: any): Promise<City[]>;
}
