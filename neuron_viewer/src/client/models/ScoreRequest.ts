// Auto-generated code. Do not edit! See neuron_explainer/activation_server/README.md to learn how to regenerate it.

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DerivedScalarType } from "./DerivedScalarType";

/**
 * Base model that will automatically generate camelCase aliases for fields. Python code can use
 * either snake_case or camelCase names. When Typescript code is generated, it will only use the
 * camelCase names.
 */
export type ScoreRequest = {
  dst: DerivedScalarType;
  layerIndex: number;
  activationIndex: number;
  datasets: Array<string>;
  explanation: string;
  maxSequences?: number;
};
