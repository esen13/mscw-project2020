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
import { DashletDTO } from './dashletDTO';

export type RestResultDashletDTO = { 
    code?: RestResultDashletDTO.CodeEnum;
    data?: DashletDTO;
    errorCode?: number;
    requestId?: string;
    responseId?: string;
    stackTrace?: string;
    synopsis?: string;
};
export namespace RestResultDashletDTO {
    export type CodeEnum = 'SUCCESS' | 'ERROR';
    export const CodeEnum = {
      SUCCESS: 'SUCCESS' as CodeEnum,
      ERROR: 'ERROR' as CodeEnum
    };
}