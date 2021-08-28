<template>
  <v-row>
    <v-col cols="12" sm="8">
      <div class="d-flex justify-space-between mb-5" style="width: 100%;">
        <h3 style="cursor: pointer">
          دیدن همه نمونه کارها
          <v-icon style="font-size: 30px">
            mdi-arrow-left-bold
          </v-icon>
        </h3>
        <h3 class="d-none d-sm-block ml-sm-5">برخی نمونه کارها</h3>
      </div>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          style="position: relative"
          v-for="(item, index) in data"
          :key="index"
        >
          <div class="work-sample-card">
            <img :src="item.indicatorImage" alt="" />
            <div
              class="d-flex justify-center align-center cover"
              @click="$router.push('/portfolio/detail?id=' + item.id)"
            >
              {{ item.brandName }}
            </div>
            <v-list-item class="detail">
              <v-list-item-content>
                <v-list-item-title>دسته بندی</v-list-item-title>
                <v-list-item-subtitle>{{
                  details[index].categoryId
                }}</v-list-item-subtitle>
                <v-divider class="my-3" />
                <v-list-item-title>نام برند</v-list-item-title>
                <v-list-item-subtitle>{{
                  details[index].brandName
                }}</v-list-item-subtitle>
                <v-divider class="my-3" />
                <v-list-item-title>سال طراحی</v-list-item-title>
                <v-list-item-subtitle>{{
                  details[index].yearDesign
                }}</v-list-item-subtitle>
                <v-divider class="my-3" />
                <v-list-item-title>حوزه فعالیت</v-list-item-title>
                <v-list-item-subtitle>{{
                  details[index].fieldActivity
                }}</v-list-item-subtitle>
                <v-divider class="my-3" />
                <v-btn
                  block
                  color="primary"
                  @click="$router.push('/portfolio/detail?id=' + item.id)"
                >
                  درباره
                  {{ details[index].categoryId }}
                </v-btn>
              </v-list-item-content>
            </v-list-item>
            <div class="more">
              <v-icon>
                mdi-exclamation
              </v-icon>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-col>
    <v-divider vertical></v-divider>
    <v-col cols="12" sm="4" class="px-md-16" v-if="$vuetify.breakpoint.smAndUp">
      <h3 class="text-center mb-5">پیشنهاد خودم</h3>
      <div class="work-sample-card">
        <img :src="randomWorkSample[0].indicatorImage" alt="" />
        <div
          class="d-flex justify-center align-center cover"
          @click="$router.push('/portfolio/detail?id=' + item.id)"
        >
          {{ randomWorkSample[0].brandName }}
        </div>
        <v-list-item class="detail">
          <v-list-item-content>
            <v-list-item-title>دسته بندی</v-list-item-title>
            <v-list-item-subtitle>{{
              details[randomWorkSample[0].id - 1].categoryId
            }}</v-list-item-subtitle>
            <v-divider class="my-3" />
            <v-list-item-title>نام برند</v-list-item-title>
            <v-list-item-subtitle>{{
              details[randomWorkSample[0].id - 1].brandName
            }}</v-list-item-subtitle>
            <v-divider class="my-3" />
            <v-list-item-title>سال طراحی</v-list-item-title>
            <v-list-item-subtitle>{{
              details[randomWorkSample[0].id - 1].yearDesign
            }}</v-list-item-subtitle>
            <v-divider class="my-3" />
            <v-list-item-title>حوزه فعالیت</v-list-item-title>
            <v-list-item-subtitle>{{
              details[randomWorkSample[0].id - 1].fieldActivity
            }}</v-list-item-subtitle>
            <v-divider class="my-3" />
            <v-btn
              block
              color="primary"
              @click="$router.push('/portfolio/detail?id=' + item.id)"
            >
              درباره
              {{ details[randomWorkSample[0].id - 1].categoryId }}
            </v-btn>
          </v-list-item-content>
        </v-list-item>
        <div class="more">
          <v-icon>
            mdi-exclamation
          </v-icon>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { Services } from "@/req/index";
export default {
  data() {
    return {
      show: false
    };
  },
  async asyncData() {
    try {
      const { data } = await Services.getAllWorkSamples();
      const details = [];
      data.forEach(async item => {
        const detail = await Services.getWorkSampleDetail(item.id);
        console.log(detail);
        details.push(detail.data);
      });
      const randomWorkSample = await Services.getRandomWorkSample();
      return {
        data,
        details,
        randomWorkSample: randomWorkSample.data
      };
    } catch (error) {
      console.log(error);
      return {
        data: [],
        details: [],
        randomWorkSample: []
      };
    }
  },
  mounted() {
    const mores = document.querySelectorAll(".more");
    console.log(mores);
    mores.forEach(item => {
      item.addEventListener("click", () => {
        console.log("dasdd");
        item.previousElementSibling.classList.toggle("open");
      });
    });
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
  margin-top: 5px;
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
  height: 0px;
  min-height: 0;
  transition: all 0.3s;
  overflow: hidden;
}
.open {
  min-height: 316px;
}
</style>
