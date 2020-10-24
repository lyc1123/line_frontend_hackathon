<template>
    <div>
        <div v-if="state == 3">
            <div class="btn_next" @click="()=>this.state = 4">Debts</div>
            <Record v-for="record in records" :key="record.demo" :data="record"></Record>
        </div>
        <div class="btn_next" v-if="state==3" @click="handleClick(0)">+</div>

        <div v-if="state == 4">
            <div class="btn_next" @click="()=>this.state = 3">＜</div>
            <Debt :data="records"></Debt>
        </div>

        <nav v-if="state==0||state==1||state==2">
            <h1>記 帳</h1>
            <ul class="menu_ul">
                <li><a class="menu1" href="#" type="button" @click="menu1">金額</a></li>
                <li><a class="menu2" href="#" type="button" @click="menu2">誰付的錢？</a></li>
                <li><a class="menu3" href="#" type="button" @click="menu3">為誰？</a></li>
            </ul>
        </nav>
        <div v-if="state == 0">
                <input  v-model="amount" class="money" placeholder="點擊輸入帳單金額">

            <h4>輸入品項：</h4>
            <input v-model="item_name">
                <h5>類別：</h5>
                <img src="@/assets/food.png" width="100" class="sort">
                <img src="@/assets/accommodation.png" width="100" class="sort">
                <img src="@/assets/transportation.png" width="100" class="sort">
                <img src="@/assets/shopping.png" width="100" class="sort">
                <img src="@/assets/play.png" width="100" class="sort">
                <img src="@/assets/others.png" width="100" class="sort">
                <h5>備註：</h5>
                <table>
                    <tr>
    
                        <td rowspan="2"><img src="@/assets/pen.png" class="pen"></td>
                        <td><input v-model="memo" class="msgnote" placeholder="點擊新增備註"></td>
                    </tr>
                    <tr>
                        <td><hr class="note" /></td>
                    </tr>
                </table>
            <h4>日期：</h4>
            <input type="text" id="text-calendar" class="calendar" name="date"/>
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
            project_id:'5f93c69ec1cf340017d9b33b'
        }
    },
    created(){
        this.requestRecords();
    },
    methods: {
        async requestRecords(){
            //請求紀錄
            var res = await this.$http.get('getRecord?project_id='+this.project_id);
            var record_list = []
            for (let i=0; i<res.data.record.length; i++){
                record_list[i] = res.data.record[i].item//待改demo.itemName
                record_list[i].user = res.data.record[i].member;
            }
            this.records = record_list;
            // console.log(this.records)
            
            let userinfo = []
            for (var i = 0;i<this.records[0]["user"].length;i++){
                userinfo.push(Object.assign({}, this.records[0]["user"][i]))
            }
            userinfo.forEach(e=>{
                e.paidAmount = null;
                e.cost = null;
                e.state = false;
                e.edited = false;
            })
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
nav{  
    padding-top: 20px;
    padding-bottom: 10px;
    height: 180px;
    width: 100%;
    background-color: #6633cc;
} 
nav h1{
    font-size: 30px;
    color: rgb(255, 255,255);
}

h4{
    z-index: 0;
    font-size: 20px;
}

.menu_ul{
    /* 平均在最上面，空白填充 */
    /* display: flex; */
    flex-direction: row;
    justify-content: space-around;
    
    display: inline-block;
    width: 60%;
    height: 30px;
    line-height: 30px;
    background-color:#B399FF;
    border-radius: 30px;
    white-space:nowrap;
    margin-top: 10px;
}

ul li {
    display: inline;
    /* float: left; */
    list-style: none;
    margin-left: 0px;
    margin-right: 0px;
    height: 30px;
    width: 20px;
    padding: 0 10px;
    background-color: white;
}


ul li a{
    display: inline;
    text-decoration: none;
    font-size:10px;
    padding-top: 5px;
    padding-bottom: 5px;
    color:#6633cc;
    border-radius: 30px;
    /* height:60px; */
    margin-top: 0px;
    margin-bottom: 0px;
    /* padding-left: 10px;
    padding-right: 10px; */
    
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
    height: 120px;
    width: 100%;
    z-index: -1;
}

input{
    border: none;
    font-size: 35px;
}

::placeholder {
    color: #C0C0C0;
    font-size: 35px;
}
hr{
    width: 80%;
    margin-left: 10%;
}
h5{
    font-size: 20px;
    margin-top: 30px;
    background-color: #E6E6FA;
}

.sort{
    margin-left: 55px;
    margin-right: 55px;
    margin-top: 30px;
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
    width:100%;
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

</style>