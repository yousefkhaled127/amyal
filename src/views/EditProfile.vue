<template>
  <NavVue />
  <section>
    <div class="container">
      <div class="about-content">
        <h4 class="text-center">تعديل الملف الشخصي</h4>
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

          <div class="content-center">
            <button
              @click.prevent="popupclick"
              class="button-all button-contenue"
            >
              حفظ التغييرات
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  <div class="popup" v-if="popup">
    <div class="popup-content">
      <div class="popup-box">
        <img src="../assets/download (4).png" />
        <h6 class="mt-3">تم حفظ التعديلات بنجاح</h6>
      </div>
    </div>
  </div>
  <FooterComp />
</template>

<script setup>
import NavVue from "@/components/NavVue.vue";
import { ref } from "vue";
import ImgProfile from "@/components/ImgProfile.vue";
import FooterComp from "@/components/FooterComp.vue";
import { useRouter } from "vue-router";
const username = ref("nnnnn");
const router = useRouter();
const popup = ref(false);
function popupclick() {
  popup.value = true;
  setTimeout(function () {
    router.push({ name: "SettingsProject" });
  }, 2000);
}
</script>
