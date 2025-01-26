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
            برجاء ادخال رقم الجوال لاستعادة كلمة المرور
          </p>
        </div>
        <form action="" class="form-all">
          <div class="form-main">
            <label class="label-all">رقم الجوال <span>*</span></label>
            <div class="content-inputs-all">
              <input
                v-model="phone"
                type="number"
                class="input-all"
                placeholder="الرجاء ادخال رقم الجوال"
              />
              <div class="select-flag">
                <SelectFlag />
              </div>
            </div>
          </div>
          <div class="content-center">
            <RouterLink
              to="/RestorepasswordCode"
              class="button-all button-contenue"
              >تاكيد</RouterLink
            >
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
import SelectFlag from "@/components/SelectFlag.vue";
import { ref } from "vue";

const phone = ref();
</script>
