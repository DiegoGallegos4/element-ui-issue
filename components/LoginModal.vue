<template>
  <el-dialog style="min-width: 300px" :before-close="handleClose" :visible.sync="isLoginOpen" width="30%">
    <el-row v-if="screen == 'loginOptions'">
      <el-col :span="24">
        <h3 class="text-center title">
          Ingresa a Kartz
        </h3>
      </el-col>
      <hr>
      <el-col :span="24" class="center-items btns-container">
        <el-button class="fb-btn btn-70pct" @click="loginFacebook()">
          Login with Facebook
        </el-button>
        <el-button class="btn-70pct" @click="chooseScreen('loginEmail')">
          Login with Email
        </el-button>
        <el-button type="text" @click="chooseScreen('register')">
          No estas registrado?
        </el-button>
      </el-col> 
    </el-row> 
    <!-- Form: Login/Register -->
    <el-button v-if="screen != 'loginOptions'" style="margin-right:1.2rem;font-size:1rem;" type="text" icon="el-icon-back" @click="chooseScreen('loginOptions')"/>
    <el-row class="center-items" v-if="screen == 'loginEmail' || screen == 'register'">
      <el-col span="18">
        <h4 class="text-center title">
          Ingresa con
        </h4>
        <hr style="margin-bottom: 1rem">
        <el-form @submit.native.prevent>
          <el-form-item v-if="screen == 'register'">
            <el-input placeholder="Nombre Completo" :value="frm.full_name" @input="updateForm('full_name', $event)" />
          </el-form-item>
          <el-form-item>
            <el-input placeholder="Email" :value="frm.email" @input="updateForm('email', $event)" />
          </el-form-item>
          <el-form-item>
            <el-input type="password" placeholder="Contraseña" :value="frm.password" @input="updateForm('password', $event)" />
          </el-form-item>
          <el-form-item>
            <el-button style="width: 100%" type="primary" @click="login()">
              Ingresar con Email
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-dialog>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  data() {
    return {
      screen: 'loginOptions'
    }
  },
  computed: {
    ...mapState({
      frm: state => state.user.frm
    }),
    isLoginOpen() {
      return this.$store.state.isLoginOpen
    }
  },
  methods: {
    ...mapMutations({
      handleClose: 'toggleLogin'
    }),
    chooseScreen(screen) {
      this.screen = screen
    },
    updateForm(field, value) {
      this.$store.commit('user/updateForm', { field, value })
    },
    login() {
      if (this.screen === 'loginEmail') {
        this.$store.dispatch('user/login')
      } else {
        this.$store.dispatch('user/register')
      }
    },
    loginFacebook() {
      this.$store.dispatch('user/loginFacebook')
    }
  }
}
</script>

<style>
.text-center {
  text-align: center;
}

.title {
  font-weight: 400;
  color: #1f2f3d;
  margin: 1rem 0rem;
}

.fb-btn {
  background-color: #3b5998;
  color: #fff;
}

.btn-70pct {
  width: 70%;
  margin-top: 1rem;
  margin-left: 0 !important;
}

.btn-70pct:last-child {
  margin-bottom: 1rem;
}

.center-items {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
