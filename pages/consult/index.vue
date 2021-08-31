<template>
  <v-row>
    <v-col>
      <v-stepper v-model="step">
        <v-stepper-header>
          <v-stepper-step :complete="step > 1" step="1">
            انتخاب ساعت و تاریخ
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="step > 2" step="2">
            اطلاعات مشتری
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="step > 3" step="3">
            پرداخت
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card>
              <v-card-title>
                نوع مشاوره و ساعت و تاریخ مورد نظرتون رو در اینجا انتخاب کنید
              </v-card-title>
              <v-form v-model="valid">
                <v-row>
                  <v-col cols="12" md="4">
                    <v-select
                      filled
                      :items="typeItems"
                      item-text="name"
                      item-value="value"
                      v-model="type"
                      :rules="formRules"
                      label="انتخاب نوع مشاوره"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="date"
                      label="انتخاب تاریخ"
                      readonly
                      filled
                      :rules="formRules"
                      id="custom-input"
                      :disabled="!type"
                    ></v-text-field>
                    <date-picker
                      v-model="date"
                      element="custom-input"
                      :disable="checkDate"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-select
                      filled
                      :items="hours"
                      :rules="formRules"
                      label="انتخاب بازه زمانی"
                      item-text="text"
                      item-value="value"
                      :disabled="!date"
                    >
                    </v-select>
                  </v-col>
                </v-row>
                <div class="d-flex">
                  <v-spacer></v-spacer>
                  <v-btn color="primary" :disabled="!valid" @click="step++">
                    بعدی
                  </v-btn>
                </div>
              </v-form>
            </v-card>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card>
              <v-card-title>
                اطلاعات لازم رو در اینجا وارد کنید
              </v-card-title>
              <v-form v-model="valid2">
                <v-row>
                  <v-col cols="12" md="4">
                    <v-text-field
                      filled
                      v-model="name"
                      :rules="formRules"
                      label="نام خود را بنویسید"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      filled
                      v-model="phone"
                      :rules="phoneRules"
                      label="شماره تلفن خود را وارد کنید"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field filled v-model="title" label="موضوع">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      filled
                      v-model="text"
                      label="متن خود را بنویسید"
                    >
                    </v-textarea>
                  </v-col>
                </v-row>
                <div class="d-flex">
                  <v-btn color="error" @click="step--">
                    قبلی
                  </v-btn>
                  <v-spacer />
                  <v-btn color="primary" :disabled="!valid2" @click="step++">
                    پرداخت
                  </v-btn>
                </div>
              </v-form>
            </v-card>
          </v-stepper-content>

          <!-- <v-stepper-content step="3">
            <v-card class="d-flex flex-column align-center">
              <v-card-title justify-center>
                برای تکمیل رزرو لطفا روی دکمه زیر کلیک کنید و پرداخت را انجام
                دهید
              </v-card-title>
              <v-btn color="success" large>
                پرداخت
              </v-btn>
            </v-card>
          </v-stepper-content> -->
        </v-stepper-items>
      </v-stepper>
    </v-col>
  </v-row>
</template>

<script>
import { Customers } from "@/req/index";

export default {
  async asyncData() {
    try {
      const workingDays = await Customers.getWorkingDays();
      const reservedDays = await Customers.getReservedDays();
      const days = [];

      workingDays.data.forEach(item => {
        days.push(item.day);
      });

      return {
        workingDays: workingDays.data,
        reservedDays: reservedDays.data,
        days
      };
    } catch (error) {
      console.log(error);
    }
  },
  data() {
    return {
      step: 1,
      date: "",
      menu: false,
      menu2: false,
      modal: false,
      valid: false,
      valid2: false,
      formRules: [v => !!v || "پر کردن این فیلد الزامیست"],
      phoneRules: [
        v => !!v || "پر کردن این کادر الزامیست",
        v => /^(\+98|0)?9\d{9}$/g.test(v) || "لطفا یک شماره معتبر وارد کنید"
      ],
      typeItems: [
        { name: "حضوری", value: "present" },
        { name: "غیرحضوری", value: "remote" }
      ],
      name: "",
      phone: "",
      title: "",
      text: "",
      type: "",
      hours: []
    };
  },
  watch: {
    date: {
      handler() {
        this.setHours();
      }
    },
    type: {
      handler() {
        this.setHours();
      }
    }
  },
  methods: {
    checkDate(formatted) {
      let newFormatted = formatted.replaceAll("/", "-");
      const day = this.days.find(day => newFormatted === day);
      return !day;
    },
    setHours() {
      if (this.date) {
        this.hours = [];
        const date = this.workingDays.find(
          d => d.day === this.date.replaceAll("/", "-")
        );
        if (this.type === "remote") {
          for (let i = date.startTime; i < date.endTime; i += 0.5) {
            let nextTime = i + 0.5 + "";
            nextTime = nextTime.replace(".5", ":30");
            let data = {
              text: `ساعت ${(i + "").replace(".5", ":30")} تا ${nextTime}`,
              value: {
                startTime: i + "",
                endTime: i + 0.5 + ""
              }
            };
            this.hours.push(data);
          }
          this.filterHours("remote");
        } else {
          for (let i = date.startTime; i < date.endTime; i++) {
            console.log(i);
            let data = {
              text: `ساعت ${i} تا ${i + 1}`,
              value: {
                startTime: i + "",
                endTime: i + 1 + ""
              }
            };
            this.hours.push(data);
          }
          this.filterHours("present");
        }
      }
    },
    nextStep() {},
    filterHours(type) {
      try {
        const datas = [];
        const filteredHours = [];
        if (type === "remote") {
          this.reservedDays.filter(day => {
            day.type === 1 ? datas.push(day) : "";
          });
        } else {
          this.reservedDays.filter(day => {
            day.type === 0 ? datas.push(day) : "";
          });
        }
        datas.filter(data => {
          this.hours.find((hour, index) => {
            if (
              +data.startBookingTime == +hour.value.startTime &&
              this.date.replaceAll("/", "-") == data.dayBooking
            ) {
              this.hours.splice(index, 1);
            }
          });
        });

        // console.log("datas", filteredHours);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped></style>
