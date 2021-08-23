<template>
  <v-row class="flex-column-reverse flex-sm-row" align="start">
    <v-col cols="12" sm="8">
      <v-form v-model="valid">
        <v-row justify="center" justify-sm="end">
          <v-col cols="12" md="4">
            <v-text-field
              label="نام و نام خانوادگی *"
              filled
              rounded-lg
              :rules="requireRules"
              v-model="formData.name"
            ></v-text-field>
            <v-text-field
              label="شماره همراه *"
              filled
              rounded-lg
              suffix="98+"
              :rules="phoneRules"
              v-model="formData.phone"
            ></v-text-field>
            <v-text-field
              label="ایمیل *"
              filled
              rounded-lg
              :rules="emailRules"
              v-model="formData.email"
            ></v-text-field>
            <v-text-field
              label="علاقه مندی *"
              filled
              rounded-lg
              :rules="requireRules"
              v-model="formData.favorite"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="8">
            <v-textarea
              label="حرف دلت ؟ پیشنهادت ؟ نقدت ؟ *"
              filled
              rows="11"
              no-resize
              row-height="5"
              :rules="requireRules"
              v-model="formData.text"
            >
            </v-textarea>
          </v-col>
          <v-btn
            color="primary"
            class="ml-4"
            large
            :disabled="!valid"
            :loading="loading"
            @click="sendForm()"
          >
            ارسال بشه
          </v-btn>
        </v-row>
      </v-form>
    </v-col>
    <v-divider vertical></v-divider>
    <v-col cols="12" sm="4" class="text-center">
      <img src="/img/profile-pic.png" style="width: 100%; max-width: 300px" />
      <h3>طراح لوگو و هویت بصری برند</h3>
      <h4>کمکت میکنم خلاقانه تر دیده بشی</h4>
      <div class="px-14 pt-5">
        <v-btn class="my-2" color="primary" rounded block to="/consult">
          رزرو مشاوره
        </v-btn>
        <v-btn class="my-2" color="primary" rounded block to="/order">
          سفارش طراحی
        </v-btn>
      </div>
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

    <v-snackbar v-model="snackbar">
        {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          :color="snackbarColor"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          بستن
        </v-btn>
      </template>
    </v-snackbar>
  </v-row>
</template>

<script>
import { About } from "@/req/index";

export default {
  data() {
    return {
      valid: false,
      formData: {
        name: "asdasdsd",
        phone: "9019622899",
        email: "adasd@gmail.com",
        favorite: "adsdasd",
        text: "asdasdd"
      },
      loading: false,
      snackbar: false,
      text: "درخواست شما با موفقیت انجام شد",
      snackbarColor: "success",
      requireRules: [v => !!v || "پر کردن این کادر الزامیست"],
      emailRules: [
        v => !!v || "پر کردن این کادر الزامیست",
        v =>
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            v
          ) || "لطفا یک ایمیل معتبر وارد کنید"
      ],
      phoneRules: [
        v => !!v || "پر کردن این کادر الزامیست",
        v => /^(\+98|0)?9\d{9}$/g.test(v) || "لطفا یک شماره معتبر وارد کنید"
      ]
    };
  },
  async asyncData() {
    try {
      const socialMedia = await About.getSocialMedia();
      return {
        // Social Media Data's
        sm: socialMedia.data
      };
    } catch (error) {
      console.log(error);
      return {
        sm: []
      };
    }
  },
  methods: {
    sendForm() {
      this.loading = true;
      About.contact(this.formData)
        .then(res => {
            console.log(res);
            this.text = "درخواست شما با موفقیت انجام شد";
            this.snackbarColor = "success"
            this.snackbar = true;
        })
        .catch(err => {
            console.log(err);
            this.text = "مشکلی در ارسال فرم به وجود آمده لطفا بعدا تلاش کنید";
            this.snackbarColor = "error"
            this.snackbar = true;
        }).finally(() => {
            this.loading = false;
        })
    }
  }
};
</script>

<style scoped></style>
