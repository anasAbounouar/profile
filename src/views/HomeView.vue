<template>
  <div class="mt-5" data-bs-spy="scroll" data-bs-target=".navbar">
    <!-- end navbar  -->
    <!-- content wrapper  -->
    <div class="content-wrapper">
      <!-- start home  -->
      <section id="home" class="p-0 px-5 h-screen flex items-center justify-center">
        <div class="container">
          <div class="flex flex-col items-center justify-center">
            <div class="md:w-2/3 m-auto p-4 md:p-0">
              <h1
                class="font-bold text-white text-3xl md:text-6xl text-uppercase text-left my-3 leading-loose"
                data-aos="fade-up"
                v-html="$t('home.title')"
              ></h1>
              <p
                class="lead text-left my-3 text-lg leading-loose"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {{ $t("home.subtitle") }}
              </p>
              <div class="flex items-center">
                <a href="#work" class="" data-aos="fade-up" data-aos-delay="150">
                  <button
                    type="button"
                    class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    {{ $t("home.explore") }}
                  </button>
                </a>
                <a
                  href="#home"
                  class="link-custom mobile relative mx-2"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  >{{ $t("home.call") }}</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- end home  -->
      <!-- start services  -->
      <section id="services" class="px-5 h-full">
        <div class="container">
          <div class="flex">
            <div class="w-9/12 ml-3 sm:ml-0">
              <span class="text-brand font-bold flex" data-aos="fade-up">Services</span>
              <h2 class="font-bold flex text-2xl" data-aos="fade-up">
                {{ $t("services.title") }}
              </h2>
            </div>
          </div>
          <div class="flex mt-3 gap-3 flex-col sm:flex-row items-center sm:items-stretch">
            <div class="w-11/12 sm:w-6/12 md:w-4/12">
              <div
                class="box shadow-effect relative bg-base rounded-lg p-3"
                data-aos="flip-left"
                data-aos-delay="200"
              >
                <div class="p-2 mt-2 rounded-lg">
                  <i class="fa-solid fa-pen-fancy"></i>
                </div>
                <h5 class="p-2 mt-2 text-left flex">
                  {{ $t("services.uiux") }}
                </h5>
                <p class="p-2 text-left">
                  {{ $t("services.uiuxText") }}
                </p>
              </div>
            </div>
            <div class="w-11/12 sm:w-6/12 md:w-4/12">
              <div
                class="box shadow-effect relative bg-base p-3 rounded-lg"
                data-aos="flip-left"
                data-aos-delay="200"
              >
                <div class="p-2 mt-2 rounded-lg">
                  <i class="fa-brands fa-vuejs"></i>
                </div>
                <h5 class="p-2 mt-2 text-left flex">
                  {{ $t("services.frontend") }}
                </h5>
                <p class="p-2 text-left">
                  {{ $t("services.frontendText") }}
                </p>
              </div>
            </div>
            <div class="w-11/12 sm:w-6/12 md:w-4/12">
              <div
                class="box shadow-effect p-relative bg-base p-3 rounded-lg"
                data-aos="flip-right"
                data-aos-delay="200"
              >
                <div class="p-2 mt-2 rounded-lg">
                  <i class="fa-solid fa-code"></i>
                </div>
                <h5 class="p-2 mt-2 text-left flex">
                  {{ $t("services.projectManagement") }}
                </h5>
                <p class="p-2 text-left">
                  {{ $t("services.projectManagementText") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- end services  -->
      <!-- start work  -->
      <section id="work" class="px-5 h-full">
        <div class="container">
          <div class="flex flew-wrap flex-col ml-3 sm:ml-0">
            <div class="h-full w-11/12 sm:w-6/12 md:w-4/12">
              <span class="text-brand font-bold flex text-left text-uppercase">
                {{ $t("work.work") }}
              </span>
              <h2 class="font-bold flex text-left">
                {{ $t("work.title") }}
              </h2>
            </div>
          </div>
          <div class="grid gap-0 sm:gap-6 auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <!-- Project 1: Innovation and Technology Transfer Center -->
            <div class="p-4 sm:p-0">
              <div
                class="box h-full shadow-effect p-relative bg-base rounded-lg"
                data-aos="fade-up-right"
              >
                <div class="image-container">
                  <img
                    src="@/assets/ferme2.png"
                    alt="Innovation and Technology Transfer Center"
                    class="h-auto max-w-full rounded-lg bg-white"
                  />
                </div>
                <h6 class="font-bold p-1 ml-2 mt-3">
                  {{ $t("work.project1") }}
                </h6>
                <p class="p-1 ms-2 text-left">
                  {{ $t("work.project1Text") }}
                </p>
              </div>
            </div>
            <!-- Project 2: Online Library -->
            <div class="p-4 sm:p-0">
              <div
                class="box h-full shadow-effect p-relative bg-base rounded-lg p-3"
                data-aos="fade-up-left"
                data-aos-delay="200"
              >
                <div class="image-container">
                  <img
                    src="@/assets/library.jpg"
                    alt="Online Library"
                    class="img-fluid rounded-lg"
                  />
                </div>
                <h6 class="font-bold p-1 ml-2 mt-3">
                  {{ $t("work.project2") }}
                </h6>
                <p class="p-1 ml-2 text-left">
                  {{ $t("work.project2Text") }}
                </p>
              </div>
            </div>
            <!-- Project 3: Car Parts E-commerce -->
            <div class="p-4 sm:p-0">
              <div
                class="h-full box shadow-effect p-relative bg-base rounded-lg p-3"
                data-aos="fade-up"
              >
                <img
                  src="@/assets/supra.jpg"
                  alt="Car Parts E-commerce"
                  class="img-fluid rounded-lg"
                />
                <h6 class="font-bold p-1 ml-2 mt-3">
                  {{ $t("work.project3") }}
                </h6>
                <p class="p-1 ml-2 text-left">
                  {{ $t("work.project3Text") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- end  work  -->
      <!-- start about  -->
      <section id="about" class="px-5 h-full">
        <div class="container">
          <div class="flex mb-3 ml-3 sm:ml-0">
            <div class="w-11/12 sm:w-9/12 mt-0">
              <span class="text-brand font-bold flex text-left text-uppercase">
                {{ $t("navbar.about") }}
              </span>
              <h2 class="font-bold text-3xl flex text-left">
                {{ $t("about.title") }}
              </h2>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2">
            <div class="">
              <h3 class="ml-3 sm:ml-0 text-left">
                {{ $t("about.education") }}
              </h3>
              <div class="grid grid-cols-1">
                <div v-for="(education, index) in Educations" :key="index" class="p-4 mt-3">
                  <div
                    class="box shadow-effect p-relative bg-base rounded-lg p-3"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <h5 class="">
                      {{ education.title }}
                    </h5>
                    <span class="text-brand"> {{ education.source }}</span>
                    <p class="text-left">
                      {{ education.text }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="">
              <h3 class="md:mt-0 mt-3 text-left ml-3 sm:ml-0">Experience</h3>
              <div class="grid grid-cols-1">
                <div v-for="(experience, index) in Experiences" :key="index" class="p-4 mt-3">
                  <div
                    class="box shadow-effect relative bg-base rounded-lg p-3"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <h5 class="">
                      {{ experience.title }}
                    </h5>
                    <span class="text-brand"> {{ experience.source }}</span>
                    <p class="text-left">
                      {{ experience.text }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- end about  -->
      <!-- start reviews  -->
      <section id="reviews" class="px-5">
        <div class="container">
          <div class="flex ml-3 sm:ml-0">
            <div class="w-9/12">
              <span class="text-brand font-bold text-left flex">
                {{ $t("navbar.reviews") }}
              </span>
              <h2 class="font-bold text-left flex">
                {{ $t("reviews.title") }}
              </h2>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-3 grid-3">
            <div class="p-4 h-full">
              <a href="https://www.fiverr.com/anasabun78?up_rollout=true" target="_blank">
                <div
                  class="box h-full p-4 shadow-effect relative bg-base rounded-lg"
                  data-aos="fade-up-right"
                >
                  <div class="text-center">
                    <i class="fa-solid fa-star text-brand"></i>
                    <i class="fa-solid fa-star text-brand"></i>
                    <i class="fa-solid fa-star text-brand"></i>
                    <i class="fa-solid fa-star text-brand"></i>
                    <i class="fa-solid fa-star text-brand"></i>
                  </div>
                  <p class="">
                    {{ $t("reviews.review1") }}
                  </p>
                  <h5 class="text-center">lldonvitoll</h5>
                  <p class="text-center">Fiverr</p>
                </div>
              </a>
            </div>
            <div class="p-4 h-full">
              <a href="https://www.fiverr.com/anasabun78?up_rollout=true" target="_blank">
                <div
                  class="box p-4 h-full shadow-effect relative bg-base rounded-lg"
                  data-aos="fade-up-left"
                >
                  <div class="text-center">
                    <i class="fa-solid fa-star text-brand"></i>
                    <i class="fa-solid fa-star text-brand"></i>
                    <i class="fa-solid fa-star text-brand"></i>
                    <i class="fa-solid fa-star text-brand"></i>
                    <i class="fa-solid fa-star text-brand"></i>
                  </div>
                  <p class="">
                    {{ $t("reviews.review2") }}
                  </p>
                  <h5 class="text-center">ludovic24</h5>
                  <p class="text-center">Fiverr</p>
                </div>
              </a>
            </div>
            <div class="p-4 h-full">
              <div
                class="box h-full p-4 shadow-effect relative bg-base rounded-lg"
                data-aos="fade-up"
              >
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7103730103452327936/"
                  target="_blank"
                >
                  <div class="text-center">
                    <i class="fa-solid fa-star text-brand"></i>
                    <i class="fa-solid fa-star text-brand"></i>
                    <i class="fa-solid fa-star text-brand"></i>
                    <i class="fa-solid fa-star text-brand"></i>
                    <i class="fa-solid fa-star text-brand"></i>
                  </div>
                  <p class="">
                    {{ $t("reviews.review3") }}
                  </p>
                  <h5 class="text-center">Youness Jnaoui</h5>
                  <p class="text-center">(AITTC - UM6P)</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- end reviews  -->
      <!-- start contact  -->
      <section id="contact" class="sm:px-5">
        <div class="container text-center">
          <div class="flex flex-col items-center justify-center mb-4">
            <div class="w-10/12 py-3">
              <span class="text-brand font-bold mt-0 mb-3">CONTACT </span>
            </div>
            <div class="w-10/12">
              <h1 class="text-2xl py-3">
                {{ $t("contact.title") }}
              </h1>
            </div>
          </div>
          <div class="flex mb-3 items-center justify-center">
            <div class="w-3/12">
              <a
                href="mailto:anass.abounouar@gmail.com"
                target="_blank"
                class=""
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 duration-300"
                >
                  Contact
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <!-- end contact  -->
      <!-- start footer  -->
      <footer>
        <div class="container">
          <div class="flex justify-center sm:justify-end items-center">
            <div class="w-11/12 sm:w-1/2 align-small flex justify-end p-3">
              <div>
                <a href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank"
                  ><i class="mx-3 text-2xl fa-brands fa-facebook-f text-white"></i
                ></a>
              </div>
              <div>
                <a href="https://wa.me/2120688698494" target="_blank"
                  ><i class="mx-3 text-2xl fa-brands fa-whatsapp text-white"></i
                ></a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/anas-abounouar-a7b616248/" target="_blank"
                  ><i class="mx-3 text-2xl fa-brands fa-linkedin text-white"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <!-- end footer  -->
    </div>
    <!--  endcontent wrapper  -->
  </div>
</template>
<script>
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "@/App.vue";
const app = createApp(App);

// Use the i18n plugin
app.use(createI18n);
// Vue.use(VueI18n);
export default {
  name: "HomeView",
  data() {
    return {
      lol: "true",
    };
  },
  methods: {
    switchLanguage(locale) {
      this.$i18n.locale = locale;
    },
    closeNavbar() {
      // Check if the navigation bar is open (for smaller screens)
      const navbarToggler = document.querySelector(".navbar-toggler");
      if (navbarToggler && window.getComputedStyle(navbarToggler).display !== "none") {
        // If it's open, programmatically click the toggle button to close it
        navbarToggler.click();
      }
    },
    updateLang() {
      this.lol === true ? this.switchLanguage("en") : this.switchLanguage("fr");
    },
  },
  watch: {
    lol() {
      this.updateLang();
    },
  },
  computed: {
    Experiences() {
      return [
        {
          title: this.$t("about.freelance"),
          source: "Fiverr",
          text: this.$t("about.freelanceText"),
        },
        {
          title: this.$t("about.internship"),
          source: this.$t("about.internshipSource"),
          text: this.$t("about.internshipText"),
        },
      ];
    },
    Educations() {
      return [
        {
          title: this.$t("about.preparatoryClasses"),
          source: "Ibn Timiya - Marrakech (2020 - 2022)",
          text: this.$t("about.preparatoryClassesText"),
        },
        {
          title: this.$t("about.softwareEngineering"),
          source: this.$t("about.inpt"),
          text: this.$t("about.softwareEngineeringText"),
        },
      ];
    },
  },
};
</script>
<style lang="scss">
.navbar {
  /* Add your box shadow properties here */

  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Example box shadow values */
}
p {
  color: #b6cbce;
}
#services {
  i {
    color: white;
  }
}
.toggle-switch {
  background-color: #ccc;
  width: 78px;
  height: 32px;
  border-radius: 16px;
  position: relative;
  transition: 0.3s;
  cursor: pointer;
}
.toggle-checkbox {
  -webkit-appearance: none;
  appearance: none;
  display: none;
}
.toggle-checkbox:checked + .toggle-switch {
  background-color: #0075ff;
}
.toggle-checkbox:checked + .toggle-switch::before {
  content: "En";
  left: 50px;
  color: var(--blue-color);
}
.toggle-switch::before {
  // font-family: "Font Awesome 6 Free";
  content: "Fr";
  // font-weight: 900;
  background-color: white;
  width: 24px;
  height: 24px;
  position: absolute;
  border-radius: 50%;
  top: 4px;
  left: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #aaa;
  transition: 0.3s;
}
.box {
  transition: 0.4s !important;
}
.equal-height {
  display: flex;
  flex-wrap: wrap;
}

.equal-height > [class*="col-"] {
  display: flex;
  flex-direction: column;
}

.equal-height .box {
  flex: 1;
}
#reviews {
  .box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
</style>
