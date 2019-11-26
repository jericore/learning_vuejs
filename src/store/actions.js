import * as mutations from './mutation-types'

//action manggil mutations dan untuk ngapain aja ngerjainnya di mutations
//action kita dapet dari click prevent di sidebar yang kita oper nilai member
export default {
	showmember(context, member){  //selalu mempunyai parameter "context" dan yang selanjutnya/parameter kedua dst, itu merupakan parsing data
		context.commit(mutations.SHOW_MEMBER, member) //manggiil mutation-types SHOW_MEMBER dan context.commit itu uuntuk memanggil mutation
	},
	showmembers(context){  //selalu mempunyai parameter "context" dan yang selanjutnya/parameter kedua dst, itu merupakan parsing data
		context.commit(mutations.SHOW_MEMBERS) //manggiil mutation-types SHOW_MEMBER dan context.commit itu uuntuk memanggil mutation
	},
	addMember(context){  //selalu mempunyai parameter "context" dan yang selanjutnya/parameter kedua dst, itu merupakan parsing data
		context.commit(mutations.ADD_MEMBERS) //manggiil mutation-types ADD_MEMBERS dan context.commit itu uuntuk memanggil mutation
	},
	removeMember(context , id){  //selalu mempunyai parameter "context" dan yang selanjutnya/parameter kedua dst, itu merupakan parsing data
		context.commit(mutations.REMOVE_MEMBER , id) //manggiil mutation-types REMOVE_MEMBER dan context.commit itu uuntuk memanggil mutation
		setTimeout(()=> context.dispatch('showmembers'),1)  // dispatch ini berguna untuk memanggil function showmembers yang berada di satu halaman
	}
}