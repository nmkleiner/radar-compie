<template>
    <div class="right-panel">
        <header>
            <div class="wrapper">
                <i class="icon-binoculars" @click="closePanel"></i>
                <h2>Targets</h2>
            </div>

            <div class="wrapper">
                <div class="active-wrapper">
                    <div class="active-light"></div>
                    <span>ACTIVE</span>
                </div>
                <i class="fas fa-chevron-down"></i>
            </div>
        </header>

        <main>
            <InputComponent
                    shape="padded"
                    type="text"
                    placeholder="Type or select filter"
                    :rightIcon="{name: 'x', isText: true}"
                    left-icon="filter"
                    v-model="filterBy"
                    @input="filter({filter: filterBy})"

            />
            <ul>
                <RightPanelListItem
                        v-for="(target ,i) in targets"
                        :key="i"
                        :active="target.active"
                        :color="target.color"
                        :serialNum="target.serialNum"
                        :heading="target.heading"
                        :location="target.location"
                />
            </ul>
        </main>
    </div>
</template>
<script>
    import InputComponent from './InputComponent'
    import RightPanelListItem from './RightPanelListItem'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        components: {
            InputComponent,
            RightPanelListItem
        },
        methods: {
            ...mapActions({
                filter: 'targetPanel/targets/filter',
                fetchItems: 'targetPanel/getItems',
                closePanel: 'targetPanel/togglePanel'
            }),
        },
        data() {
            return {
                filterBy: ''
            }
        },
        computed: {
            ...mapGetters({
                targets: 'targetPanel/targets/items'
            })
        },
        created() {
            this.fetchItems()
        }
    }
</script>
<style lang="scss" scoped>

</style>