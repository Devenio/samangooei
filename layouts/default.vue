<template>
  <v-app dark>
    <div class="page-header pa-5 secondary justify-start align-end d-flex d-sm-none">
      <div class="d-flex align-center flex-column flex-sm-row text-center text-sm-right">
        <img src="/img/profile-pic.png" width="120" alt="profile picture">
        <div class="mt-4">
          <h3>استودیو دیزاین و خلاقیت</h3>
          <h4>مهدی ثمن گویی</h4>
          <v-divider class="my-2" />
          <h4>طراحی لوگو و هویت بصری برند</h4>
        </div>
      </div>
      <!-- <img src="/img/lamp-on.svg" alt="lamp" class="lamp"> -->
      <!-- <img src="/img/lamp-off.svg" alt="lamp" class="lamp-off"> -->
      <mobile-lamp />
    </div>
    <div class="d-none d-sm-block">
      <!-- <img src="/img/desk-off.svg" alt="desk-off" class="desk"> -->
      <desk />
    </div>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // this.$vuetify.theme.dark = true
  }
};
</script>

<style scoped>
.page-header {
  height: 300px;
  position: relative;
}
</style>
