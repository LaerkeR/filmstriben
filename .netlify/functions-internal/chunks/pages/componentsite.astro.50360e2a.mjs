/* empty css                             */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../astro.9b869f1a.mjs';
import 'html-escaper';
import { e as $$Button, h as $$Heart, i as $$Info, a as filmdatabase, j as $$HeaderHeart, k as $$HeaderUser, l as $$Procesbar, m as $$Sogbar, n as $$Filtrering, b as $$Moviecard, o as $$Sog, p as $$Facebook, q as $$Instagram, r as $$Twitter, g as $$Kryds, c as $$Layout } from './_alder_.astro.164d957e.mjs';
/* empty css                                   */import { $ as $$Imdb, a as $$Del, b as $$Star, c as $$Detaljertags, d as $$PlayPopup, e as $$Stjernerating } from './_slug_.astro.bf85571d.mjs';
/* empty css                                   */
const maanedensfilm = [
	{
		filmTitel: "Lulu",
		slug: "lulu",
		originalTitel: "",
		aarstal: "2014",
		genre: "Drama",
		underGenre: [
			"kærlighed"
		],
		type: "kortfilm",
		varighed: "46 min",
		instruktor: [
			"Caroline Sascha Cogez"
		],
		manusforfatter: [
			"Tone Mygind Rostbøll"
		],
		medvirkende: [
			"Malin Crépin",
			"Jens Jørn Spottag",
			"Andreas Holm Dittmer"
		],
		langResume: "Galleristen Lulu elsker Henrik, som er en af hendes største kunder. Henrik er også vild med Lulu, men er gift med Sophia, som han driver sit firma med. Henrik inviterer Lulu med til sit gods i Frankrig. Turen skal være deres alene, en begyndelse til noget nyt. Men i huset i Frankrig forstyrres idyllen, da Henrik og Sophias feminine søn, David, uventet dukker op for at holde læseferie fra sin kostskole. Lulu og David prøver begge at finde deres vej i livet og i forholdet til Henrik. De søger begge efter kærlighed og higer efter at blive set som dem, de er. Instruktøren er den dansk-franske Caroline Sascha Cogez, der også har instrueret den fine dokumentar 'Hun synger'",
		kortResume: "Henrik inviterer Lulu med til sit gods i Frankrig. Turen skal være deres alene, en begyndelse til noget nyt.",
		sprog: [
			"Dansk",
			"Fransk"
		],
		land: [
			"Sverige",
			"Frankrig"
		],
		undertekst: "",
		filmfotograf: [
			"Magnus Nordenhof Jønck"
		],
		produktionsselskab: [
			"SF Film Produktion",
			"Fluxus Films"
		],
		emneord: [
			"parforhold",
			"far-søn forholdet",
			"jalousi",
			"danske film",
			"kortfilm"
		],
		ratingFilmstriben: "3",
		ratingAntal: "24",
		ratingIMDb: "6,8",
		point: "0",
		alder: "11",
		tema: "Månedens film",
		imgTema: "maanedens film",
		imgTitel: "Lulu"
	}
];

const $$Astro$c = createAstro();
const $$Maanedscard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Maanedscard;
  return renderTemplate`${maanedensfilm.map((filmData) => renderTemplate`${maybeRenderHead($$result)}<article class="bg-blueSky flex flex-row py-16 px-36 justify-start gap-16 astro-KBJGVQ2R">
      <a${addAttribute(filmData.slug, "href")} class="wrapper relative w-1/3 flex justify-center items-center astro-KBJGVQ2R">
        <img class="aspect-auto w-fit h-fit bg-cover bg-no-repeat bg-center astro-KBJGVQ2R"${addAttribute(`././img/${filmData.imgTema}/imgPlakat.jpg`, "src")} alt="">
        <div class="absolute top-0 bottom-0 left-0 right-0 w-full h-full hover:bg-black hover:opacity-25 ease-in-out duration-300 astro-KBJGVQ2R"></div>
        <div class="mereinfoknap absolute astro-KBJGVQ2R">
          ${renderComponent($$result, "Button", $$Button, { "variant": "secondary", "typeIcon": "circle-play", "tekst": "Mere info", "class": "astro-KBJGVQ2R" })}
        </div>
      </a>

      <div class="flex flex-col justify-between astro-KBJGVQ2R">
        <div class="astro-KBJGVQ2R">
          <h3 class="text-xs font-dinHeader text-grey-100 astro-KBJGVQ2R">
            Månedens film | se for 0 point i Maj
          </h3>

          <a${addAttribute(filmData.slug, "href")} class="astro-KBJGVQ2R">
            <h2 class="text-xl font-dinHeader uppercase mt-2 mb-4 astro-KBJGVQ2R">
              ${filmData.filmTitel}
            </h2>
          </a>
          <div class="infoBar text-white flex gap-2 items-center body-lg astro-KBJGVQ2R">
            <p class="text-white body-md astro-KBJGVQ2R">${filmData.varighed}</p>|
            <p class="text-white body-md astro-KBJGVQ2R">${filmData.aarstal}</p>|
            <p class="text-white body-md astro-KBJGVQ2R">${filmData.genre}</p>|
            <p class="text-white body-md astro-KBJGVQ2R">${filmData.type}</p>|
            <p class="text-white body-md astro-KBJGVQ2R">${filmData.point} point</p>
          </div>
          <p class="beskrivelse body-md mt-12 max-w-prose astro-KBJGVQ2R">
            ${filmData.langResume}
          </p>

          <div class="indstruktør mt-8 flex flex-row gap-1 astro-KBJGVQ2R">
            <p class="indstruktør body-sm text-grey-200 astro-KBJGVQ2R">Instruktør:</p>
            <p class="body-sm astro-KBJGVQ2R">${filmData.instruktor}</p>
          </div>
        </div>
        <div class=" astro-KBJGVQ2R">
          <div class="flex items-end gap-8 astro-KBJGVQ2R">
            ${renderComponent($$result, "Heart", $$Heart, { "variant": "medium", "class": "astro-KBJGVQ2R" })}
            ${renderComponent($$result, "Imdb", $$Imdb, { "tal": filmData.ratingIMDb, "class": "astro-KBJGVQ2R" })}
          </div>
        </div>
      </div>
    </article>`)}`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/Maanedscard.astro");

