<template>
  <NavVue />
  <section>
    <div class="container">
      <div class="about-content content-cars">
        <h4 class="text-center">تقييمات السياره</h4>
        <div class="mt-3 d-flex justify-content-center">
          <div class="star-hint">
            <fa class="active-color" icon="star" />
            0
          </div>
        </div>
        <div class="content-center">
          <div class="not-data-box">
            <img
              class="not-data-img"
              src="../assets/no_data.mHK9mmHQ.avif"
              alt=""
            />
            <p>لا يوجد منتجات حاليا</p>
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
</script>
