<template>
    <div class="input-wrapper" :class="shape">
        <img v-if="leftIcon" :src="`images/icons/${leftIcon}`" class="input-left-symbol">
        <div v-if="leftIcon" class="divider"></div>
        <input type="text" :placeholder="placeholder" />

        <span v-if="rightIcon && !rightIcon.includes('.')" class="input-right-symbol">{{rightIcon}}</span>
        <img
                v-if="rightIcon && rightIcon.includes('.')"
              :src="`images/icons/${rightIcon}`"
        />

    </div>
</template>
<script>
    export default {
        props: {
            shape: String,
            type: String,
            placeholder: String,
            rightIcon: null,
            leftIcon: null,
        },
    }
</script>
