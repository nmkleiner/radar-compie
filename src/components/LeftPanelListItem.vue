<template>
    <li :icon="item.icon" :heading="item.heading" :text="item.text">
        <button-cmp
                :icon="item.icon"
                :iconFormat="item.iconFormat"
                :decoration="decoration"
                :size="size"
                :color="favorite? 'dark-blue' : 'dark-gray'"
                :notification="item.notification"
                :isTooltipOpen="item.isTooltipOpen"
                shape="circle"
        />
        <div class="text-wrapper">
            <span v-if="favorite">Favorite</span>
            <h3>{{item.heading}}</h3>
            <span>{{item.text}}</span>
        </div>
    </li>
</template>
<script>
    import buttonCmp from './ButtonComponent'
export default {
    components: {
        buttonCmp,
    },
    props: {
        favorite: Boolean,
        item: Object,
        idx: Number,
        size: {
            type: String,
            default: 'small'
        },
        decoration: null
    }
}
</script>
