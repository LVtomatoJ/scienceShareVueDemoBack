<template>
  <Col span="20">
                <Row>
                  <Col span="16">
                    <Card >
                      <div style="text-align:center">
                        <Carousel autoplay v-model="carouse_index" loop height="auto">
                          <CarouselItem>
                            <img src="https://pqnoss.kepuchina.cn/2022/02/09/09/image/6775d7.png">
                          </CarouselItem>
                          <CarouselItem>
                            <img src="https://pqnoss.kepuchina.cn/2021/12/14/11/image/698c53.png">
                          </CarouselItem>
                          <CarouselItem>
                            <img src="https://pqnoss.kepuchina.cn/2021/12/09/18/image/715fc7.png">
                          </CarouselItem>
                        </Carousel>
                        <h3>{{carouse_text[carouse_index]}}</h3>
                      </div>
                    </Card>
                  </Col>
                  <Col span="8">
                    <Card >
                      <div slot="title">
                        <Row>
                          <Col flex="10">
                            <div style="font-size: 25px">科普要闻</div>
                          </Col>
                          <Col flex="1">
                            <Button type="primary" ghost>更多</Button>
                          </Col>
                        </Row>
                      </div>
                      <List   style="font-size: 18px" >
                        <ListItem><a>如何面对气候威胁</a></ListItem>
                        <ListItem><a>SOS是什么意思</a></ListItem>
                        <ListItem><a>喝粥养胃？可能越喝越伤！</a></ListItem>
                        <ListItem><a>你的睡眠是"垃圾睡眠"吗？</a></ListItem>
                        <ListItem><a>这里为什么冠军频出？</a></ListItem>
                        <ListItem><a>无线电到底是如何产生的？</a></ListItem>
                      </List>
                    </Card>
                  </Col>
                </Row>

              </Col>
</template>
<script>
// @ is an alias to /src
export default {
  data: function () {
    return {
      carouse_text: ["北京冬奥，面向未来！", "速读六中精神", "严控疫情 坚守抗议成果"],
      carouse_index: 0,
    }
  },
  methods: {
    menu_check: function (index) {
      alert(index)
    }
  }
}
</script>