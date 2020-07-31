import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	actions: {},
	mutations: {
		saveBotDataHandler: function(state, payload) {
			state.botList.push(payload)
		},
		editBotDataHandler: function(state, payload) {
			state.botList.forEach(item => {
				if (item.id === payload.id) {
					item.id = payload.id
					item.name = payload.name
					item.description = payload.description
					item.image = payload.image
					item.time = payload.time
				}
			})
		},
		deleteBot: function(state, id) {
			state.botList = state.botList.filter(item => item.id !== id)
		}
	},
	state: {
		botList: [],
	},
	getters: {
		getBotList: function(state) {
			return state.botList
		}
	},
})
