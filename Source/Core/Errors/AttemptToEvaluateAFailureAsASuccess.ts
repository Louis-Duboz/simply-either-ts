import { IncorrectEvaluationOfTheValue } from "./IncorrectEvaluationOfTheValue";

/**
 * Attempt to evaluate a failure as a success.
 */
export class AttemptToEvaluateAFailureAsASuccess extends IncorrectEvaluationOfTheValue {
    public constructor() {
        super("Attempt to evaluate a failure as a success.");
    }
}