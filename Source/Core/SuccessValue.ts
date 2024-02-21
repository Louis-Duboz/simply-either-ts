import { FailureValue } from "./FailureValue";

/**
 * Represents a successful.
 * @template TSuccess The type of the success value.
 */
export class SuccessValue<TSuccess> {
    private readonly value: TSuccess;

    public type: "Success" = "Success" as const;

    /**
     * Creates a new instance of Success.
     * @param value The success value.
     */
    public constructor(value: TSuccess) {
        this.value = value;
    }

    /**
     * Gets the success value.
     */
    public get Value(): TSuccess { return this.value; }

    /**
     * Checks if the value is a failure.
     * @template TFailure The type of the failure value.
     * @returns False, indicating that this is not a failure.
     */
    public IsFailure<TFailure>(): this is FailureValue<TFailure> {
        return false;
    }

    /**
     * Checks if the value is a success.
     * @template TSuccess The type of the success value.
     * @returns True, indicating that this is a success.
     */
    public IsSuccess<TSuccess>(): this is SuccessValue<TSuccess> {
        return true;
    }
}