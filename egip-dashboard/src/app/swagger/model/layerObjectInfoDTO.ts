/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { LayerObjectDTO } from './layerObjectDTO';
import { WidgetElement } from './widgetElement';

/**
 * Информация о карте.
 */
export type LayerObjectInfoDTO = { 
    /**
     * Информация по объектам карты.
     */
    objectViolations?: LayerObjectDTO[];
    /**
     * Информация по слоям объектов карты.
     */
    objects?: WidgetElement[];
};