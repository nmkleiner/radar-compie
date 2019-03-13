<template>
    <div class="right-panel">
        <header>
            <div class="wrapper">
                <img src="images/icons/binoculars.svg" @click="closePanel"/>
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
            <input-cmp
                    shape="padded"
                    type="text"
                    placeholder="Type or select filter"
                    rightIcon="x"
                    left-icon="filter.svg"
            ></input-cmp>
            <ul>
                <right-panel-li
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
    import inputCmp from './input-cmp'
    import rightPanelLi from './right-panel-li'
export default {
    components: {
        inputCmp,
        rightPanelLi
    },
    props: {

    },
    data() {
        return {
            targets: [
                { active: true, color: 'high-alert', serialNum: 'C23465', heading: 'Car Driving Fast', location: 'F22 Raptor Hangar'},
                { active: true, color: 'low-alert', serialNum: 'C23465', heading: 'Car Driving Fast', location: 'F22 Raptor Hangar'},
                { active: true, color: 'med-alert', serialNum: 'C23465', heading: 'Car Driving Fast', location: 'F22 Raptor Hangar'},
                { active: true, color: 'med-alert', serialNum: 'C23465', heading: 'Car Driving Fast', location: 'F22 Raptor Hangar'},
                { active: true, color: 'med-alert', serialNum: 'C23465', heading: 'Car Driving Fast', location: 'F22 Raptor Hangar'},
                { active: false, color: 'reference-alert', serialNum: 'C23465', heading: 'Car Driving Fast', location: 'F22 Raptor Hangar'},
                { active: false, color: 'high-alert', serialNum: 'C23465', heading: 'Car Driving Fast', location: 'F22 Raptor Hangar'},
            ]
        }
    },
    methods: {
        closePanel() {
            this.$emit('closePanel')
        }
    },
    computed: {

    }
}
</script>
<style lang="scss" scoped>

</style>