const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 2500,
    waitForTransition: true,
  },
  effect: "coverflow",
  coverflowEffect: {
    rotate: 50,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const getData = async () => {
  const data = await fetch("http://localhost:3000/new-android-downloader", {
    method: "PUT",
  });
  const response = await data.json();
  console.log(response);
};
const adnroidBtn = document.querySelector("#donwload-for-android");
adnroidBtn.addEventListener("click", getData);
