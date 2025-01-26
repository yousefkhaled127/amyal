<template>
  <NavVue />
  <section>
    <div class="container">
      <div class="about-content content-cars">
        <h5 class="text-center">تفاصيل السيارة</h5>
        <h6 class="mt-4 text-center">فورد تورس 2022</h6>
        <img class="car-img" src="../assets/1727529450_6493 (1).jpg" />
        <div class="row">
          <div class="col-lg-6">
            <div class="layout-form">
              <div class="head-form">
                <h6 class="main-title">تفاصيل السيارة :</h6>
              </div>
              <div class="car-info" v-for="info in infoarray" :key="info.id">
                <div class="info" :class="info.class">
                  <p class="name">{{ info.name }}</p>
                  <p class="value">{{ info.value }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="layout-form">
              <div class="head-form">
                <h6 class="main-title">تقييمات السيارة :</h6>
                <div class="view-all">
                  <div class="star-hint">
                    <fa class="active-color" icon="star" />
                    0
                  </div>
                  <RouterLink class="show-all" to="/CarReviews"
                    >عرض الكل</RouterLink
                  >
                </div>
              </div>
              <div class="not-evaluation">
                <p>لا يوجد تقييمات حاليا</p>
              </div>
            </div>
          </div>
        </div>

        <div class="content-center">
          <RouterLink to="/RentalreQuest" class="button-all button-contenue"
            >طلب تاجير</RouterLink
          >
        </div>
      </div>
    </div>
  </section>
  <FooterComp />
</template>

<script setup>
import NavVue from "@/components/NavVue.vue";
import FooterComp from "@/components/FooterComp.vue";
import { ref } from "vue";
const infoarray = ref([
  {
    name: "الماركة",
    value: "فورد",
  },
  {
    name: "موديل السيارة",
    value: "تورس",
    class: "active-modil",
  },
  {
    name: "سنة الصنع",
    value: "2022",
  },
  {
    name: "الايجار اليومي",
    value: "200",
    class: "active-yellow",
  },
  {
    name: "الايجار شهري",
    value: "4500",
    class: "active-model-2",
  },
  {
    name: "الايجار سنوي",
    value: "54000",
    class: "active-yellow",
  },
]);
</script>
