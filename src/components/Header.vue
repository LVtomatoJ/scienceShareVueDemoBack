<template>
  <div id="app" class="layout">
    <layout>
      <header >
        <Row type="flex" justify="center" align="middle"style="height: 40px">
          <Col span="2">
            <b style="color: darkgray;">陕西科协主办</b>
            <!--            <img src="http://www.snast.org.cn/images/logo.jpg" height="75px">-->
          </Col>
          <Col span="16" style="height: 40px"></Col>
          <Col span="2">
            <Tooltip theme="light"  placement="bottom-end">
              <template slot="content">
                <img style="height: 100px" src="https://img2.baidu.com/it/u=1340460595,2858602922&fm=253&fmt=auto&app=138&f=GIF?w=511&h=500">
              </template>

              <Button type="text"><Icon size="18" style=" vertical-align:middle" type="ios-chatbubbles" />公众号 </Button>
            </Tooltip>
          </Col>
          <Col span="2">
            <div >

              <Button type="text" to="/login"><Icon style=" vertical-align:middle" size="18" type="md-log-in" />登录 </Button>
            </div>
          </Col>
        </Row>

      </header>
      <content>
        <layout>
          <header>
            <Row style="background:#FCFCFC" type="flex" justify="center" align="middle">
              <Col flex="8" offset="1">
                <img src="http://www.snast.org.cn/images/logo.jpg" height="75px">
              </Col>
              <Col flex="8">
                <Menu v-on:on-select=menu_check style="background:#FCFCFC" mode="horizontal"  >
                  <MenuItem name=1>
                    <Icon type="ios-home" />
                    首页
                  </MenuItem>
                  <MenuItem name=2>
                    <Icon type="md-bulb" />
                    科普资讯
                  </MenuItem>
                  <MenuItem name=3>
                    <Icon type="ios-bonfire" />
                    科普活动&基地
                  </MenuItem>
                  <MenuItem name=4>
                    <Icon type="md-git-branch" />
                    科普需求&项目招标
                  </MenuItem>
                </Menu>
              </Col>
            </Row>
          </header>

        </layout>
      </content>
    </layout>
  </div>

</template>
<script>
// @ is an alias to /src

export default {
  name:"Header",
  data: function () {
    return {
    }
  },
  methods: {
    menu_check: function (index) {
      this.$router.push('/home/'+index)
    }
  },
  components: {

  }
}
</script>