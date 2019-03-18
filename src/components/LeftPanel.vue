<template>
    <div :class="theme" class="left-panel">

        <header>
            <h2 class="caps">{{theme}}</h2>
            <InputComponent
                    shape="padded"
                    type="text"
                    placeholder="Type or select filter"
                    :rightIcon="{name: 'x', isText: true}"
                    left-icon="filter"
                    v-model="filterBy"
                    @input="filter({filter: filterBy})"
            />
            <span class="caps">22 {{theme}}</span>
        </header>

        <main v-if="items && items.length">
            <ul>
                <component
                        v-for="(item,i) in items"
                        :is="themeItem"
                        :decoration="i === 0 && '★'"
                        :favorite="i === 0"
                        :item="item"
                        :key="i"
                        :idx="i"
                />
            </ul>
        </main>
        <NotFound v-else :theme="theme"/>
    </div>
</template>
<script>
    import NotFound from './NotFound'
    import InputComponent from './InputComponent'
    import PlaceItem from './PlaceItem'
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
    import AreaItem from "./AreaItem";
    import DeviceItem from "./DeviceItem";

    export default {
        components: {
            DeviceItem,
            AreaItem,
            NotFound,
            InputComponent,
            PlaceItem
        },
        computed: {
            ...mapState({
                theme: (state) => state.leftPanel.theme
            }),
            ...mapGetters({
                items: 'leftPanel/items',
            }),
            themeItem() {
                if (this.theme === 'places') {
                    return 'PlaceItem'
                } else if (this.theme === 'devices') {
                    return 'DeviceItem'
                } else {
                    return 'AreaItem'
                }
            }
        },
        data() {
            return {
                filterBy: ''
            }
        },
        methods: {
            ...mapMutations({
                close: 'leftPanel/close'
            }),
            ...mapActions({
                fetchData: 'leftPanel/getItems',
                filter: 'leftPanel/filter'
            }),

        },
        created() {
            this.fetchData();
        }
    }
</script>
