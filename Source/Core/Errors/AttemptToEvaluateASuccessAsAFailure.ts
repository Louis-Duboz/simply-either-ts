import { IncorrectEvaluationOfTheValue } from "./IncorrectEvaluationOfTheValue";

/**
 * Attempt to evaluate a success as a failure.
 */
export class AttemptToEvaluateASuccessAsAFailure extends IncorrectEvaluationOfTheValue {
    public constructor() {
        super("Attempt to evaluate a success as a failure.");
    }
}