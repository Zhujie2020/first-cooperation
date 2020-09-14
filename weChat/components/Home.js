import chat from "./home/chat.js"
import contact from "./home/contact.js"
import discover from "./home/discover.js"
import me from "./home/me.js"

let home = {
    data(){
        return {
            changeCom:"chat",
            name:"微信",
        }
    },
    template:`
    <div class="we-chat">
        <div class="head" :class="{white:changeCom=='me'}">
            <div>{{name}}</div>
            <div v-if="changeCom=='me'"><img src="images/相机.png" class="image"></div>
            <div v-else class="head-right">
                <div><img src="images/搜索.png" class="image"></div>
                <div><img src="images/加号1.png" class="image"></div>
            </div>
        </div>
        <component class="content" :is="changeCom"></component>
        <div class="foot">
        <img src="../images/chatG.png" @click="toChat" v-if="changeCom=='chat'">
        <img src="../images/chat.png" @click="toChat" v-else>
        <img src="../images/phoneG.png" @click="toContact" v-if="changeCom=='contact'">
        <img src="../images/phone.png" @click="toContact" v-else>
        <img src="../images/findG.png" @click="toDiscover" v-if="changeCom=='discover'">
        <img src="../images/find.png" @click="toDiscover" v-else>
        <img src="../images/meG.png" @click="toMe" v-if="changeCom=='me'">
        <img src="../images/me.png" @click="toMe" v-else>
        </div>
    </div>
    `,
    components:{
        chat:chat,
        contact:contact,
        discover:discover,
        me:me
    },
    methods:{
        toChat(){
            this.changeCom="chat";
            this.name="微信"
            
        },
        toContact(){
            this.changeCom="contact";
            this.name="通讯录"
        },
        toDiscover(){
            this.changeCom="discover";
            this.name="发现"
        },
        toMe(){
            this.changeCom="me";
            this.name=""
        }

    }
}
export default home