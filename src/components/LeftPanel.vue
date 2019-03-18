<template>
    <div :class="theme" class="left-panel">

        <header>
            <h2>{{theme | capitalize}}</h2>
            <InputComponent
                    shape="padded"
                    type="text"
                    placeholder="Type or select filter"
                    :rightIcon="{name: 'x', isText: true}"
                    left-icon="filter"
                    v-model="filter"
            />
            <span>22 {{theme | capitalize}}</span>
        </header>

        <main v-if="items && items.length">
            <ul v-if="theme === 'places'">
                <LeftPanelListItem
                        v-for="(item,i) in items"
                        :decoration="i === 0 && '★'"
                        :favorite="i === 0"
                        :item="item"
                        :key="i"
                        :idx="i"
                        :theme="theme"
                />
            </ul>

            <ul v-if="theme === 'areas'">
                <LeftPanelListItem
                        v-for="(item,i) in items"
                        :item="item"
                        :key="i"
                        :theme="theme"
                />
            </ul>

            <ul v-if="theme === 'devices'">
                <LeftPanelListItem
                        v-for="(item,i) in items"
                        :item="item"
                        size="medium"
                        :key="i"
                        :idx="i"
                        :theme="theme"
                />
            </ul>
        </main>

        <NotFound v-else :theme="theme"/>
    </div>
</template>
<script>

    import LeftPanelListItem from './LeftPanelListItem'
    import NotFound from './NotFound'
    import InputComponent from './InputComponent'

    export default {
        components: {
            LeftPanelListItem,
            NotFound,
            InputComponent
        },
        computed: {
            theme: _this => _this.$store.getters['leftPanel/theme'],
            items: _this => _this.$store.getters['leftPanel/items']
                .filter(item => item.heading.toLowerCase().includes(_this.filter.toLowerCase())),
        },
        data() {
            return {
                filter: ''
            }
        },
        filters: {
            capitalize: function (value) {
                if (!value) {
                    return ''
                }
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        },
        created() {
            this.$store.dispatch('leftPanel/getItems')
        }
    }
</script>
