<template>
  <v-container>
    <v-layout wrap class='mt-10'>
      <v-flex sm12 md6 offset-md3>
        <v-form
          ref="signinform"
          v-model="validation"
          @submit.prevent="onSubmit()"
        >
        <v-card elevation="4" tag="section">
          <v-card-title class='justify-center py-6'>
            <h3 class="headline font-weight-bold">
              Welcome to DEV Community
            </h3>
          </v-card-title>
          <v-card-text>
            <v-btn block color='primary' class='py-6 mb-2' dark @click='loginWithGoogle'>
              <v-icon class='mx-2'>mdi-google</v-icon>
              Continue With Google
            </v-btn>
            <v-btn block color='#24292e' class='py-6 mb-2' dark>
              <v-icon class='mx-2'>mdi-github</v-icon>
              Continue With Github
            </v-btn>
          </v-card-text>
          <div class="hr-sect">Have a password? Continue with your email address</div>
          <v-card-text>
              <v-alert v-if='errorMsg' type='error' outlined>{{ errorMsg }}</v-alert>
              <v-text-field
                v-model="username"
                outlined
                name="email"
                type="email"
                label="E-mail"
                required
                maxlength="128"
                :rules="validate.email"
              ></v-text-field>
              <v-text-field
                v-model="password"
                name="password"
                label="Password"
                outlined
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                min="6"
                :type="showPassword ? 'text' : 'password'"
                :rules="validate.password"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
            <v-btn text>
              Forgot password?
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn outlined tile class='px-4'  type="submit" :disabled='loading || !validation' :loading="loading" :large="$vuetify.breakpoint.smAndUp">
              <v-icon left>mdi-lock</v-icon>
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
        </v-form>
      </v-flex>
      <v-flex sm12 md6 offset-md3>
        <v-layout align-center justify-space-between>
          <p class="caption my-3">
            <a href="#">Privacy Policy</a>
            |
            <a href="#">Terms of Service</a>
          </p>
          <p class="caption my-3">Powered by <a href="#">StaffCircle</a></p>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      errorMsg: '',
      loading: false,
      validation: true,
      showPassword: false,
      darkTheme: true,
      platformName: 'Role Management System',
      username: '',
      password: '',
      validate: {
        email: [
          (v) => !!v || 'This field is required',
          (v) =>
            // eslint-disable-next-line no-useless-escape
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              v
            ) || 'Invalid email format',
        ],
        password: [
          (v) => !!v || 'This field is required',
          (v) => (v && v.length >= 5) || 'Minimum 6 Characters',
        ],
      },
    }
  },
  methods: {
    onSubmit() {
      this.validation = this.$refs.signinform.validate()
      this.loading = true
      if (this.validation) {
        this.login()
      }
    },
    async login() {
      const form = {
        username: this.username,
        password: this.password
      }
      await this.$auth
        .loginWith('laravelPassportPassword', { data: form }).then((res) => {
          this.loading = false
          this.errorMsg = ''
          if (res.status === 200) {
            this.$router.push('/dashboard')
          }
        }).catch(() => {
          this.loading = false
          this.errorMsg = 'Invalid email or password'
          this.$refs.signinform.reset()
        })
    },
    async loginWithGoogle(){
      await this.$auth.loginWith('google')
    }
  }
}
</script>

<style>
.hr-sect {
  display: flex;
  flex-basis: 100%;
  align-items: center;
  font-size: 12px;
  margin: 8px 0px;
}
.hr-sect::before,
.hr-sect::after {
  content: "";
  flex-grow: 1;
  background: rgba(0, 0, 0, 0.35);
  height: 1px;
  font-size: 0px;
  line-height: 0px;
  margin: 0px 16px;
}
</style>
