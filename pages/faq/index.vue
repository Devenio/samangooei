<template>
  <v-row>
    <v-col cols="12" sm="8">
      <v-list>
        <v-list-group
          v-for="(item, index) in faq"
          :key="index"
          no-action
          color="primary"
          :prepend-icon="item.number + '.'"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.question"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title v-text="item.answer"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-col>
    <v-divider vertical></v-divider>
    <v-col cols="12" sm="4" class="d-none d-sm-block px-3 px-md-15 pt-5">
      <p class="text-center pb-0">
        اگه سوالات شما در این قسمت نبود از طریق فرم زیر بپرسید
      </p>
      <v-btn color="primary" rounded block to="/contact">تماس با من</v-btn>
      <v-divider class="my-5"></v-divider>
      <v-btn class="my-2" color="primary" rounded block to="/work-samples">
        نمونه کارها
      </v-btn>
      <v-btn class="my-2" color="primary" rounded block to="/blogs">
        دست نوشته ها
      </v-btn>
      <v-btn class="my-2" color="primary" rounded block to="/consult">
        رزرو مشاوره
      </v-btn>
      <v-btn class="my-2" color="primary" rounded block to="/order">
        سفارش طراحی
      </v-btn>
      <div class="d-flex align-center justify-center mt-5">
        <a v-for="(item, index) in sm" :key="index" :href="item.link">
          <img
            :src="item.icon"
            :alt="item.name"
            width="70px"
            height="70px"
            style="border-radius: 50%;"
          />
        </a>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { About } from "@/req/index";

export default {
  data() {
    return {};
  },
  async asyncData() {
    try {
      const { data } = await About.getFAQ();
      const socialMedia = await About.getSocialMedia();
      return {
        faq: data,
        // Social Media Data's
        sm: socialMedia.data
      };
    } catch (error) {
      console.log(error);
      return {
        faq: []
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
