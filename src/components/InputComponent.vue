<template>
    <div class="input-wrapper" :class="shape">
        <i :class="'icon-' + leftIcon" class="input-left-symbol"></i>
        <div v-if="leftIcon" class="divider"></div>
        <input
                :type="type"
                :value="value"
                ref="input"
                @input="updateValue"
                @focus="handleFocus"
                @blur="handleBlur"
        />

        <span :class="{'float': isFloating}" class="floating-placeholder caps">{{placeholder}}</span>

        <span v-visible="msg" class="msg-label caps">{{msg || 'a'}}</span>

        <span v-if="rightIcon && rightIcon.isText" class="input-right-symbol">{{rightIcon.name}}</span>
        <i
                v-if="rightIcon && !rightIcon.isText"
                :class="'icon-' + rightIcon.name"
        ></i>
    </div>
</template>
<script>
    export default {
        props: {
            shape: String,
            type: String,
            placeholder: String,
            rightIcon: Object,
            leftIcon: null,
            value: null,
            msg: String
        },
        data() {
            return {
                isFloating: false
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
                if (this.value === '') {
                    this.isFloating = false
                }
            }
        }
    }
</script>
