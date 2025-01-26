<template>
  <router-view />
</template>

<style lang="scss">
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: transparent linear-gradient(71deg, #282a29, #896236 53%, #e09441)
    0 0 no-repeat padding-box;
}

body {
  direction: rtl;
}

header {
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 222;
}

:root {
  --min-color: #e09441;
}

p {
  margin: 0 !important;
}

ul {
  list-style: none;
  margin: 0px !important;
  padding: 0px !important;
}

a {
  text-decoration: none !important;
  color: black !important;
}

button {
  border: none;
}

.language-header {
  background-color: var(--min-color);
  padding: 10px;
}

.language-header h6 {
  color: white;
}

.language-header-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.language-box {
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  background: none;
}

.angle-head {
  transition: 0.3s all;
}

.list-language {
  position: absolute;
  background-color: white;
  width: 100%;
  padding: 10px;
  text-align: center;
  border-radius: 15px;
  box-shadow: 0px 1px 3px 0px rgb(188, 188, 188);
  display: none;
}

.list-language li {
  margin-bottom: 10px;
}

.header-links {
  background-color: black;
  padding: 10px;
}

.links {
  display: flex;
  gap: 4rem;
}

.links a {
  color: white !important;
}

.header-links-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-logo {
  width: 90px;
}

.button-header {
  padding: 10px 15px;
  background-color: var(--min-color);
  color: white !important;
  border-radius: 10px;
  font-size: 15px;
}

.activehome {
  color: var(--min-color);
}

.btn-show-links {
  background: none;
  color: white;
  display: none;
}

.exit-header {
  display: none;
}

.button-bracket {
  display: none;
}

.buttons-inner {
  display: none;
}

.active_language {
  display: block;
}

.activeche {
  transform: rotate(180deg);
}

.chevron-head {
  transition: 0.3s;
}

