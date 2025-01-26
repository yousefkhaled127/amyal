<template>
  <NavVue />
  <section>
    <div class="container">
      <div class="about-content">
        <h4 class="text-center">المحفظة</h4>
        <div class="wallet-content">
          <img
            class="img-wallet"
            src="../assets/walletillustration.CZWqVceP.png"
          />
          <p class="active-white">رصيدك الحالى</p>
          <p>0</p>
          <p>ريال سعودي</p>
          <button @click="popup = true" class="button-all button-contenue">
            شحن الرصيد
          </button>
        </div>
      </div>
    </div>
  </section>
  <div class="popup" v-if="popup">
    <div class="popup-content">
      <div class="popup-box">
        <span @click="popup = false" class="exit-form-popup"
          ><fa icon="x"
        /></span>
        <form action="" class="w-100">
          <label for="" class="label-all">ادخال المبلغ</label>
          <div class="content-inputs-all mb-4">
            <input
              v-model="sallery"
              placeholder="ادخال المبلغ"
              class="input-all"
              type="number"
            />
          </div>
          <button type="submit" class="button-all button-contenue w-100">
            ارسال
          </button>
        </form>
      </div>
    </div>
  </div>
  <FooterComp />
</template>

<script setup>
import NavVue from "@/components/NavVue.vue";
import FooterComp from "@/components/FooterComp.vue";
import { ref } from "vue";
const popup = ref(false);
const sallery = ref();
</script>
