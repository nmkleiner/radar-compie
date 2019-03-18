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
export default {
    components: {
        InputComponent,
        RightPanelListItem
    },
    methods: {
        closePanel() {
            this.$store.dispatch('rightPanel/togglePanel')
        }
    },
    computed: {
        targets: _this => _this.$store.getters['rightPanel/targets/items']
    },
    created() {
        this.$store.dispatch('rightPanel/getItems')
    }
}
</script>
<style lang="scss" scoped>

</style>