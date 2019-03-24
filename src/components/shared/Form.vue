<template>
    <ValidationObserver ref="observer" v-slot="{ invalid }" tag="form">
        <form @submit.prevent="$emit('submit',formData)">
            <FormInput
                    v-for="(input,key) in form.inputs"
                    v-model="formData[key]"
                    :input="input"
                    :key="key"
                    @onInputChange="handleInputChange"
            />
            <div class="buttons-wrapper">
                <a>Forgot password?</a>
                <ButtonComponent :disabled="disabled" shape="contained" text="CONNECT"/>
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
                disabled: true,
                formData: {}
            }
        },
        methods: {
            handleInputChange() {
                if (this.$refs.observer.ctx.valid) {
                    this.disabled = false
                }
            }
        },
        created() {
            console.log('form',this.form.inputs)
            for (let input in this.form.inputs) {
                this.formData[input] = ''
            }
        }
    }
</script>

<style scoped>

</style>