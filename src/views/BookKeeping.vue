<template>
    <div>
        <div v-if="state == 0">
            <h4>帳單金額：</h4>
            <input v-model="amount">
            <h4>輸入品項：</h4>
            <input v-model="item_name">
            <h4>備註：</h4>
            <input v-model="memo">
            <h4>日期：</h4>
            <input type="text" id="text-calendar" class="calendar" name="date"/>
        </div>
        <Payer v-if="state==1" :amount='Number(amount)' :member='member'></Payer>
        <Paidfor v-if="state==2" :amount='Number(amount)' :member='member'></Paidfor>
        <div class="btn_next" v-if="state==0&&amount!=null" @click="()=>this.state = 1">Who Paid >></div>
        <div class="btn_next" v-if="state==1&&checkValid(1)" @click="()=>this.state = 2">Paid For >></div>
        <div class="btn_next" v-if="state==2&&checkValid(2)">Save</div>
    </div>
</template>

<script>
import Paidfor from '@/components/Paidfor.vue'
import Payer from '@/components/Payer.vue'
export default {
  name: "bookkeeping",
  components: {
    Payer,
    Paidfor
  },
  data(){
    return{
        state: 0,
        amount: null,
        item_name: null,
        memo: null,
        date: null,
        //要從server取得
        member: [
            {name:"aaa",state:false,edited:false,paidAmount:null,cost:null},{name:"bbb",state:false,edited:false,paidAmount:null,cost:null},{name:"ccc",state:false,edited:false,paidAmount:null,cost:null}
        ]
    }
  },
  created(){
    window.$( document ).ready(()=>{
      console.log('aaaaaaaaaa')
      window.$('.calendar').pignoseCalendar();
    })
  },
  methods: {
      checkValid(state){
        let sum = 0;
        if (state == 1){
            this.member.forEach(e=>{
            sum += e.paidAmount;
            })
        }
        else if (state == 2){
            this.member.forEach(e=>{
            sum += e.cost;
            })
        }
        if (Math.round(sum) == this.amount) return true;
        else return false;
      }
  }
}
</script>

<style scoped>
#nav {
  padding: 10px;
}

a {
  font-weight: bold;
  color: #2c3e50;
}

a.router-link-exact-active {
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
.btn_next{
  width: 110px;
  height: 30px;
  border-radius: 10px;
  background-color: #42b983;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  cursor: pointer;
}
</style>