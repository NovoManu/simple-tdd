<template>
  <h1 data-testid="signup-title">Sign Up</h1>
  <input type="text" placeholder="username" data-testid="input-username">
  <input type="text" placeholder="email" data-testid="input-email">
  <input v-model="pass" type="password" placeholder="password" data-testid="input-password">
  <input v-model="conf" type="password" placeholder="password confirmation" data-testid="input-password-confirm">
  <button data-testid="submit-button" :disabled="!isSubmitEnabled">Submit</button>
</template>
<script>
export default {
  name: 'SignUp',
  data() {
    return {
      pass: '',
      conf: ''
    }
  },
  computed: {
    isSubmitEnabled() {
      if (!this.pass || !this.conf) return false
      return this.pass === this.conf
    }
  }
}
</script>