.content-center {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

.button-all {
  width: 200px;
  height: 45px;
  background: none;
  border: 3px solid var(--min-color);
  color: var(--min-color);
  border-radius: 7px;
  transition: 0.5s;
}

.active_button {
  background-color: var(--min-color);
  color: white;
}

.form-home {
  display: flex;
  gap: 20px;
  width: 800px;
  margin: auto;
  margin-top: 40px;
}

.label-all {
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.label-all span {
  color: red;
}

.p-select-label {
  background-color: white !important;
}

.p-select-dropdown {
  background: white !important;
}

.p-select-list {
  background-color: white;
}

.p-select-option-label {
  color: #a1a1aa !important;
}

.p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {
  background: #eeeeee !important;
}

.select-home {
  width: 50%;
}

.p-select {
  width: 100%;
  border: 1px solid rgb(151 151 151) !important;
}

.p-select-label {
  color: #a1a1aa !important;
}

.content-inputs-all {
  width: 100%;
  background-color: white;
  height: 40px;
  border-radius: 6px;
  border: 1px solid rgb(151 151 151);
  color: black;
  padding-right: 15px;
  transition: 0.5s;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0px 10px;
  position: relative;
}

.form-main {
  margin-bottom: 30px;
}

.input-all {
  border: none;
  color: black;
  width: 100%;
}

.input-all:focus {
  outline: none;
  transition: 0.5s;
}

.input-home {
  width: 100%;
  background-color: white;
  height: 40px;
  border-radius: 6px;
  border: 1px solid rgb(151 151 151);
  padding-right: 15px;
}

.input-all:focus::placeholder {
  transform: translateX(200px);
  transition: 0.6s;
}

section {
  margin-top: 50px;
  margin-bottom: 50px;
}

.cars-box {
  width: 800px;
  margin: auto;
  margin-top: 40px;
}

.img-car {
  width: 125px;
  height: 125px;
  object-fit: cover;
}

.card-cars {
  width: 100%;
  padding: 40px;
  border: 3px solid var(--min-color);
  border-radius: 5px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
}

.title-car {
  color: #a1a1aa;
}

.active_cars {
  background-color: black;
}

.radio-item-car {
  display: none;
}

.radio-item-car:checked + label {
  background-color: #e0944166;
  transition: 0.6s;
}

.input-radio {
  display: none;
}

.input-radio:checked + label {
  color: red;
}

.inner-app {
  background: transparent linear-gradient(71deg, #282a29, #896236 53%, #e09441)
    0 0 no-repeat padding-box;
  overflow: hidden;
}

.store-img {
  width: 150px;
}

.btons-app {
  display: flex;
  gap: 30px;
  margin-top: 30px;
}

.frame-parent {
  height: 400px;
  position: relative;
  overflow: hidden;
  width: fit-content;
  bottom: -65px;
}

.fram-transform {
  transform: translateY(38%) rotate(23deg) translateX(-82%);
  z-index: 1;
}

.frame-parent .frame-shape {
  height: 100%;
}

.frame-parent .frame-child {
  position: absolute;
  right: 10px;
  width: 90%;
  top: 21px;
  border-radius: 10px;
}

.main-app-imgs {
  display: flex;
  justify-content: center;
}

.frame-inner {
  transform: rotate(15deg) translateX(-14%);
}

.content-input {
  width: 50%;
  margin-bottom: 30px;
  position: relative;
}

.content-input-100 {
  width: 100%;
}

.inner-app {
  padding-top: 30px;
}

.activebtn_home {
  display: flex;
  justify-content: center;
}

.button-contenue {
  width: 500px;
  background-color: var(--min-color);
  color: white !important;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-contenue:hover {
  background-color: white;
  color: var(--min-color) !important;
  border: 2px solid var(--min-color);
}

.inner-footer {
  background-color: #333;
  padding: 60px;
}

.foot-logo {
  width: 200px;
}

.links-foot a,
.links-foot h5 {
  color: var(--min-color) !important;
}

.links-foot li {
  margin-bottom: 15px;
}

.copy-right {
  background-color: var(--min-color);
  padding: 10px 0px;
}

.copy-right .inner {
  display: flex;
  justify-content: space-between;
}

.copy-right .inner a {
  color: white !important;
}

.copy-right h6 {
  color: white;
}

.carousel-indicators [data-bs-target] {
  width: 15px !important;
  height: 15px !important;
  border-radius: 50%;
  background-color: var(--min-color) !important;
}

.carousel-item img {
  height: 550px;
}

.activeabout,
.activeour {
  color: var(--min-color) !important;
}

.about-content {
  background-color: var(--wh);
  border-radius: 20px;
  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.102);
  padding: 40px;
  width: 800px;
  margin: auto;
}
.dasadssda {
  background-color: var(--min-color) !important;
}
.text-about {
  font-size: 17px;
  line-height: 2.5;
}

.text-our {
  font-size: 12px;
  font-weight: bold;
  margin-top: 30px !important;
}

.active-color {
  color: var(--min-color) !important;
}

.section-our {
  height: calc(100vh - 512px);
}

input {
  background-color: white;
}

.content-cars {
  width: 1000px;
}

.form-search-cars {
  width: 80%;
  margin: auto;
  margin-top: 30px;
}

.list-icon {
  position: absolute;
  left: 7px;
  top: 6px;
  background: var(--min-color);
  padding: 6px;
  color: white;
  border-radius: 4px;
}

.car-box {
  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.102);
  display: flex;
  position: relative;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 30px;
  transition: 0.5s;
}

.car-box:hover {
  transform: translateY(-10px);
}

.card-box-img {
  object-fit: cover;
  width: 120px;
  height: 120px;
  margin-inline-end: 20px;
  margin-bottom: 10px;
}

.car-item-text {
  font-size: 14px;
  display: block;
  margin-bottom: 10px;
}

.sallery-car {
  margin-right: 10px;
  color: var(--min-color);
  font-weight: bold;
}

.text-timeing {
  font-weight: bold;
  color: #94949e;
}

.name-car {
  color: var(--min-color);
  font-size: 18px;
}

.car-hint {
  background-color: rgba(224, 148, 65, 0.4);
  border-radius: 10px;
  color: #282a29;
  direction: ltr;
  font-size: 12px;
  max-width: 100px;
  overflow: hidden;
  padding: 5px 8px;
  position: absolute;
  text-overflow: ellipsis;
  top: 15px;
  left: 11px;
  white-space: nowrap;
}

.car-img {
  width: 100%;
  border-radius: 10px;
  height: auto;
  margin-bottom: 30px;
  max-height: 300px;
  -o-object-fit: cover;
  object-fit: cover;
  margin-top: 40px;
}

.layout-form {
  border: 1px solid #eee;
  border-radius: 10px;
  margin-bottom: 0;
  overflow: hidden;
  padding: 0;
  text-align: start;
  margin-bottom: 30px;
}

.head-form {
  align-items: center;
  border-bottom: 2px solid#eee;
  display: flex;
  flex-wrap: wrap;
  font-size: 20px;
  gap: 10px;
  justify-content: space-between;
  padding: 15px;
}

.main-title {
  font-weight: 600;
}

.car-info .info {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  justify-content: space-between;
  padding: 12px;
}

.info p {
  color: #575757;
  font-size: 14px;
}

#active-modil {
  background-color: hsla(0, 0%, 97%, 0.91);
}

.active-yellow {
  background-color: rgba(224, 148, 65, 0.08) !important;
}

.active-model-2 {
  background-color: #e8e8e8;
}

.view-all {
  align-items: center;
  display: flex;
  gap: 10px;
}

.star-hint {
  align-items: center;
  background: #f8f8f8;
  border-radius: 5px;
  color: #8b8b8b;
  display: flex;
  font-size: 14px;
  gap: 7px;
  padding: 5px 10px;
}

.show-all {
  color: var(--min-color) !important;
  text-decoration: underline !important;
  font-weight: bold;
}

.not-evaluation {
  padding: 15px;
  text-align: center;
}

.activeconenect {
  color: var(--min-color);
}

.form-all {
  width: 60%;
  margin: auto;
  margin-top: 40px;
}

.icon-input {
  color: var(--min-color);
}

.p-select-label div {
  display: flex !important;
  align-items: center !important;
}

.p-select-label div img {
  height: 13px !important;
  width: 18px !important;
}

.font-medium {
  display: none;
}

.p-select-option div {
  display: flex !important;
  align-items: center !important;
}

.slotProps-name {
  color: black !important;
}

.p-select-list-container + div {
  display: none !important;
}

.name-flag {
  color: black !important;
  font-size: 14px !important;
  margin-right: 10px !important;
}

.select-flag {
  position: absolute;
  left: 7px;
  top: 37px;
  left: 1px;
  top: 7px;
}

.select-flag .p-select {
  border: none !important;
  background: none !important;
}

.select-flag .p-select-label {
  padding: 2px !important;
}
textarea {
  resize: none !important;
}
.textarea-all {
  padding-top: 10px;
  height: 100px;
  width: 100%;
  background-color: white;
  border-radius: 6px;
  border: 1px solid rgb(151, 151, 151);
  color: black;
  padding-right: 15px;
  transition: 0.5s;
}

::placeholder {
  font-size: 12px !important;
  transition: 0.6s;
}

.textarea-all:focus::placeholder {
  opacity: 0;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.p-datepicker {
  width: 100%;
}

.p-inputtext {
  background-color: white !important;
  border: none !important;
  padding: 0px !important;
  color: black !important;
}

.p-inputtext:focus::placeholder {
  transform: translateX(150px);
}

.p-datepicker-panel {
  min-width: 0px !important;
  background-color: white !important;
  padding: 0px !important;
}

.p-datepicker-day {
  color: black !important;
}

.p-datepicker-weekday-cell {
  background-color: var(--min-color) !important;
}

.icon-calendar {
  top: 327.2px;
  left: 304.2px;
  color: #94949e;
}

.p-datepicker-header {
  background-color: white !important;
}

.p-datepicker-title button {
  color: black !important;
}

.box-inputchange {
  background-color: rgba(232, 150, 65, 0.149);
  border: 2px dashed #e89641;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  gap: 8px;
  height: 100px;
  width: 100px;
  position: relative;
  direction: ltr;
}

.img-change {
  height: 25px;
  width: 30px;
}

.input-file {
  position: absolute;
  height: 130px;
  width: 138px;
  top: 0;
  opacity: 0;
  cursor: pointer;
}
.box-img-file {
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
}
.img-file {
  width: 100%;
  height: 100%;
}
.exit-imgfile {
  background-color: var(--min-color);
  color: white;
  position: absolute;
  left: 3px;
  top: 3px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 17px;
  cursor: pointer;
}
.title-info {
  color: #94949e;
  padding: 20px;
}
.radio-info {
  display: none;
}
.inforadio-box {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.inforadio-label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.radio-info:checked + .inforadio-label .inforadio-box {
  background-color: black;
}
.inforadio-pading {
  padding: 20px;
  display: flex;
  gap: 30px;
}
.inforadio-check {
  font-size: 10px;
  color: white;
}
.p-password-overlay {
  display: none;
}
.p-password {
  width: 100%;
}
.buttons-login button {
  width: 150px;
}
.box-profile {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: none;
}
.box-profile .img-change {
  width: 100%;
  height: 100%;
}
.edit-imgfile {
  position: absolute;
  left: -10px;
  width: 30px;
  height: 30px;
  background: var(--min-color);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: white;
}
.img-profile {
  border-radius: 50%;
}
.exit-profile {
  left: -12px;
  top: 52px;
}
#radio-profile {
  display: none;
}
.check-profile {
  width: 20px;
  height: 20px;
  border: 1px solid var(--min-color);
  display: flex;
  justify-content: center;
  align-items: center;
}
.check-profile-box {
  width: 20px;
  height: 20px;
  border-radius: 0;
}
.input-prile-check:checked + label .check-profile-box {
  background-color: var(--min-color) !important;
  border: none;
}
.p-password svg {
  cursor: pointer;
}
.forget-password {
  text-align: left;
}
.forget-password {
  font-size: 13px;
  color: #ababab !important;
}
.restore-image {
  max-height: 220px;
  width: 250px;
}
.p-inputotp {
  justify-content: center;
}
.p-inputotp .p-inputtext {
  border: 1px solid rgb(221, 221, 221) !important;
  width: 49px;
  height: 42px;
}
.p-inputotp .p-inputtext:focus {
  border: 1px solid var(--min-color) !important;
}
.p-password .p-inputtext {
  width: 100%;
}
.links-foot li {
  color: var(--min-color);
}
.ol-trems li {
  margin-bottom: 5px !important;
  text-align: center;
  font-weight: 600;
}
.vue-map {
  width: 100% !important;
  height: 300px !important;
}
.col-cars {
  text-align: center;
}
.p-datepicker-day:not(.p-datepicker-day-selected):not(.p-disabled):hover {
  background: var(--min-color) !important;
  color: white !important;
}
.p-datepicker-today > .p-datepicker-day {
  background: none !important;
  color: black !important;
}
.popup {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.228);
  top: 0px;
  left: 0;
  z-index: 22221;
}
.popup-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-box {
  padding: 40px;
  width: 500px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 10px;
}
.input-time {
  display: none;
}
.input-time:checked + label {
  background-color: var(--min-color);
  color: white;
}
.label-time {
  background: #f5f5f5;
  border: 0;
  font-size: 12px;
  padding: 10px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
}
.form-time {
  margin-top: 30px;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
}

.exit-form-popup {
  position: absolute;
  left: 16px;
  top: 10px;
  font-size: 16px;
  cursor: pointer;
}
.btons-form-time {
  display: flex;
  margin-top: 20px;
  gap: 20px;
}
.btons-form-time button {
  width: 150px;
  height: 50px;
}
.btons-form-time .button-back {
  border: 1px solid #94949e;
  color: red;
  background-color: #ffe1e1;
}
.button-back:hover {
  color: var(--min-color);
}
.form-time label {
  height: fit-content;
}
.modil_sallery {
  display: none !important;
}
.btn-check-form {
  width: 150px;
}
.steps {
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto 20px;
  max-width: 100%;
  position: relative;
  width: 700px;
}
.steps:before {
  background: var(--min-color);
  content: "";
  height: 2px;
  position: absolute;
  width: 71%;
}
.steps .step-item {
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 10px;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  transform: translateY(15px);
  width: 100%;
}
.steps .step-item.active .icon-done,
.steps .step-item.activeState .icon-done {
  background-color: var(--min-color) !important;
  color: #fff;
}
.steps .step-item.active .icon-done:before,
.steps .step-item.activeState .icon-done:before {
  border-color: var(--min-color);
}
.steps .icon-done:before {
  border: 1.6px dashed transparent;
  border-radius: 50%;
  content: "";
  height: 100%;
  padding: 17px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s ease-out;
  width: 100%;
}
.steps .icon-done svg {
  display: none;
}
.steps .active svg {
  display: block !important;
}
.steps .icon-done {
  align-items: center;
  background-color: #bdbdbd;
  border-radius: 50%;
  display: flex;
  font-size: 15px;
  height: 28px;
  justify-content: center;
  position: relative;
  transition: all 0.3s ease-out;
  width: 28px;
  z-index: 4;
}
.info-content {
  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.102);
}
.head-form .name {
  font-weight: bold;
  color: #333;
  font-size: 16px;
}
.dropdown-toggle {
  background: none !important;
  border: none !important;
  display: flex !important;
  align-items: center;
  gap: 17px;
  padding: 0px !important;
}
.img-dropdown {
  width: 40px;
  height: 40px;
  border-radius: 10px;
}
.dropdown-menu {
  width: 150px !important;
  right: 0 !important;
  text-align: right !important;
  font-size: 13px !important;
}
.dropdown-item {
  padding: 6px !important;
}
.dropdown-item.active,
.dropdown-item:active {
  background: none !important;
}
.dropdown-toggle::after {
  display: none !important;
}
.notifications {
  color: white !important;
  background-color: var(--min-color);
  padding: 6px 9px;
  border-radius: 9px;
}
.dropdown-inner {
  display: flex;
  align-items: center;
  gap: 10px;
}
.layout-seating {
  align-items: center;
  border: 1px solid #dbdbdb;
  border-radius: 15px;
  color: #000;
  display: flex;
  font-size: 13px;
  font-weight: 700;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 15px;
  background-color: white;
}
.layout-remove {
  background-color: rgb(255 235 235);
}
.btons-reust {
  justify-content: center;
  margin-top: 3rem;
}
.btons-reust .active {
  background-color: var(--min-color);
  color: white;
}
.p-tablist-content {
  margin-top: 3rem;
}
.p-tablist-tab-list {
  background-color: white !important;
  justify-content: center;
  border-bottom: none !important;
  gap: 30px;
}
.p-tab-active {
  background-color: var(--min-color) !important;
  border: none !important;
  color: white !important;
}
.p-tab {
  border: 2px solid var(--min-color) !important;
  border-radius: 6px;
  width: 150px;
  height: 50px;
  padding: 0 !important;
}
.p-tablist-active-bar {
  display: none !important;
}
.p-tab a {
  color: var(--min-color) !important;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
}
.p-tab-active a {
  color: white !important;
}
.routes-content {
  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.102);
}
.p-tab .active {
  background-color: var(--min-color) !important;
  color: white !important;
}
.order-box {
  border-radius: 10px;
  box-shadow: 0 0 4px #80808033;
  display: flex;
  padding: 10px 15px;
  transition: transform 0.3s ease-out;
}
.order-box:hover {
  transform: translatey(-10px) scale(1.02);
}
.order-img {
  width: 125px;
  object-fit: cover;
  height: 128px;
  margin-left: 20px;
}
.routes-content {
  padding: 40px;
}
.main-title {
  color: #000;
  font-size: 15px;
  font-weight: 600;
}
.hint {
  font-size: 12px;
  color: #989898;
}
.head-title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.main-disc {
  font-size: 14px;
  color: #878787;
}
.status .item {
  color: #878787;
}
.link-status svg {
  color: var(--min-color);
  font-size: 13px;
}
.order-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-top: 1px solid #ddd;
  margin-top: 20px;
  padding-top: 15px;
  flex-wrap: wrap;
  gap: 10px;
}
.info {
  width: 100%;
}
.not-data-img {
  height: 125px;
  margin-bottom: 15px;
  -o-object-fit: cover;
  object-fit: cover;
  width: 125px;
}
.not-data-box {
  padding: 40px;
  border: 2px solid var(--min-color);
  border-radius: 9px;
}
.img-wallet {
  width: 300px;
}
.wallet-content {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  flex-direction: column;
  gap: 20px;
}
.active-white {
  color: #878787;
}
.img-user {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.p-toggleswitch {
  direction: ltr;
}
.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
  background: var(--min-color) !important;
  border-color: var(--p-toggleswitch-checked-border-color);
}
.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover)
  .p-toggleswitch-handle {
  background: var(--min-color) !important;
}
.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
  background: white !important;
}
.p-toggleswitch-input:hover + .p-toggleswitch-slider .p-toggleswitch-handle {
  background: none !important;
}
.p-toggleswitch-slider {
  background: none !important;
}
.p-toggleswitch-handle {
  background-color: var(--min-color) !important;
}
.notifacition-img {
  width: 65px;
  height: 45px;
  object-fit: cover;
}
.notifacition-box {
  display: flex;
  gap: 10px;
}
.btn-trash {
  background: none;
  color: red;
  font-size: 20px;
}
.nav-link {
  border: 3px solid var(--min-color) !important;
  border-radius: 10px;
  color: var(--min-color) !important;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  background-color: var(--min-color) !important;
  color: white !important;
}
.dropdown-menu li {
  text-align: center;
}
@media (max-width: 1200px) {
  .content-cars {
    width: 100%;
  }
}

