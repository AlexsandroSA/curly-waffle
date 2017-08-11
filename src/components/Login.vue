<template lang="html">
  <div>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import firebase from 'firebase'
import firebaseui from 'firebaseui'

export default {
  name: 'login',
  mounted () {
    const uiConfig = {
      signInSuccessUrl: '/success',
      signInFlow: 'popup',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
      ],
      // Terms of service url.
      tosUrl: '/terms'
    }

    const ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebaseui-auth-container', uiConfig)
  }
}
</script>

<style lang="css">
</style>
