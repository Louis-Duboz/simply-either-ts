
import { FailureValue } from "./FailureValue";
import { SuccessValue } from "./SuccessValue";

/**
 * Represents a disjoint union of a success type and a failure type.
 * It can hold either a `Success` or a `Failure`.
 *
 * @template TSuccess The type of the success value.
 * @template TFailure The type of the failure value.
 */
export type DisjointUnion<TSuccess, TFailure> = SuccessValue<TSuccess> | FailureValue<TFailure>;