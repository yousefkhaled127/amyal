<template>
  <NavVue />
  <section>
    <div class="container">
      <div class="about-content">
        <h4 class="text-center">انشاء حساب</h4>
        <form action="" class="form-all">
          <div class="form-main d-flex justify-content-center">
            <ImgProfile />
          </div>
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
          <div class="form-main">
            <label class="label-all">كلمه المرور <span>*</span></label>
            <div class="content-inputs-all">
              <fa class="icon-input" icon="lock" />
              <Password
                placeholder="لرجاء ادخال كلمه المرور"
                v-model="password"
                toggleMask
              />
            </div>
          </div>
          <div class="form-main">
            <label class="label-all"> تاكيد كلمه المرور <span>*</span></label>
            <div class="content-inputs-all">
              <fa class="icon-input" icon="lock" />
              <Password
                placeholder="لرجاء ادخال كلمه المرور"
                v-model="cheakdpassword"
                toggleMask
              />
            </div>
          </div>
          <div class="form-main">
            <label for="">
              <input type="radio" id="radio-profile" />
              <label for="">
                <input
                  id="inforadio-one"
                  type="checkbox"
                  class="radio-info input-prile-check"
                  name="inforadio"
                  v-model="agreeTerms"
                />
                <label class="inforadio-label" for="inforadio-one">
                  <div class="inforadio-box check-profile-box">
                    <fa class="inforadio-check" icon="check" />
                  </div>
                  <span>الموافقة على الشروط والإحكام</span>
                </label>
              </label>
            </label>
          </div>
          <div class="content-center">
            <button type="submit" class="button-all button-contenue">
              تاكيد
            </button>
          </div>
          <div class="content-center mt-3">
            <div class="">
              <span class="ms-2">لديك حساب بالفعل؟</span>
              <span
                ><RouterLink to="/LoginUser" class="active-color"
                  >تسجيل دخول</RouterLink
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
import SelectFlag from "@/components/SelectFlag.vue";
import { ref } from "vue";
import ImgProfile from "@/components/ImgProfile.vue";
import FooterComp from "@/components/FooterComp.vue";
const password = ref();
const cheakdpassword = ref();
const agreeTerms = ref();
const email = ref();
const phone = ref();
const username = ref();
</script>
