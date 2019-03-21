<template>
    <li class="target-item" :class="active? 'active' : 'inactive'">
        <div class="vertical-slot" :class="color"></div>
        <div class="text-wrapper">
            <div class="top-wrapper">
                <div class="active-wrapper">
                    <div class="active-light"></div>
                    <span :style="activeStyle">{{activeText}}</span>
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
        computed: {
            activeText() {
                return this.active ? 'ACTIVE' : 'Inactive'
            },
            activeStyle() {
                return {color: !this.active && '#78849e'}
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>