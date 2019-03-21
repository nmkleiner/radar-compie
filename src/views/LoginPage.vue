<template>
    <div class="login-page">

        <Welcome></Welcome>

        <section class="login-section">
            <img class="main-img" src="../../public/images/big-lock.svg"/>
            <h2>Welcome Back!</h2>
            <p class="sign-in-paragraph">
                Sign in to manage your fleet and Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p class="login-directions">
                Enter Your Login info
            </p>
            <a class="learn-more-link">> Learn more about our system</a>

            <form>

                <FormInput v-model="email" :input="form.inputs[0]"/>

                <FormInput v-model="password" :input="form.inputs[1]"/>

                <div class="buttons-wrapper">
                    <a>Forgot password?</a>
                    <ButtonComponent shape="contained" @click.native.prevent="login" text="CONNECT"></ButtonComponent>
                </div>
            </form>
        </section>
    </div>
</template>
<script>
    import FormInput from '../components/shared/FormInput'
    import ButtonComponent from '../components/shared/ButtonComponent'
    import Welcome from '../components/login/Welcome'
    import {mapActions} from 'vuex'
    import LoginForm from "../entities/LoginForm";

    export default {
        components: {
            FormInput,
            ButtonComponent,
            Welcome
        },
        data() {
            return {
                email: '',
                password: '',
                emailError: '',
                passwordError: '',
                form: new LoginForm({
                    inputs: [
                        {
                            type: 'email',
                            label: 'email',
                            rules: 'required|email'
                        },
                        {
                            type: 'password',
                            label: 'password',
                            rules: 'required',
                            rightIcon: 'hide',
                        },
                    ]
                })
            }
        },
        methods: {
            ...mapActions({
                sendLogin: 'users/login'
            }),
            // loginMe(){
            //     this.form.submit();
            // },
            async login() {
                this.emailError = ''
                this.passwordError = ''
                const user = await this.sendLogin({loginData: {email: this.email, password: this.password}})
                if (user.email) {
                    this.$router.push('/')
                } else {
                    if (user.emailError) this.emailError = user.emailError;
                    else this.passwordError = user.passwordError;
                }
            }
        },
        computed: {
            // emailInput(){
            //   return this.form.input('email');
            // },

        },
    }
</script>