@media (max-width: 992px) {
  .about-content {
    width: 100%;
  }

  .p-tablist-tab-list {
    flex-wrap: wrap;
  }

  .carousel-item img {
    height: auto;
  }

  .form-home {
    width: 90%;
  }

  .cars-box {
    width: 90%;
  }

  .foot-logo {
    margin-bottom: 30px;
  }

  .links-foot {
    margin-bottom: 30px !important;
  }

  .inner-footer {
    background-color: #333;
    padding: 30px 10px;
  }
  .links {
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .dropdown-content {
    display: none;
  }
  .dropdown-content-show {
    display: block;
  }
  .btons-form-time button {
    width: 150px !important;
  }
  .text-about {
    font-size: 15px;
  }

  .carousel-indicators {
    bottom: -17px !important;
  }

  .popup-header {
    position: fixed;
    left: -100%;
    top: 0px;
    background: #00000042;
    width: 100%;
    height: 100vh;
    transition: 0.6s;
    z-index: 1;
  }

  .activepopup {
    left: 0;
  }

  .btn-show-links {
    display: block;
  }

  .buttons-inner {
    display: block;
  }

  .btn-show-links span {
    display: block;
    width: 37px;
    height: 4px;
    background-color: var(--min-color);
    margin-bottom: 5px;
    transition: 0.6s;
  }

  .popup-header .links {
    position: fixed;
    right: 0px;
    flex-direction: column;
    width: 200px;
    background: black;
    align-items: center;
    height: 100vh;
    padding-top: 40px !important;
    transform: translateX(100%);
    transition: 0.6s all;
  }

  .activepopup .links {
    transform: translateX(0%);
  }

  .text-sigin {
    display: none;
  }

  .button-bracket {
    display: block;
    padding: 5px 13px;
  }

  .button-header-inner {
    display: none;
  }

  .buttons-inner {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .btnexit_links {
    position: relative;
  }

  .btnexit_links span:nth-child(1) {
    position: absolute;
    transform: rotate(132deg);
  }

  .btnexit_links span:nth-child(2) {
    display: none;
  }

  .btnexit_links span:nth-child(3) {
    transform: rotate(47deg);
  }

  .form-home {
    flex-wrap: wrap;
  }

  .select-home {
    width: 100%;
  }

  .input-all {
    width: 100%;
  }

  .content-input {
    width: 100%;
  }

  .label-parent-car {
    width: 75%;
  }

  .button-all {
    width: 140px;
  }

  .img-car {
    width: 120px;
    object-fit: contain;
  }

  .card-cars h6 {
    font-size: 11px;
  }

  .inner-app h3 {
    font-size: 20px;
  }
  .form-all .button-contenue {
    width: 100% !important;
  }
  .button-contenue {
    width: 100% !important;
  }
}

@media (max-width: 576px) {
  .order-box {
    flex-direction: column;
    align-items: center;
  }
  .order-img {
    width: 100%;
    margin-left: 0px;
    margin-bottom: 32px;
  }

  .label-parent-car {
    width: 100%;
  }

  .status {
    font-size: 13px;
  }
  .link-status {
    font-size: 13px;
  }
  .card-cars h6 {
    font-size: 14px;
  }

  .frame-inner {
    transform: rotate(15deg) translateX(37%);
  }

  .fram-transform {
    transform: translateY(30%) rotate(23deg) translateX(-30%);
  }

  .store-img {
    width: 110px;
  }

  .carousel-indicators [data-bs-target] {
    width: 10px !important;
    height: 10px !important;
  }

  .car-box {
    flex-direction: column;
    align-items: center;
  }

  .name-car {
    text-align: center;
  }

  .card-box-img {
    margin-top: 40px;
    width: 259px;
  }

  .show-all {
    font-size: 13px;
  }
  .button-all {
    width: 120px;
    font-size: 12px !important;
  }
  .form-all {
    width: 100%;
  }
  .popup-box {
    width: 90%;
  }
  .btons-form-time {
    margin-top: 54px;
  }
  .btons-form-time button {
    width: 110px !important;
  }
  .header-logo {
    width: 65px;
  }
  .img-dropdown {
    width: 35px;
    height: 35px;
  }
  .dropdown-toggle {
    gap: 10px;
  }
  .dropdown-toggle span {
    font-size: 13px;
  }
  .notifications {
    padding: 3px 6px;
  }
  .restore-image {
    width: 180px;
  }
}

@media (max-width: 450px) {
  h6 {
    font-size: 14px !important;
  }
  .btn-show-links span {
    width: 25px;
    height: 3px;
  }
  .step-item span {
    font-size: 11px;
  }
  .steps .icon-done {
    height: 20px;
    width: 20px;
  }
  .steps .icon-done:before {
    padding: 13px;
  }
}
</style>
