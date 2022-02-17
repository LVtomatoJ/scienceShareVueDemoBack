<template>
  <div style="margin-top: 100px;margin-inline: 300px">
    <Card dis-hover style="height: 600px">
      <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="110">
        <FormItem label="用户名">
          <Input ype="text"></Input>
        </FormItem>
        <FormItem label="密码" prop="passwd">
          <Input type="password" v-model="formCustom.passwd"></Input>
        </FormItem>
        <FormItem label="确认密码" prop="passwdCheck">
          <Input type="password" v-model="formCustom.passwdCheck"></Input>
        </FormItem>
        <FormItem label="所属组织/机构">
          <Input type="text" v-model="formCustom.organization"  ></Input>
        </FormItem>
        <FormItem label="职称" >
          <Input type="text" v-model="formCustom.competent" ></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formCustom')">确定</Button>
          <Button @click="handleReset('formCustom')" style="margin-left: 8px">清除</Button>
        </FormItem>
      </Form>

    </Card>
  </div>
</template>
<script>
export default {
  data () {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter your password'));
      } else {
        if (this.formCustom.passwdCheck !== '') {
          // 对第二个密码框单独验证
          this.$refs.formCustom.validateField('passwdCheck');
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter your password again'));
      } else if (value !== this.formCustom.passwd) {
        callback(new Error('The two input passwords do not match!'));
      } else {
        callback();
      }
    };

    return {
      formCustom: {
        passwd: '',
        passwdCheck: '',
        organization: '',
        competent:'',
      },
      ruleCustom: {
        passwd: [
          { validator: validatePass, trigger: 'blur' }
        ],
        passwdCheck: [
          { validator: validatePassCheck, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields();
    }
  }
}
</script>