<template>
  <div>
    &nbsp;
    <Card style="height: 1000px" dis-hover :bordered="false">
      <Row  type="flex">
<!--                <Kepu v-on:draa_close="draa_close" title="如何找到太阳上的小狗" type="自然资源类"  v-bind:drawer_value='drawer_value'></Kepu>-->
<Keyan  v-on:draa_close="draa_close" title="如何找到太阳上的小狗" type="自然资源类"  v-bind:drawer_value='drawer_value'></Keyan>

<!--        <Drawer  draggable="true" width="850" :closable="true" v-model="drawer_value">-->
<!--          <template slot="header">-->
<!--            <div style="text-align: center;font-size: 30px">-->
<!--              如何找到太阳上的小狗-->
<!--            </div>-->
<!--          </template>-->
<!--          <Row type="flex">-->
<!--            <Col flex="1">-->
<!--              <Card :bordered="false" dis-hover title="科普类型">-->
<!--                自然资源类-->
<!--              </Card>-->

<!--            </Col>-->
<!--    <Col flex="1">-->
<!--      <Card  :bordered="false" dis-hover title="发布人">-->
<!--        科普陕西-->
<!--      </Card>-->

<!--    </Col>-->

<!--            <Col flex="1">-->
<!--              <Card :bordered="false"  dis-hover title="紧急程度">-->
<!--                <Icon type="md-flame" />-->
<!--                <Icon type="md-flame" />-->
<!--                <Icon type="md-flame" />-->
<!--                <Icon type="md-flame" />-->
<!--                <Icon type="md-flame" />-->
<!--              </Card>-->
<!--            </Col>-->
<!--          </Row>-->

