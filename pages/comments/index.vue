<template>
  <v-row class="d-flex flex-column-reverse flex-md-row">
    <v-col cols="12" md="8" class="justify-center">
      <!-- <v-divider class="my-10"></v-divider> -->
      <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        light
        :touch="{
          left: () => activeSlide--,
          right: () => activeSlide++
        }"
      >
        <v-carousel-item
          v-for="(item, index) in comments"
          :key="index"
          class=""
        >
          <div style="width: 100%;" class="d-flex align-center justify-center">
            <v-card max-width="300" height="400">
              <div
                class="primary"
                style="width: 100%; height: 100px; opacity: 0.2"
              ></div>
              <v-card-title class="justify-center mt-n14">
                <v-avatar class="ml-16" size="80">
                  <img :src="item.image" alt="" />
                </v-avatar>
                <div class="text-center">
                  {{ item.name }}
                  <br />
                  <v-rating
                    :value="item.point"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="20"
                  ></v-rating>
                </div>
              </v-card-title>
              <v-card-text>
                {{ item.text }}
              </v-card-text>
            </v-card>
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-col>
    <v-divider vertical></v-divider>
    <v-col cols="12" md="4" class="px-5">
      <div class="d-flex flex-row align-center justify-center justify-md-start">
        <img :src="'/img/profile-pic.png'" style="width: 70px" class="ml-3" />
        <div>
          <h3>{{ commentBoxHead.title }}</h3>
          <h4>({{ commentBoxHead.count }} نفر)</h4>
        </div>
      </div>
      <v-divider class="my-3" />
      <v-card
        elevation="0"
        v-for="(item, index) in commentBoxBody"
        :key="index"
      >
        <v-list-item class="">
          <v-list-item-avatar tile size="50" color="primary" class="text-h5 d-flex justify-center align-center">
            {{ item.number }}
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="">
              {{ item.title }}
            </v-list-item-title>
            <v-list-item-subtitle class="">
              {{ item.text }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <div class="d-flex align-center px-5">
          <div class="text-h6 ml-3">
            {{ item.point }}
          </div>
          <v-progress-linear
            :value="item.point * 20"
            height="7px"
            rounded
          ></v-progress-linear>
        </div>
      </v-card>
      <v-divider></v-divider>
    </v-col>
  </v-row>
</template>

<script>
import { Comments } from "@/req/index";

export default {
  async asyncData() {
    try {
      const comments = await Comments.getComments();
      const commentBox = await Comments.getCommentBox();
      return {
        comments: comments.data,
        commentBoxHead: commentBox.data[0].head,
        commentBoxBody: commentBox.data[1].body
      };
    } catch (error) {
      console.log(error);
      return {
        data: []
      };
    }
  },
  mounted () {
    window.scrollTo(0,document.body.scrollHeight);
  },
  scrollToTop: false,
};
</script>

<style scoped></style>
