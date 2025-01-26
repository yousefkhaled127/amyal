<template>
  <div class="box-inputchange box-profile">
    <img class="img-change" src="../assets/upload_layout.CuMVxnJH.png" />
    <div class="edit-imgfile">
      <fa icon="pen-to-square" />
    </div>
    <input @change="onFileChange" type="file" class="input-file" />
    <div class="box-img-file" :class="{ 'd-block': boximgfile }">
      <img class="img-file img-profile" ref="imgfile" />
      <span @click="boximgfile = false" class="exit-imgfile exit-profile"
        >x</span
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const imgfile = ref();
const preview = ref(null);
const boximgfile = ref(false);
function onFileChange(event) {
  const input = event.target;
  if (input.files) {
    const reader = new FileReader();
    boximgfile.value = true;
    reader.onload = () => {
      preview.value = reader.result;
      imgfile.value.src = preview.value;
    };
    reader.readAsDataURL(input.files[0]);
  }
}
</script>
