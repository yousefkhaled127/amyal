<template>
  <NavVue />
  <section>
    <div class="container">
      <div class="about-content">
        <h4 class="text-center">اعدادات الاشعارات</h4>
        <div class="mt-5">
          <div class="layout-seating">
            <h6>تعديل الملف الشخصي</h6>
            <ToggleSwitch v-model="checked" :invalid="!checked" />
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

const checked = ref(false);
</script>
