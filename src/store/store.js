import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    places: {
      namespaced: true,
      state: {
        items: [
          {icon: 'places',heading: 'Safe Zone',text: 'North Control Tower, Bargam...'},
          {icon: 'places_g',heading: 'Safe Zone',text: 'North Control Tower, Bargam...'},
          {icon: 'places_g',heading: 'Safe Zone',text: 'North Control Tower, Bargam...'},
          {icon: 'places_g',heading: 'Safe Zone',text: 'North Control Tower, Bargam...'},
          {icon: 'places_g',heading: 'Safe Zone',text: 'North Control Tower, Bargam...'},
          {icon: 'places_g',heading: 'Safe Zone',text: 'North Control Tower, Bargam...'},
          {icon: 'places_g',heading: 'Safe Zone',text: 'North Control Tower, Bargam...'},
          {icon: 'places_g',heading: 'Safe Zone',text: 'North Control Tower, Bargam...'},
        ]
      },
      mutations: {

      },
      actions: {

      },
      getters: {
        items: (state) => state.items
      }
    },
    areas: {
      namespaced: true,
      state: {
        items: [
          {icon: 'control-bg', iconFormat: 'jpg', heading: 'F12', text: 'North Control Tower Bargam...'},
          {icon: 'control-bg', iconFormat: 'jpg', heading: 'Safe Zone', text: 'North Control Tower Bargam...'},
          {icon: 'control-bg', iconFormat: 'jpg', heading: 'Safe Zone', text: 'North Control Tower Bargam...'},
          {icon: 'control-bg', iconFormat: 'jpg', heading: 'Safe Zone', text: 'North Control Tower Bargam...'},
          {icon: 'control-bg', iconFormat: 'jpg', heading: 'Safe Zone', text: 'North Control Tower Bargam...'},
          {icon: 'control-bg', iconFormat: 'jpg', heading: 'Safe Zone', text: 'North Control Tower Bargam...'},
        ]
      },
      mutations: {

      },
      actions: {

      },
      getters: {
        items: (state) => state.items

      }
    },
    devices: {
      namespaced: true,
      state: {
        items: [
          {icon: 'radar', heading: 'Abiron C669', text: 'North Control Tower, Bargam Airfield', notification: 'ok'},
          {icon: 'radar', heading: 'Abiron C669', text: 'North Control Tower, Bargam...', notification: 'warning', isTooltipOpen: true },
          {icon: 'radar', heading: 'Abiron C669', text: 'Main Runway, Bargam Airfield', notification: 'error'},
          {icon: 'Camera', heading: 'Abiron C669', text: 'Main Runway, Bargam Airfield', notification: 'ok'},
          {icon: 'Camera', heading: 'Abiron C669', text: 'Main Runway, Bargam Airfield', notification: 'ok'},
          {icon: 'Camera', heading: 'Abirona', text: 'Main Runway, Bargam Airfield', notification: 'error', isTooltipOpen: true},
          {icon: 'radar', heading: 'Tower 360', text: 'North Control Tower, Bargam Airfield', notification: 'ok'},
          {icon: 'radar', heading: 'Tower 360', text: 'North Control Tower, Bargam Airfield'},

        ]
      },
      mutations: {

      },
      actions: {

      },
      getters: {
        items: (state) => state.items

      }
    },
    targets: {
      namespaced: true,
      state: {
        items: [
        ]
      },
      mutations: {

      },
      actions: {

      },
      getters: {
        items: (state) => state.items

      }
    }
  }
})
