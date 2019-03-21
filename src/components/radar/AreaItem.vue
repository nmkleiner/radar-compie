<template>
    <li class="area-item" :icon="item.icon" :heading="item.heading" :text="item.text">
        <img :src="imgSrc"/>

        <div class="text-wrapper">
            <h3>{{item.heading}}</h3>
            <span>{{item.text}}</span>
        </div>
    </li>
</template>

<script>
    import {itemMixin} from "../../vue-mixins/itemMixin";

    export default {
        mixins: [itemMixin],
        computed: {
            imgSrc() {
                return require(`../../../public/images/icons/${this.item.img}.${this.item.imgFormat}`)
            }
        }
    }
</script>

<style scoped>

</style>