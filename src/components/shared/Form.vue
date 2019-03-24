<template>
    <ValidationObserver ref="observer" v-slot="{ invalid }" tag="form">
        <form @submit.prevent="handleSubmit">
            <FormInput
                    v-for="(input,key) in form.inputs"
                    v-model="formData[key]"
                    :input="input"
                    :key="key"
            />
            <!--@onInputChange="handleInputChange"-->
            <div class="buttons-wrapper">
                <a>Forgot password?</a>
                <ButtonComponent shape="contained" text="CONNECT"/>
                <!--:disabled="disabled" -->
            </div>
        </form>
    </ValidationObserver>
</template>

<script>
    import FormInput from './FormInput'
    import ButtonComponent from './ButtonComponent'
    import Form from '../../entities/Form'

    export default {
        name: "Form",
        components: {
            FormInput,
            ButtonComponent
        },
        props: {
            form: Form
        },
        data() {
            return {
                // disabled: true,
                formData: {}
            }
        },
        methods: {
            handleSubmit() {
                const isValid = this.$refs.observer.validate()

                if (isValid) {
                    this.$emit('submit', this.formData)
                }
            }
        },
        created() {
            for (let input in this.form.inputs) {
                this.formData[input] = ''
            }
        }
    }
</script>

<style scoped>

</style>