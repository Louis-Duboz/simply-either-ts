import { Result } from '../Build/index';
import { AttemptToEvaluateASuccessAsAFailure } from "../Build/index";
import { AttemptToEvaluateAFailureAsASuccess } from "../Build/index";

describe('Result', () => {
    describe('Success case', () => {
        const successValue = 42;
        const successResult = Result.Success<number, string>(successValue);

        it('should create a success result', () => {
            expect(successResult.IsSuccess).toBeTruthy();
            expect(successResult.IsFailure).toBeFalsy();
        });

        it('should allow access to the success value', () => {
            expect(successResult.Value).toEqual(successValue);
            expect(successResult.Success).toEqual(successValue);
        });

        it('should throw when accessing failure value of a success result', () => {
            expect(() => successResult.Failure).toThrow(AttemptToEvaluateASuccessAsAFailure);
        });
    });

    describe('Failure case', () => {
        const failureValue = 'Error message';
        const failureResult = Result.Failure<number, string>(failureValue);

        it('should create a failure result', () => {
            expect(failureResult.IsFailure).toBeTruthy();
            expect(failureResult.IsSuccess).toBeFalsy();
        });

        it('should allow access to the failure value', () => {
            expect(failureResult.Value).toEqual(failureValue);
            expect(failureResult.Failure).toEqual(failureValue);
        });

        it('should throw when accessing success value of a failure result', () => {
            expect(() => failureResult.Success).toThrow(AttemptToEvaluateAFailureAsASuccess);
        });
    });
});