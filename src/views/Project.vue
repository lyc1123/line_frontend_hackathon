<template>
  <div class="project">
    <div id="nav">
      <router-link to="/addRecord">Amount</router-link> |
      <router-link to="/project">Who paid</router-link>
    </div>
    <ul class="member_list_wrapper" id="member_list_wrapper">
      <Member v-for="(mem,index) in member" :key=mem.name :index=index :name=mem.name :state=mem.state :amount=mem.paidAmount v-on:checkbox="handleCheckboxChanged"></Member>
    </ul>
  </div>
</template>

<script>
import Member from '@/components/Member.vue'
export default {
  name: "projact",
  components: {
    Member
  },
  data(){
    return{
      amount: 1000,//要從紀錄頁取得
      //要從server取得
      member: [
        {name:"aaa",state:false,edited:false,paidAmount:null},{name:"bbb",state:false,edited:false,paidAmount:null},{name:"ccc",state:false,edited:false,paidAmount:null}
      ]
    }
  },
  methods: {
    handleCheckboxChanged(index){
      this.member[index].state = !this.member[index].state;
      this.calculateAmount();
    },
    calculateAmount(){
      var memberPaid = this.member.filter(e=>e.state)
      this.member.forEach(e=>{
        if (e.state == true){
          var per_amount = this.amount/memberPaid.length;
          e.paidAmount = Number(per_amount.toFixed(2));
        }
        else e.paidAmount = null;
      })
    }
  }
}
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.member_list_wrapper {
    list-style: none;
    padding: 0;
    margin: 0;
    /* 5*5=25 */
    max-height: 23em;
    overflow: auto;
}
</style>