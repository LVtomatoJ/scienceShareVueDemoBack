<template>
  <div id="app" class="layout">
    <layout>
      <header >
        <Row type="flex" justify="center" align="middle">
          <Col span="2">
            <b style="color: darkgray;">陕西科协主办</b>
            <!--            <img src="http://www.snast.org.cn/images/logo.jpg" height="75px">-->
          </Col>
          <Col span="16" style="height: 50px"></Col>
          <Col span="2">
            <Icon size="30" style=" vertical-align:middle" type="ios-chatbubbles" />
            公众号
          </Col>
          <Col span="2">
            <div >
              <Icon style=" vertical-align:middle" size="30" type="md-log-in" />
              登录
            </div>
          </Col>
        </Row>

      </header>
      <content>
        <layout>
          <header>
            <Row style="background:#FCFCFC" type="flex" justify="center" align="middle">
              <Col flex="8">
                <img src="http://www.snast.org.cn/images/logo.jpg" height="75px">
              </Col>
              <Col flex="8">
                <Menu v-on:on-select=menu_check style="background:#FCFCFC" mode="horizontal"  active-name="1">
                  <MenuItem name="1">
                    <Icon type="ios-home" />
                    首页
                  </MenuItem>
                  <MenuItem name="2">
                    <Icon type="md-bulb" />
                    科普资讯
                  </MenuItem>
                  <MenuItem name="3">
                    <Icon type="ios-bonfire" />
                    科普基地
                  </MenuItem>
                  <MenuItem name="4">
                    <Icon type="md-contacts" />
                    科普活动
                  </MenuItem>
                  <MenuItem name="5">
                    <Icon type="ios-flask" />
                    科研需求
                  </MenuItem>
                </Menu>
              </Col>
            </Row>
          </header>
          <content>
            <Row>
              <Col span="2">
              </Col>
              <Index></Index>
              <Col span="2">
              </Col>
            </Row>
          </content>
        </layout>
      </content>
    </layout>
  </div>
</template>
<script>
// @ is an alias to /src
import Index from "@/views/home/Index";

export default {
  data: function () {
    return {
      carouse_text: ["北京冬奥，面向未来！", "速读六中精神", "严控疫情 坚守抗议成果"],
      carouse_index: 0,
    }
  },
  methods: {
    menu_check: function (index) {
      this.$router.push('/dashboard')
    }
  },
  components: {
    Index:Index
  }
}
</script>