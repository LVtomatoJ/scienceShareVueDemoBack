<template>
  <div>
  &nbsp;
  <Card style="height: 1000px" dis-hover :shadow="false">
    <Row>
      <Col span="16">
        <Card  :bordered="false" dis-hover >
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
        <Card dis-hover  :bordered="false">
          <div slot="title">
            <Row>
              <Col flex="10">
                  <div style="font-size: 25px">                  <Icon type="md-reorder" />科普要闻</div>


              </Col>
              <Col flex="1">
                <Button v-on:click="()=>{$router.push('/home/2')}" type="primary" ghost>更多</Button>
              </Col>
            </Row>
          </div>
          <List   style="font-size: 18px" >
            <ListItem>如何面对气候威胁</ListItem>
            <ListItem>SOS是什么意思</ListItem>
            <ListItem>喝粥养胃？可能越喝越伤！</ListItem>
            <ListItem>你的睡眠是"垃圾睡眠"吗？</ListItem>
            <ListItem>这里为什么冠军频出？</ListItem>
            <ListItem>无线电到底是如何产生的？</ListItem>
          </List>
        </Card>
      </Col>
    </Row>
  </Card>
  </div>
</template>

<script>

export default {
  name:"Index",
  data: function () {
    return {
      carouse_text: ["北京冬奥，面向未来！", "速读六中精神", "严控疫情 坚守抗议成果"],
      carouse_index: 0,
    }
  }
}
</script>

<style>


</style>