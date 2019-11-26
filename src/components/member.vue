<template>
	   <div class="member">
       		<h3>{{member.name}} - {{member.point}}</h3>
       		<img :src="'/static/image/' + member.img" width="200">

       		<div v-if="allowRemove" @click.prevent="removeMember(member.id)" class="btn-remove">
       			(X) <!-- kenapa muncul nya hanya di sidebar, karena tulisan ini ":allowRemove="true"" hanya ada di sidebar member sedangkan di mainview tidaka da -->
       		</div>
       </div>
</template>

<script>
	    import { mapActions } from 'Vuex'

	export default{
		props: [
			'member', //operan dari member:"member"  yang dikutip,
			'allowRemove'
		],
		 methods: {
  ...mapActions([
      'removeMember'
    ])
 }
	}
</script>

<style type="text/css">
.sidebar img {
  width: 100px;
}
.sidebar .member{
  /* ini untuk class yang apabila nyentuh gammbar muncul btn remove atau x percis di gambarnya */
  position: relative;
  overflow: hidden; /*berguna untuk menghilangkan button nya apabila tidak ada hover maka button langsung muncul di kanan gambar*/
}

/* ini untuk class yang apabila nyentuh gammbar muncul btn remove atau x percis di gambarnya */
.member:hover > .btn-remove{  /* jadi ini milih class btn remove didalam class member.   jadi class member punya child class btn-remove */
 /* ini untuk class yang apabila nyentuh gammbar muncul btn remove atau x 
 dan .member:hover berguna untuk menghilangkan button nya apabila tidak ada hover maka button langsung muncul di kanan gambar*/
  top:10px; /* ini untuk ngatur jarak turunnya tombol button mau sejauh mana turunnya */
   cursor: pointer;
}

.btn-remove{
  background: red;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  /* ini untuk class yang apabila nyentuh gammbar muncul btn remove atau x */
  position: absolute; /* ini untuk tombol nya menghilang pake absolute */
  top: -50px; /* ini buat kalo tombolnya masuk ke atas */
  right: 10px; /* ini untuk tombolnya geser ke kanan ujung */
  transition: top 0.2s ease-in; /* ini apabila cursor di gambar maka tombolnya akan muncul secara perlahan apabila tidak ada maka munculnya akan kasar */
  font-size: 20px; /* ini untuk ngatur size huruf x nya */
  line-height: 50px /* ini untuk ngatur posisi x nya ddalem buletannya */

}

/*.btn-remove:hover{
  cursor: pointer;
}*/


</style>

<!-- 
Langkah hapus member
1. import import { mapActions } from 'Vuex'
2. tambahkan method methods: {
  ...mapActions([
      'removeMember'
    ])
3. tambahkan function di actions.js
4. 


-->