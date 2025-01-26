<template>
  <NavVue />
  <section>
    <div class="container">
      <div class="about-content content-cars">
        <h4 class="text-center">الاعدادات</h4>
        <div class="mt-5">
          <RouterLink to="/EditProfile" class="layout-seating">
            <h6>تعديل الملف الشخصي</h6>
            <fa icon="chevron-left" />
          </RouterLink>
          <RouterLink to="ChangemobileNumber" class="layout-seating">
            <h6>تغيير رقم الجوال</h6>
            <fa icon="chevron-left" />
          </RouterLink>
          <RouterLink to="ChangeEmail" class="layout-seating">
            <h6>تغيير البريد الالكتروني</h6>
            <fa icon="chevron-left" />
          </RouterLink>
          <RouterLink to="ChangePassword" class="layout-seating">
            <h6>تغيير كلمة المرور</h6>
            <fa icon="chevron-left" />
          </RouterLink>
          <RouterLink to="MyNotifications" class="layout-seating">
            <h6>اعداات الاشعارات</h6>
            <fa icon="chevron-left" />
          </RouterLink>
          <button
            @click="popup = true"
            class="layout-seating layout-remove w-100"
          >
            <h6>حذف الحساب</h6>
            <fa icon="chevron-left" />
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
        <img src="../assets/download (5).png" alt="" />
        <h6 class="mt-3 mb-3">هل انت متاكد من حذف الحساب</h6>
        <h6 class="text-center">
          في حالة حذف القسم سيتم حذف كافة البيانات الخاصه بالفرع بالإضافة الى
          حذف المنتجات
        </h6>
        <div class="btons-form-time">
          <button @click="popup = false" class="button-all button-contenue">
            تراجع
          </button>
          <button @click="removeAcount" class="button-all button-back">
            حذف
          </button>
        </div>
      </div>
    </div>
  </div>
  <FooterComp />
</template>

<script setup>
import NavVue from "@/components/NavVue.vue";
import { ref } from "vue";
import FooterComp from "@/components/FooterComp.vue";
import { useRouter } from "vue-router";

const popup = ref(false);
const router = useRouter();
function removeAcount() {
  router.push({ name: "home" });
  localStorage.setItem("messge-rquest", "not found");
}
</script>
