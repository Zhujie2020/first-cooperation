
let chat = {
    computed:{
        list(){
            return this.$store.state.list
        }
    },
    template:`
        <div>
            <div v-for="item in list" class="chat-list" @click="$router.push({
                path:'chatPag',
                query:{id:item.index}
            })">
                <div class="chat-left"><img :src="item.img"></div>
                <div class="chat-right">
                    <div class="chat-right-top">
                        <div>{{item.name}}</div>
                        <div>{{item.time}}</div>
                    </div>
                    <div class="chat-right-bottom">{{item.talk}}</div>
                </div>
            </div>
        </div>
    `
}
export default chat