import { Success } from "./Success";
import { Failure } from "./Failure";
import { Either } from "./Either";
import { AttemptToEvaluateAFailureAsASuccess } from "./Errors/AttemptToEvaluateAFailureAsASuccess";
import { AttemptToEvaluateASuccessAsAFailure } from "./Errors/AttemptToEvaluateASuccessAsAFailure";

/**
 * Represents a result that can either be a success or a failure.
 * @template TSuccess The type of the success value.
 * @template TFailure The type of the failure value.
 */
export class Result<TSuccess, TFailure> {
    private value: Either<TSuccess, TFailure>;

    /**
     * Creates a new instance of the Result class.
     * @param value Either a success either a failure.
     */
    public constructor(value: Either<TSuccess, TFailure>) {
        this.value = value;
    }
    
    /**
     * Gets the success value of the result.
     * @throws {AttemptToEvaluateAFailureAsASuccess} Throws an error if the result is a failure.
     * @returns {TSuccess} The success value.
     */
    public get Success() : TSuccess {
        if (this.value.IsFailure<TFailure>())
            throw new AttemptToEvaluateAFailureAsASuccess();

        return (this.value as Success<TSuccess>).Value as TSuccess;
    }
    
    /**
     * Gets the failure value of the result.
     * @throws {AttemptToEvaluateASuccessAsAFailure} Throws an error if the result is a success.
     * @returns {TFailure} The failure value.
     */
    public get Failure() : TFailure {
        if (this.value.IsSuccess<TSuccess>())
            throw new AttemptToEvaluateASuccessAsAFailure();

        return (this.value as Failure<TFailure>).Value;
    }

    /**
     * Gets a value indicating whether the result is a success.
     * @returns {boolean} True if the result is a success, false otherwise.
     */
    public get IsSuccess(): boolean { return this.value.IsSuccess(); }

    /**
     * Gets a value indicating whether the result is a failure.
     * @returns {boolean} True if the result is a failure, false otherwise.
     */
    public get IsFailure(): boolean { return this.value.IsFailure(); }

    /**
     * Gets the underlying value of the result.
     * @returns {TFailure | TSuccess} The underlying value.
     */
    public get Value(): TFailure | TSuccess { return this.value.Value; }

    /**
     * Creates a new Result instance representing a success.
     * @param {TSuccess} success The success value.
     * @returns {Result<TSuccess, TFailure>} A new Result instance representing a success.
     */
    public static Success<TSuccess, TFailure>(success: TSuccess): Result<TSuccess, TFailure> {
        return new Result<TSuccess, TFailure>(new Success<TSuccess>(success));
    }

    /**
     * Creates a new Result instance representing a failure.
     * @param {TFailure} failure The failure value.
     * @returns {Result<TSuccess, TFailure>} A new Result instance representing a failure.
     */
    public static Failure<TSuccess, TFailure>(failure: TFailure): Result<TSuccess, TFailure> {
        return new Result<TSuccess, TFailure>(new Failure(failure));
    }
}