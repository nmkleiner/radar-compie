import FormInput from "./FormInput";

export default class Form {
    constructor(settings){
        this.inputs = this.buildInputs(settings.inputs);
    }

    buildInputs(inputs){
        // inputs.forEach((inputSettings) => {
        //     console.log('input settings',)
        //     this.inputs[inputSettings.name] = new FormInput(inputSettings);
        // })
        return inputs.map(inputSettings => new FormInput(inputSettings))
    }

    submit(){
        this.validate().then((result) => {
            if(result){
                // Submit the form...
            }
        });
    }

    input(name){
        return this.inputs[name] || null;
    }
}