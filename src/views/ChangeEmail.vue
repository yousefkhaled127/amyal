<template>
  <NavVue />
  <section>
    <div class="container">
      <div class="about-content">
        <h4 class="text-center">تغيير البريد الالكتروني</h4>
        <div class="text-center mt-5">
          <img
            class="restore-image"
            src="../assets/restore-image.D0-0Qbw5.svg"
          />
          <p class="mt-4 main-title">
            برجاء ادخال كلمة المرور الحالية و البريد الالكتروني الجديد
          </p>
        </div>
        <form action="" class="form-all">
          <div class="form-main">
            <label class="label-all">كلمه المرور <span>*</span></label>
            <div class="content-inputs-all">
              <Password
                placeholder="لرجاء ادخال كلمه المرور"
                v-model="passwordemail"
                toggleMask
              />
            </div>
          </div>
          <div class="form-main">
            <label class="label-all">البريد الالكتروني <span>*</span></label>
            <div class="content-inputs-all">
              <fa class="icon-input" icon="envelope" />
              <input
                v-model="email"
                type="email"
                class="input-all"
                placeholder="الرجاء ادخال البريد الالكتروني"
              />
            </div>
          </div>
          <div class="content-center">
            <button type="submit" class="button-all button-contenue">
              تاكيد
            </button>
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

const email = ref();
const passwordemail = ref();
</script>
