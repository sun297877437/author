<template>
  <div class="article">
    <!-- <header>
      <span class="h-l">发文规范</span>
    </header>-->
    <section class="section-a">
      <el-row style="margin-top:20px;">
        <el-col :span="22" :offset="1">
          <div class="article-box">
            <h1 class="article-title">创作者发文规范</h1>
            <div class="article-content">
              <p></p>
              <div>
                <p>亲爱的创作者：</p>
                <p>平台致力于为广大内容创作者提供良好的创作环境，打造健康有序的内容生态。平台的良好可持续发展，有赖于各位作者的共同维护与支持。</p>
                <p>我们建议，每位创作者在发文前仔细阅读本规范。如您发布的内容存在规范中提到的以下问题，将无法通过审核或不被系统推荐，违规严重帐号将受到处罚甚至封禁。</p>
                <p>
                  <strong>1、格式</strong>
                </p>
                <p>1.1 标题中含有错别字/繁体字/特殊符号，或标题不通顺，标题使用全英文/外文等</p>
                <p>1.2 正文（视频）存在全文使用繁体字/全文英文/少数民族文字，且无翻译（字幕）</p>
                <p>1.3 文章含有大段乱码/未分段/无标点</p>
                <p>
                  <strong>2、内容</strong>
                </p>
                <p>
                  <strong>2.1 发布标题党内容</strong>
                </p>
                <ul>
                  <li>使用过度夸张的惊叹词，故意营造悬念引人好奇</li>
                  <li>题文不符，标题存在歧义，断章取义，捏造正文中不存在的人、物、情节等</li>
                </ul>
                <p>
                  <strong>2.2 发布的内容涉嫌色情低俗</strong>
                </p>
                <ul>
                  <li>文字、图片、视频对性部位和性行为进行过度描述或展示</li>
                  <li>对性部位和性行为进行暗示或内涵表述：如展示形似性器官的物品，或形似性行为的动作</li>
                  <li>违背公序良俗的性观念：如性虐、恋物癖、捆绑等</li>
                  <li>低俗下流的艺术、声乐作品</li>
                </ul>
                <p>
                  <strong>2.3 发布的内容含有广告信息</strong>
                </p>
                <ul>
                  <li>含有二维码、电话、个人微信/QQ号、微信群/QQ群等推广信息或者含有多处推广信息</li>
                  <li>推广微信公众号时使用变种文字，如威信、薇信、微^信`公`众`号等</li>
                  <li>推广与所发内容无关，如一个科技类账号推广关注微信公众号看手相</li>
                  <li>联合推广，即多个帐号共同推广一个qq号、qq群、微信号、微信公众号等</li>
                  <li>推广微信公众号时，带有“回复xx，获得xx”等营销意图</li>
                  <li>发布的内容中含有购物链接、网盘资源下载链接等</li>
                  <li>发布商业产品、品牌、活动的推广软文及广告</li>
                  <li>任何形式与正文毫无相关性的推广</li>
                </ul>
                <p>
                  <strong>2.4 发布旧闻或重复内容</strong>
                </p>
                <ul>
                  <li>发布过时的法律法规、国际政策</li>
                  <li>已过期的强时效性内容，如体育比赛、活动或节目预告、天气预报等</li>
                  <li>用新近发生的语气陈述早已发生了的事件</li>
                  <li>与平台已有内容重复</li>
                </ul>
                <p>
                  <strong>2.5 发布不实内容</strong>
                </p>
                <ul>
                  <li>内容违背科学常理</li>
                  <li>发布与已发生事实相悖的事件情节</li>
                </ul>
                <p>
                  <strong>2.6 内容低质</strong>
                </p>
                <ul>
                  <li>文章不完整/不丰富，如：以图片为主体/图文夹杂的文章，图片少于3张；以文字为主体的文章，字数在200字以下（诗歌、短新闻等除外）</li>
                  <li>视频不清晰，无声音或声画不同步，过半时间黑屏/白屏/花屏，视频时长过短等</li>
                  <li>图集主题不明确、图片之间无关联；图片质量低、画面不清晰；图集内容为个人化生活组图；组图少于3张图片、内容简单</li>
                </ul>
                <p>
                  <strong>2.7 发布的内容违背相关现行政策与法律法规</strong>
                </p>
                <ul>
                  <li>违反宪法确定的基本原则的</li>
                  <li>危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的</li>
                  <li>损害国家荣誉和利益的</li>
                  <li>煽动民族仇恨、民族歧视，破坏民族团结的</li>
                  <li>破坏国家宗教政策，宣扬邪教和封建迷信的</li>
                  <li>散布谣言，扰乱社会秩序，破坏社会稳定的</li>
                  <li>散布淫秽、色情、赌博、暴力、恐怖或者教唆犯罪的</li>
                  <li>侮辱或者诽谤他人，侵害他人合法权益的</li>
                  <li>含有法律、行政法规禁止的其他内容的，如枪支弹药、管制刀具、毒品等买卖途径、制作方法、拆解展示的违法内容</li>
                </ul>
                <p>
                  <strong>2.8 其他</strong>
                </p>
                <ul>
                  <li>自媒体/群媒体发布社会新闻及评论性文章</li>
                  <li>自媒体/群媒体发布泛时政类文章</li>
                  <li>发布揭黑/举报/维权/投诉/群体性事件/暴恐爆料等内容</li>
                </ul>
              </div>
              <p></p>
            </div>
          </div>
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<script>
import { apiLogin } from "@/config/api.js";
import { mapState } from "vuex";
export default {
  name: "articleSpecification",
  data() {
    return {
      form: {
        title: "", //标题
        intro: "" //内容
      }
    };
  },
  created() {},
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    submitForm() {
      if (this.form.title.length > 20 || this.form.title.length < 10) {
        this.$message({
          message: "标题字数应在10-20之间",
          type: "warning"
        });
        return false;
      }
      if (this.textLength < 99) {
        this.$message({
          message: "文章内容不得小于100字",
          type: "warning"
        });
        return false;
      }
    },
    // 提交
    saveHtml(event) {
      console.log(this.form.content);
    }
  }
};
</script>
<style lang="scss" scope>
@import "@/assets/css/mixin.scss";
.article {
  height: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
  background: #fff;
  .h-l {
    font-size: 16px;
    font-weight: 500;
    color: #ed4040;
  }
  .h-r {
    font-size: 14px;
    font-weight: 500;
    color: #5990f2;
  }
}
.section-a {
  flex: 1;
  overflow: auto;
  .article-box .article-title {
    font-size: 34px;
    font-weight: 700;
    line-height: 44px;
    color: #222;
  }
  .article-box .article-content,
  .article-box .article-content > div {
    font-size: 16px;
    line-height: 28px;
    color: #222;
    word-wrap: break-word;
  }
  .article-box .article-content > p {
    margin: 16px 0;
  }
  .article-box .article-content strong {
    font-weight: 700;
  }
  .article-box .article-content > div > p,
  .article-box .article-content > p {
    margin: 16px 0;
  }
  .article-box .article-content ul li {
    list-style: inherit;
  }
  .article-box .article-content > div > ul {
    padding: 20px 30px;
    color: #222;
  }
}
</style>