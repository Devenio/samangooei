<template>
  <v-row justify="center">
    <v-col cols="12" sm="8" class="d-flex flex-row align-start">
      <div class="switches d-flex flex-column">
        <v-chip>
          <v-switch label="تولد"></v-switch>
        </v-chip>
        <v-chip>
          <v-switch label="تولد"></v-switch>
        </v-chip>
        <v-chip>
          <v-switch label="تولد"></v-switch>
        </v-chip>
        <v-chip>
          <v-switch label="تولد"></v-switch>
        </v-chip>
        <v-chip>
          <v-switch label="تولد"></v-switch>
        </v-chip>
        <v-chip>
          <v-switch label="تولد"></v-switch>
        </v-chip>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
        rerum animi, quis praesentium doloremque alias ab nostrum tenetur saepe
        aliquam fugit rem blanditiis culpa laborum. Odio distinctio porro
        tenetur nam?
      </p>
    </v-col>
    <v-divider vertical></v-divider>
    <v-col cols="12" sm="4" class="d-flex justify-center align-center">
        <img src="/img/profile-pic.png" alt="" style="width: 100%; max-width: 300px">
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style scoped>
.switches {
  width: 100px;
  margin-left: 20px;
}
.switches > * + * {
  margin-top: 15px;
}
</style>
