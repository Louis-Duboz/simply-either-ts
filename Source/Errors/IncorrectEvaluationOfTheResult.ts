/**
 * Incorrect evaluation of the result.
 */
export class IncorrectEvaluationOfTheResult extends Error {
    public constructor(error: string) {
        super("Incorrect evaluation of the result : " + error);
    }
}
