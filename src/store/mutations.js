import * as mutations from './mutation-types'

export default {
	[mutations.SHOW_MEMBER] (state, member) {
		state.singleView 		= true
		state.active_member 	= member //ingat nilai member ini kita dapet dati actions.js dan action sendiri kita dapat ketika klik @click.native.prevent di sidebar
	},
	[mutations.SHOW_MEMBERS] (state) {
		state.singleView 		= false
		state.active_member 	= null 
	},
	[mutations.ADD_MEMBERS] (state) {
		state.singleView 		= true
		state.active_member 	= {
									id 		: Date.now(),
									name	: '',
									point	: 0,
									img		: ''
								  } 

		state.members.push(state.active_member)
	},
	[mutations.REMOVE_MEMBER] (state  , id) {
		state.members = state.members.filter((member) => {
			return member.id !== id
		})
	},
}