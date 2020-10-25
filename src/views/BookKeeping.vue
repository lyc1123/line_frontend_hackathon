<template>
    <div style="text-align:center">
        <div v-if="state == 3">
            <div class="title"><h1>過去的紀錄</h1></div>
            <Record v-for="record in records" :key="record.name" :data="record"></Record>
            <table>
                <tr>
                    <td>
                        <div class="btn_next1" @click="()=>this.state = 4">分帳</div>
                    </td>
                    <td>
                        <div class="btn_next1" v-if="state==3" @click="handleClick(0)">+</div>
                    </td>
                </tr>
            </table>    
        </div>

        <!-- 所有人的欠債 -->
        <div v-if="state == 4">
            <div class="title"><h1>目前的統計</h1></div>
            <Debt :data="records"></Debt>
            <div class="btn_next2" @click="()=>this.state = 3">回紀錄</div>
        </div>

        <div class="container" v-if="state==0||state==1||state==2">
            <h1>記 帳</h1>
            <div class="menu_ul">
                <span>金額</span>
                <span>誰付的錢?</span>
                <span>為誰?</span>
            </div>
        </div>

        <div v-if="state == 0">
            <div style="text-align:center">
                <input  v-model="amount" class="money" placeholder="點擊輸入帳單金額">
            </div>
            <h5>品項：</h5>
            <table>
                <tr>
                    <td rowspan="2"><img src="@/assets/pen.png" class="pen"></td>
                    <td><input v-model="item_name" class="msgnote" placeholder="點擊新增品項"></td>
                </tr>
            </table>
            <h5>類別：</h5>
            <img src="@/assets/food.png" width="100" class="sort" :class="{clicked:index_state[0]}" @click="iconClick(0)">
            <img src="@/assets/accommodation.png" width="100" class="sort" :class="{clicked:index_state[1]}" @click="iconClick(1)">
            <img src="@/assets/transportation.png" width="100" class="sort" :class="{clicked:index_state[2]}" @click="iconClick(2)">
            <img src="@/assets/shopping.png" width="100" class="sort" :class="{clicked:index_state[3]}" @click="iconClick(3)">
            <img src="@/assets/play.png" width="100" class="sort" :class="{clicked:index_state[4]}" @click="iconClick(4)">
            <img src="@/assets/others.png" width="100" class="sort" :class="{clicked:index_state[5]}" @click="iconClick(5)">
            <h5>備註：</h5>
            <table>
                <tr>
                    <td rowspan="2"><img src="@/assets/pen.png" class="pen"></td>
                    <td><input v-model="memo" class="msgnote" placeholder="點擊新增備註"></td>
                </tr>
            </table>
            <h5>日期：</h5>
            <input placeholder="點擊新增日期" type="text" id="text-calendar" class="calendar" name="date"/>
        </div>
        <div class="btn_next" v-if="state==0&&amount!=null" @click="handleClick(1)">Who Paid >></div>

        <Payer v-if="state==1" :amount='Number(amount)' :member='member'></Payer>
        <div class="btn_next" v-if="state==1&&checkValid(1)" @click="()=>this.state = 2">Paid For >></div>

        <Paidfor v-if="state==2" :amount='Number(amount)' :member='member'></Paidfor>        
        <div class="btn_next" v-if="state==2&&checkValid(2)" @click="uploadRecord">Save</div>
    </div>
</template>

<script>
import Record from '@/components/Record.vue'
import Debt from '@/components/Debt.vue'
import Paidfor from '@/components/Paidfor.vue'
import Payer from '@/components/Payer.vue'
export default {
    name: "bookkeeping",
    components: {
        Payer,
        Paidfor,
        Record,
        Debt
    },
    data(){
        return{
            state: 3,
            amount: '',
            item_name: '',
            memo: '',
            date: '',
            member: '',
            records:[],
            project_id:this.$route.query.project_id,
            index:0,
            index_state:[true,false,false,false,false,false]
        }
    },
    created(){
        this.requestRecords();
        this.loadFriends();
    },
    methods: {
        async requestRecords(){
            //請求紀錄
            var res = await this.$http.get('getRecord?project_id='+this.project_id);
            console.log(res);
            var record_list = []
            for (let i=0; i<res.data.record.length; i++){
                record_list[i] = res.data.record[i].item
                record_list[i].user = res.data.record[i].member;
            }
            this.records = record_list;
            console.log(this.records)
        },
        loadFriends(){
           var mem = this.$route.query.friends;
           let userinfo = []
            for (var i = 0;i<mem.length;i++){
                console.log(mem[i]);
                let name = mem[i].friendName;
                alert(name);
                userinfo[i] = {name:name, paidAmount:null, cost:null, state:false, edited:false}
            }
            this.member = userinfo;
        },
        handleClick(i){
            switch (i){
                case 0:
                    this.state = 0;
                    this.amount = null;
                    this.item_name = null;
                    this.date = null;
                    this.memo = null;
                    window.$( document ).ready(()=>{
                        window.$('.calendar').pignoseCalendar();
                    })
                    break;
                case 1:
                    this.date = document.getElementsByName("date")[0].value;
                    this.state = 1;
                    break;
            } 
        },
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
        },
        iconClick(index){
            console.log(index)
            this.index = index;
            this.index_state=[false,false,false,false,false,false]
            this.index_state[index] = true
        },
        async uploadRecord(){
            this.member.forEach(e=>{
                delete e.edited;
                delete e.state;
            })
            var item = {itemName:this.item_name, date:this.date, amount:this.amount, memo:this.memo, user:this.member}
            this.records.push(item);
            //上傳到server
            var params = {
                project_id: this.project_id,
                item:item
            }
            var res =await  this.$http.post("createRecord",params )
            console.log(res);
            this.state = 3;
        }
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: center;
}
.btn_next1{
    width: 80%;
    height: 40px;
    margin-left: 5%;
    margin-top: 10px;
    
    background-color:  #B399FF;
    font-size: 20px;
    border-radius: 10px;
    font-weight: bold;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  cursor: pointer;
}

