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
                        v-model="email"
                        :msg="emailMsg || ''"
                        @input.native="$v.email.$touch()"
                />
                <InputComponent
                        class="second"
                        shape="line"
                        type="password"
                        placeholder="password"
                        :rightIcon="{name: 'hide', isText: false}"
                        v-model="password"
                        @input.native="$v.password.$touch()"
                        :msg="passwordMsg || ''"
                />

                <div class="btns-wrapper">
                    <a>Forgot password?</a>
                    <ButtonComponent :disabled="$v.$error" shape="contained" @click.native.prevent="login" text="CONNECT"></ButtonComponent>
                </div>
            </form>
        </section>
    </div>
</template>
<script>
    import InputComponent from '../components/InputComponent'
    import ButtonComponent from '../components/ButtonComponent'
    import {email, required} from 'vuelidate/lib/validators'
    import {mapActions} from 'vuex'

    export default {
        components: {
            InputComponent,
            ButtonComponent
        },
        data() {
            return {
                email: '',
                password: '',
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
            emailMsg() {
                return !!this.emailError && this.emailError ||
                    this.$v.email.$error && (
                        !this.$v.email.email && 'Not a valid email' ||
                        !this.$v.email.required && 'This field is required'
                    )
            },
            passwordMsg() {
                return !!this.passwordError && this.passwordError ||
                    this.$v.password.$error && (
                        !this.$v.password.required && 'This field is required'
                    )
            }
        },
        validations: {
            email: {
                required,
                email
            },
            password: {
                required
            }
        }
    }
</script>
