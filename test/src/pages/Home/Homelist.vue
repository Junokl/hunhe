<template>
    <div id="pageletListContent" class="feed-list-container" style="margin-top:80px;">
        <!-- react-empty: 33 -->
        <div class="list_content" data-pull-fresh="1">
            <section class="has_action" data-hot-time="1544698293" data-group-id="6634397844587414020" data-item-id="6634397844587414020"
                data-format="0"><a href="javascript: void(0)" data-action-label="click_headline" data-tag="news_politics"
                    class="article_link clearfix "> 
                    <router-link to="/map" class="item_detail" v-for="(item,index) in lists" :key="index"
                    >
                        <h3 class="dotdot line3">{{item.title}}</h3>
                        <div class="list_image">
                            <ul class="clearfix">
                                <li class="list_img_holder" v-for="(item,index) in imglist" :key="index"><img :src="item.url"></li>
                            </ul>
                        </div>
                        <div class="item_info">
                            <div><span class="hot_label space">热</span><span class="src space">{{item.source}}</span><span class="cmt space">
                                    <!-- react-text: 829 -->评论
                                    <!-- /react-text -->
                                    <!-- react-text: 830 -->5202
                                    <!-- /react-text --></span><span class="time" title="2018-12-13 21:06">{{item.bury_count}}分钟前</span><span data-id="6633270856464204302"
                                    class="dislike-news fr"></span></div>
                        </div>
                    </router-link>
                </a>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'homelist',
        component:{},
        data(){
            return{
                lists:[],
                imglist:[],
            }
        },
        methods:{
            getdata(){
                this.$axios.get('/api/list/?',{params:{
                        tag:'news_military',
                        ac:'wap',
                        count:'20',
                        format:'json_raw',
                        as:'A1758C819285707',
                        cp:'5C12B5B770577E1',
                        min_behot_time:1544706448,
                        _signature:'nJFT5QAAwI42vhNlbI3l5ZyRU.',
                        i:1544705879
                    }})//?pageNo:1,pageSize=15
                .then((res)=>{
                    // console.log(res.data.data);
                    this.lists = this.lists.concat(res.data.data);
                    for(let i=0;i<res.data.data.length;i++){
                        // console.log(res.data.data[i].image_list)
                        this.imglist = this.imglist.concat(res.data.data[i].image_list)
                        console.log(this.imglist)
                    }
                    console.log(this.lists)
                })
                .catch((err)=>{
                    console.log(err);
                })
            },
        },

        mounted(){

        },
        created(){
            this.getdata();
        }
    }
</script> 
<style scoped>
 @import url('../../styles/index.css');
#pageletListContent{
    margin-top:2.666667rem;
}
.feed-list-container section {
    margin: 0px 30px;
}
.feed-list-container .article_link {
    min-height: 84px;
}
.feed-list-container .article_link {
    padding: 32px 0px;
}
.feed-list-container .article_link {
    display: block;
    position: relative;
    padding: 16px 0px;
    min-height: 42px;
    font-size: 0px;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
    -webkit-touch-callout: none;
}
.feed-list-container h3 {
    color: #222;
    font-size: 17px;
    line-height: 21px;
    font-weight: normal;
    overflow: hidden;
}
.feed-list-container .item_info {
    margin-top: 12px;
}
.feed-list-container .item_info {
    color: #999;
    overflow: hidden;
    font-size: 0;
    margin-top: 6px;
}
.feed-list-container .item_info .stick_label {
    border-radius: 4px;
}
.feed-list-container .item_info .stick_label {
    width: 48px;
}
.feed-list-container .item_info .stick_label {
    line-height: 24px;
}
.feed-list-container .item_info .stick_label {
    font-size: 18px;
}
.feed-list-container .item_info .space {
    margin-right: 10px;
}
.feed-list-container .item_info span {
    line-height: 24px;
}
.feed-list-container .item_info span {
    font-size: 20px;
}
.item_info .stick_label {
    color: #f85959;
    border-color: rgba(248, 89, 89, 0.5);
}
.feed-list-container .item_info .stick_label {
    display: inline-block;
    font-size: 9px;
    line-height: 12px;
    width: 24px;
    text-align: center;
    border: 1px solid #fff;
    border-radius: 2px;
}
.feed-list-container .item_info .space {
    margin-right: 5px;
}
.feed-list-container .item_info span {
    display: inline-block;
    font-size: 10px;
    line-height: 12px;
    vertical-align: middle;
}
.feed-list-container .list_image, [data-dpr="2"] .feed-list-container .list_img_holder_large {
    margin-top: 12px;
}
.feed-list-container .list_image ul {
    display: block;
    margin: 0;
    padding: 0;
    list-style-type: none;
    font-size: 0;
    text-align: center;
}
.feed-list-container .list_image ul li:first-child {
    padding-right: 4px;
}
.feed-list-container .list_image ul li {
    display: inline-block;
    overflow: hidden;
    width: 33.3%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.feed-list-container .list_image ul li:first-child {
    float: left;
    padding-right: 2px;
}
.feed-list-container .list_image ul li:last-child {
    padding-left: 4px;
}
.feed-list-container .list_img_holder img {
    border: none;
    display: block;
    width: 100%;
    -webkit-transition: opacity 300ms ease;
    -moz-transition: opacity ease .3s;
    pointer-events: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-user-select: none;
    text-decoration: none;
}

</style>