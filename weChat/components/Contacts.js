let contacts = {

    template:`
    <div class="content" v-if="num">
        <div class="inform">
            <div class="back" @click="$router.go(-1)"><img src="images/back.png"></div>
            <div class="back"><img src="images/省略号.png"></div>
        </div>
        <div class="content">
            <div class="me-head look">
                <div class="left contacts-head"><img :src='name[num].img' ></div>
                <div class="right">
                    <div class="me-head-top">
                        <p class="contacts-large">{{name[num].name}}</p>
                        <div><img :src='name[num].imgs'></div>
                    </div>
                    <div class="me-head-bottom">
                        <div class="me-head-bottom-left contacts-size">昵称: {{name[num].nicheng}} </div>
                    </div>
                    <div class="me-head-bottom">
                        <div class="me-head-bottom-left contacts-size">微信号: {{name[num].weixinnum}} </div>
                    </div>
                    <div class="me-head-bottom">
                        <div class="me-head-bottom-left contacts-size">地区: {{name[num].area}} </div>
                    </div>
                </div>
            </div>
            <div class="find contacts-find">
                <div class="look">
                    <div>朋友权限</div>
                    <div><p></p></div>
                    <div><img src="images/right.png"></div>
                </div>

                <div>
                    <div>标签</div>
                    <div> <p></p></div>
                    <div> <img src="images/right.png"></div>
                </div>

                <div class="look">
                    <div>朋友圈</div>
                    <div><p></p></div>
                    <div><img src="images/right.png"></div>
                </div>

                <div>
                    <div> 更多信息</div>
                    <div> <p></p></div>
                    <div><img src="images/right.png"></div>
                </div>

                <div class="look contacts-center">
                    <div> <img src="images/消息.png" class="chat-left"></div>
                    <div class="no-grow"><p>发消息</p></div>
                    <div></div>
                </div>

                <div class="contacts-center">
                    <div> <img src="images/摄像头.png" class="chat-left"></div>
                    <div class="no-grow"><p>音视频通话</p></div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
    `,
    computed:{
        name(){
            return this.$store.state.list
        },
        num(){
            return this.$route.query.id
        }
    }
}
export default contacts