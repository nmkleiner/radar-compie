<template>
    <div class="radar-page">

        <div class="top-left-buttons-wrapper">
            <ButtonComponent
                    v-for="(btn,i) in topButtons"
                    @click.native="setLeftPanelTheme({theme: btn.name})"
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

        <transition name="fade" appear>
            <LeftPanel v-if="isLeftPanelOpen"/>
        </transition>

        <transition name="slide">
            <TargetPanel @closePanel="toggleRightPanel" v-if="isRightPanelOpen"/>
        </transition>

        <div class="bottom-right-buttons-wrapper">
            <ButtonComponent
                    shape="circle"
                    color="white"
                    size="small"
                    icon="Union"
            />
            <ZoomButtons/>
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
    import {mapActions, mapState} from 'vuex'
    import ButtonComponent from '../components/ButtonComponent'
    import ZoomButtons from '../components/ZoomButtons'
    import Scale from '../components/Scale'
    import LeftPanel from '../components/LeftPanel'
    import TargetPanel from '../components/TargetPanel'
    import userService from '../services/user.service'

    export default {
        name: 'radar-page',
        components: {
            ButtonComponent,
            ZoomButtons,
            Scale,
            LeftPanel,
            TargetPanel
        },
        methods: {
            ...mapActions({
                setLeftPanelTheme: 'leftPanel/setTheme',
                toggleRightPanel: 'targetPanel/togglePanel'
            })
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
            ...mapState({
                isRightPanelOpen: (state) => state.targetPanel.isOpen,
                isLeftPanelOpen: (state) => state.leftPanel.isPanelOpen
            })
        },
        beforeRouteEnter: async (to, from, next) => {
            const isLoggedIn = await userService.isLoggedIn()
            if (isLoggedIn) {
                next()
            } else {
                next({name: 'login-page'})
            }
        }
    }
</script>
