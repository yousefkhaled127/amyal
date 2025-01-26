<template>
  <div class="dropdown-inner">
    <div class="dropdown">
      <button
        @click="activedropdown = !activedropdown"
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img class="img-dropdown" src="../assets/1730971283_3037.jpg" />
        <span>nehad sayed</span>
        <fa
          class="chevron-head"
          :class="{ activeche: activedropdown }"
          icon="chevron-down"
        />
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <router-link class="dropdown-item" to="/MyProfile"
            >الملف الشخصي</router-link
          >
        </li>
        <li>
          <router-link to="/SettingsProject" class="dropdown-item"
            >الاعدادات</router-link
          >
        </li>
        <li>
          <router-link to="/MyWallet" class="dropdown-item"
            >المحفظه</router-link
          >
        </li>
        <li>
          <router-link
            @click="addrqusts"
            to="/PendingRequst"
            class="dropdown-item"
            >طلباتي</router-link
          >
        </li>
        <li>
          <router-link @click="popup = true" to="" class="dropdown-item"
            >تسجيل الخروج</router-link
          >
        </li>
      </ul>
    </div>
    <router-link class="notifications" to="/MyNotificationstwo"
      ><fa icon="bell"
    /></router-link>
  </div>
  <div class="popup" v-if="popup">
    <div class="popup-content">
      <div class="popup-box">
        <span @click="popup = false" class="exit-form-popup"
          ><fa icon="x"
        /></span>
        <img src="../assets/download (5).png" alt="" />
        <h6 class="mt-3 mb-3">هل انت متاكد من تسجيل الخروج</h6>
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
</template>

<script setup>
import router from "@/router";
import { ref } from "vue";
const activedropdown = ref(false);
const popup = ref(false);
function removeAcount() {
  localStorage.setItem("messge-rquest", "not founnd");
  router.push({ name: "home" });
}
function addrqusts() {
  sessionStorage.setItem("linktaps", "link1");
}
</script>
