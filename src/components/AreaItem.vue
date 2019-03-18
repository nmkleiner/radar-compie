<template>
    <li :icon="item.icon" :heading="item.heading" :text="item.text">
        <ButtonComponent
                :img="item.img"
                :imgFormat="item.imgFormat"
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
        },
    }
</script>

<style scoped>

</style>