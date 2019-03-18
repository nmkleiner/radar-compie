<template>
    <button :class="buttonClass" @mouseenter="toggleTooltip" @mouseleave="toggleTooltip">
        <img v-if="img" :src="`images/icons/${img}.${imgFormat}`"/>
        <i v-else-if="icon" class="icon" :class="'icon-' + icon"></i>
        <div v-if="notification" class="notification"></div>
        <div v-if="notification === 'ok'" class="notification bottom right ok"></div>

        <img
                v-if="notification === 'error' || notification === 'warning'"
                class="notification bottom right error-notification"
                :class="imageClass"
                :src="`images/icons/${notification}.svg`"
        />
        <!--<i-->
                <!--v-if="notification === 'error' || notification === 'warning'"-->
                <!--:class="'icon-' + notification"-->
        <!--&gt;</i>-->
        <Tooltip v-if="isTooltipOpen" :notification="notification"/>

        <div v-if="!!decoration">{{decoration}}</div>
        {{text}}

    </button>
</template>
<script>
    import Tooltip from './Tooltip'

    export default {
        components: {
            Tooltip
        },
        props: {
            color: String,
            size: String,
            shape: String,
            icon: String,
            img: String,
            imgFormat: {
                type: String,
                default: 'svg'
            },
            notification: {
                type: null,
                default: false
            },
            decoration: null,
            text: String
        },
        data() {
            return {
                isTooltipOpen: false,
                // icon: ['burger','areas','filter']
            }
        },
        methods: {
            toggleTooltip() {
                if (this.notification === 'error' || this.notification === 'warning') {
                    this.isTooltipOpen = !this.isTooltipOpen
                }
            }
        },
        filters: {
            capitalize: function (value) {
                if (!value) {
                    return ''
                }
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        },
        computed: {
            buttonClass: _this => ({
                'dark-blue': _this.color === 'dark-blue',
                'dark-gray': _this.color === 'dark-gray',
                'white': _this.color === 'white',
                small: _this.size === 'small',
                medium: _this.size === 'medium',
                circle: _this.shape === 'circle',
                'round-left': _this.shape === 'round-left',
                'contained': _this.shape === 'contained'
            }),
            imageClass: function() {
                const obj = {
                    'tooltip-open': this.isTooltipOpen,
                    'warning': this.notification === 'warning',
                    'error': this.notification === 'error',
                }
                // obj[`icon-${this.notification}`] = !!this.notification
                return obj
            }
        },
    }
</script>
<style lang="scss" scoped>

    .slide-right-enter-active, .slide-right-leave-active {
        transition: .25s ease-out;
        transform: translateX(0px)
    }

    .slide-right-enter, .slide-right-leave-to {
        opacity: 0;
        transform: translateX(20px)
    }
</style>