<template>
  <div class="sidebar">
     <h2>---------------ini sidebar-----------------</h2>
       <member v-for="member in members"
       v-bind:key="member.id" :member="member" :allowRemove="true" 
        @click.native.prevent="showmember(member)"
        v-bind:class="{active: member == active_member}"></member> <!-- :member buat oper nilai data dan kalo ngambil dari component harus ditambahin native -->
        <!-- {active: member == active_member}  , active nama class nya dan apabila member == active_member true maka class nya akan aktif apabila false maka tidak aktif -->

              <div id="actions">
                <a href="#" @click.prevent="showmembers()"> Semua Member </a>
                <a href="#" @click.prevent="addMember()"> Tambah Member </a>
              </div>


     <div class="contohkedua" v-for="kedua in contoh_kedua">
     	<h3>{{kedua.name}} - {{kedua.point}}</h3>
     </div>
  </div>
</template>

<script>

    import member from './member'
    import { mapGetters,mapActions } from 'Vuex'


export default {
 computed :  {
  ...mapGetters([
      'members',
      'active_member'
    ])
 },
 components: {
  member
 },
 methods: {
  ...mapActions([
      'showmember',
      'showmembers',
      'addMember'
    ])
 }
}
</script>

<style scoped>
.sidebar{
  flex: 1;
}

#actions a{
  display: block;
}
.active{
  transition: border-right 0.1s ease-in;
  border-right: 10px solid #c82222;
}
</style>