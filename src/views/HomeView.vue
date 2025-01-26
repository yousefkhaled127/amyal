<template>
  <NavVue :activehome="activehome" />

  <section class="mt-0">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../assets/1727523598_2480.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/1727523598_2480.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/1727523598_2480.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
    </div>
  </section>
  <ul class="nav nav-pills mb-3 content-center" id="pills-tab" role="tablist">
    <li class="nav-item" role="presentation">
      <button
        @click="btnhome"
        class="nav-link active button-all"
        id="pills-home-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-home"
        type="button"
        role="tab"
        aria-controls="pills-home"
        aria-selected="true"
      >
        بدون سائق
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        @click="btnhome"
        class="nav-link button-all"
        id="pills-profile-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-profile"
        type="button"
        role="tab"
        aria-controls="pills-profile"
        aria-selected="false"
      >
        بسائق
      </button>
    </li>
  </ul>

  <form action="" class="form-home">
    <div class="select-home">
      <label class="label-all">نوع التأجير <span>*</span></label>
      <Select
        @change="selecttorage"
        v-model="select"
        :options="cities"
        optionLabel="name"
        placeholder="اختر نوع التاجير"
        class="w-full md:w-56"
      />
    </div>
    <div class="content-input">
      <label class="label-all">نوع التأجير <span>*</span></label>
      <input
        @input="numbstorage"
        v-model="inputnumber"
        placeholder="اختر مده التاجير"
        type="number"
        class="input-all input-home"
      />
    </div>
  </form>

  <section>
    <div class="container">
      <h4>اختر فئة السيارة</h4>
      <div class="cars-box">
        <div class="row justify-content-center">
          <div
            class="col-cars col-lg-4 col-md-4 col-sm-6"
            v-for="car in cars"
            :key="car.id"
          >
            <label class="label-parent-car">
              <input
                :id="car.idinput"
                type="radio"
                class="radio-item-car"
                :name="car.carsname"
                :value="car.valuecar"
                v-model="inputradio"
              />
              <label :for="car.idinput" class="card-cars">
                <img class="img-car" :src="require(`../assets/${car.img}`)" />
                <h6 class="title-car">{{ car.title }}</h6>
              </label>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="activebtn_home">
        <RouterLink
          v-if="inputnumber && select && inputradio"
          to="/ContentCars"
          class="button-all button-contenue"
          >استمرار</RouterLink
        >
      </div>
    </div>
  </section>

  <section>
    <div class="inner-app">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div>
              <h3 class="text-white">
                مع تطبيق "أميال"، يمكنك الاختيار من بين مجموعة واسعة من السيارات
                وتأجيرها بكل سهولة .
              </h3>
              <div class="btons-app">
                <a href="">
                  <img
                    class="store-img"
                    src="../assets/google-paly-img.DZQFBBWA.png"
                  />
                </a>
                <a href="">
                  <img
                    class="store-img"
                    src="../assets/app-store-img.DYOIqCtg.png"
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="main-app-imgs">
              <div class="frame-parent fram-transform">
                <img
                  class="frame-shape"
                  src="../assets/frame-img.CzxniRuW.png"
                />
                <img
                  class="frame-child"
                  src="../assets/17117988982333956.png"
                />
              </div>
              <div class="frame-parent frame-inner">
                <img
                  class="frame-shape"
                  src="../assets/frame-img.CzxniRuW.png"
                />
                <img
                  class="frame-child"
                  src="../assets/17117989446246654.png"
                />
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
// @ is an alias to /src
import { ref } from "vue";
import NavVue from "@/components/NavVue.vue";
import FooterComp from "@/components/FooterComp.vue";
const activehome = "activehome";
function btnhome(e) {
  localStorage.setItem("driver", e.target.innerText);
}
// model select
const select = ref("");
// model number
const inputnumber = ref("");
// model radio
const inputradio = ref("");

function numbstorage() {
  localStorage.setItem("timecar", inputnumber.value);
}
function selecttorage() {
  localStorage.setItem("selectcar", select.value.name);
}
const cities = ref([
  { name: "يومي", code: "NY" },
  { name: "شهري ", code: "RM" },
  { name: "سنوي", code: "LDN" },
]);
// loop cars
const cars = ref([
  {
    img: "1724224625_7644.png",
    title: "سياره فاخره",
    idinput: "inputcar_one",
    carsname: "carsname",
    valuecar: "carvalue1",
  },
  {
    img: "1724225297_1584.png",
    title: "سيارات متوسطة",
    idinput: "inputcar_two",
    carsname: "carsname2",
    valuecar: "carvalue2",
  },
  {
    img: "1724224625_7644.png",
    title: "سيارات عائلية",
    idinput: "inputcar_three",
    carsname: "carsname3",
    valuecar: "carvalue3",
  },
  {
    img: "1724224625_7644.png",
    title: "سياره إقتصادية",
    idinput: "inputcar_four",
    carsname: "carsname4",
    valuecar: "carvalue4",
  },
]);
</script>
