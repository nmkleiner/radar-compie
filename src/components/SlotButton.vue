<template>
    <div class="slot-btns">
        <ButtonComponent
                v-for="(btn,i) in slotButtons"
                :key="i"
                :img="btn.name"
                imgFormat="png"
        />

        <div class="up-down-wrapper">
            <ButtonComponent
                    v-for="(btn,i) in upDownButtons"
                    :key="i"
                    :icon="btn.name"
            />
        </div>
    </div>
</template>
<script>
    import ButtonComponent from './ButtonComponent'
export default {
    components: {
        ButtonComponent
    },
    data() {
        return {
            slotButtons: [
                {name: 'plus'},
                {name: 'minus'},
            ],
            upDownButtons: [
                {name: 'up'},
                {name: 'down'},
            ]
        }
    }
}
</script>
<style lang="scss" scoped>

</style>