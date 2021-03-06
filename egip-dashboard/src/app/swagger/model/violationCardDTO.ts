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
import { ViolationDescription } from './violationDescription';
import { ViolationFotoDTO } from './violationFotoDTO';
import { ViolationVideoDTO } from './violationVideoDTO';

/**
 * Данные по карточке нарушения с информацией по фото для НГ
 */
export type ViolationCardDTO = { 
    description?: ViolationDescription;
    /**
     * Фотографии после устранения
     */
    fotosAfter?: ViolationFotoDTO[];
    /**
     * Фотографии до устранения
     */
    fotosBefore?: ViolationFotoDTO[];
    video?: ViolationVideoDTO;
};