<!--          &nbsp;-->
<!--          <Card :bordered="false"  dis-hover title="描述详情">-->
<!--            <p>每个人都不得不面对这些问题。 在面对这种问题时， 每个人都不得不面对这些问题。 在面对这种问题时， 歌德曾经说过，决定一个人的一生，以及整个命运的，只是一瞬之间。这句话语虽然很短，但令我浮想联翩。 现在，解决如何在太空找到小狗的问题，是非常非常重要的。 所以， 总结的来说， 海贝尔在不经意间这样说过，人生就是学校。在那里，与其说好的教师是幸福，不如说好的教师是不幸。这句话语虽然很短，但令我浮想联翩。 我们都知道，只要有意义，那么就必须慎重考虑。 了解清楚如何在太空找到小狗到底是一种怎么样的存在，是解决一切问题的关键。 这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。 在这种困难的抉择下，本人思来想去，寝食难安。 郭沫若在不经意间这样说过，形成天才的决定因素应该是勤奋。带着这句话，我们还要更加慎重的审视这个问题： 我认为， 了解清楚如何在太空找到小狗到底是一种怎么样的存在，是解决一切问题的关键。 我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。 我们不得不面对一个非常尴尬的事实，那就是， 我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。 一般来讲，我们都必须务必慎重的考虑考虑。 生活中，若如何在太空找到小狗出现了，我们就不得不考虑它出现了的事实。 博在不经意间这样说过，一次失败，只是证明我们成功的决心还够坚强。 维这不禁令我深思。 一般来讲，我们都必须务必慎重的考虑考虑。 如何在太空找到小狗的发生，到底需要如何做到，不如何在太空找到小狗的发生，又会如何产生。 本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。-->
<!--              　　如何在太空找到小狗，发生了会如何，不发生又会如何。 海贝尔在不经意间这样说过，人生就是学校。在那里，与其说好的教师是幸福，不如说好的教师是不幸。我希望诸位也能好好地体会这句话。 就我个人来说，如何在太空找到小狗对我的意义，不能不说非常重大。 而这些并不是完全重要，更加重要的问题是， 如何在太空找到小狗，到底应该如何实现。 如何在太空找到小狗的发生，到底需要如何做到，不如何在太空找到小狗的发生，又会如何产生。 要想清楚，如何在太空找到小狗，到底是一种怎么样的存在。 就我个人来说，如何在太空找到小狗对我的意义，不能不说非常重大。 邓拓在不经意间这样说过，越是没有本领的就越加自命不凡。这不禁令我深思。 要想清楚，如何在太空找到小狗，到底是一种怎么样的存在。 笛卡儿曾经说过，读一切好书，就是和许多高尚的人谈话。带着这句话，我们还要更加慎重的审视这个问题。</p>-->
<!--          </Card>-->
<!--          <Divider />-->
<!--          <Button long size="large" type="primary">我要认领</Button>-->
<!--          <Divider />-->
<!--        </Drawer>-->
        <Col flex="1" >
          <Card dis-hover style="height: 500px" :bordered="false">
            <div style="font-size: 30px;text-align: center"><Icon type="ios-flask" />科普需求</div>
            &nbsp;

            <Card  @click.native="drawer_value=true"  dis-hover :bordered="false">
              <template slot="title">
                <div style="font-size: 20px" >
                  如何找到太阳上的小狗？
                </div>
              </template>
              <template slot="extra">
                自然资源类
              </template>
              <div style="height: 60px">
                我们都必须务必慎重的考虑考虑。 既然如此， 那么， 既然如此， 在这种困难的抉择下，本人思来想去，寝食难安。 每个人都不得不面对这些问题。 食难安。
              </div>
              <div>
                <Row type="flex" justify="space-between">
                  <Col>
                    发布人：吕鹏越
                  </Col>

                  <Col>
                    紧急程度：
                    <Icon type="md-flame" />
                    <Icon type="md-flame" />
                    <Icon type="md-flame" />
                    <Icon type="md-flame" />
                    <Icon type="md-flame" />
                  </Col>
                </Row>



              </div>

            </Card>
            &nbsp;
            <Card :bordered="false" dis-hover>
              <template slot="title">
                <div style="font-size: 20px" >
                  如何找到太阳上的小狗？
                </div>
              </template>
              <template slot="extra">
                自然资源类
              </template>
              <div style="height: 60px">
                我们都必须务必慎重的考虑考虑。 既然如此， 那么， 既然如此， 在这种困难的抉择下，本人思来想去，寝食难安。 每个人都不得不面对这些问题。 食难安。
              </div>
              <div>
                <Row type="flex" justify="space-between">
                  <Col>
                    发布人：吕鹏越
                  </Col>

                  <Col>
                    紧急程度：
                    <Icon color="white" type="md-flame" />
                    <Icon type="md-flame" />
                    <Icon type="md-flame" />
                    <Icon type="md-flame" />
                    <Icon type="md-flame" />
                  </Col>
                </Row>



              </div>

            </Card>
          </Card>
        </Col>
        <Col flex="1" >
          <Card dis-hover style="height: 500px" :bordered="false">
            <div  style="font-size: 30px;text-align: center"><Icon type="ios-flask-outline" />科研项目</div>
            &nbsp;
            <Card :bordered="false" dis-hover>
              <template slot="title">
                <div   style="font-size: 20px" >
                  如何找到太阳上的小狗？
                </div>
              </template>
              <template slot="extra">
                自然资源类
              </template>
              <div style="height: 60px">
                我们都必须务必慎重的考虑考虑。 既然如此， 那么， 既然如此， 在这种困难的抉择下，本人思来想去，寝食难安。 每个人都不得不面对这些问题。 食难安。
              </div>
              <div>
                <Row type="flex" justify="space-between">
                  <Col>
                    发布人：科普中国
                  </Col>

                  <Col>
                    <p>
                      发布时间：2021年5月16日
                    </p>        <p>
                    截止时间：2022年6月6日
                  </p>


                  </Col>
                </Row>



              </div>

            </Card>
          </Card>
        </Col>
      </Row>
    </Card>
  </div>
</template>
<script>
import Kepu from './drawer/Kepu.vue'
import Keyan from "./drawer/Keyan.vue";
export default {
  data () {
    return {
      drawer_value: false
    }
  },
  components:{
    Kepu,
    Keyan
  },
  methods:{
    draa_close(res){
      this.drawer_value=res
    }}

}
</script>