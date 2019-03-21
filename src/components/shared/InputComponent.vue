<template>
    <div>
        <LineInput
                v-if="shape === 'line'"

        ></LineInput>

        <PaddedInput
                v-else-if="shape === 'padded'"

        ></PaddedInput>
    </div>
</template>

<script>
    import LineInput from './FormInput'
    import PaddedInput from './FilterInput'
    export default {
        name: "InputComponent",
        props: {
            shape: String
        },
        components: {
            LineInput,
            PaddedInput
        }
    }
</script>
