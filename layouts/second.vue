<template>
  <v-app>
    <v-app-bar
      flat
      color="primary"
      class="pa-5 d-flex align-center"
      style="max-height: 90px"
    >
      <nuxt-link to="/">
        <img src="/img/profile-pic.png" width="70" />
      </nuxt-link>
      <div class="mr-4">
        <h3>استودیو دیزاین و خلاقیت</h3>
        <h4>طراحی لوگو و هویت بصری برند</h4>
      </div>
    </v-app-bar>
    <v-main>
      <v-container style="max-width: 1100px">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>

<style scoped></style>
