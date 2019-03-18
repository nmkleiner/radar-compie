<template>
    <li :icon="item.icon" :heading="item.heading" :text="item.text">
        <ButtonComponent
                :icon="item.icon || icon"
                :img="item.img"
                :imgFormat="item.imgFormat"
                :decoration="decoration"
                :size="size"
                :color="color"
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
    import ButtonComponent from './ButtonComponent'
    export default {
        components: {
            ButtonComponent,
        },
        props: {
            favorite: Boolean,
            item: Object,
            idx: Number,
            size: {
                type: String,
                default: 'small'
            },
            decoration: null,
            theme: String
        },
        computed: {
            color: _this => _this.favorite? 'dark-blue' : 'dark-gray',
            icon() {
                if (this.theme === 'places') {
                    return this.favorite? 'places' : 'places_g'
                }
                return 'icon'
            }
        },
    }
</script>
