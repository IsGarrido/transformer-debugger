// Auto-generated code. Do not edit! See neuron_explainer/activation_server/README.md to learn how to regenerate it.

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Base model that will automatically generate camelCase aliases for fields. Python code can use
 * either snake_case or camelCase names. When Typescript code is generated, it will only use the
 * camelCase names.
 */
export type TokenPairAttributionRequestSpec = {
  specType?: TokenPairAttributionRequestSpec.specType;
  numTokensAttendedTo: number;
  dependsOnSpecName: string;
};

export namespace TokenPairAttributionRequestSpec {
  export enum specType {
    TOKEN_PAIR_ATTRIBUTION_REQUEST_SPEC = "token_pair_attribution_request_spec",
  }
}
