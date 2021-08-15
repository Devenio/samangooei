<template>
  <v-app dark>
    <div class="page-header pa-5 secondary justify-start align-end d-flex d-md-none">
      <div class="d-flex align-center">
        <img src="/img/profile-pic.png" width="120" alt="">
        <div class="mr-2">
          <h3>استودیو دیزاین و خلاقیت</h3>
          <h4>مهدی ثمن گویی</h4>
          <v-divider class="my-2" />
          <h4>طراحی لوگو و هویت بصری برند</h4>
        </div>
      </div>
    </div>
    <div class="d-none d-md-flex align-center justify-center">
      <img src="/img/desk-off.svg" alt="desk-off" class="desk">
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
  height: 250px;
}
.desk {
  width: 100%;
  max-width: 1200px;
}
</style>
