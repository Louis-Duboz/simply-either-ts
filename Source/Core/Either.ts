import { Failure } from "./Failure";
import { Success } from "./Success";

/**
 * Represents either a failure either a success.
 */
export type Either<TSuccess, TFailure> = Success<TSuccess> | Failure<TFailure>;