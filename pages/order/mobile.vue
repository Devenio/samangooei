<template>
  <v-row>
    <v-col cols="12" class="d-flex flex-column align-center">
      <img src="/img/profile-pic.png" style="width: 100%; max-width: 300px" />
      <h3>طراح لوگو و هویت بصری برند</h3>
      <h4>کمکت میکنم خلاقانه تر دیده بشی</h4>
      <div class="switches d-flex flex-column mt-16">
        <v-chip
          v-for="(item, index) in data"
          :key="index"
          class="justify-center"
        >
          <v-switch
            :label="item.name"
            @change="changeTab(item)"
            :value="item.id"
            v-model="currentItemId"
          ></v-switch>
        </v-chip>
      </div>
      <p class="mt-16">
        {{ text }}
      </p>
      <iframe
        :src="link"
        width="100%"
        height="600px"
        class="mt-5"
        frameborder="0"
      ></iframe>
    </v-col>
  </v-row>
</template>

<script>
import { Services } from "@/req/index";

export default {
  async asyncData() {
    try {
      const { data } = await Services.getAllProductOrders();
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
  data() {
    return {
      text: "",
      link: "",
      currentItemId: ""
    };
  },
  methods: {
    changeTab(item) {
      const activeItem = this.data.find(data => data.id === item.id);
      console.log(activeItem);
      this.text = activeItem.text;
      this.link = activeItem.link;
    }
  },
  mounted() {
    this.currentItemId = this.data[0].id;
    this.changeTab(this.data[0]);
  }
};
</script>

<style scoped>
.switches {
  width: 200px;
  margin-left: 20px;
}
.switches > * + * {
  margin-top: 15px;
}

</style>
