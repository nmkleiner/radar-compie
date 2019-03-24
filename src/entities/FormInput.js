export default class FormInput {
    constructor(settings) {
        this.type = settings.type || 'text';
        this.label = settings.label || '';
        this.rules = settings.rules || '';
        this.rightIcon= settings.rightIcon || '';
        this.showSubmitErrorMsg = settings.showSubmitErrorMsg || false
        this.submitErrorMsg = settings.submitErrorMsg || ''
    }

    setErrorMsg() {
        this.showSubmitErrorMsg = true
    }

    resetErrorMsg() {
        this.showSubmitErrorMsg = false
    }
}