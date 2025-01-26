<template>
  <NavVue :activeconenect="activeconenect" />
  <section>
    <div class="container">
      <div class="about-content">
        <h4 class="text-center">تواصل معنا</h4>
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
                v-model="number"
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
            <label class="label-all">البريد الالكتروني</label>
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
          <div class="content-input content-input-100">
            <label class="label-all">الرساله</label>
            <textarea
              v-model="messege"
              class="textarea-all"
              placeholder="برجاء ادخال رساله"
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
const activeconenect = "activeconenect";
import { ref } from "vue";

// model inputs
const username = ref();
const number = ref();
const email = ref();
const messege = ref();
</script>
