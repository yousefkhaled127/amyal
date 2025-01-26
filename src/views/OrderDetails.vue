<template>
  <NavVue />
  <section>
    <div class="container">
      <div class="about-content content-cars">
        <h4 class="text-center">تغاصيل الطلب</h4>
        <div class="mt-5">
          <div class="steps">
            <li class="step-item active">
              <div class="icon-done">
                <fa icon="check" />
              </div>
              <span class="progress-label">انتظار</span>
            </li>
            <li class="step-item">
              <div class="icon-done">
                <fa icon="check" />
              </div>
              <span class="progress-label">انتظار</span>
            </li>
            <li class="step-item">
              <div class="icon-done">
                <fa icon="check" />
              </div>
              <span class="progress-label">انتظار</span>
            </li>
            <li class="step-item">
              <div class="icon-done">
                <fa icon="check" />
              </div>
              <span class="progress-label">انتظار</span>
            </li>
          </div>
        </div>
        <div class="mt-5">
          <div class="row">
            <div class="col-lg-6">
              <div class="info-content">
                <div class="car-info" v-for="info in infoarray" :key="info.id">
                  <div class="info" :id="info.id" :class="info.class">
                    <p class="name">{{ info.name }}</p>
                    <p class="value">{{ info.value }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="info-content">
                <div class="car-info" v-for="info in totalArray" :key="info.id">
                  <div class="info" :id="info.id" :class="info.class">
                    <p class="name">{{ info.name }}</p>
                    <p class="value">{{ info.value }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="info-content mt-5">
                <div
                  class="car-info"
                  v-for="info in BookingDetails"
                  :key="info.id"
                >
                  <div class="info" :id="info.id" :class="info.class">
                    <p class="name">{{ info.name }}</p>
                    <p class="value">{{ info.value }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="info-content mt-5">
                <div class="car-info">
                  <div class="info head-form">
                    <p class="name">ملاحظات :</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <FooterComp />
</template>

<script setup>
import NavVue from "@/components/NavVue.vue";
import { ref } from "vue";
import FooterComp from "@/components/FooterComp.vue";

// const elmentradio = ref();
// model inputs

const infoarray = ref([
  {
    name: "تفاصيل السياره :",
    class: "head-form",
  },
  {
    name: "اسم السيارة",
    value: "فورد تورس 2022",
  },
  {
    name: "ماركة السيارة",
    value: "فورد",
    id: "active-modil",
  },
  {
    name: "موديل السيارة",
    value: "تورس",
  },
  {
    name: "سنة الصنع",
    value: "2022",
    id: "active-modil",
  },
  {
    name: "السائق",
    value: "بدون سائق",
  },
]);

const totalArray = ref([
  {
    name: "الاجمالي :",
    class: "head-form",
  },
  {
    name: "الايجار الشهرى",
    value: "200 ر.س",
  },
  {
    name: "عدد اشهر التأجير",
    value: "2 يوم",
    id: "active-modil",
  },
  {
    name: "اجمالى سعر التأجير",
    value: "400 ر.س",
  },
  {
    name: "اجمالى سعر التأمين",
    value: "0 ر.س",
    id: "active-modil",
  },
  {
    name: "رسوم منصة تم",
    value: "0 ر.س",
  },
  {
    name: "ضريبة القيمة المضافة",
    value: "60 ر.س",
    id: "active-modil",
  },
  {
    name: "السعر الإجمالي",
    value: "460 ر.س",
  },
]);

const BookingDetails = ref([
  {
    name: "تفاصيل الحجز :",
    class: "head-form",
  },
  {
    name: "حالة الطلب",
    value: "فى الانتظار",
  },
  {
    name: "تاريخ الطلب",
    value: "2024 - نوفمبر - 27",
    id: "active-modil",
  },
  {
    name: "نوع التأجير",
    value: "يومي",
  },
  {
    name: "مدة التأجير",
    value: "2",
    id: "active-modil",
  },
  {
    name: "وقت الاستلام",
    value: "04:00 pm",
  },
  {
    name: "تاريخ الاستلام",
    value: "2024-12-08",
    id: "active-modil",
  },
  {
    name: "وقت الارجاع",
    value: "04:00 pm",
  },
  {
    name: "تاريخ الارجاع",
    value: "2024-12-10",
    id: "active-modil",
  },
  {
    name: "مكان الاستلام",
  },
]);

const selectcar = ref(localStorage.getItem("selectcar"));
switch (selectcar.value) {
  case "يومي":
    totalArray.value[1].name = "الايجار اليومي";
    totalArray.value[2].name = "عدد ايام التاجير";
    break;
  case "شهري":
    totalArray.value[1].name = "الايجار الشهري";
    totalArray.value[2].name = "عدد اشهر التاجير";
    break;
  case "سنوي":
    totalArray.value[1].name = "الايجار السنوي";
    totalArray.value[2].name = "عدد سنوات التاجير";
}

if (localStorage.getItem("driver") == "بسائق") {
  infoarray.value[5].value = "بسائق";
} else {
  infoarray.value[5].value = "بدون سائق";
}
</script>
