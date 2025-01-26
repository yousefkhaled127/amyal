<template>
  <footer>
    <div class="inner-footer">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4">
            <a href="">
              <img class="foot-logo" src="../assets/logo.png" />
            </a>
          </div>
          <div class="col-lg-4">
            <ul class="links-foot">
              <li><h5>روابط سريعة</h5></li>
              <li><router-link to="/">الرئسيه</router-link></li>
              <li>
                <router-link to="/ComPlaints">الشكاوي والمقترحات</router-link>
              </li>
              <li>
                <router-link to="/TermsConditions">الشروط والاحكام</router-link>
              </li>
            </ul>
          </div>
          <div class="col-lg-4">
            <ul class="links-foot">
              <li><h5>تواصل معنا</h5></li>
              <li>
                <fa icon="location-dot" class="ms-2" /><span
                  >7372 طريق الملك عبدالعزيز الفرعي، 4321، الورود، الرياض 12252،
                  السعودية</span
                >
              </li>
              <li>
                <a href=""
                  ><fa icon="phone" class="ms-2" /><span>920004348</span></a
                >
              </li>
              <li>
                <a href=""
                  ><fa icon="phone" class="ms-2" /><span>0545555104</span></a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="copy-right">
      <div class="container inner">
        <div class="hint">
          <h6>
            تصميم وبمجه
            <a href="">اوامر الشبكه</a>
          </h6>
        </div>
        <h6>جميع الحقوق محفوظة لموقع أميال</h6>
      </div>
    </div>
  </footer>
</template>
