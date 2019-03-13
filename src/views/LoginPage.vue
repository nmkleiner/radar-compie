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
                Sign in to manage your fleet and Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p class="login-directions">
                Enter Your Login info
            </p>
            <a class="learn-more-link">> Learn more about our system</a>
            <form>

                <input-cmp
                        shape="line"
                        type="email"
                        placeholder="email"
                />

                <input-cmp
                        shape="line"
                        type="password"
                        placeholder="password"
                        rightIcon="hide.svg"
                        class="second"
                />

                <div class="btns-wrapper">
                    <a>Forgot password?</a>
                    <button-cmp shape="contained" @click.native.prevent="" type="submit" text="CONNECT"></button-cmp>
                </div>
            </form>
        </section>
    </div>
</template>
<script>
    import inputCmp from '../components/input-cmp'
    import buttonCmp from '../components/button-cmp'
export default {
    components: {
        inputCmp,
        buttonCmp
    },
    props: {

    },
    data() {
        return {

        }
    },
    computed: {

    }
}
</script>
<style lang="scss" scoped>

</style>