.btn_next2{
    width: 60%;
    height: 40px;
    margin-left: 20%;
    margin-top: 10px;
    
    background-color:  #B399FF;
    font-size: 20px;
    border-radius: 10px;
    font-weight: bold;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  cursor: pointer;
}

h1{
    
    font-size: 30px;
    color: rgb(255, 255,255);
}
.title{  
    padding-top: 10px;
    height: 60px;
    background-color: #6633cc;
} 
.container{  
    /* padding-top: 20px;
    padding-bottom: 10px; */
    text-align: center;
    height: 30vw;
    width: 100vw;
    margin-bottom: 20px;
    border-radius: 10px;
  /* background-color: rgba( 255,177,123, 1); */
  box-shadow:2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background: linear-gradient(rgba(49,46,140, 1), rgba( 255,177,123, 1));
} 
.container h1{
    /* position: absolute;
    top:12vw;
    left: 35vw; */
    color: rgb(255, 255,255);
    margin:10px 0;
    padding-top: 20px;
    text-shadow: 1px 3px rgba(0, 0, 0, 0.52);
}

.menu_ul{
    /* 平均在最上面，空白填充 */
    /* display: flex; */
    /* flex-direction: row;
    justify-content: space-around; */
    /* position: absolute;
    top: 50vw; */
    /* display: inline-block; */
    width: 66%;
    height: 25px;
    /* line-height: 30px; */
    background-color:#B399FF;
    border-radius: 30px;
    white-space:nowrap;
    margin: 0 auto;
    /* margin-top: 10px; */
}

span {
    /* display: inline;
    float: left;
    list-style: none; */
    /* margin-left: 0px;
    margin-right: 10px; */
    /* height: 38px; */
    padding: 3px 18px;
    background-color: white;
    border-radius: 20px;
    color:#6633cc;
}
/* .menu1{
    
    padding-left: 70px;
    padding-right: 70px;
}
.menu2{
    padding-left: 35px;
    padding-right: 35px;
}
.menu3{
    padding-left: 55px;
    padding-right: 55px;
} */

.money{
    height: 40px;
    width: 80%;
    z-index: -1;
    font-size: 20px;
}

input{
    border: none;
    border-bottom: 1px solid #555555;
    /* font-size: 22px; */
}

::placeholder {
    color: #C0C0C0;
    /* font-size: 35px; */
}
h5{
    /* font-size: 20px; */
    padding: 5px 10px;
    margin: 10px 0;
    text-align: start;
    background-color: #E6E6FA;
}

.sort{
    margin-left: 10px;
    margin-right: 10px;
    /* margin-top: 10px; */
    height: 22vw;
    width: 22vw;
}
/* 線 */
.note{
    
    width: 100%;
    margin-right: 0%;
    margin-top: 0px;
}
/* 圖 */
.pen{
    margin-left: 0%;
    width:40px;
}
/* 點擊匡 */
.msgnote{
    
    margin-top: 0px;
    margin-left: 0px;
    height:30px;
    width:100%;
}
table{
    width: 60%;
    margin-left: 20%;
}
.btn_next{
    -webkit-appearance: none;
  width: 98%;
  height: 56px;
  border-radius: 10px;
  background-color:  #b399ff;
  text-align: center;
  cursor: pointer;
  color: white;
  margin-top: 5vw;
  padding-top:20px;

  border-radius: 10px;
  background-color: rgba( 255,177,123, 1);
  box-shadow:2px 2px 2px 1px rgba(0, 0, 0, 0.2); ;
}
.clicked{
    border: #6633cc 1px solid;
    border-radius:10px ;
}
</style>