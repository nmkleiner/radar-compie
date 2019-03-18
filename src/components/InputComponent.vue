<template>
    <div class="input-wrapper" :class="shape">
        <i :class="'icon-' + leftIcon" class="input-left-symbol"></i>
        <div v-if="leftIcon" class="divider"></div>
        <input :type="type" :placeholder="placeholder" :value="value" ref="input" @input="updateValue"/>
        <span v-if="msg" class="msg-label caps">{{msg}}</span>

        <span v-if="rightIcon.isText" class="input-right-symbol">{{rightIcon.name}}</span>
        <i
                v-if="!rightIcon.isText"
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
        methods: {
            updateValue() {
                this.$emit('input', this.$refs.input.value)
            }
        },
    }
</script>
