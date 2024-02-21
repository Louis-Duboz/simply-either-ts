import { Either } from "./Either";
import { SuccessValue } from "./SuccessValue";

/**
 * Creates a new Either instance representing a success.
 * @param {TSuccess} success The success value.
 * @returns {Either<TSuccess, TFailure>} A new Either instance representing a success.
 */
export function Success<TSuccess, TFailure>(success: TSuccess): Either<TSuccess, TFailure> {
    return new Either<TSuccess, TFailure>(new SuccessValue<TSuccess>(success));
}