<template>
  <div class="page">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover" class="mgb20" style="height:100px;">
          <div class="user-info">
            <img src="~img/test/avi.jpg" class="user-avator" alt />
            <div class="user-info-cont">
              <div class="user-info-name">渴死的鱼</div>
            </div>
          </div>
        </el-card>
        <el-card shadow="hover" style="height:704px;">
          <div slot="header" class="clearfix">
            <span>个人简介</span>
          </div>
          <div
            class="user-intro"
          >1968年担任剧情片《死节》的编剧，从而进入电影圈。1973年执导个人首部电影《铁汉柔情》。1977年开始以喜剧片为发展主线。1983年加入新艺城电影公司。1986年执导的枪战片《英雄本色》奠定其暴力美学的电影风格，并获得第6届香港电影金像奖最佳影片奖 [1] 。1988年创办了香港电影导演会。1990年凭借动作片《喋血双雄》获得第9届香港电影金像奖最佳导演奖 [2] ；同年出演动作片《勇闯天下》。1993年赴美国好莱坞发展。1997年凭借动作片《变脸》获得全美华裔艺术基金会金环奖 [3] 。2000年执导的谍战片《碟中谍2》获得全球电影年度票房冠军 [4] 。2004年获得香港政府颁发的铜紫荆星章 [5] 。</div>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-row :gutter="20" class="mgb20">
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
              <div class="grid-content grid-con-1">
                <i class="el-icon-lx-people grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">1234</div>
                  <div>文章阅读量</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
              <div class="grid-content grid-con-2">
                <i class="el-icon-lx-notice grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">321</div>
                  <div>课程销量</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
              <div class="grid-content grid-con-3">
                <i class="el-icon-lx-goods grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">5000</div>
                  <div>累计收益</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-card shadow="hover" style="height:704px;">
          <div slot="header" class="clearfix">
            <span>发布须知</span>
          </div>
          <el-table
            :data="todoList"
            :show-header="false"
            height="604"
            style="width: 100%;font-size:14px;"
          >
            <el-table-column width="40">
              <template slot-scope="scope">{{scope.row.status}}</template>
            </el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <div
                  class="todo-item"
                  :class="{'todo-item-del': scope.row.status}"
                >{{scope.row.title}}</div>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "超级管理员",
      todoList: [
        {
          title:
            "平台致力于为广大内容创作者提供良好的创作环境，打造健康有序的内容生态。平台的良好可持续发展，有赖于各位作者的共同维护与支持。每位创作者在发文前仔细阅读本规范。如您发布的内容存在规范中提到的以下问题，将无法通过审核或不被系统推荐，违规严重帐号将受到处罚甚至封禁.",
          status: ""
        },
        {
          title: "格式",
          status: "1"
        },
        {
          title:
            " 标题中含有错别字/繁体字/特殊符号，或标题不通顺，标题使用全英文/外文等",
          status: ""
        },
        {
          title:
            "正文（视频）存在全文使用繁体字/全文英文/少数民族文字，且无翻译（字幕）",
          status: ""
        },
        {
          title: "内容",
          status: "2"
        },
        {
          title:
            "发布标题党内容：使用过度夸张的惊叹词，故意营造悬念引人好奇题文不符，标题存在歧义，断章取义，捏造正文中不存在的人、物、情节等",
          status: ""
        },
        {
          title:
            "发布的内容涉嫌色情低俗：文字、图片、视频对性部位和性行为进行过度描述或展示对性部位和性行为进行暗示或内涵表述：如展示形似性器官的物品，或形似性行为的动作违背公序良俗的性观念：如性虐、恋物癖、捆绑等低俗下流的艺术、声乐作品",
          status: ""
        },
        {
          title:
            "发布的内容含有广告信息：含有二维码、电话、个人微信/QQ号、微信群/QQ群等推广信息或者含有多处推广信息推广微信公众号时使用变种文字，如威信、薇信、微^信`公`众`号等推广与所发内容无关，如一个科技类账号推广关注微信公众号看手相联合推广，即多个帐号共同推广一个qq号、qq群、微信号、微信公众号等推广微信公众号时，带有“回复xx，获得xx”等营销意图发布的内容中含有购物链接、网盘资源下载链接等发布商业产品、品牌、活动的推广软文及广告任何形式与正文毫无相关性的推广",
          status: ""
        },
        {
          title:
            "发布旧闻或重复内容：发布过时的法律法规、国际政策已过期的强时效性内容，如体育比赛、活动或节目预告、天气预报等用新近发生的语气陈述早已发生了的事件与平台已有内容重复",
          status: ""
        },
        {
          title: "发布不实内容：内容违背科学常理发布与已发生事实相悖的事件情节",
          status: ""
        },
        {
          title:
            "内容低质：文章不完整/不丰富，如：以图片为主体/图文夹杂的文章，图片少于3张；以文字为主体的文章，字数在200字以下（诗歌、短新闻等除外）视频不清晰，无声音或声画不同步，过半时间黑屏/白屏/花屏，视频时长过短等图集主题不明确、图片之间无关联；图片质量低、画面不清晰；图集内容为个人化生活组图；组图少于3张图片、内容简单",
          status: ""
        },
        {
          title:
            "发布的内容违背相关现行政策与法律法规：违反宪法确定的基本原则的危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的损害国家荣誉和利益的煽动民族仇恨、民族歧视，破坏民族团结的破坏国家宗教政策，宣扬邪教和封建迷信的散布谣言，扰乱社会秩序，破坏社会稳定的散布淫秽、色情、赌博、暴力、恐怖或者教唆犯罪的侮辱或者诽谤他人，侵害他人合法权益的含有法律、行政法规禁止的其他内容的，如枪支弹药、管制刀具、毒品等买卖途径、制作方法、拆解展示的违法内容",
          status: ""
        },
        ,
        {
          title: "其他",
          status: "3"
        },
        ,
        {
          title:
            "自媒体/群媒体发布社会新闻及评论性文章自媒体/群媒体发布泛时政类文章发布揭黑/举报/维权/投诉/群体性事件/暴恐爆料等内容",
          status: ""
        }
      ]
    };
  },
  methods: {}
};
</script>


<style scoped>
.page {
  padding: 20px;
}
.user-intro {
  line-height: 24px;
  font-size: 13px;
  color: #040404;
}
.el-row {
  margin-bottom: 20px;
}

.grid-content {
  display: flex;
  align-items: center;
  height: 100px;
}

.grid-cont-right {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #999;
}

.grid-num {
  font-size: 30px;
  font-weight: bold;
}

.grid-con-icon {
  font-size: 50px;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
}

.grid-con-1 .grid-con-icon {
  background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
  background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
  background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
  color: rgb(242, 94, 67);
}

.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.user-avator {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.user-info-cont {
  padding-left: 50px;
  flex: 1;
  font-size: 14px;
  color: #999;
}

.user-info-cont div:first-child {
  font-size: 26px;
  color: #222;
}

.mgb20 {
  margin-bottom: 20px;
}

.todo-item {
  font-size: 14px;
}

.todo-item-del {
  text-decoration: line-through;
  color: #999;
}
</style>
