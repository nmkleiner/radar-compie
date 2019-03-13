<template>
    <main class="not-found">
        <img :src="pic"/>
        <h4>{{theme | capitalize}} not found</h4>
        <span>We can't find any {{theme}} matching your search</span>
        <h4>Recent searches</h4>
        <div class="chips-wrapper">
            <div class="row">
                <div class="chip">
                    <span>Wingone</span>
                </div>
                <div class="chip">
                    <span>Alpha</span>
                </div>
                <div class="chip">
                    <span>Airborn</span>
                </div>
            </div>

            <div class="row">
                <div class="chip">
                    <span>554</span>
                </div>
                <div class="chip">
                    <span>Delta</span>
                </div>
                <div class="chip">
                    <span>Armada</span>
                </div>
            </div>
        </div>
    </main>

</template>
<script>
export default {
    props: {
        theme: String
    },
    data() {
        return {
            pic: '',
        }
    },
    created() {
        this.pic = require(`../../public/images/icons/${this.theme}_not_found.svg`)
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
}
</script>
<style lang="scss" scoped>

</style>