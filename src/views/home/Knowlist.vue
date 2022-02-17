<template>
  <div>
    &nbsp;
    <Card dis-hover :bordered="false">
        <Tabs v-on:on-click="tab_check" value="1" >
<!--          <Card dis-hover>-->
              <TabPane label="科普要闻" name="1">
                <Card dis-hover :bordered="false">
                <Row justify="center">
                  <Col flex="1"></Col>
                  <Col flex="3">
                    <List  item-layout="vertical">
                      <ListItem @click.native="active" v-for="item in data" :key="item.title">
                        <ListItemMeta >
                          <template slot="title" >
                            <div style="font-size: 26px;line-height:30px" >
                              {{item.title}}
                            </div>

                          </template>
                        </ListItemMeta>
                        <template slot="action">
                          <li>
                            <Icon type="ios-star-outline" />
                            {{ item.name }}
                          </li>
                          <li>
                            <Icon type="ios-thumbs-up-outline" /> 234
                          </li>
                        </template>
                        <template slot="extra">
                          <img :src="item.image" style="width: 280px">
                        </template>
                      </ListItem>

                    </List>
                  </Col>
                  <Col flex="1"></Col>
                </Row>
                </Card>
              </TabPane>
              <TabPane label="科普前沿" name="2">
                <Card dis-hover :bordered="false">
                  <Row justify="center">
                    <Col flex="1"></Col>
                    <Col flex="3">
                      <List item-layout="vertical">
                        <ListItem v-for="item in data" :key="item.title">
                          <ListItemMeta >
                            <template slot="title" >
                              <div style="font-size: 26px;line-height:30px" >
                                {{item.title}}
                              </div>

                            </template>
                          </ListItemMeta>
                          <template slot="action">
                            <li>
                              <Icon type="ios-star-outline" />
                              {{ item.name }}
                            </li>
                            <li>
                              <Icon type="ios-thumbs-up-outline" /> 234
                            </li>
                          </template>
                          <template slot="extra">
                            <img :src="item.image" style="width: 280px">
                          </template>
                        </ListItem>

                      </List>
                    </Col>
                    <Col flex="1"></Col>
                  </Row>
                </Card>
              </TabPane>
              <TabPane label="科普达人看科普" name="3">
                <Card dis-hover :bordered="false">
                <Row justify="center">
                  <Col flex="1"></Col>
                  <Col flex="3">
                    <List item-layout="vertical">
                      <ListItem v-for="item in data" :key="item.title">
                        <ListItemMeta >
                          <template slot="title" >
                            <div style="font-size: 26px;line-height:30px" >
                              {{item.title}}
                            </div>

                          </template>
                        </ListItemMeta>
                        <template  slot="action">

                            <Icon type="ios-star-outline" />
                            {{ item.name }}

                            <Icon type="ios-thumbs-up-outline" />
                            234

                        </template>
                        <template slot="extra">
                          <img :src="item.image" style="width: 280px">
                        </template>
                      </ListItem>

                    </List>
                  </Col>
                  <Col flex="1"></Col>
                </Row>
                </Card>
              </TabPane>
<!--          </Card>-->
        </Tabs>
    </Card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      id:1,
      data: [
        {
          id:1,
          title: '除了头孢，吃这五种药也不能喝酒！',
          avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
          name:"科普中国",
          watch:'123',
          image:'https://bj.bcebos.com/kpy-organizations/U13448684/gimages/2022021714513833921893743792.png'
        },
        {
          id:2,
          title: '春节期间，突发心脏病，究竟选择哪一种急救药物？快看专家总结！',
          description: 'This is description, this is description, this is description.',
          avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
          content: 'This is the content, this is the content, this is the content, this is the content.',
          name:"科普中国",
          watch:'123',
          image:'https://pqnoss.kepuchina.cn/2022/02/16/11/image/8c30ef.jpg'
        },
        {
          id:3,
          title: '手术中，全麻有谁来实施',
          description: 'This is description, this is description, this is description.',
          avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
          content: 'This is the content, this is the content, this is the content, this is the content.',
          name:"麻醉",
          watch:'123',
          image:'https://bj.bcebos.com/kpy-organizations/U3571103/gimages/202202141757143711068297306.png'
        }
      ]
    }
  },
  methods:{
    tab_check:function (message){
      // console.log("ok")
      if (message==='2'){
        this.data=[
          {
            id:1,
            title: '除了头，吃这五种药也不能喝酒！',
            avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
            name:"科普中国",
            watch:'123',
            image:'https://bj.bcebos.com/kpy-organizations/U13448684/gimages/2022021714513833921893743792.png'
          },
          {
            id:2,
            title: '春节期间，突发心脏病，究竟选择哪一种急救药物？快看专家总结！',
            description: 'This is description, this is description, this is description.',
            avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
            content: 'This is the content, this is the content, this is the content, this is the content.',
            name:"科普中国",
            watch:'123',
            image:'https://pqnoss.kepuchina.cn/2022/02/16/11/image/8c30ef.jpg'
          },
          {
            id:3,
            title: '手术中，全麻有谁来实施',
            description: 'This is description, this is description, this is description.',
            avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
            content: 'This is the content, this is the content, this is the content, this is the content.',
            name:"麻醉",
            watch:'123',
            image:'https://bj.bcebos.com/kpy-organizations/U3571103/gimages/202202141757143711068297306.png'
          }
        ]
      }
    },
    active(){
      this.$router.push('/article')
    }
  },
}
</script>