<template>
    <li :class="active? 'active' : 'inactive'">
        <div class="vertical-slot" :class="color"></div>
        <div class="text-wrapper">
            <div class="top-wrapper">
                <div class="active-wrapper">
                    <div class="active-light"></div>
                    <span :style="{color: !active && '#78849e'}">{{active? 'ACTIVE' : 'Inactive'}}</span>
                </div>
                <span class="c-num">{{serialNum}}</span>
            </div>
            <h3>{{heading}}</h3>
            <span class="location">{{location}}</span>
        </div>
    </li>
</template>
<script>
export default {
    props: {
        active: Boolean,
        color: String,
        serialNum: String,
        heading: String,
        location: String
    },
    data() {
        return {

        }
    },
    computed: {

    }
}
</script>
<style lang="scss" scoped>

</style>