const chat = {
    template:`
    <div class="contact" v-if="para">
        <div class="inform">
            <div class="back" @click="$router.go(-1)"><img src="images/back.png"></div>
            <div class="name">{{put[para].name}}</div>
            <div class="back"><img src="images/省略号.png"></div>
        </div>
        <div class="content chact-content">
            <div class="chatBox chatBox-you">
                <div><img :src="put[para].img" class="chat-head"></div>
                <div class="chat">{{put[para].message}} <div class="three"></div></div>
            </div>
            <div class="chatBox chatBox-me">
                <div><img src="images/duck.jpg" class="chat-head"></div>
                <div class="chat">{{put[para].msg}} <div class="three"></div></div>
            </div>
            <div class="chatBox chatBox-you">
                <div><img :src="put[para].img" class="chat-head"></div>
                <div class="chat">{{put[para].talk}}  <div class="three"></div></div>
            </div>
        </div>
        <div class="foot chact-foot">
            <div><img src="images/语音.png"></div>
            <div class="put"><input type="text"></div>
            <div><img src="images/微信表情1.png"></div>
            <div><img src="images/加号1.png"></div>
        </div>
    </div>
    `,
    computed:{
        put(){
        return this.$store.state.list
        },

        para(){
            return this.$route.query.id
        }
    }
}
export default chat