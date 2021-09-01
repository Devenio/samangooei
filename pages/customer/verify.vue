<template>
  <div>
    نمایش وضعیت پرداخت
  </div>
</template>

<script>
import { Customers } from "@/req/index";

export default {
  mounted() {
    const id = localStorage.getItem("id");

    Customers.postId(id)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped></style>
