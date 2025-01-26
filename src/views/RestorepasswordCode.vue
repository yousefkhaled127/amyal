<template>
  <NavVue />
  <section>
    <div class="container">
      <div class="about-content">
        <h4 class="text-center">استعادة كلمة المرور</h4>
        <div class="text-center mt-5">
          <img
            class="restore-image"
            src="../assets/restore-image.D0-0Qbw5.svg"
          />
          <p class="mt-4 main-title">
            برجاء ادخال كود التفعيل المرسل إليك عبر الواتس آب
          </p>
        </div>
        <form action="" class="form-all">
          <div class="form-main">
            <InputOtp v-model="value" dir="ltr" />
          </div>
          <div class="content-center">
            <button type="submit" class="button-all button-contenue">
              تاكيد
            </button>
          </div>
          <div class="content-center mt-3">
            <div class="">
              <span class="ms-2 main-tite">لم تستلم الكود بعد ؟</span>
              <span
                ><RouterLink
                  to=""
                  @click.prevent="(time = true), (timetext = 59)"
                  class="active-color"
                  >اعد ارسال الكود</RouterLink
                ></span
              >
              <p v-if="time" class="text-center active-color mt-3">
                <span>{{ timetext }}</span> : 00
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
  <FooterComp />
</template>

<script setup>
import NavVue from "@/components/NavVue.vue";
import FooterComp from "@/components/FooterComp.vue";
import { ref } from "vue";

const value = ref(null);
const time = ref(true);
const timetext = ref(59);

setInterval(function () {
  timetext.value--;
  if (timetext.value == 0) {
    time.value = false;
  }
}, 1000);
</script>
