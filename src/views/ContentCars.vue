<template>
  <NavVue />
  <section>
    <div class="container">
      <div class="about-content content-cars">
        <h5 class="text-center">سيارات متوسطه</h5>
        <form class="form-search-cars">
          <div class="content-input content-input-100">
            <input
              type="search"
              class="input-all input-home"
              placeholder="ابحث باسم السيارة"
            />
            <a href=""><fa class="list-icon" icon="list" /></a>
          </div>
        </form>

        <div class="mt-5">
          <div class="row">
            <div class="col-lg-6" v-for="car in arraycars" :key="car.id">
              <RouterLink class="car-box" to="/ModilCar">
                <img
                  class="card-box-img"
                  :src="require(`../assets/${car.carimg}`)"
                />
                <div class="mt-3">
                  <h5 class="name-car">{{ car.name_car }}</h5>
                  <span class="car-item-text">
                    <fa icon="coins" class="ms-2 active-color" />
                    <span class="text-timeing">الاسجار اليومي: </span>
                    <span class="sallery-car">{{ car.sallday }}</span>
                  </span>
                  <span class="car-item-text">
                    <fa icon="coins" class="ms-2 active-color" />
                    <span class="text-timeing">الاسجار الشهري: </span>
                    <span class="sallery-car">{{ car.sallhear }}</span>
                  </span>
                  <span class="car-item-text">
                    <fa icon="coins" class="ms-2 active-color" />
                    <span class="text-timeing">الاسجار السنوي: </span>
                    <span class="sallery-car">{{ car.sallyear }}</span>
                  </span>
                </div>
                <span class="car-hint">{{ car.carhint }}</span>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import NavVue from "@/components/NavVue.vue";
import { ref } from "vue";
const arraycars = ref([
  {
    carimg: "1727529450_6493.jpg",
    name_car: "فورد تورس 2022",
    sallday: "200 ر.س",
    sallhear: "4500 ر.س",
    sallyear: "54000 ر.س",
    carhint: "فورد تورس 2022",
  },
  {
    carimg: "1727529450_6493.jpg",
    name_car: "فورد تورس 2023",
    sallday: "250 ر.س",
    sallhear: "5400 ر.س",
    sallyear: "64800 ر.س",
    carhint: "فورد تورس 2023",
  },
  {
    carimg: "1727530941_5484.png",
    name_car: "كيا سيراتو 2024",
    sallday: "140 ر.س",
    sallhear: "3600 ر.س",
    sallyear: "43200 ر.س",
    carhint: "كيا سيراتو 2024",
  },
  {
    carimg: "1727530941_5484.png",
    name_car: "هيونداي إلنترا 2024",
    sallday: "140 ر.س",
    sallhear: "3600 ر.س",
    sallyear: "43200 ر.س",
    carhint: "هيونداي إلنترا 2024",
  },
  {
    carimg: "1727529450_6493.jpg",
    name_car: "هيونداي إلنترا 2020",
    sallday: "75 ر.س",
    sallhear: "1800 ر.س",
    sallyear: "21600 ر.س",
    carhint: "هيونداي إلنترا 2020",
  },
  {
    carimg: "1727530941_5484.png",
    name_car: "هيونداي اكسنت 2024",
    sallday: "100 ر.س",
    sallhear: "2700 ر.س",
    sallyear: "32400 ر.س",
    carhint: "هيونداي اكسنت 2024",
  },
  {
    carimg: "1727530941_5484.png",
    name_car: "هيونداي اكسنت 2023",
    sallday: "90 ر.س",
    sallhear: "2400 ر.س",
    sallyear: "28800 ر.س",
    carhint: "هيونداي اكسنت 2023",
  },
  {
    carimg: "1727530941_5484.png",
    name_car: "هيونداي اكسنت 2017",
    sallday: "60 ر.س",
    sallhear: "1500 ر.س",
    sallyear: "18000 ر.س",
    carhint: "هيونداي اكسنت 2017",
  },
  {
    carimg: "1727530941_5484.png",
    name_car: "كيا سيراتو 2022",
    sallday: "90 ر.س",
    sallhear: "2400 ر.س",
    sallyear: "28800 ر.س",
    carhint: "كيا سيراتو 2022",
  },
]);
</script>
