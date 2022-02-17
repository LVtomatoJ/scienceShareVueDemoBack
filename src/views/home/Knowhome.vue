<template>

  <div>
    &nbsp
    <Row type="flex" justify="space-between">
      <Col flex="1">

      </Col>
      <Col flex="5">
        <Card :bordered="false" dis-hover>
<!--          <template slot="title" >-->
<!--            <div style="text-align: center;font-size: 30px">-->
<!--              所有活动-->
<!--            </div>-->
<!--          </template>-->
          <div style="font-size: 30px">
            <Icon type="md-contacts" />
            基地活动
          </div>
          &nbsp;
            <List >
              <ListItem v-for="item in event" :key="item.id">

                <ListItemMeta>
                  <template slot="title">
                    <h2>
                      {{item.title}}
                    </h2>

                  </template>
                  <template slot="description">

                    {{item.name}} &nbsp; &nbsp; &nbsp; {{item.time}}
                  </template>
                </ListItemMeta>
              </ListItem>
            </List>

        </Card>
      </Col>
      <Col flex="0.1">

      </Col>
      <Col flex="3">
        <Card :bordered="false" dis-hover>
<!--          <template slot="title" >-->
<!--            <div style="text-align: center;font-size: 25px">-->
<!--              所有基地-->
<!--            </div>-->
<!--          </template>-->
          <div style="font-size: 30px">
            <Icon type="ios-magnet" />
            入驻基地
          </div>
          &nbsp;
          <List>
            <ListItem v-for="item in base" :key="item.id">
              <ListItemMeta>
                <template slot="title">
                  <div >
                    <h2>{{ item.name }}</h2>

                </div>
                </template>
                <template slot="description">
                  创建时间: &nbsp;&nbsp;{{ item.time }}
                </template>
              </ListItemMeta>

            </ListItem>
          </List>

        </Card>
      </Col>
      <Col flex="1">

      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      event: [
        {
          id:1,
          title: '到青少年营地撒欢去！',
          name:"科技日报",
          time:'2021年12月5日',
       },        {
          id:2,
          title: '博物馆把科研成果玩出了花',
          name:"科技日报",
          time:'2021年11月2日',
        },        {
          id:3,
          title: '北京青年大厦',
          name:"科技日报",
          time:'2021年5月15日',
        },        {
          id:4,
          title: '青少年阅读大世界',
          name:"科技日报",
          time:'2021年2月1日',
        },{
          id:5,
          title: '青少年阅读大世界',
          name:"科技日报",
          time:'2021年1月24日',
        },{

          id:6,
          title: '青少年阅读大世界',
          name:"科技日报",
          time:'2020年12月2日',
        },
        {

          id:6,
          title: '青少年阅读大世界',
          name:"科技日报",
          time:'2021年12月5日',
        },
        {

          id:7,
          title: '青少年阅读大世界',
          name:"科技日报",
          time:'2021年12月5日',
        },
        {

          id:8,
          title: '青少年阅读大世界',
          name:"科技日报",
          time:'2021年12月5日',
        }
      ],
      base:[
        {
          name:'陕西计算机学习基地',
          id:1,
          time:'2017年5月13日'
        },
        {
          name:'陕西汉语学习基地',
          id:2,
          time:'2014年5月13日'
        },
        {
          name:'陕西历史文化传播基地',
          id:3,
          time:'2019年5月13日'
        }
      ]
    }
  }
}

</script>