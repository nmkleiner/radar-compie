<!--suppress ALL -->

<template>
    <div class="input-wrapper form-input" :class="{'hasRightIcon': !!input.rightIcon}">
        <span :class="{'float': isFloating}" class="floating-placeholder caps">
            {{input.label}}
        </span>
        <ValidationProvider :name="input.label" :rules="input.rules">
            <div slot-scope="{ errors }">
                <input
                        :type="input.type"
                        :value="value"
                        ref="input"
                        v-model="inputValue"
                        @input="updateValue"
                        @focus="handleFocus"
                        @blur="handleBlur"
                />
                <span v-show="showErrorMsg" class="msg-label caps">
                    {{errors[0]}}
                </span>
            </div>
        </ValidationProvider>


        <i v-if="input.rightIcon" :class="'icon-' + input.rightIcon"></i>
    </div>
</template>
<script>
    import FormInput from "../../entities/FormInput";

    export default {
        props: {
            input: FormInput,
            value: null
        },
        data() {
            return {
                isFloating: false,
                inputValue: '',
                showErrorMsg: false,
            }
        },
        methods: {
            updateValue() {
                this.$emit('input', this.$refs.input.value)
            },
            handleFocus() {
                this.isFloating = true
            },
            handleBlur() {
                this.handleErrorMsg()
                this.handleIsFloating()
            },
            handleErrorMsg() {
                this.showErrorMsg = true
            },
            handleIsFloating() {
                if (!this.value) {
                    this.isFloating = false
                }
            }
        },
        created() {
            if (this.inputValue) {
                this.isFloating = true
            }
        }
    }
</script>
