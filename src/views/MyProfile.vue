<template>
  <NavVue />
  <section>
    <div class="container">
      <div class="about-content">
        <h4 class="text-center">الملف الشخصي</h4>
        <div class="content-center">
          <img class="img-user" src="../assets/1730971283_3037.jpg" alt="" />
        </div>
        <form action="" class="form-all">
          <div class="form-main">
            <label class="label-all">اسم المستخدم <span>*</span></label>
            <div class="content-inputs-all">
              <fa class="icon-input" icon="user" />
              <input
                v-model="username"
                type="text"
                class="input-all"
                placeholder="الرجاء ادخال إسم المستخدم"
              />
            </div>
          </div>
          <div class="form-main">
            <label class="label-all">رقم الجوال <span>*</span></label>
            <div class="content-inputs-all">
              <fa class="icon-input" icon="mobile-screen" />
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

          <div class="form-main">
            <label class="label-all">البريد الالكتروني <span>*</span></label>
            <div class="content-inputs-all">
              <fa class="icon-input" icon="user" />
              <input
                v-model="email"
                type="email"
                class="input-all"
                placeholder="الرجاء ادخال البريد الالكتروني"
              />
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
import SelectFlag from "@/components/SelectFlag.vue";
import { ref } from "vue";

// model inputs
const username = ref("nnnnnn");
const phone = ref(5148005558);
const email = ref("bbbbb@gmail.sa");
</script>
