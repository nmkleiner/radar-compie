export default class FormInput {
    constructor(settings) {
        // for (let setting in settings) {
        //     this[setting] = settings[setting] || ''
        // }
        this.type = settings.type || 'text';
        this.label = settings.label || '';
        this.rules = settings.rules || '';
        this.rightIcon= settings.rightIcon || '';
    }
}