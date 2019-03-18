<template>
    <div class="login-page">

        <section class="welcome-section">
            <div class="opacity-layer">
                <span class="quote">"Advanced Security System beyond your dreams"</span>
                <img src="../../public/images/radar-logo.svg"/>
            </div>
        </section>

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

                <InputComponent
                        shape="line"
                        type="email"
                        placeholder="email"
                        v-model="loginData.email"
                        :msg="emailError"
                />

                <InputComponent
                        class="second"
                        shape="line"
                        type="password"
                        placeholder="password"
                        :rightIcon="{name: 'hide', isText: false}"
                        v-model="loginData.password"
                        :msg="passwordError"
                />

                <div class="btns-wrapper">
                    <a>Forgot password?</a>
                    <ButtonComponent shape="contained" @click.native.prevent="login" text="CONNECT"></ButtonComponent>
                </div>
            </form>
        </section>
    </div>
</template>
<script>
    import InputComponent from '../components/InputComponent'
    import ButtonComponent from '../components/ButtonComponent'
    import {mapActions} from 'vuex'

    export default {
        components: {
            InputComponent,
            ButtonComponent
        },
        data() {
            return {
                loginData: {
                    email: '',
                    password: ''
                },
                emailError: '',
                passwordError: '',
            }
        },
        methods: {
            ...mapActions({
                sendLogin: 'users/login'
            }),
            async login() {
                this.emailError = ''
                this.passwordError = ''
                const user = await this.sendLogin({loginData: this.loginData})
                if (user.email) {
                    this.$router.push('/')
                } else {
                    if (user.emailError) this.emailError = user.emailError;
                    else this.passwordError = user.passwordError;
                }
            }
        },
    }
</script>
