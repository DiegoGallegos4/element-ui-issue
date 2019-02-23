<template>
  <el-dialog title="Login" :before-close="handleClose" :visible.sync="isLoginOpen" width="50%">
    <el-form @submit.native.prevent>
      <el-form-item label="Nombre Completo">
        <el-input :value="frm.full_name" @input="updateForm('full_name', $event)" />
      </el-form-item>
      <el-form-item label="Email">
        <el-input :value="frm.email" @input="updateForm('email', $event)" />
      </el-form-item>
      <el-form-item label="Contraseña">
        <el-input :value="frm.password" @input="updateForm('password', $event)" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login()">
          Submit
        </el-button>
      </el-form-item>
      <el-form-item>
        <el-button @click="loginFacebook()">
          Login with Facebook
        </el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      frm: state => state.user.frm
    }),
    isLoginOpen() {
      return this.$store.state.isLoginOpen
    }
  },
  methods: {
    // ...mapActions(['user/login', 'user/loginFacebook']),
    ...mapMutations({
      handleClose: 'toggleLogin'
    }),
    updateForm(field, value) {
      this.$store.commit('user/updateForm', { field, value })
    },
    async login() {
      console.log(this.$store.state.user.frm)
      const frm = this.$store.state.user.frm
      await this.$auth.loginWith('local', {
        data: {
          email: frm.email,
          password: frm.password
        }
      })
      return Promise.resolve()
    },
    async loginFacebook() {
      await this.$auth.loginWith('facebook')
      return Promise.resolve()
    }
  }
}
</script>
