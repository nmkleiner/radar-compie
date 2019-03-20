<template >
    <header>
        <h2 class="caps">Devices</h2>
        <InputComponent
                shape="padded"
                type="text"
                placeholder="Type or select filter"
                :rightIcon="{name: 'x', isText: true}"
                left-icon="filter"
                v-model="filterBy"
                @input="filter({filter: filterBy})"
        />
        <span class="caps">22 Devices</span>
    </header>
</template>

<script>
    import InputComponent from './InputComponent'

    export default {
        components: {
            InputComponent
        }
    }
</script>
