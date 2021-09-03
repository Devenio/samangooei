<template>
  <v-row>
    <v-col>
      <v-card class="mt-10">
        <v-card-title class="justify-center text-h3">
          <v-icon :color="color" x-large>
            {{ icon }}
          </v-icon>
        </v-card-title>
        <v-card-title class="justify-center">
          {{ status }}
        </v-card-title>
        <v-card-actions class="text-center d-flex flex-column mt-10">
          برای بازگشت به صفحه اصلی روی دکمه زیر کلیک کنید
          <v-btn to="/" class="my-3 primary">
            خانه
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: "second",
  asyncData({ params }) {
    const id = params.id;
    let status = "";
    let icon = "";
    let color = "";

    console.log(id);
    if (id == 0) {
      status = "تراکنش نامعلوم !";
      icon = "mdi-exclamation-thick";
      color = "warning";
    } else if (id == 1) {
      status = "تراکنش با موفقیت انجام شد";
      icon = "mdi-check-decagram";
      color = "success";
    } else {
      status = "تراکنش ناموفق بود";
      icon = "mdi-close-thick";
      color = "error";
    }

    return {
      status,
      icon,
      color
    };
    // 0 => unknown
    // 1 => success
    // 2 => failed
  }
};
</script>

<style scoped></style>
