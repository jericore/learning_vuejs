//state untuk menampung data data murni, baik dari api , localstorage atau statis seperti contoh dibawah ini
//state dan getters diolah atau di load di index.js dan index.js ini di import (di tampilkan lewat main.js) di main.js

export default {
	active_member : null,
	singleView 	: false,
	members 	: [
		{
			id 		: 1,
			name 	: 'ali',
			point 	: 10,
			img 	: 'ali.png'
		},

		{
			id 		: 2,
			name 	: 'udin',
			point 	: 20,
			img 	: 'udin.png'
		},

		{
			id 		: 3,
			name 	: 'stickerdev',
			point 	: 30,
			img 	: 'sticker.png'
		}
	],
	private 	: [
		{
			id 		: 1,
			name 	: 'private room',
			point 	: 500,
			img 	: 'private.png'
		}
	],
	contoh_kedua : [
		{
			id 		: 1,
			name 	: 'Jerico Reynaldi',
			point 	: 100,
			img 	: 'jerico.png'
		}
	]
}