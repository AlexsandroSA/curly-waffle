<template lang="html">
  <div>
    <h1>Welcome to My Awesome App</h1>
    <div id="sign-in-status"></div>
    <div id="sign-in"></div>
    <div id="account-details"></div>
    <div class="">
      <button type="button" name="button" @click="logOut">Logout</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'dashboard',
  methods: {
    logOut () {
      firebase.auth().signOut()
    }
  },
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        const displayName = user.displayName
        const email = user.email
        const emailVerified = user.emailVerified
        const photoURL = user.photoURL
        const uid = user.uid
        const phoneNumber = user.phoneNumber
        const providerData = user.providerData
        user.getIdToken().then((accessToken) => {
          document.getElementById('sign-in-status').textContent = 'Signed in'
          document.getElementById('sign-in').textContent = 'Sign out'
          document.getElementById('account-details').textContent = JSON.stringify({
            displayName: displayName,
            email: email,
            emailVerified: emailVerified,
            phoneNumber: phoneNumber,
            photoURL: photoURL,
            uid: uid,
            accessToken: accessToken,
            providerData: providerData
          }, null, '  ')
        })
      } else {
        // User is signed out.
        document.getElementById('sign-in-status').textContent = 'Signed out'
        document.getElementById('sign-in').textContent = 'Sign in'
        document.getElementById('account-details').textContent = 'null'
      }
    }, (error) => {
      console.log(error)
    })
  }
}
</script>

<style lang="css">
</style>
