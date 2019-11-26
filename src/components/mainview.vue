<template>
  <div class="mainview">
    <div v-if="singleView">
          <h1>Single View</h1>   
          <memberr :member="active_member"></memberr>  
          <input type="text" placeholder="name" v-model="active_member.name"> <br>
          <input type="text" id="point" placeholder="point" v-model="active_member.point"> <br>
          <input type="text" placeholder="img" v-model="active_member.img"> <br>
    </div>

    <div v-else>
        <h1>Member App</h1>
          <memberr v-for="member in members" 
          v-bind:key="member.id" :member="member"></memberr> <!-- :member buat oper nilai data -->  
          <h3 v-if="members.length === 0">Member Kosong</h3>

            <div class="private" v-for = "priv in privatee">
                <h3>{{priv.name}} - {{priv.point}}</h3>
            </div>
          
    </div>


  </div>
</template>

<script>

    import memberr from './member'
    import { mapGetters } from 'Vuex'


export default {
 computed :  {
  ...mapGetters([
      'active_member',
      'members',
      'privatee',
      'singleView'
    ])
 },
 components: {
  memberr
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainview{
  flex: 1;
}



h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
