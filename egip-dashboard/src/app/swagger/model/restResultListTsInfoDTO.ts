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
import { TsInfoDTO } from './tsInfoDTO';

export type RestResultListTsInfoDTO = { 
    code?: RestResultListTsInfoDTO.CodeEnum;
    data?: TsInfoDTO[];
    errorCode?: number;
    requestId?: string;
    responseId?: string;
    stackTrace?: string;
    synopsis?: string;
};
export namespace RestResultListTsInfoDTO {
    export type CodeEnum = 'SUCCESS' | 'ERROR';
    export const CodeEnum = {
      SUCCESS: 'SUCCESS' as CodeEnum,
      ERROR: 'ERROR' as CodeEnum
    };
}