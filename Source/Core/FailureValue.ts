import { SuccessValue } from "./SuccessValue";

/**
 * Represents a failure.
 * @template TFailure The type of the failure value.
 */
export class FailureValue<TFailure> {
    private readonly value: TFailure;

    public type: "Failure" = "Failure" as const;

    /**
     * Creates a new instance of Failure.
     * @param value The failure value.
     */
    public constructor(value: TFailure) {
        this.value = value;
    }

    /**
     * Gets the failure value.
     */
    public get Value(): TFailure { return this.value; }

    /**
     * Checks if the value is a failure.
     * @template TFailure The type of the failure value.
     * @returns True, indicating that this is a failure.
     */
    public IsFailure<TFailure>(): this is FailureValue<TFailure> {
        return true;
    }
    
    /**
     * Checks if the value is a success.
     * @template TSuccess The type of the success value.
     * @returns False, indicating that this is not a success.
     */
    public IsSuccess<TSuccess>(): this is SuccessValue<TSuccess> {
        return false;
    }
}