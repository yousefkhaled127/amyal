<template>
  <Select
    v-on:change="funcselect"
    v-model="selectedCountry"
    :options="countries"
    optionLabel="name"
    optionValue="name"
    placeholder="Select a Country"
    class="w-full md:w-56"
  >
    <template #value="slotProps">
      <div v-if="slotProps.value" class="flex items-center">
        <img :src="require(`../assets/${selectedFlag}`)" />
        <div class="name-flag">
          {{ slotProps.value }}
        </div>
      </div>
      <span v-else>
        {{ slotProps.placeholder }}
      </span>
    </template>
    <template #option="slotProps">
      <div class="flex items-center">
        <img
          :alt="slotProps.option.label"
          :src="require(`../assets/${slotProps.option.img}`)"
          :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`"
          style="width: 18px"
        />
        <div class="name-flag">
          {{ slotProps.option.name }}
        </div>
      </div>
    </template>
    <template #dropdownicon>
      <fa icon="chevron-down" />
    </template>
    <template #header>
      <div class="font-medium p-3">Available Countries</div>
    </template>
    <template #footer>
      <div class="p-3">
        <Button
          label="Add New"
          fluid
          severity="secondary"
          text
          size="small"
          icon="pi pi-plus"
        />
      </div>
    </template>
  </Select>
</template>

<script setup>
import { ref, computed } from "vue";

const countries = ref([
  {
    name: "+966",
    code: "AU",
    img: "Flag_of_Saudi_Arabia.svg.png",
    class: "name-flag",
  },
  { name: "+560", code: "BR", img: "download.png", class: "name-flag" },
  { name: "+212", code: "CN", img: "download (2).png", class: "name-flag" },
  { name: "+20", code: "EG", img: "download (1).png", class: "name-flag" },
]);
const selectedCountry = ref(countries.value[0].name);

const selectedFlag = computed(() => {
  const flag = countries.value.find(
    (obj) => obj.name === selectedCountry.value
  ).img;
  return flag;
});
</script>
