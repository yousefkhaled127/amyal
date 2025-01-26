<template>
  <NavVue />
  <section>
    <div class="container">
      <div class="about-content content-cars">
        <h4 class="text-center">طلباتي</h4>
        <Tabs value="0">
          <TabList>
            <Tab value="0" ref="tab"
              ><router-link ref="link1" :to="{ name: 'MyPending' }"
                >قيد الانتظار</router-link
              ></Tab
            >
            <Tab value="1"
              ><router-link ref="link2" :to="{ name: 'PaymentPending' }"
                >قيد الدفع</router-link
              ></Tab
            >
            <Tab value="2"
              ><router-link ref="link3" :to="{ name: 'MyCurrent' }"
                >حالي</router-link
              ></Tab
            >
            <Tab value="3"
              ><router-link ref="link4" :to="{ name: 'MyFinished' }"
                >منتهي</router-link
              ></Tab
            >
          </TabList>
        </Tabs>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="routes-content">
        <router-view />
      </div>
    </div>
  </section>
  <FooterComp />
</template>

<script setup>
import NavVue from "@/components/NavVue.vue";
import FooterComp from "@/components/FooterComp.vue";
import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";
const route = useRoute();
import { useRoute } from "vue-router";
import { onMounted, ref, watch } from "vue";
const link1 = ref(null);
const link2 = ref(null);
const link3 = ref(null);
const link4 = ref(null);
const tab = ref(null);
watch(
  () => route.path, // The property to watch
  (newVal) => {
    // console.log("New route:", newVal);
    // console.log("Old route:", oldVal);

    if (newVal == "/PendingRequst/my-pending") {
      sessionStorage.setItem("linktaps", "link1");
    }
    if (newVal == "/PendingRequst/payment-pending") {
      sessionStorage.setItem("linktaps", "link2");
    }
    if (newVal == "/PendingRequst/my-current") {
      sessionStorage.setItem("linktaps", "link3");
    }
    if (newVal == "/PendingRequst/my-finished") {
      sessionStorage.setItem("linktaps", "link4");
    }
  }
);
onMounted(() => {
  if (sessionStorage.getItem("linktaps") == "link1") {
    link1.value.$el.classList.add("active");
  }
  if (sessionStorage.getItem("linktaps") == "link2") {
    link2.value.$el.classList.add("active");
    tab.value.$el.classList.remove("p-tab-active");
  }
  if (sessionStorage.getItem("linktaps") == "link3") {
    link3.value.$el.classList.add("active");
    tab.value.$el.classList.remove("p-tab-active");
  }
  if (sessionStorage.getItem("linktaps") == "link4") {
    link4.value.$el.classList.add("active");
    tab.value.$el.classList.remove("p-tab-active");
  }
});
</script>
