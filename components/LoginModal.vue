<template>
  <el-dialog title="Login" :before-close="handleClose" :visible.sync="isLoginOpen" width="50%">
    <el-form @submit.native.prevent>
      <el-form-item>
        <el-button @click="loginFacebook">
          Login with Facebook
        </el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  computed: {
    isLoginOpen() {
      return this.$store.state.isLoginOpen
    }
  },
  methods: {
    ...mapMutations({
      handleClose: 'toggleLogin'
    }),
    async loginFacebook() {
      try {
        await this.$auth.loginWith('facebook')
        // this.$router.push('/')
      } catch (e) {
        this.error = e.response.message
      }
    }
  }
}
</script>
