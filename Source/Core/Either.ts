import { AttemptToEvaluateAFailureAsASuccess } from "./Errors/AttemptToEvaluateAFailureAsASuccess";
import { AttemptToEvaluateASuccessAsAFailure } from "./Errors/AttemptToEvaluateASuccessAsAFailure";
import { FailureValue } from "./FailureValue";
import { SuccessValue } from "./SuccessValue";
import { DisjointUnion } from "./DisjointUnion";

/**
 * Represents an either object which is either a success either a failure.
 * @template TSuccess The type of the success value.
 * @template TFailure The type of the failure value.
 */
export class Either<TSuccess, TFailure> {
    private value: DisjointUnion<TSuccess, TFailure>;

    /**
     * Creates a new instance of the Either class.
     * @param value Either a success either a failure.
     */
    public constructor(value: DisjointUnion<TSuccess, TFailure>) {
        this.value = value;
    }
    
    /**
     * Gets the success value.
     * @throws {AttemptToEvaluateAFailureAsASuccess} Throws an error if the value is a failure.
     * @returns {TSuccess} The success value.
     */
    public get Success() : TSuccess {
        if (this.value.IsFailure<TFailure>())
            throw new AttemptToEvaluateAFailureAsASuccess();

        return (this.value as SuccessValue<TSuccess>).Value as TSuccess;
    }
    
    /**
     * Gets the failure value.
     * @throws {AttemptToEvaluateASuccessAsAFailure} Throws an error if the value is a success.
     * @returns {TFailure} The failure value.
     */
    public get Failure() : TFailure {
        if (this.value.IsSuccess<TSuccess>())
            throw new AttemptToEvaluateASuccessAsAFailure();

        return (this.value as FailureValue<TFailure>).Value;
    }

    /**
     * Gets a value indicating whether the value is a success.
     * @returns {boolean} True if the value is a success, false otherwise.
     */
    public get IsSuccess(): boolean { return this.value.IsSuccess(); }

    /**
     * Gets a value indicating whether the value is a failure.
     * @returns {boolean} True if the value is a failure, false otherwise.
     */
    public get IsFailure(): boolean { return this.value.IsFailure(); }

    /**
     * Gets the underlying value using the disjoint union, meaning, wheter it is a failure or a success.
     * Do not use this if you prefer strong typing. Use `Success` or `Failure` methods instead.
     * @returns {TFailure | TSuccess} The underlying value.
     */
    public get Value(): TFailure | TSuccess { return this.value.Value; }
}