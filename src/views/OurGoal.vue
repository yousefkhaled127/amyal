<template>
  <NavVue :activeour="activeour" />
  <section class="section-our">
    <div class="container">
      <div class="about-content">
        <h5 class="text-center">غايتنا</h5>
        <p class="text-our">
          تقديم أفضل خدمات المواصلات وحلول النقل للعميل وان تكون
          <span class="active-color">" أميال الدولية "</span> مساهم في نمو قطاع
          المواصلات والنقل في المملكة العربية السعودية .
        </p>
      </div>
    </div>
  </section>
  <FooterComp />
</template>

<script setup>
import NavVue from "@/components/NavVue.vue";
import FooterComp from "@/components/FooterComp.vue";
const activeour = "activeour";
</script>
