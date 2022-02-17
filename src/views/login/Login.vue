<template>

    <div style="margin-top: 200px">
      <Row>
        <Col flex="2"></Col>
        <Col flex="1.5">
          <Card dis-hover style="width: 400px">
            <template slot="title">
              <div style="font-size: 20px;text-align: center">
                登录
              </div>
            </template>
            <div style="margin: auto;
  width: 90%;
  padding: 10px;">
              <Form ref="formInline" :model="formInline" :rules="ruleInline" >
                &nbsp;
                <FormItem prop="user">
                  <Input type="text" v-model="formInline.user" placeholder="用户名">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                  </Input>
                </FormItem>

                <FormItem prop="password">
                  <Input type="password" v-model="formInline.password" placeholder="密码">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                  </Input>
                </FormItem>
                &nbsp;
                <FormItem>
                  <Row  type="flex" justify="center">
                    <Col flex="1"></Col>
                    <Col flex="1">
                      <Button style="width: 100px" type="primary" @click="handleSubmit('formInline')">登录</Button>
                    </Col>
                    <Col flex="1"></Col>
              <Col  flex="1">
                <Button style="width: 100px"  to="/reg" type="primary">注册</Button>
              </Col>
                    <Col flex="1"></Col>
                  </Row>


                </FormItem>
              </Form>
            </div>
          </Card>
        </Col>
        <Col flex="2"></Col>
      </Row>

    </div>


</template>
<script>
export default {
  data () {
    return {
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: 'Please fill in the user name', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      })
    }
  }
}
</script>