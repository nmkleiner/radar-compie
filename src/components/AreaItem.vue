<template>
    <li class="area-item" :icon="item.icon" :heading="item.heading" :text="item.text">
        <img :src="`images/icons/${item.img}.${item.imgFormat}`"/>

        <div class="text-wrapper">
            <h3>{{item.heading}}</h3>
            <span>{{item.text}}</span>
        </div>
    </li>
</template>

<script>
    import {itemMixin} from "../vue-mixins/itemMixin";

    export default {
        mixins: [itemMixin]
    }
</script>

<style scoped>

</style>