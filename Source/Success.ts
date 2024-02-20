import { Failure } from "./Failure";

/**
 * Represents a successful result.
 * @template TSuccess The type of the success value.
 */
export class Success<TSuccess> {
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
     * Checks if the result is a failure.
     * @template TFailure The type of the failure value.
     * @returns False, indicating that this is not a failure.
     */
    public IsFailure<TFailure>(): this is Failure<TFailure> {
        return false;
    }

    /**
     * Checks if the result is a success.
     * @template TSuccess The type of the success value.
     * @returns True, indicating that this is a success.
     */
    public IsSuccess<TSuccess>(): this is Success<TSuccess> {
        return true;
    }
}