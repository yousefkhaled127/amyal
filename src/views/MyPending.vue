<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="order-box">
        <img src="../assets/1727528341_3719.png" class="order-img" />
        <div class="info">
          <div class="head-title">
            <h3 class="main-title">
              <span>رقم الطلب</span>
              :
              <span>756</span>
            </h3>
            <span class="hint">منذ 23 ثانية</span>
          </div>
          <h4 class="main-disc">جي ام سي يوكون 2023</h4>
          <div class="order-status">
            <div class="status">
              <fa icon="x-ray" />
              <span class="item me-2">الحاله</span>
              :
              <span class="active-color ms-2">في الانتظار</span>
            </div>
            <RouterLink class="link-status" to="/OrderDetails"
              >عرض المزيد <fa icon="chevron-left"
            /></RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
