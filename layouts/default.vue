<template>
  <v-app dark>
    <div
      class="page-header pa-5 primary justify-start align-end d-flex d-sm-none"
      v-if="$route.path === '/'"
    >
      <div
        class="d-flex align-center flex-column flex-sm-row text-center text-sm-right"
      >
        <img src="/img/profile-pic.png" width="120" alt="profile picture" />
        <div class="mt-4">
          <h3>استودیو دیزاین و خلاقیت</h3>
          <h4>مهدی ثمن گویی</h4>
          <v-divider class="my-2" />
          <h4>طراحی لوگو و هویت بصری برند</h4>
        </div>
      </div>
      <mobile-lamp />
    </div>
    <v-container class="d-none d-sm-block">
      <desk />
    </v-container>
    <v-container class="pt-10 d-block d-sm-none" v-if="$route.path === '/'">
      <v-row>
        <v-col cols="4" class="d-flex flex-column align-center">
          <div class="img-box">
            <img src="/img/about-pic.png" alt="" />
          </div>
          <v-btn to="/about" rounded class="btn">
            درباره من
          </v-btn>
        </v-col>
        <v-col cols="4" class="d-flex flex-column align-center">
          <div class="img-box">
            <img src="/img/portfolio-pic.png" alt="" />
          </div>
          <v-btn to="/portfolio" rounded class="btn">
            نمونه کارها
          </v-btn>
        </v-col>
        <v-col cols="4" class="d-flex flex-column align-center">
          <div class="img-box">
            <img src="/img/comments-pic.png" alt="" />
          </div>
          <v-btn to="/comments" rounded class="btn">
            نظر مشتریان
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4" class="d-flex flex-column align-center">
          <div class="img-box">
            <img src="/img/blogs-pic.png" alt="" />
          </div>
          <v-btn to="/about" rounded class="btn">
            دست نوشته
          </v-btn>
        </v-col>
        <v-col cols="4" class="d-flex flex-column align-center">
          <div class="img-box">
            <img src="/img/consulting-pic.png" alt="" />
          </div>
          <v-btn to="/portfolio" rounded class="btn">
            رزرو مشاوره
          </v-btn>
        </v-col>
        <v-col cols="4" class="d-flex flex-column align-center">
          <div class="img-box">
            <img src="/img/order-pic.png" alt="" />
          </div>
          <v-btn to="/comments" rounded class="btn">
            فرم سفارش
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4" class="d-flex flex-column align-center">
          <div class="img-box">
            <img src="/img/contact-pic.png" alt="" />
          </div>
          <v-btn to="/about" rounded class="btn">
            تماس با من
          </v-btn>
        </v-col>
        <v-col cols="4" class="d-flex flex-column align-center">
          <div class="img-box">
            <img src="/img/instagram-pic.png" alt="" />
          </div>
          <v-btn to="/portfolio" rounded class="btn">
            اینستاگرام
          </v-btn>
        </v-col>
        <v-col cols="4" class="d-flex flex-column align-center">
          <div class="img-box">
            <img src="/img/FAQ-pic.png" alt="" />
          </div>
          <v-btn to="/comments" rounded class="btn">
            برخی سوالات
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <!-- mobile other pages menu -->
    <v-container class="m-menu grey lighten-2 d-sm-none" v-if="$route.path !== '/'">
      <v-row class="justify-center">
        <v-col cols="4" class="btn-col">
          <v-btn to="/about" rounded class="btn eq-btn">
            درباره من
          </v-btn>
        </v-col>
        <v-col cols="4" class="btn-col">
          <v-btn to="/portfolio" rounded class="btn eq-btn">
            نمونه کار
          </v-btn>
        </v-col>
        <v-col cols="4" class="btn-col">
          <v-btn to="/comments" rounded class="btn eq-btn">
            نظر مشتریان
          </v-btn>
        </v-col>
        <v-col cols="4" class="btn-col">
          <v-btn to="/blogs" rounded class="btn eq-btn">
            دست نوشته
          </v-btn>
        </v-col>
        <v-col cols="4" class="btn-col">
          <v-btn to="/order" rounded class="btn eq-btn">
            فرم سفارش
          </v-btn>
        </v-col>
        <v-col cols="4" class="btn-col">
          <v-btn to="/consult" rounded class="btn eq-btn">
            رزرو مشاوره
          </v-btn>
        </v-col>
        <v-col cols="4" class="btn-col">
          <v-btn to="/contact" rounded class="btn eq-btn">
            تماس با من
          </v-btn>
        </v-col>
        <v-col cols="4" class="btn-col">
          <v-btn to="/insta" rounded class="btn eq-btn">
            اینستاگرام
          </v-btn>
        </v-col>
        <v-col cols="4" class="btn-col">
          <v-btn to="/faq" rounded class="btn eq-btn">
            برخی سوالات
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-main style="margin-bottom: 200px">
      <v-container style="max-width: 1100px">
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
.img-box {
  width: 100%;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
.img-box img {
  width: 90%;
}
.btn {
  background-color: #ccc;
  box-shadow: inset 3px 3px 5px 0px #00000050;
}
.btn-col {
  padding: 5px 10px;
}
.eq-btn {
  width: 100%;
}
.m-menu {
  position: fixed;
  bottom: 0;
  z-index: 50;
}
</style>
