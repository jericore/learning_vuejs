//getters sebagai perantara, apabila ingin memanggil state maka melalui getter dan diolah di getter seperti sort,filter dll.
//state dan getters diolah atau di load di index.js dan index.js ini di import (di tampilkan lewat main.js) di main.js

export default {
	members : state =>{
		return state.members.sort((a,b) => {
			return a['point'] < b['point']
		})
	},
	singleView : state => {
		return state.singleView
	},
	active_member : state => {
		return state.active_member
	},
	privatee : state => {
		return state.private
	},
	contoh_kedua : state =>{
		return state.contoh_kedua
	}
}