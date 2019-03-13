<template>
    <div :class="theme" class="left-panel">

        <header>
            <h2>{{theme | capitalize}}</h2>
            <input-cmp
                    shape="padded"
                    type="text"
                    placeholder="Type or select filter"
                    rightIcon="x"
                    left-icon="filter.svg"
            ></input-cmp>
            <span>22 {{theme | capitalize}}</span>
        </header>

        <main v-if="items.length">
            <ul v-if="theme === 'places'">
                <panel-list-item
                        v-for="(item,i) in items"
                        :decoration="i === 0 && '★'"
                        :favorite="i === 0"
                        :item="item"
                        :key="i"
                        :idx="i"
                />
            </ul>

            <ul v-if="theme === 'areas'">
                <panel-list-item
                        v-for="(item,i) in items"
                        :item="item"
                        :key="i"
                />
            </ul>

            <ul v-if="theme === 'devices'">
                <panel-list-item
                        v-for="(item,i) in items"
                        :item="item"
                        size="medium"
                        :key="i"
                        :idx="i"
                />
            </ul>
            <div class="opacity-layer"></div>
        </main>

        <not-found v-else :theme="theme"></not-found>
    </div>
</template>
<script>

    import panelListItem from './left-panel-li'
    import notFound from './not-found'
    import inputCmp from './input-cmp'

    export default {
        components: {
            panelListItem,
            notFound,
            inputCmp
        },
        props: {
            theme: String
        },
        data() {
            return {
                // theme: 'places',
                // theme: 'areas',
                // theme: 'devices',
                places: [
                    {icon: 'places',heading: 'Safe Zone',text: 'North Control Tower, Bargam...'},
                    {icon: 'places_g',heading: 'Safe Zone',text: 'North Control Tower, Bargam...'},
                    {icon: 'places_g',heading: 'Safe Zone',text: 'North Control Tower, Bargam...'},
                    {icon: 'places_g',heading: 'Safe Zone',text: 'North Control Tower, Bargam...'},
                    {icon: 'places_g',heading: 'Safe Zone',text: 'North Control Tower, Bargam...'},
                    {icon: 'places_g',heading: 'Safe Zone',text: 'North Control Tower, Bargam...'},
                    {icon: 'places_g',heading: 'Safe Zone',text: 'North Control Tower, Bargam...'},
                    {icon: 'places_g',heading: 'Safe Zone',text: 'North Control Tower, Bargam...'},
                    ],
                areas: [
                    {icon: 'control-bg', iconFormat: 'jpg', heading: 'F12', text: 'North Control Tower Bargam...'},
                    {icon: 'control-bg', iconFormat: 'jpg', heading: 'Safe Zone', text: 'North Control Tower Bargam...'},
                    {icon: 'control-bg', iconFormat: 'jpg', heading: 'Safe Zone', text: 'North Control Tower Bargam...'},
                    {icon: 'control-bg', iconFormat: 'jpg', heading: 'Safe Zone', text: 'North Control Tower Bargam...'},
                    {icon: 'control-bg', iconFormat: 'jpg', heading: 'Safe Zone', text: 'North Control Tower Bargam...'},
                    {icon: 'control-bg', iconFormat: 'jpg', heading: 'Safe Zone', text: 'North Control Tower Bargam...'},
                ],
                devices: [
                    {icon: 'radar', heading: 'Abiron C669', text: 'North Control Tower, Bargam Airfield', notification: 'ok'},
                    {icon: 'radar', heading: 'Abiron C669', text: 'North Control Tower, Bargam...', notification: 'warning', isTooltipOpen: true },
                    {icon: 'radar', heading: 'Abiron C669', text: 'Main Runway, Bargam Airfield', notification: 'error'},
                    {icon: 'Camera', heading: 'Abiron C669', text: 'Main Runway, Bargam Airfield', notification: 'ok'},
                    {icon: 'Camera', heading: 'Abiron C669', text: 'Main Runway, Bargam Airfield', notification: 'ok'},
                    {icon: 'Camera', heading: 'Abirona', text: 'Main Runway, Bargam Airfield', notification: 'error', isTooltipOpen: true},
                    {icon: 'radar', heading: 'Tower 360', text: 'North Control Tower, Bargam Airfield', notification: 'ok'},
                    {icon: 'radar', heading: 'Tower 360', text: 'North Control Tower, Bargam Airfield'},

                ]
            }
        },
        computed: {
            items: function() {
                return this[this.theme]
            }

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
