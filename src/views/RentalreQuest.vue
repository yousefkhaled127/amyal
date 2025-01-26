<template>
  <NavVue />
  <section>
    <div class="container">
      <div class="about-content content-cars">
        <h4 class="text-center">طلب تأجير</h4>
        <form action="" class="form-all">
          <div class="form-main">
            <label class="label-all">تاريخ الاستلام <span>*</span></label>
            <div class="content-inputs-all">
              <DatePicker
                class="input-all"
                @update:model-value="createData"
                v-model="date"
                placeholder="تاريخ الاستلام"
              />
              <fa class="icon-calendar" icon="calendar-days" />
            </div>
          </div>
          <div class="form-main">
            <label class="label-all">تاريخ الارجاع <span>*</span></label>
            <div class="content-inputs-all">
              <input
                placeholder="تاريخ الاستلام"
                v-model="date2"
                class="input-all"
                type="text"
              />
              <fa class="icon-calendar" icon="calendar-days" />
            </div>
          </div>

          <div class="form-main">
            <label class="label-all">وقت الاستلام <span>*</span></label>
            <div class="content-inputs-all">
              <input
                placeholder="وقت الاستلام"
                v-model="time"
                @click="timeclock"
                class="input-all"
                type="text"
                :disabled="date === ''"
              />
              <fa class="icon-calendar" icon="clock" />
            </div>
          </div>
          <div class="form-main">
            <label class="label-all">وقت الارجاع <span>*</span></label>
            <div class="content-inputs-all">
              <input
                placeholder="وقت الارجاع"
                v-model="time"
                class="input-all"
                type="text"
                :disabled="date === ''"
              />
              <fa class="icon-calendar" icon="clock" />
            </div>
          </div>
          <div class="form-main">
            <label class="label-all">صوره الهويه <span>*</span></label>
            <ImgPreview />
          </div>
          <div class="form-main">
            <label class="label-all">صوره الهويه <span>*</span></label>
            <ImgPreview />
          </div>
          <div class="form-main">
            <label class="label-all">ملاحظات</label>
            <textarea
              v-model="comments"
              class="textarea-all"
              placeholder="برجاء ادخال رساله"
            ></textarea>
          </div>

          <div class="layout-form">
            <div class="head-form">
              <h6 v-if="!inner" class="main-title">الاجمالي :</h6>
              <h6 v-if="inner" class="main-title">التأمين الشامل :</h6>
            </div>
            <h6 v-if="inner" class="title-info">هل تريد تأمين شامل ؟</h6>
            <div class="inforadio-pading" v-if="inner">
              <label for="">
                <input
                  @input="yescheckform"
                  id="inforadio-one"
                  type="radio"
                  class="radio-info"
                  name="inforadio"
                  checked
                />
                <label class="inforadio-label" for="inforadio-one">
                  <div class="inforadio-box">
                    <fa class="inforadio-check" icon="check" />
                  </div>
                  <span>نعم</span>
                </label>
              </label>
              <label for="">
                <input
                  @input="nocheckform"
                  id="inforadio-two"
                  type="radio"
                  class="radio-info"
                  name="inforadio"
                />
                <label class="inforadio-label" for="inforadio-two">
                  <div class="inforadio-box">
                    <fa class="inforadio-check" icon="check" />
                  </div>
                  <span>لا</span>
                </label>
              </label>
            </div>
            <div class="car-info" v-for="info in infoarray" :key="info.id">
              <div
                class="info"
                :id="info.id"
                :class="{ [info.class]: modelsallery }"
              >
                <p class="name">{{ info.name }}</p>
                <p class="value">{{ info.value }}</p>
              </div>
            </div>
          </div>
          <div class="content-center mt-5" v-if="btnform">
            <button
              @click.prevent="addValues"
              class="button-all button-contenue w-100"
            >
              ارسال الطلب
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>

  <!-- times popup -->
  <div class="popup" v-if="popup">
    <div class="popup-content">
      <div class="popup-box">
        <span @click.prevent="popup = false" class="exit-form-popup"
          ><fa icon="x"
        /></span>
        <h6>وقت الاستلام</h6>
        <form action="" class="form-time" v-if="arraytime?.length">
          <div class="d-flex gap-3 flex-wrap">
            <label for="" v-for="time in arraytime" :key="time.id">
              <input
                type="radio"
                :id="`time-${time.id}`"
                v-model="selectedTime"
                :value="time.time"
                class="input-time"
                name="inputtime"
              />
              <label class="label-time" :for="`time-${time.id}`">
                <p>{{ time.time }}</p>
              </label>
            </label>
          </div>
          <div class="btons-form-time">
            <button
              @click.prevent="addtime"
              type="submit"
              class="button-all button-contenue"
            >
              تاكيد
            </button>
            <button type="submit" class="button-all button-back">رجوع</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div class="popup" v-if="popup2">
    <div class="popup-content">
      <div class="popup-box">
        <span @click="popup2 = false" class="exit-form-popup"
          ><fa icon="x"
        /></span>
        <img class="check-form" src="../assets/download (4).png" />
        <h6 class="mt-3">تهانينا ! تم إرسال طلبك بنجاح وسيتم الرد عليك</h6>
        <div class="btn-check-form btons-form-time">
          <RouterLink
            @click="clicktoRequest"
            to="/OrderDetails"
            class="button-all button-contenue"
            >تتبع طلبك</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
  <FooterComp />
</template>