const $$Astro$b = createAstro();
const $$Temacard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Temacard;
  const {
    aarstal,
    filmTitle,
    varighed,
    genre,
    imgSrc,
    point,
    kortResume,
    slug,
    farve
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<article${addAttribute(`${farve} px-10 py-10 [50vh] md:h-[70vh] w-full flex gap-12 justify-center astro-HNDG3HAT`, "class")}>
  <a${addAttribute(slug, "href")} class="wrapper w-2/3 relative flex justify-center items-center astro-HNDG3HAT">
    <div class="aspect-auto w-full h-full bg-no-repeat bg-center bg-cover astro-HNDG3HAT"${addAttribute(`background-image: url("${imgSrc}")`, "style")}>
    </div>

    <div class="absolute top-0 bottom-0 left-0 right-0 w-full h-full hover:bg-black hover:opacity-20 ease-in duration-300 astro-HNDG3HAT">
    </div>
    <div class="mereinfoknap absolute astro-HNDG3HAT">
      ${renderComponent($$result, "Button", $$Button, { "variant": "secondary", "typeIcon": "circle-play", "tekst": "Mere info", "class": "astro-HNDG3HAT" })}
    </div>
  </a>

  <div class="flex flex-col gap-2 self-end astro-HNDG3HAT">
    <h2 class="text-md font-dinHeader astro-HNDG3HAT">${filmTitle}</h2>
    <div class="infoBar text-white flex gap-2 body-lg astro-HNDG3HAT">
      <p class="varrighed astro-HNDG3HAT">${varighed}</p>|<p class="aarstal astro-HNDG3HAT">
        ${aarstal}
      </p>
      |<p class="astro-HNDG3HAT">${point} point</p>
      |<p class="genre astro-HNDG3HAT">${genre}</p>
    </div>
    <div class="astro-HNDG3HAT">
      <p class="kortResume max-w-[50ch] text-grey-50 astro-HNDG3HAT">
        ${kortResume}
      </p>
    </div>
    <div class="ikoner ikoner flex gap-4 astro-HNDG3HAT">
      ${renderComponent($$result, "Heart", $$Heart, { "variant": "small", "class": "astro-HNDG3HAT" })}
      ${renderComponent($$result, "Info", $$Info, { "variant": "small", "class": "astro-HNDG3HAT" })}
    </div>
  </div>
</article>`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/Temacard.astro");

const $$Astro$a = createAstro();
const $$TemaKarrusel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$TemaKarrusel;
  const { temaTitel } = Astro2.props;
  const temaFiltret = filmdatabase.filter((film) => film.tema === temaTitel);
  return renderTemplate`${maybeRenderHead($$result)}<section class="carouselwrapper w-full px-20 astro-K43SF2OJ">
  <div class="align-bottom mb-4 astro-K43SF2OJ">
    <h2 class="text-xs font-robotoHeader tracking-wider text-grey-100 astro-K43SF2OJ">
      ${temaTitel}
    </h2>
    <div class="carousel-indicators flex justify-end gap-2 astro-K43SF2OJ">
      <div class="indicator active w-5 h-1 bg-grey-200 astro-K43SF2OJ"></div>
      <div class="indicator w-5 h-1 bg-grey-500 astro-K43SF2OJ"></div>
      <div class="indicator w-5 h-1 bg-grey-500 astro-K43SF2OJ"></div>
      <div class="indicator w-5 h-1 bg-grey-500 astro-K43SF2OJ"></div>
      <div class="indicator w-5 h-1 bg-grey-500 astro-K43SF2OJ"></div>
    </div>
  </div>

  <section class="scroll carousel relative h-fit overflow-hidden astro-K43SF2OJ">
    <div class="next-button absolute h-full w-fit justify-end right-0 z-40 astro-K43SF2OJ">
      <button class="bg-black opacity-75 w-20 astro-K43SF2OJ"><p class="lightIcon astro-K43SF2OJ">angle-right</p>
      </button>
    </div>
    <div class="prev-button absolute h-full w-fit justify-end left-0 z-40 astro-K43SF2OJ">
      <button class="bg-black opacity-75 w-20 astro-K43SF2OJ"><p class="lightIcon astro-K43SF2OJ">angle-left</p>
      </button>
    </div>

    <div class="noScrollbar carousel relative flex gap-8 overflow-x-scroll astro-K43SF2OJ">
      ${temaFiltret.map((film) => renderTemplate`<div class="shrink-0 w-full astro-K43SF2OJ">
            ${renderComponent($$result, "Temacard", $$Temacard, { "varighed": film.varighed, "genre": film.genre, "aarstal": film.aarstal, "filmTitle": film.filmTitel, "imgSrc": `../img/${film.imgTema}/${film.imgTitel}/imgCard.webp`, "slug": film.slug, "point": film.point, "kortResume": film.kortResume, "farve": film.farve, "class": "astro-K43SF2OJ" })}
          </div>`)}
    </div>
  </section>
</section>`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/Tema_karrusel.astro");

const $$Astro$9 = createAstro();
const $$Plakatcard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Plakatcard;
  const { aarstal, filmTitle, varighed, genre, imgSrc, point, slug } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(`${slug}`, "href")} class="w-fit h-fit astro-HU6DVUQI">
  <article class="relative w-fit h-full aspect-auto overflow-hidden astro-HU6DVUQI">
    <img class="w-fit h-auto astro-HU6DVUQI"${addAttribute(imgSrc, "src")} alt="Everything everywhere all at once">

    <div class="absolute w-full h-full flex flex-col-reverse bottom-0 opacity-0 hover:opacity-100 transition duration-300 astro-HU6DVUQI">
      <div class="bg-black info astro-HU6DVUQI"><span class="astro-HU6DVUQI"></span></div>

      <div class="bg-black w-full absolute z-[1] flex flex-col px-5 pb-3 astro-HU6DVUQI">
        <p class="titel font-display text-xs astro-HU6DVUQI">${filmTitle}</p>
        <div class="flex justify-between astro-HU6DVUQI">
          <div class="infoBar text-grey-100 flex gap-2 items-center body-sm astro-HU6DVUQI">
            <p class="varrighed body-xs astro-HU6DVUQI">${varighed}</p>|<p class="aarstal body-xs astro-HU6DVUQI">
              ${aarstal}
            </p>|<p class="genre body-xs astro-HU6DVUQI">${genre}</p>|<p class="genre body-xs astro-HU6DVUQI">
              ${point} point
            </p>
          </div>
          <div class="gap-4 flex w-fit astro-HU6DVUQI">
            ${renderComponent($$result, "Heart", $$Heart, { "variant": "small", "class": "astro-HU6DVUQI" })}
            ${renderComponent($$result, "Info", $$Info, { "variant": "small", "class": "astro-HU6DVUQI" })}
          </div>
        </div>
      </div>
    </div>
  </article>
</a>`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/Plakatcard.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$8 = createAstro();
const $$PlakatKarrusel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$PlakatKarrusel;
  const { temaTitel } = Astro2.props;
  const temaFiltret = filmdatabase.filter((film) => film.tema === temaTitel);
  return renderTemplate(_a || (_a = __template(["", '<section class="carouselwrapper w-full px-20 astro-DIDPTRRE">\n  <div class="align-bottom mb-4 astro-DIDPTRRE">\n    <h2 class="text-xs font-robotoHeader tracking-wider text-grey-100 astro-DIDPTRRE">\n      ', '\n    </h2>\n    <div class="carousel-indicators flex justify-end gap-2 astro-DIDPTRRE">\n      <div class="indicator active w-5 h-1 bg-grey-200 astro-DIDPTRRE"></div>\n      <div class="indicator w-5 h-1 bg-grey-500 astro-DIDPTRRE"></div>\n      <div class="indicator w-5 h-1 bg-grey-500 astro-DIDPTRRE"></div>\n      <div class="indicator w-5 h-1 bg-grey-500 astro-DIDPTRRE"></div>\n      <div class="indicator w-5 h-1 bg-grey-500 astro-DIDPTRRE"></div>\n    </div>\n  </div>\n\n  <section class="relative h-fit overflow-hidden astro-DIDPTRRE">\n    <div class="next-button absolute h-full w-fit justify-end right-0 z-40 astro-DIDPTRRE">\n      <button class="bg-black opacity-75 w-20 astro-DIDPTRRE"><p class="lightIcon astro-DIDPTRRE">angle-right</p>\n      </button>\n    </div>\n    <div class="prev-button absolute h-full w-fit justify-end left-0 z-40 astro-DIDPTRRE">\n      <button class="bg-black opacity-75 w-20 astro-DIDPTRRE"><p class="lightIcon astro-DIDPTRRE">angle-left</p>\n      </button>\n    </div>\n    <div class="snap-start scroll-mx-6 shrink-0 astro-DIDPTRRE">\n      <div class="shrink-0 w-0 astro-DIDPTRRE"></div>\n    </div>\n    <div class="noScrollbar carousel carousel relative flex gap-4 snap-x snap-mandatory overflow-x-auto astro-DIDPTRRE">\n      ', '\n    </div>\n  </section>\n</section>\n\n\n\n\n<!-- <script>\n  document.addEventListener("DOMContentLoaded", function () {\n    const carousel = document.querySelector(".carousel");\n    const prevButton = document.querySelector(".prev-button");\n    const nextButton = document.querySelector(".next-button");\n\n    const cardWidth = 300; // Bredden af hvert kort i pixels\n    let currentPosition = 0; // Den aktuelle position i karrusellen\n\n    // Opdater karrusellen baseret p\xE5 den aktuelle position\n    function updateCarousel() {\n      carousel.style.transform = `translateX(${currentPosition}px)`;\n    }\n\n    // Flyt karrusellen til venstre\n    function slideNext() {\n      currentPosition -= cardWidth;\n      updateCarousel();\n    }\n\n    // Flyt karrusellen til h\xF8jre\n    function slidePrev() {\n      currentPosition += cardWidth;\n      updateCarousel();\n    }\n\n    // Lyt efter klik p\xE5 knapperne\n    nextButton.addEventListener("click", slideNext);\n    prevButton.addEventListener("click", slidePrev);\n  });\n<\/script> -->'], ["", '<section class="carouselwrapper w-full px-20 astro-DIDPTRRE">\n  <div class="align-bottom mb-4 astro-DIDPTRRE">\n    <h2 class="text-xs font-robotoHeader tracking-wider text-grey-100 astro-DIDPTRRE">\n      ', '\n    </h2>\n    <div class="carousel-indicators flex justify-end gap-2 astro-DIDPTRRE">\n      <div class="indicator active w-5 h-1 bg-grey-200 astro-DIDPTRRE"></div>\n      <div class="indicator w-5 h-1 bg-grey-500 astro-DIDPTRRE"></div>\n      <div class="indicator w-5 h-1 bg-grey-500 astro-DIDPTRRE"></div>\n      <div class="indicator w-5 h-1 bg-grey-500 astro-DIDPTRRE"></div>\n      <div class="indicator w-5 h-1 bg-grey-500 astro-DIDPTRRE"></div>\n    </div>\n  </div>\n\n  <section class="relative h-fit overflow-hidden astro-DIDPTRRE">\n    <div class="next-button absolute h-full w-fit justify-end right-0 z-40 astro-DIDPTRRE">\n      <button class="bg-black opacity-75 w-20 astro-DIDPTRRE"><p class="lightIcon astro-DIDPTRRE">angle-right</p>\n      </button>\n    </div>\n    <div class="prev-button absolute h-full w-fit justify-end left-0 z-40 astro-DIDPTRRE">\n      <button class="bg-black opacity-75 w-20 astro-DIDPTRRE"><p class="lightIcon astro-DIDPTRRE">angle-left</p>\n      </button>\n    </div>\n    <div class="snap-start scroll-mx-6 shrink-0 astro-DIDPTRRE">\n      <div class="shrink-0 w-0 astro-DIDPTRRE"></div>\n    </div>\n    <div class="noScrollbar carousel carousel relative flex gap-4 snap-x snap-mandatory overflow-x-auto astro-DIDPTRRE">\n      ', '\n    </div>\n  </section>\n</section>\n\n\n\n\n<!-- <script>\n  document.addEventListener("DOMContentLoaded", function () {\n    const carousel = document.querySelector(".carousel");\n    const prevButton = document.querySelector(".prev-button");\n    const nextButton = document.querySelector(".next-button");\n\n    const cardWidth = 300; // Bredden af hvert kort i pixels\n    let currentPosition = 0; // Den aktuelle position i karrusellen\n\n    // Opdater karrusellen baseret p\xE5 den aktuelle position\n    function updateCarousel() {\n      carousel.style.transform = \\`translateX(\\${currentPosition}px)\\`;\n    }\n\n    // Flyt karrusellen til venstre\n    function slideNext() {\n      currentPosition -= cardWidth;\n      updateCarousel();\n    }\n\n    // Flyt karrusellen til h\xF8jre\n    function slidePrev() {\n      currentPosition += cardWidth;\n      updateCarousel();\n    }\n\n    // Lyt efter klik p\xE5 knapperne\n    nextButton.addEventListener("click", slideNext);\n    prevButton.addEventListener("click", slidePrev);\n  });\n<\/script> -->'])), maybeRenderHead($$result), temaTitel, temaFiltret.map((film) => renderTemplate`<div class="snap-start scroll-mx-6 shrink-0  astro-DIDPTRRE">
            ${renderComponent($$result, "Plakatcard", $$Plakatcard, { "varighed": film.varighed, "genre": film.genre, "aarstal": film.aarstal, "filmTitle": film.filmTitel, "imgSrc": `../img/${film.imgTema}/${film.imgTitel}/imgPlakat.webp`, "slug": film.slug, "point": film.point, "kortResume": film.kortResume, "slug": film.slug, "class": "astro-DIDPTRRE" })}
          </div>`));
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/Plakat_karrusel.astro");

const herofilmdata = [
	{
		id: 1,
		filmTitel: "Lulu",
		slug: "lulu",
		originalTitel: "",
		aarstal: "2014",
		genre: "Drama",
		underGenre: [
			"kærlighed"
		],
		type: "kortfilm",
		varighed: "46 min",
		instruktor: [
			"Caroline Sascha Cogez"
		],
		manusforfatter: [
			"Tone Mygind Rostbøll"
		],
		medvirkende: [
			"Malin Crépin",
			"Jens Jørn Spottag",
			"Andreas Holm Dittmer"
		],
		langResume: "Galleristen Lulu elsker Henrik, som er en af hendes største kunder. Henrik er også vild med Lulu, men er gift med Sophia, som han driver sit firma med. Henrik inviterer Lulu med til sit gods i Frankrig. Turen skal være deres alene, en begyndelse til noget nyt. Men i huset i Frankrig forstyrres idyllen, da Henrik og Sophias feminine søn, David, uventet dukker op for at holde læseferie fra sin kostskole. Lulu og David prøver begge at finde deres vej i livet og i forholdet til Henrik. De søger begge efter kærlighed og higer efter at blive set som dem, de er. Instruktøren er den dansk-franske Caroline Sascha Cogez, der også har instrueret den fine dokumentar 'Hun synger'",
		kortResume: "Henrik inviterer Lulu med til sit gods i Frankrig. Turen skal være deres alene, en begyndelse til noget nyt.",
		sprog: [
			"Dansk",
			"Fransk"
		],
		land: [
			"Sverige",
			"Frankrig"
		],
		undertekst: "",
		filmfotograf: [
			"Magnus Nordenhof Jønck"
		],
		produktionsselskab: [
			"SF Film Produktion",
			"Fluxus Films"
		],
		emneord: [
			"parforhold",
			"far-søn forholdet",
			"jalousi",
			"danske film",
			"kortfilm"
		],
		ratingFilmstriben: "3",
		ratingAntal: "24",
		ratingIMDb: "6,8",
		point: "0",
		alder: "11",
		tema: "Far tema",
		imgTema: "splash",
		imgTitel: "Lulu"
	},
	{
		id: 2,
		filmTitel: "Drengevenner",
		slug: "drengevenner",
		originalTitel: "",
		aarstal: "2021",
		genre: "Kortfilm",
		underGenre: [
			"drama"
		],
		type: "Kortfilm",
		varighed: "18 min",
		instruktor: [
			"Joachim Morre"
		],
		manusforfatter: [
			"Joachim Morre"
		],
		medvirkende: [
			"Johan Bech Jespersen",
			"Rasmus Daugbjerg",
			"Anton Hjejle"
		],
		langResume: "To venner forbereder sig på at skulle til fest. Natten er ung og humøret er højt. Da vennen Simon ankommer, ændres stemningen drastisk. Der er noget han skal have sagt, men han er bange for, hvilke konsekvenser nyheden kan få for drengenes venskab.",
		kortResume: "To venner forbereder sig på at skulle til fest. Natten er ung og humøret er højt. Da vennen Simon ankommer, ændres stemningen drastisk.",
		sprog: [
			"Dansk"
		],
		land: [
			"Danmark"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Søren Kahr"
		],
		produktionsselskab: [
			"Isaac"
		],
		emneord: [
			"hemmeligheder",
			"jalousi",
			"venskab",
			"Danmark",
			"2020-2029",
			"danske film",
			"kortfilm"
		],
		ratingFilmstriben: "3",
		ratingAntal: "19",
		ratingIMDb: "8.7",
		point: "2",
		alder: "15",
		tema: "Danske kortfilm",
		imgTema: "Danske kortfilm",
		imgTitel: "Drengevenner",
		alt: ""
	},
	{
		id: 0,
		filmTitel: "Love Proof",
		slug: "Love proof",
		originalTitel: "Kärleksbevis",
		aarstal: "2022",
		genre: "thriller",
		underGenre: [
			"drama"
		],
		type: "Spillefilm",
		varighed: "1t 26min",
		instruktor: [
			"Richard Hobert"
		],
		manusforfatter: [
			"Richard Hobert"
		],
		medvirkende: [
			"Livia Millhagen",
			"Rolf Lassgård",
			"Hedda Rehnberg"
		],
		langResume: "Thomas og Marie skal skilles og mødes en sidste gang for at tømme og sælge sommerhuset. Ingen af dem kender den andens sande hensigter. En ung kvinde dukker pludselig op, drevet af jalousi og med sin egen dagsorden. Det, der skulle have været en civiliseret afslutning på et langt ægteskab, bliver minut for minut til en rystende weekend, der vender hele deres liv på hovedet.",
		kortResume: "Thomas og Marie skal skilles og mødes en sidste gang for at tømme og sælge sommerhuset. Ingen af dem kender den andens sande hensigter. En ung kvinde dukker pludselig op, drevet af jalousi og med sin egen dagsorden.",
		sprog: [
			"Svensk"
		],
		land: [
			"Sverige"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Andreas Troedsson"
		],
		produktionsselskab: [
			"Fundament Film"
		],
		emneord: [
			"ægteskab",
			"skilsmisse",
			"Sverige"
		],
		ratingFilmstriben: "4",
		ratingAntal: "18",
		ratingIMDb: "5,2",
		point: "4",
		alder: "11",
		tema: "splash",
		imgTema: "splash",
		imgTitel: "Love Proof"
	}
];

const $$Astro$7 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Hero;
  let tal = 0;
  herofilmdata.filter((film) => film.id === tal);
  return renderTemplate`${maybeRenderHead($$result)}<section id="slider" class="splash relative w-screen h-[60vh] md:h-[80vh] overflow-hidden grid astro-BBE6DXRZ">
  ${herofilmdata.map(
    (splashFilm) => (console.log(herofilmdata.length), renderTemplate`<a${addAttribute(`slide${splashFilm.id}`, "id")}${addAttribute(splashFilm.slug, "href")} class="slide w-full absolute h-full flex flex-shrink-0 flex-col justify-end overflow-hidden ease-linear duration-500 astro-BBE6DXRZ">
            <div class="bg-no-repeat bg-top w-screen h-[80vh] bg-cover flex flex-col justify-end  aspect-ratio astro-BBE6DXRZ"${addAttribute(`background-image: url("../img/${splashFilm.imgTema}/${splashFilm.imgTitel}/imgSingleview.webp")`, "style")}>
              <div class="bottom-5 px-20 py-6 w-full  justify-between flex items-end astro-BBE6DXRZ">
                <div class="astro-BBE6DXRZ">
                  <h1 class="text-2xl font-display uppercase  astro-BBE6DXRZ">
                    ${splashFilm.filmTitel}
                  </h1>
                  <div class="infoBar text-white flex gap-2 items-center body-lg  pb-2 astro-BBE6DXRZ">
                    <p class="text-white body-md astro-BBE6DXRZ">${splashFilm.varighed}</p>|
                    <p class="text-white body-md astro-BBE6DXRZ">${splashFilm.aarstal}</p>|
                    <p class="text-white body-md astro-BBE6DXRZ">${splashFilm.type}</p>|
                    <p class="text-white body-md astro-BBE6DXRZ">${splashFilm.genre}</p>|
                    <p class="text-white body-md astro-BBE6DXRZ">${splashFilm.point} point</p>
                  </div>
                  <div class="flex flex-col h-full gap-16  astro-BBE6DXRZ">
                    <div class="flex items-center gap-4 astro-BBE6DXRZ">
                      ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "typeIcon": "circle-play", "tekst": "Mere info", "class": "astro-BBE6DXRZ" })}

                      <div class="flex gap-4 astro-BBE6DXRZ">
                        ${renderComponent($$result, "Heart", $$Heart, { "variant": "medium", "class": "astro-BBE6DXRZ" })}
                        ${renderComponent($$result, "Info", $$Info, { "variant": "medium", "class": "astro-BBE6DXRZ" })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>`)
  )}
  <button class="btn btn-next astro-BBE6DXRZ"><p class="lightIcon text-grey-200 hover:text-white astro-BBE6DXRZ">angle-right</p></button>
  <button class="btn btn-prev astro-BBE6DXRZ"><p class="lightIcon text-grey-200 hover:text-white astro-BBE6DXRZ">angle-left</p></button>
</section>`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/Hero.astro");

const $$Astro$6 = createAstro();
const $$Tilbageknap = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Tilbageknap;
  const { tekst } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="text-white flex gap-3">
    <p class="lightIcon">arrow-left</p>
    <h4 class="hover:underline hover:cursor-pointer">${tekst}</h4>
</div>`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/Tilbageknap.astro");

const $$Astro$5 = createAstro();
const $$User = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$User;
  const { variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<button id="user"${addAttribute(variant, "data-variant")} class="astro-XTEEHV6R">
  <p class="lightIcon text-white hover:text-gold-400 astro-XTEEHV6R">user</p></button>`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/ikoner/user.astro");

const $$Astro$4 = createAstro();
const $$Play = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Play;
  const { variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<button${addAttribute(variant, "data-variant")} class=" astro-XYOXP36G"><p class="lightIcon hover:text-gold-500 astro-XYOXP36G">circle-play</p></button>`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/ikoner/play.astro");

const $$Astro$3 = createAstro();
const $$InfoPopup = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$InfoPopup;
  const { filmTitle, beskrivelse, medvikende } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div id="ikon" class="relative w-fit h-fit astro-FXUT7FFX">
  ${renderComponent($$result, "Info", $$Info, { "variant": "medium", "class": "astro-FXUT7FFX" })}
  <article id="info " class="absolute z-[800] -translate-y-6 astro-FXUT7FFX">
    <div class="bg-black astro-FXUT7FFX">
      <div class="bg-black w-96 p-10 astro-FXUT7FFX">
        <h2 class="font-display text-sm mb-2 astro-FXUT7FFX">Mulig titel${filmTitle}</h2>
        <div class="w-12 astro-FXUT7FFX"><img src="../alder/a.webp" alt="" class="astro-FXUT7FFX"></div>
        <p class="mt-2 astro-FXUT7FFX">
          Karl Skov er den succesfulde ejer af en stor elektronikfabrik, han er
          gift med Eva og har fem børn. De lever det gode, privilegerede
          overklasseliv på Strandvejen nord for København, da nazisterne
          besætter Danmark i april 1940. ${beskrivelse}
        </p>

        <p class="text-grey-200 mt-4 body-sm astro-FXUT7FFX">
          <span class="text-white astro-FXUT7FFX">Medvirkende:</span>
          Mulige medvirkedene, Jesper Christensen, Bodil Jørgensen, Mads Reuther
          <a href="../pages/Singleview.astro" class="astro-FXUT7FFX">Læs mere ${medvikende}</a>
        </p>
      </div>
    </div>
  </article>
</div>`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/Info_popup.astro");

const $$Astro$2 = createAstro();
const $$Karrusel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Karrusel;
  return renderTemplate`${maybeRenderHead($$result)}<section class="px-12">
  <!-- Content -->
  <div class="align-bottom mb-8">
    <h2 class="text-md">Oscar-film | vindere og nominerede</h2>
    <div class="progress_bar flex justify-end mr-8 gap-2">
      <div class="w-5 h-1 bg-grey-200"></div>
      <div class="w-5 h-1 bg-grey-500"></div>
      <div class="w-5 h-1 bg-grey-500"></div>
      <div class="w-5 h-1 bg-grey-500"></div>
      <div class="w-5 h-1 bg-grey-500"></div>
    </div>
  </div>

  <div>
    <div class="relative px-8 h-fit overflow-hidden">
      <div class="next-button absolute flex h-full w-fit justify-end right-0 z-40">
        <button class="bg-black opacity-80 w-40"><p class="lightIcon">angle-right</p>
        </button>
      </div>
      <div class="prev-button absolute flex h-full w-fit justify-end left-0 z-40">
        <button class="bg-black opacity-80 w-40"><p class="lightIcon">angle-left</p>
        </button>
      </div>
      <div class="carousel relative w-full flex gap-16 snap-x snap-mandatory overflow-x-auto" style="">
        <div class="snap-start scroll-mx-6 shrink-0">
          <div class="shrink-0 w-0"></div>
        </div>
        <div class="card snap-start scroll-mx-6 shrink-0">
          ${renderComponent($$result, "Plakatcard", $$Plakatcard, {})}
        </div>
        <div class="card snap-start scroll-mx-6 shrink-0">
          ${renderComponent($$result, "Plakatcard", $$Plakatcard, {})}
        </div>
        <div class="card snap-start scroll-mx-6 shrink-0">
          ${renderComponent($$result, "Plakatcard", $$Plakatcard, {})}
        </div>
        <div class="card snap-start scroll-mx-6 shrink-0">
          ${renderComponent($$result, "Plakatcard", $$Plakatcard, {})}
        </div>
        <div class="card snap-start scroll-mx-6 shrink-0">
          ${renderComponent($$result, "Plakatcard", $$Plakatcard, {})}
        </div>
        <div class="card snap-start scroll-mx-6 shrink-0">
          ${renderComponent($$result, "Plakatcard", $$Plakatcard, {})}
        </div>
        <div class="card snap-start scroll-mx-6 shrink-0">
          ${renderComponent($$result, "Plakatcard", $$Plakatcard, {})}
        </div>
        <div class="card snap-start scroll-mx-6 shrink-0">
          ${renderComponent($$result, "Plakatcard", $$Plakatcard, {})}
        </div>
        <div class="card snap-start scroll-mx-6 shrink-0">
          ${renderComponent($$result, "Plakatcard", $$Plakatcard, {})}
        </div>
        <div class="card snap-start scroll-mx-6 shrink-0">
          ${renderComponent($$result, "Plakatcard", $$Plakatcard, {})}
        </div>
        <div class="snap-start scroll-mx-6 shrink-0">
          <div class="shrink-0 w-3 sm:w-96 h-40 sm:-ml-[2px]"></div>
        </div>
      </div>
    </div>
  </div>
</section>`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/Karrusel.astro");

const $$Astro$1 = createAstro();
const $$Stortplay = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Stortplay;
  return renderTemplate`${maybeRenderHead($$result)}<div class="astro-3CTWJO4U">
  <p class="solidIcon text-gold-500 hover:text-gold-200 astro-3CTWJO4U">circle-play</p>
</div>`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/ikoner/Stortplay.astro");

const $$Astro = createAstro();
const $$Componentsite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Componentsite;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "komponent udviklings side" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Hero", $$Hero, {})}
  ${maybeRenderHead($$result2)}<main>
    ${renderComponent($$result2, "Header_heart", $$HeaderHeart, { "variant": "large" })}
    ${renderComponent($$result2, "Header_user", $$HeaderUser, {})}

    ${renderComponent($$result2, "Procesbar", $$Procesbar, {})}
    ${renderComponent($$result2, "Sogbar", $$Sogbar, {})}
    ${renderComponent($$result2, "Plakat_karrusel", $$PlakatKarrusel, { "temaTitel": "Oscar-film | vindere og nominerede" })}
    ${renderComponent($$result2, "Tema_karrusel", $$TemaKarrusel, { "temaTitel": "Film om Mongoliet" })}

    ${renderComponent($$result2, "Filtrering", $$Filtrering, {})}
    <div class="flex flex-row w-full justify-between gap-4 px-10">
      ${renderComponent($$result2, "MovieCard", $$Moviecard, {})}
      ${renderComponent($$result2, "MovieCard", $$Moviecard, {})}
      ${renderComponent($$result2, "MovieCard", $$Moviecard, {})}
    </div>

    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 lg:gap-4 px-10">
      ${filmdatabase.map((film) => renderTemplate`${renderComponent($$result2, "MovieCard", $$Moviecard, { "varighed": film.varighed, "genre": film.genre, "aarstal": film.aarstal, "filmTitle": film.filmTitel, "imgSrc": `../img/${film.imgTema}/${film.imgTitel}/imgCard.webp`, "slug": film.slug, "point": film.point })}`)}
    </section>

    ${renderComponent($$result2, "Button", $$Button, { "variant": "primary", "tekst": "primary", "typeIcon": "play" })}
    ${renderComponent($$result2, "Button", $$Button, { "variant": "primary-uden-icon", "tekst": "primary-uden-icon", "typeIcon": "play" })}
    ${renderComponent($$result2, "Button", $$Button, { "variant": "secondary", "tekst": "secondary", "typeIcon": "sliders" })}
    ${renderComponent($$result2, "Button", $$Button, { "variant": "secondary-uden-icon", "tekst": "secondary-uden-icon" })}

    ${renderComponent($$result2, "Tilbageknap", $$Tilbageknap, { "tekst": "Tilbage" })}
    ${renderComponent($$result2, "Plakatcard", $$Plakatcard, {})}
    ${renderComponent($$result2, "Maanedscard", $$Maanedscard, {})}
    ${renderComponent($$result2, "Heart", $$Heart, { "variant": "medium" })}
    ${renderComponent($$result2, "Sog", $$Sog, { "variant": "medium" })}
    ${renderComponent($$result2, "User", $$User, { "variant": "medium" })}
    ${renderComponent($$result2, "Del", $$Del, { "variant": "medium" })}
    ${renderComponent($$result2, "Star", $$Star, { "variant": "large" })}
    ${renderComponent($$result2, "Facebook", $$Facebook, { "variant": "medium" })}
    ${renderComponent($$result2, "Instagram", $$Instagram, { "variant": "medium" })}
    ${renderComponent($$result2, "Twitter", $$Twitter, { "variant": "medium" })}
    ${renderComponent($$result2, "Play", $$Play, { "variant": "medium" })}
    ${renderComponent($$result2, "Kryds", $$Kryds, { "variant": "medium" })}
    ${renderComponent($$result2, "Info", $$Info, { "variant": "medium" })}
    ${renderComponent($$result2, "Detaljertags", $$Detaljertags, { "tekst": "Dansk" })}
    ${renderComponent($$result2, "Temacard", $$Temacard, {})}
    ${renderComponent($$result2, "Play_popup", $$PlayPopup, {})}
    ${renderComponent($$result2, "Karrusel", $$Karrusel, {})}
    ${renderComponent($$result2, "Stjernerating", $$Stjernerating, {})}
    ${renderComponent($$result2, "IMDB", $$Imdb, {})}
    ${renderComponent($$result2, "Stortplay", $$Stortplay, {})}
    ${renderComponent($$result2, "Info_popup", $$InfoPopup, {})}
  </main>
` })}`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/pages/componentsite.astro");

const $$file = "/Users/charlottefranciska/Documents/KEA/4. semster /Vi prøver igen/filmstriben/src/pages/componentsite.astro";
const $$url = "/componentsite";

const componentsite = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Componentsite,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Hero as $, $$PlakatKarrusel as a, $$Maanedscard as b, $$TemaKarrusel as c, componentsite as d };
