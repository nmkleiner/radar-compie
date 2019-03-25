<template>
    <ValidationObserver ref="observer" v-slot="{ invalid }" tag="form">
        <form @submit.prevent="handleSubmit">
            <!--<template v-for="(input,key) in form.inputs">-->

            <FormInput
                    v-for="(input,key) in form.inputs"
                    v-model="formData[key]"
                    :input="input"
                    :key="key"
            />
                <!--<FormSelect>-->
                    <!---->
                <!--</FormSelect>-->
            <!--</template>-->
            <div class="buttons-wrapper">
                <a>Forgot password?</a>
                <ButtonComponent shape="contained" text="CONNECT"/>
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
                formData: {}
            }
        },
        created() {
            for (let input in this.form.inputs) {
                this.formData[input] = ''
            }
        },
        methods: {
            async handleSubmit() {
                const isValid = await this.$refs.observer.validate()
                if (isValid) {
                    this.$emit('submit', this.formData)
                }
            }
        },
    }
</script>

<style scoped>

</style>