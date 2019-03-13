<template>
    <div class="slot-btns">
        <button-cmp
                v-for="(btn,i) in slotButtons"
                :key="i"
                :icon="btn.name"
                iconFormat="png"
        />

        <div class="up-down-wrapper">
            <button-cmp
                    v-for="(btn,i) in upDownButtons"
                    :key="i"
                    :icon="btn.name"
            />
        </div>
    </div>
</template>
<script>
    import buttonCmp from'./button-cmp'
export default {
    components: {
        buttonCmp
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