<template>
  <NavVue />
  <section>
    <div class="container">
      <div class="about-content">
        <h4 class="text-center">الشكاوى والمقترحات</h4>
        <form action="" class="form-all">
          <div class="form-main">
            <label class="label-all">اسم المستخدم</label>
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
            <label class="label-all">رقم الجوال</label>
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

          <div class="content-input content-input-100">
            <label class="label-all">الشكاوي/الاقتراح</label>
            <textarea
              v-model="message"
              class="textarea-all"
              placeholder="برجاء كتابه الشكاوي/الاقتراح"
            ></textarea>
          </div>
          <div class="content-center">
            <button type="submit" class="button-all button-contenue">
              ارسال
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
import SelectFlag from "@/components/SelectFlag.vue";
import { ref } from "vue";
const username = ref();
const phone = ref();
const message = ref();
</script>
