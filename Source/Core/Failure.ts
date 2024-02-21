import { Either } from "./Either";
import { FailureValue } from "./FailureValue";

/**
 * Creates a new Either instance representing a failure.
 * @param {TFailure} failure The failure value.
 * @returns {Either<TSuccess, TFailure>} A new Either instance representing a failure.
 */
export function Failure<TSuccess, TFailure>(failure: TFailure): Either<TSuccess, TFailure> {
    return new Either<TSuccess, TFailure>(new FailureValue(failure));
}