<template>
    <header>
        <h2 class="caps">{{theme}}</h2>
        <InputComponent
                shape="padded"
                type="text"
                placeholder="Type or select filter"
                :rightIcon="{name: 'x', isText: true}"
                left-icon="filter"
                v-model="filterBy"
        />
        <span class="caps">22 {{theme}}</span>
    </header>
</template>

<script>
    import InputComponent from './InputComponent'
    import {mapActions} from 'vuex'
    export default {
        components: {
            InputComponent
        },
        props: {
            theme: {
                type: String,
            }
        },
        methods: {
            ...mapActions({
                filter: 'leftPanel/filter'
            })
        },
        computed: {
            filterBy: {
                get() {
                    return this.$store.getters['leftPanel/filter']
                },
                set(filterBy) {
                    this.filter({filter: filterBy})
                }
            }
        },
    }
</script>
