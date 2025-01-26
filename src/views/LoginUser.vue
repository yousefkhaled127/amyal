<template>
  <NavVue />
  <section>
    <div class="container">
      <div class="about-content">
        <h4 class="text-center">تسجيل دخول</h4>
        <form action="" class="form-all">
          <div class="content-center mb-5 buttons-login">
            <ul
              class="nav nav-pills mb-3 content-center"
              id="pills-tab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <button
                  @click="btnnumber = true"
                  class="nav-link active button-all"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  رقم الجوال
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  @click="btnnumber = false"
                  class="nav-link button-all"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  البريد الالكتروني
                </button>
              </li>
            </ul>
          </div>
          <div v-if="btnnumber" class="form-main">
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
          <div class="form-main" v-if="!btnnumber">
            <label class="label-all">البريد الالكتروني <span>*</span></label>
            <div class="content-inputs-all">
              <fa class="icon-input" icon="envelope" />
              <input
                v-model="email"
                type="email"
                class="input-all"
                placeholder="الرجاء ادخال البريد الالكتروني"
              />
            </div>
          </div>
          <div class="form-main">
            <label class="label-all">كلمه المرور <span>*</span></label>
            <div class="content-inputs-all">
              <Password
                placeholder="لرجاء ادخال كلمه المرور"
                v-model="psassword"
                toggleMask
              />
            </div>
          </div>
          <div class="w-100 d-flex justify-content-end">
            <RouterLink href="/RestorePassword" class="forget-password"
              >هل نسيت كلمه السر؟</RouterLink
            >
          </div>
          <div class="content-center">
            <button
              @click.prevent="btnlogin"
              type="submit"
              class="button-all button-contenue"
            >
              تسجيل دخول
            </button>
          </div>
          <div class="content-center mt-3">
            <div class="">
              <span class="ms-2 main-tite">ليس لديك حساب؟</span>
              <span
                ><RouterLink to="/NewRegister" class="active-color"
                  >انشاء حساب</RouterLink
                ></span
              >
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
import { Password } from "primevue";
import router from "@/router";
const psassword = ref(null);
const btnnumber = ref(true);
// model inputs
const phone = ref("");
const email = ref("");
function btnlogin() {
  if (!(phone.value == "") && !(psassword.value == null)) {
    router.push({ name: "home" });
    localStorage.setItem("messge-rquest", "done");
  }
  if (!(email.value == "") && !(psassword.value == null)) {
    router.push({ name: "home" });
    localStorage.setItem("messge-rquest", "done");
  }
}
</script>
