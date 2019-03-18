<template>
    <div class="radar-page">
        <div class="top-left-buttons-wrapper">
            <ButtonComponent
                    v-for="(btn,i) in topButtons"
                    @click.native="setLeftPanelTheme(btn.name)"
                    color="dark-blue"
                    size="small"
                    shape="circle"
                    :icon="btn.name"
                    :key="i"
            />
        </div>
        <ButtonComponent
                class="top-right-btn"
                color="dark-blue"
                size="small"
                shape="round-left"
                icon="binoculars"
                :notification="true"
                @click.native="toggleRightPanel"
        />
        <LeftPanel />
        <RightPanel @closePanel="toggleRightPanel" v-if="isRightPanelOpen" />
        <div class="bottom-right-btns-wrapper">
            <ButtonComponent shape="circle" color="white" size="small" icon="Union" />

            <SlotButton />
        </div>
        <ButtonComponent
                class="bottom-left-btn"
                color="white"
                size="small"
                shape="circle"
                icon="Union"
        />
        <Scale/>
    </div>
</template>

<script>
    import ButtonComponent from '../components/ButtonComponent'
    import SlotButton from '../components/SlotButton'
    import Scale from '../components/Scale'
    import LeftPanel from '../components/LeftPanel'
    import RightPanel from '../components/RightPanel'

    export default {
        name: 'home',
        components: {
            ButtonComponent,
            SlotButton,
            Scale,
            LeftPanel,
            RightPanel
        },
        methods: {
            setLeftPanelTheme(theme) {
                this.$store
                    .dispatch({type: 'leftPanel/setTheme', theme})
            },
            toggleRightPanel() {
                this.$store.dispatch('rightPanel/togglePanel')
            }
        },
        data() {
            return {
                topButtons: [
                    {name: 'burger'},
                    {name: 'devices'},
                    {name: 'areas'},
                    {name: 'places'}
                ],
            }
        },
        computed: {
            isRightPanelOpen: _this => _this.$store.getters['rightPanel/isOpen']
        }
    }
</script>
