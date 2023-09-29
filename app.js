//TODO: add a new data on the top

const landingPageData = [
  {
    title: "Planet",
    publish: "Agu 24, 2022",
    src: "./utopic-flowers/",
  },
  {
    title: "Planet",
    publish: "June 6, 2022",
    src: "./planet/",
  },
  {
    title: "innovated",
    publish: "June 3, 2022",
    src: "./innovated/",
  },
  {
    title: "Creative Learner",
    publish: "June 1, 2022",
    src: "./creative-learner/",
  },
  {
    title: "Creative Branding",
    publish: "May 31, 2022",
    src: "./creative-branding/",
  },
  {
    title: "E-commerce Brand",
    publish: "May 31, 2022",
    src: "./e-commerce-brand/",
  },
  {
    title: "E-commerce",
    publish: "May 28, 2022",
    src: "./e-commerce/",
  },
  {
    title: "Cleaning Service",
    publish: "March 15, 2022",
    src: "./cleaning-service/",
  },
  {
    title: "Everyday",
    publish: "March 10, 2022",
    src: "./everyday-dzo/",
  },
  {
    title: "Elegance",
    publish: "March 8, 2022",
    src: "./elegance-dzo/",
  },
  {
    title: "Nature Beauty",
    publish: "March 6, 2022",
    src: "./nature-beauty-dzo/",
  },
  {
    title: "Pottery Studio",
    publish: "March 5, 2022",
    src: "./pottery-studio-dzo/",
  },
  {
    title: "Fast Food",
    publish: "March 4, 2022",
    src: "./fast-food-dzo/",
  },
  {
    title: "Travel Hunter",
    publish: "March 3, 2022",
    src: "./travel-hunter-dzo/",
  },
  {
    title: "Digital Agency",
    publish: "Feb 12, 2022",
    src: "./degital-agency/",
  },
];

window.onload = function () {
  const landingPages = document.getElementById("landingPages");

  for (const landingPage of landingPageData) {
    landingPages.appendChild(card(landingPage));
  }
};

function card({title, publish, src}) {
  const div = document.createElement("div");
  div.className = "my-5 py-4 shadow border px-2";
  div.innerHTML = `<div class="bg-secondary-subtle px-5 py-2"> <h2>${title}</h2>
  <p>Created on ${publish}</p></div>
    <iframe class="w-100" src="${src}"></iframe>`;
  return div;
}
