<template>
    <button :class="buttonClass">
        <img v-if="icon" :src="`images/icons/${icon}.${iconFormat}`"/>

        <div v-if="notification" class="notification"></div>
        <div v-if="notification === 'ok'" class="notification bottom right ok"></div>
        <img
                v-if="notification === 'error' || notification === 'warning'"
                class="notification bottom right error-notification"
                :class="imageClass"
                :src="`images/icons/${notification}.svg`"
        />

        <div v-if="isTooltipOpen" class="tooltip">{{notification | capitalize }} Details in this tooltip</div>

        <div v-if="!!decoration">{{decoration}}</div>
        {{text}}

    </button>
</template>
<script>
export default {
    props: {
        color: String,
        size: String,
        shape: String,
        icon: String,
        iconFormat: {
            type: String,
            default: 'svg'
        },
        notification: {
            type: null,
            default: false
        },
        isTooltipOpen: Boolean,
        decoration: null,
        text: String
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
    computed: {
        buttonClass(){
            return {
                'dark-blue': this.color === 'dark-blue',
                'dark-gray': this.color === 'dark-gray',
                'white': this.color === 'white',
                small: this.size === 'small',
                medium: this.size === 'medium',
                circle: this.shape === 'circle',
                'round-left': this.shape === 'round-left',
                'contained': this.shape === 'contained'
            };
        },
        imageClass() {
            return {
                'tooltip-open': this.isTooltipOpen,
                'warning': this.notification === 'warning',
                'error': this.notification === 'error'
            }
        }
    }
}
</script>
<style lang="scss" scoped>


</style>