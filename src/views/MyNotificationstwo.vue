<template>
  <NavVue />
  <section>
    <div class="container">
      <div class="about-content">
        <h4 class="text-center">اعدادات الاشعارات</h4>
        <div class="mt-5">
          <h6 class="active-white text-center" v-if="!notifacition">
            لا يوجد اشعارات
          </h6>
          <div class="layout-seating" v-if="notifacition">
            <div class="notifacition-box">
              <img
                class="notifacition-img"
                src="../assets/black_logo.BEQdJbb7.png"
              />
              <div>
                <h6>اهلا بك في اميال</h6>
                <span class="active-white">
                  <fa class="ms-2" icon="clock" />
                  <span>منذ : منذ 3 أسابيع</span>
                </span>
              </div>
            </div>
            <button @click="notifacition = false" class="btn-trash">
              <fa icon="trash-can" />
            </button>
          </div>
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
const notifacition = ref(true);
</script>
