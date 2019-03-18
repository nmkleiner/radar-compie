<template>
    <li :icon="item.icon" :heading="item.heading" :text="item.text">
        <ButtonComponent
                :icon="item.icon || icon"
                :size="size"
                :color="color"
                :notification="item.notification"
                :isTooltipOpen="item.isTooltipOpen"
                shape="circle"
        />
        <div class="text-wrapper">
            <h3>{{item.heading}}</h3>
            <span>{{item.text}}</span>
        </div>
    </li>
</template>

<script>
    import ButtonComponent from './ButtonComponent'

    export default {
        components: {
            ButtonComponent,
        },
        props: {
            item: Object,
            idx: Number,

        },
        data() {
            return {
                size: 'medium',
                color: 'dark-gray'
            }
        },
        computed: {
            icon() {
                return 'icon'
            }
        },
    }
</script>

<style scoped>

</style>