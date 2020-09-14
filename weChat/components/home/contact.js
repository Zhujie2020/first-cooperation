const contact = {
    data(){
        return{
            list:[
                {
                    img:"images/新的朋友.png",
                    name:"新的额朋友"
                },
                {
                    img:"images/仅聊天的朋友.png",
                    name:"仅聊天的朋友"
                },
                {
                    img:"images/群聊.png",
                    name:"群聊"
                },
                {
                    img:"images/微信标签.png",
                    name:"标签"
                },
                {
                    img:"images/公众号.png",
                    name:"公众号"
                },
            ],
            starList:[
                {
                    img:"images/1.jpg",
                    name:"尊敬的母亲"
                },
                {
                    img:"images/11.jpg",
                    name:"父亲大人"
                }
            ]
        }
    },
    computed:{
        nameList(){
            return this.$store.state.list
        }
    },
    template:`
    <div>
        <div class="contact-top chat-list" v-for="item in list">
            <div class="chat-left"><img :src="item.img"></div>
            <div class="chat-right contact-top-right">{{item.name}}</div>
        </div>

        <div class="star">
            <div class="Starfriend">星标朋友</div>
            <div class="chat-list" v-for="item in starList">
                <div class="chat-left"><img :src="item.img"></div>
                <div class="chat-right contact-top-right">{{item.name}}</div>
            </div>
        </div>
        
        <div class="star">
        <div class="Starfriend">A </div>
            <div class="chat-list" v-for="item in nameList" @click="$router.push(
                {
                    path:'contactPag',
                    query:{
                        id:item.index,
                    }
                }
            )">
                <div class="chat-left"><img :src="item.img"></div>
                <div class="chat-right contact-top-right">{{item.name}}</div>
            </div>
        </div>
    
    </div>
    </div>
    `
}
export default contact