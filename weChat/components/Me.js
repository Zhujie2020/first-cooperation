
const me = {
    template: `
    <div class="content">
        <div class="inform me-inform">
            <div class="back" @click="back"><img src="images/back.png"></div>
            <div>个人信息</div>
        </div>
        <div class="inform-list">
            <div class="inform-item">
                <div>头像</div>
                <div class="inform-img"><img src="images/duck.jpg"></div>
                <div class="inform-right"><img src="images/right.png"></div>
            </div>
            <div class="inform-item">
                <div>昵称</div>
                <div class="inform-gray">识趣</div>
                <div class="inform-right"><img src="images/right.png"></div>
            </div>
            <div class="inform-item">
                <div>拍一拍</div>
                <div class="inform-gray">大脑门儿</div>
                <div class="inform-right"><img src="images/right.png"></div>
            </div>
            <div class="inform-item">
                <div>微信号</div>
                <div class="inform-gray">zhu_J00</div>
                <div class="inform-right"><img src="images/right.png"></div>
            </div>
            <div class="inform-item">
                <div>二维码名片</div>
                <div><img src="images/二维码.png" class="inform-code"></div>
                <div class="inform-right"><img src="images/right.png"></div>
            </div>
            <div class="inform-item">
                <div>更多</div>
                <div class="inform-right"><img src="images/right.png"></div>
            </div>
            <div class="inform-item inform-item-last">
                <div>我的地址</div>
                <div class="inform-right"><img src="images/right.png"></div>
            </div>
        </div>
    </div>
    `,
    methods: {
        back() {
            this.$router.go(-1)
        }
    }
}
export default me