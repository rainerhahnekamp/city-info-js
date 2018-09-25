/// <reference path="./custom.d.ts" />
// tslint:disable
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


import * as url from "url";
import * as portableFetch from "portable-fetch";
import { Configuration } from "./configuration";

const BASE_PATH = "http://localhost:10010".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
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
export class BaseAPI {
    protected configuration: Configuration | undefined;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected fetch: FetchAPI = portableFetch) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
};

/**
 * 
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError" = "RequiredError";
    constructor(public field: string, msg?: string) {
        super(msg);
    }
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
export const DefaultApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {City} [city] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addCity(city?: City, options: any = {}): FetchArgs {
            const localVarPath = `/cities`;
            const localVarUrlObj = url.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign({ method: 'POST' }, baseOptions, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"City" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(city || {}) : (city || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} name 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCity(name: string, options: any = {}): FetchArgs {
            // verify required parameter 'name' is not null or undefined
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling deleteCity.');
            }
            const localVarPath = `/cities/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            const localVarUrlObj = url.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign({ method: 'DELETE' }, baseOptions, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCities(options: any = {}): FetchArgs {
            const localVarPath = `/cities`;
            const localVarUrlObj = url.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign({ method: 'GET' }, baseOptions, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {City} [city] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addCity(city?: City, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<City>> {
            const localVarFetchArgs = DefaultApiFetchParamCreator(configuration).addCity(city, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @param {string} name 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCity(name: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<City>> {
            const localVarFetchArgs = DefaultApiFetchParamCreator(configuration).deleteCity(name, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCities(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<City>> {
            const localVarFetchArgs = DefaultApiFetchParamCreator(configuration).listCities(options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 
         * @param {City} [city] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addCity(city?: City, options?: any) {
            return DefaultApiFp(configuration).addCity(city, options)(fetch, basePath);
        },
        /**
         * 
         * @param {string} name 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCity(name: string, options?: any) {
            return DefaultApiFp(configuration).deleteCity(name, options)(fetch, basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCities(options?: any) {
            return DefaultApiFp(configuration).listCities(options)(fetch, basePath);
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @param {City} [city] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public addCity(city?: City, options?: any) {
        return DefaultApiFp(this.configuration).addCity(city, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public deleteCity(name: string, options?: any) {
        return DefaultApiFp(this.configuration).deleteCity(name, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public listCities(options?: any) {
        return DefaultApiFp(this.configuration).listCities(options)(this.fetch, this.basePath);
    }

}

