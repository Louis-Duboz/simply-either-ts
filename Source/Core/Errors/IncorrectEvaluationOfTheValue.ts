/**
 * Incorrect evaluation of the value.
 */
export class IncorrectEvaluationOfTheValue extends Error {
    public constructor(error: string) {
        super("Incorrect evaluation of the value : " + error);
    }
}
