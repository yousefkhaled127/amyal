<template>
  <NavVue />
  <section>
    <div class="container">
      <div class="about-content">
        <h4 class="text-center">تغيير كلمه المرور</h4>
        <div class="text-center mt-5">
          <img
            class="restore-image"
            src="../assets/restore-image.D0-0Qbw5.svg"
          />
          <p class="mt-4 main-title">
            برجاء ادخال كلمة المرور القديمة و الجديدة
          </p>
        </div>
        <form action="" class="form-all">
          <div class="form-main">
            <label class="label-all"> كلمة المرور القديمة <span>*</span></label>
            <div class="content-inputs-all">
              <Password
                placeholder="لرجاء ادخال كلمه المرور"
                v-model="oldpassword"
                toggleMask
              />
            </div>
          </div>
          <div class="form-main">
            <label class="label-all"> كلمة المرور الجديده <span>*</span></label>
            <div class="content-inputs-all">
              <Password
                placeholder="لرجاء ادخال كلمه المرور"
                v-model="nowpassword"
                toggleMask
              />
            </div>
          </div>
          <div class="form-main">
            <label class="label-all">
              تاكيد كلمة المرور الجديده <span>*</span></label
            >
            <div class="content-inputs-all">
              <Password
                placeholder="لرجاء ادخال كلمه المرور"
                v-model="nowpassword"
                toggleMask
              />
            </div>
          </div>
          <div class="content-center">
            <button type="submit" class="button-all button-contenue">
              حفظ
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

const oldpassword = ref();
const nowpassword = ref();
</script>
