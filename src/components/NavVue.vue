<template>
  <header>
    <div class="language-header">
      <div class="container">
        <div class="language-header-box">
          <h6>مرحبا بكم في موقع اميال</h6>
          <div class="position-relative">
            <button
              @click="activelanguage = !activelanguage"
              class="language-box"
            >
              <fa icon="globe" />
              <h5>العربيه</h5>
              <fa
                class="chevron-head"
                :class="{ activeche: activelanguage }"
                icon="chevron-down"
              />
            </button>
            <ul
              class="list-language"
              :class="{ active_language: activelanguage }"
            >
              <li><a href="">العربيه</a></li>
              <li><a href="">English</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="header-links">
      <div class="container">
        <div class="header-links-box">
          <a href="">
            <img class="header-logo" src="../assets/logo.png" />
          </a>
          <div
            @click="handleHeader = !handleHeader"
            class="popup-header"
            :class="{ activepopup: handleHeader }"
          >
            <ul class="links">
              <li>
                <router-link to="/">
                  <h6 :class="props.activehome">الرئيسية</h6>
                </router-link>
              </li>
              <li>
                <router-link to="/aboutSite">
                  <h6 :class="props.activeabout">من نحن</h6>
                </router-link>
              </li>
              <li>
                <router-link to="/OurGoal">
                  <h6 :class="props.activeour">غايتنا</h6>
                </router-link>
              </li>
              <li>
                <router-link to="/ConnectUs">
                  <h6 :class="props.activeconenect">تواصل معنا</h6>
                </router-link>
              </li>
            </ul>
          </div>

          <div class="dropdown-content" v-if="sigin">
            <DropdownNav />
          </div>

          <RouterLink
            v-if="login"
            to="/LoginUser"
            class="button-header button-header-inner"
          >
            <p class="text-sigin">تسجيل دخول</p>
          </RouterLink>
          <div class="buttons-inner">
            <div class="dropdown-content dropdown-content-show" v-if="sigin">
              <DropdownNav />
            </div>
            <router-link
              v-if="login"
              to="/LoginUser"
              class="button-header button-bracket"
            >
              <fa icon="right-from-bracket" />
            </router-link>
            <button
              :class="{ btnexit_links: handleHeader }"
              class="btn-show-links"
              @click="showheader"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, defineProps } from "vue";
import DropdownNav from "./DropdownNav.vue";
import { RouterLink } from "vue-router";
const handleHeader = ref(false);
const activelanguage = ref(false);
const props = defineProps({
  activehome: {
    type: String,
    Required: true,
  },
  activeabout: {
    type: String,
    Required: true,
  },
  activeour: {
    type: String,
    Required: true,
  },
  activeconenect: {
    type: String,
    Required: true,
  },
});
// button links show header
const showheader = () => (handleHeader.value = !handleHeader.value);

const login = ref(true);
const sigin = ref(false);
if (localStorage.getItem("messge-rquest") == "done") {
  login.value = false;
  sigin.value = true;
} else {
  login.value = true;
  sigin.value = false;
}
</script>
