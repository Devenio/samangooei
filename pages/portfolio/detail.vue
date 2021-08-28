<template>
  <v-row class="mt-16">
    <v-col cols="12" sm="8">
      <img
        alt=""
        v-for="(item, index) in data.images"
        :key="index"
        :src="item"
      />
      <v-row justify="center">
        <v-col
          cols="5"
          style="aspect-ratio: 1 / 1"
          class="work-sample-card"
          v-for="(item, index) in data.images"
          :key="index"
        >
          <img :src="item" />
        </v-col>
      </v-row>
    </v-col>
    <v-divider vertical></v-divider>
    <v-col cols="12" sm="4" class="px-md-16">
      <p class="mt-10" v-if="$vuetify.breakpoint.smAndDown">
        {{ data.body }}
      </p>
      <div class="work-sample-card" v-if="$vuetify.breakpoint.smAndUp">
        <img :src="data.indicatorImage" alt="" />
        <div class="d-flex justify-center align-center cover">
          {{ data.brandName }}
        </div>
        <v-list-item class="detail">
          <v-list-item-content>
            <v-list-item-title>دسته بندی</v-list-item-title>
            <v-list-item-subtitle>{{ data.categoryId }}</v-list-item-subtitle>
            <v-divider class="my-3" />
            <v-list-item-title>نام برند</v-list-item-title>
            <v-list-item-subtitle>{{ data.brandName }}</v-list-item-subtitle>
            <v-divider class="my-3" />
            <v-list-item-title>سال طراحی</v-list-item-title>
            <v-list-item-subtitle>{{ data.yearDesign }}</v-list-item-subtitle>
            <v-divider class="my-3" />
            <v-list-item-title>حوزه فعالیت</v-list-item-title>
            <v-list-item-subtitle>{{
              data.fieldActivity
            }}</v-list-item-subtitle>
            <v-divider class="my-3" />
            <v-list-item-title>درباره {{ data.brandName }}</v-list-item-title>
            <v-list-item-subtitle>{{ data.body }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <!-- <div class="more">
          <v-icon>
            mdi-exclamation
          </v-icon>
        </div> -->
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { Services } from "@/req/index";

export default {
  layout: "second",
  async asyncData({ query }) {
    try {
      const { data } = await Services.getWorkSampleDetail(query.id);
      return {
        data
      };
    } catch (error) {
      console.log(error);
      return {
        data: []
      };
    }
  },
  mounted() {
    // const mores = document.querySelectorAll(".more");
    // console.log(mores);
    // mores.forEach(item => {
    //   item.addEventListener("click", () => {
    //     console.log("dasdd");
    //     item.previousElementSibling.classList.toggle("open");
    //   });
    // });
  }
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  min-height: 200px;
  max-height: 200px;
  object-fit: contain;
  overflow: hidden;
  /* border: 1px solid #000; */
}
.work-sample-card {
  position: relative;
  border: 3px solid #837e7e;
  /* height: 200px; */
  /* height: 100%; */
  margin: 5px;
  /* overflow: hidden; */
  transition: all 0.3s;
}
.cover {
  width: 100%;
  height: 100%;
  max-height: 210px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #00000070;
  color: white;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s;
  opacity: 0;
}
.cover:hover {
  opacity: 1;
}
.more {
  width: 50px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 10px 10px;
  background-color: #00000050;
  position: absolute;
  /* bottom: -19px; */
  top: 100%;
  left: -2px;
  cursor: pointer;
  z-index: 50;
}
.detail {
  /* height: 0px; */
  /* min-height: 0; */
  transition: all 0.3s;
  overflow: hidden;
}
.open {
  min-height: 316px;
}
</style>
