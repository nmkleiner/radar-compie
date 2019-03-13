<template>
    <div class="radar-page">
        <div class="top-left-buttons-wrapper">
            <button-cmp
                    v-for="(btn,i) in topButtons"
                    @click.native="openLeftPanel(btn.name)"
                    color="dark-blue"
                    size="small"
                    shape="circle"
                    :icon="btn.name"
                    :key="i"
            />
        </div>
        <button-cmp
                class="top-right-btn"
                color="dark-blue"
                size="small"
                shape="round-left"
                icon="places"
                :notification="true"
                @click.native="toggleRightPanel"
        />
        <left-panel v-if="leftPanel.isOpen" :theme="leftPanel.theme"/>
        <right-panel @closePanel="toggleRightPanel" v-if="rightPanel.isOpen" />
        <div class="bottom-right-btns-wrapper">
            <button-cmp shape="circle" color="white" size="small" icon="Union" />

            <slot-btn />
        </div>
        <button-cmp
                class="bottom-left-btn"
                color="white"
                size="small"
                shape="circle"
                icon="Union"
        />
        <scale/>
    </div>
</template>

<script>
    import buttonCmp from '../components/button-cmp'
    import slotBtn from '../components/slot-btn'
    import scale from '../components/scale'
    import leftPanel from '../components/left-panel'
    import rightPanel from '../components/right-panel'

    export default {
        name: 'home',
        components: {
            buttonCmp,
            slotBtn,
            scale,
            leftPanel,
            rightPanel
        },
        methods: {
            openLeftPanel(theme) {
                if (theme !== 'burger') this.leftPanel.theme = theme;
            },
            toggleRightPanel() {
                this.rightPanel.isOpen = !this.rightPanel.isOpen
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
                leftPanel: {
                    theme: 'places',
                    isOpen: true
                },
                rightPanel: {
                    isOpen: false
                }
            }
        }
    }
</script>
