<template>
  <v-row class="pt-16">
    <v-col cols="12" sm="8">
      <v-row>
        <v-col cols="6" md="4" v-for="(item, index) in data" :key="index">
          <div class="blog-card">
            <img :src="item.logo" alt="" />
            <h4>{{ item.title }}</h4>
            <p class="text">
              {{ item.text }}
            </p>
            <v-btn rounded-lg block color="orange">
              ادامه مطلب
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-col>
    <v-divider vertical></v-divider>
    <v-col cols="12" sm="4" v-if="$vuetify.breakpoint.smAndUp"></v-col>
  </v-row>
</template>

<script>
import { Blogs } from "@/req/index.js";

export default {
  layout: "second",
  async asyncData() {
    try {
      const { data } = await Blogs.get3Blogs();
      return {
        data
      };
    } catch (error) {
      console.log(error);
      return {
        data: []
      };
    }
  }
};
</script>

<style scoped>
.blog-card {
  border: 3px solid #c7c7c7;
  max-height: 400px;
  padding: 10px;
}
.blog-card img {
  width: 100%;
  height: 180px;
  object-fit: contain;
}
.text {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
