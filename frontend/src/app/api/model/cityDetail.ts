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
import { District } from './district';


export interface CityDetail { 
    id: number;
    name: string;
    population: number;
    size: number;
    districts?: Array<District>;
}
