import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy },
);
describe('Submit feedback', () => {
    it('should be able submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64, jfasljdl;fajsfiodjaoisdjf',
        })).resolves.not.toThrow();
        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });
    it('should not be able tosubmit feedback without type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png;base64, jfasljdl;fajsfiodjaoisdjf',
        })).resolves.toThrow();
    });
    it('should not be able tosubmit feedback without comment', async () => {

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64, jfasljdl;fajsfiodjaoisdjf',
        })).resolves.toThrow();
    });
    it('should not be able tosubmit feedback with an invalid screenshot', async () => {

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: '123',
        })).resolves.toThrow();
    });
}
);