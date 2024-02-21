import { IncorrectEvaluationOfTheResult } from "./IncorrectEvaluationOfTheResult";

/**
 * Attempt to evaluate a failure as a success.
 */
export class AttemptToEvaluateAFailureAsASuccess extends IncorrectEvaluationOfTheResult {
    public constructor() {
        super("Attempt to evaluate a failure as a success.");
    }
}