<script setup>
import NavVue from "@/components/NavVue.vue";
import { ref } from "vue";
import ImgPreview from "@/components/ImgPreview.vue";
import FooterComp from "@/components/FooterComp.vue";

// const elmentradio = ref();
const btnform = ref(false);
// model inputs
const date = ref("");
const date2 = ref(undefined);
const comments = ref(undefined);
const storage = ref(localStorage.getItem("timecar"));

///////////////////////////////// condation date
const selectcar = ref(localStorage.getItem("selectcar"));
function createData(valuedata) {
  const dateObject = new Date(valuedata);
  if (selectcar.value == "يومي") {
    // plus getDate + value localstorage
    dateObject.setDate(dateObject.getDate() + Number(storage.value));
    // value date update
    date2.value = dateObject.toLocaleDateString();
  }
  if (selectcar.value == "شهري ") {
    // plus setMonth + value localstorage
    dateObject.setMonth(dateObject.getMonth() + Number(storage.value));
    // value date update month
    date2.value = dateObject.toLocaleDateString();
  }
  if (selectcar.value == "سنوي") {
    // plus setFullYear + value localstorage
    dateObject.setFullYear(dateObject.getFullYear() + Number(storage.value));
    // value date update year
    date2.value = dateObject.toLocaleDateString();
  }
}

const infoarray = ref([
  {
    name: "الايجار الشهرى",
    value: "فورد",
  },
  {
    name: "عدد اشهر التأجير",
    value: "ر.س",
    id: "active-modil",
  },
  {
    name: "اجمالى سعر التأجير",
    value: "شهر",
  },
  {
    name: "اجمالى سعر التأمين",
    value: "ر.س",
    class: "modil_sallery",
    id: "active-modil",
  },
  {
    name: "رسوم منصة تم",
    value: "ر.س",
  },
  {
    name: "ضريبة القيمة المضافة",
    value: "0 ر.س",
    id: "active-modil",
  },
  {
    name: "السعر الإجمالي",
    value: "ر.س",
  },
]);

// ================================================================
// ============================   date time   ====================================
// ================================================================

// array time radio
const arraytime = ref([
  {
    id: 1,
    time: "0:00",
  },
  {
    id: 2,
    time: "1:00",
  },
  {
    id: 3,
    time: "2:00",
  },
  {
    id: 4,
    time: "3:00",
  },
  {
    id: 5,
    time: "4:00",
  },
  {
    id: 6,
    time: "5:00",
  },
  {
    id: 7,
    time: "6:00",
  },
  {
    id: 8,
    time: "7:00",
  },
  {
    id: 9,
    time: "8:00",
  },
  {
    id: 10,
    time: "9:00",
  },
  {
    id: 11,
    time: "10:00",
  },
  {
    id: 12,
    time: "11:00",
  },
  {
    id: 13,
    time: "12:00",
  },
  {
    id: 14,
    time: "13:00",
  },
  {
    id: 15,
    time: "14:00",
  },
  {
    id: 16,
    time: "15:00",
  },
  {
    id: 17,
    time: "16:00",
  },
  {
    id: 18,
    time: "17:00",
  },
  {
    id: 19,
    time: "18:00",
  },
  {
    id: 20,
    time: "19:00",
  },
  {
    id: 21,
    time: "20:00",
  },
  {
    id: 22,
    time: "21:00",
  },
  {
    id: 23,
    time: "22:00",
  },
  {
    id: 24,
    time: "23:00",
  },
  {
    id: 25,
    time: "24:00",
  },
]);

const popup = ref(false);
const popup2 = ref(false);
const time = ref(null);
const selectedTime = ref(null);
const today = new Date();
const currentTime = today.toLocaleTimeString();

const getNextHours = () => {
  const outputTime = currentTime.slice(0, 2).replace(":", "");
  let newArr = [];

  arraytime.value.forEach((ar) => {
    if (Number(ar.time.slice(0, 2).replace(":", "")) > outputTime) {
      newArr.push(ar);
    }

    arraytime.value = newArr;
  });
};

function timeclock() {
  popup.value = true;

  // console.log(date.value.toLocaleDateString()); // output date.value change daydate
  // console.log(today.toLocaleTimeString()); // output date

  if (date.value.toLocaleDateString() == today.toLocaleDateString())
    getNextHours();

  // if (selectedTime.value == null) {
  //   selectedTime.value = arraytime.value[0].time;
  // } else {
  //   selectedTime.value = time.value;
  // }
}

function addtime() {
  time.value = selectedTime.value;
  popup.value = false;
}
function addValues() {
  popup2.value = true;
}
switch (selectcar.value) {
  case "يومي":
    infoarray.value[0].name = "الايجار اليومي";
    infoarray.value[1].name = "عدد ايام التاجير";
    break;
  case "شهري":
    infoarray.value[0].name = "الايجار الشهري";
    infoarray.value[1].name = "عدد اشهر التاجير";
    break;
  case "سنوي":
    infoarray.value[0].name = "الايجار السنوي";
    infoarray.value[1].name = "عدد سنوات التاجير";
}

/////////////////////////       input radio info       /////////////////////////////////////////
const modelsallery = ref(false);

const inner = ref();

if (localStorage.getItem("driver") == "بسائق") {
  inner.value = false;
  btnform.value = true;
  modelsallery.value = true;
} else {
  inner.value = true;
  modelsallery.value = false;
}

function nocheckform() {
  btnform.value = true;
  modelsallery.value = true;
}
function yescheckform() {
  modelsallery.value = false;
}

function clicktoRequest() {
  localStorage.setItem("messge-rquest", "done");
}
</script>
