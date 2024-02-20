import { IncorrectEvaluationOfTheResult } from "./IncorrectEvaluationOfTheResult";

/**
 * Attempt to evaluate a success as a failure.
 */
export class AttemptToEvaluateASuccessAsAFailure extends IncorrectEvaluationOfTheResult {
    public constructor() {
        super("Attempt to evaluate a success as a failure.");
    }
}