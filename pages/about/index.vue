<template>
  <v-row justify="center">
    <v-col cols="12" sm="8" class="d-flex flex-row align-start">
      <div class="switches d-flex flex-column">
        <v-chip
          v-for="(item, index) in data"
          :key="index"
          class="justify-center"
        >
          <v-switch
            :label="item.title"
            @change="changeTab(item)"
            :value="item.title"
            v-model="currentItemTitle"
          ></v-switch>
        </v-chip>
      </div>
      <p class="text">
        {{ text }}
      </p>
    </v-col>
    <v-divider vertical></v-divider>
    <v-col
      cols="12"
      sm="4"
      class="d-flex justify-center align-center mt-16 mt-sm-0"
    >
      <img
        :src="image"
        :alt="currentItemTitle"
        style="width: 100%; max-width: 300px"
      />
    </v-col>
  </v-row>
</template>

<script>
import { About } from "@/req/index";

export default {
  data() {
    return {
      text: "",
      image: "",
      currentItemTitle: ""
    };
  },
  async asyncData() {
    try {
      const { data } = await About.getBiography();
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
    if (this.data[0]) {
      this.currentItemTitle = this.data[0].title;
      this.changeTab(this.data[0]);
    }
    window.scrollTo(0,document.body.scrollHeight);
  },
  methods: {
    changeTab(item) {
      const activeItem = this.data.find(data => data.title === item.title);
      console.log(activeItem);
      this.text = activeItem.text;
      this.image = activeItem.image;
    }
  }
};
</script>

<style scoped>
.switches {
  width: 125px;
  margin-left: 20px;
}
.switches > * + * {
  margin-top: 15px;
}
.text {
  flex-grow: 30;
}
</style>
