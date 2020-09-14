const me = {
    template:`
    <div>
        <div class="me-head">
            <div class="left"><img src="images/duck.jpg" @click="$router.push('mePag')"></div>
            <div class="right">
                <div class="me-head-top"><p>识趣</p></div>
                <div class="me-head-bottom">
                    <div class="me-head-bottom-left">微信号:zhu_J00</div>
                    <div class="me-head-bottom-right">
                        <img src="images/二维码.png">
                        <img src="images/right.png">
                    </div>
                </div>
            </div>
        </div>
        <div class="find">
            <div>
                <div><img src="images/支付.png" class="chat-left"></div>
                <div>支付</div>
                <div><img src="images/right.png"></div>
            </div>
            <div class="me-pay">
                <div>
                    <div><img src="images/微信收藏.png" class="chat-left"></div>
                    <div>
                        <div>收藏</div>
                        <div class="me-right"><img src="images/right.png"></div>
                    </div>
                </div>

                <div>
                    <div> <img src="images/微信相册.png" class="chat-left"></div>
                    <div>
                        <div>相册</div>
                        <div class="me-right"><img src="images/right.png"></div>
                    </div>
                </div>

                <div>
                    <div> <img src="images/微信卡包.png" class="chat-left"></div>
                    <div>
                        <div>卡包</div>
                        <div class="me-right"><img src="images/right.png"></div>
                    </div>
                </div>

                <div>
                    <div> <img src="images/微信表情.png" class="chat-left"></div>
                    <div class="no-boder">
                        <div>表情</div>
                        <div class="me-right"><img src="images/right.png"></div>
                    </div>
                </div>   
            </div>
            <div>
                <div><img src="images/设 置.png" class="chat-left"></div>
                <div>设置</div>
                <div> <img src="images/right.png"></div>
            </div>
        </div>
    </div>
    `
}
export default me