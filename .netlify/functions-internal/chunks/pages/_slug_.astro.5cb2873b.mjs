/* empty css                             */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as addAttribute } from '../astro.9b869f1a.mjs';
import 'html-escaper';
import { a as filmdatabase, b as $$Moviecard, e as $$Button, g as $$Kryds, c as $$Layout, h as $$Heart } from './_alder_.astro.cc5b9454.mjs';
/* empty css                                   *//* empty css                            *//* empty css                            *//* empty css                            */
const $$Astro$7 = createAstro();
const $$Imdb = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Imdb;
  const { tal } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<a href="https://www.imdb.com/" class="astro-Z3I7WSZ3">
<div class="flex gap-2 items-baseline astro-Z3I7WSZ3">
  <img class=" astro-Z3I7WSZ3" src="../imdb.svg" alt="imdb logo">
  <p class="body-sm text-grey-300 astro-Z3I7WSZ3">
    <strong class="text-white body-lg astro-Z3I7WSZ3">${tal}</strong> /10
  </p>
</div>
</a>`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/Imdb.astro");

const $$Astro$6 = createAstro();
const $$PrimarycardKarrusel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$PrimarycardKarrusel;
  const { temaTitel } = Astro2.props;
  const temaFiltret = filmdatabase.filter(
    (film) => film.tema === temaTitel || film.tema.includes(temaTitel)
  );
  return renderTemplate`${maybeRenderHead($$result)}<section class="carouselwrapper relative z-0 w-full px-20 astro-CUTNHXE5">
  <div class="align-bottom mb-4 astro-CUTNHXE5">
    <h2 class="text-xs font-robotoHeader tracking-wider text-grey-100 astro-CUTNHXE5">
      ${temaTitel}
    </h2>
    <div class="carousel-indicators flex justify-end gap-2 astro-CUTNHXE5">
      <div class="indicator active w-5 h-1 bg-grey-200 astro-CUTNHXE5"></div>
      <div class="indicator w-5 h-1 bg-grey-500 astro-CUTNHXE5"></div>
      <div class="indicator w-5 h-1 bg-grey-500 astro-CUTNHXE5"></div>
      <div class="indicator w-5 h-1 bg-grey-500 astro-CUTNHXE5"></div>
      <div class="indicator w-5 h-1 bg-grey-500 astro-CUTNHXE5"></div>
    </div>
  </div>
  <section class="relative h-fit overflow-hidden astro-CUTNHXE5">
    <div class="next-button absolute h-full w-fit justify-end right-0 z-40 astro-CUTNHXE5">
      <button class="bg-black opacity-75 w-20 astro-CUTNHXE5"><p class="lightIcon astro-CUTNHXE5">angle-right</p>
      </button>
    </div>
    <div class="prev-button absolute h-full w-fit justify-end left-0 z-40 astro-CUTNHXE5">
      <button class="bg-black opacity-75 w-20 astro-CUTNHXE5"><p class="lightIcon astro-CUTNHXE5">angle-left</p>
      </button>
    </div>
    <div class="scroll noScrollbar carousel relative flex gap-4 overflow-x-scroll ease-linear duration-500 astro-CUTNHXE5">
      ${temaFiltret.map((film) => renderTemplate`<div class=" snap-start shrink-0  astro-CUTNHXE5">
            ${renderComponent($$result, "MovieCard", $$Moviecard, { "varighed": film.varighed, "genre": film.genre, "aarstal": film.aarstal, "filmTitle": film.filmTitel, "imgSrc": `../img/${film.imgTema}/${film.imgTitel}/imgCard.webp`, "slug": film.slug, "point": film.point, "class": "astro-CUTNHXE5" })}
          </div>`)}
    </div>
  </section>
</section>`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/Primarycard_karrusel.astro");

const $$Astro$5 = createAstro();
const $$Del = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Del;
  const { variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<button id="del"${addAttribute(variant, "data-variant")} class=" astro-3S3QJ2T3">
  <p class="lightIcon text-white hover:text-gold-500 astro-3S3QJ2T3">
    share
  </p></button>`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/ikoner/del.astro");

const $$Astro$4 = createAstro();
const $$Detaljertags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Detaljertags;
  const { tekst } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<button class="text-white py-1 px-3 border w-fit rounded-md border-gold-500 hover:bg-gold-500">
  <p class="body-xs">${tekst}</p>
</button>`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/Detaljertags.astro");

const $$Astro$3 = createAstro();
const $$Star = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Star;
  const { variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<button id="star"${addAttribute(variant, "data-variant")} class="hover:text-gold-500 astro-UJDDWOOJ">
  <p class="text-grey-200 hover:text-gold-500 solidIcon astro-UJDDWOOJ">star</p></button>`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/ikoner/star.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$PlayPopup = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PlayPopup;
  return renderTemplate(_a || (_a = __template(["", '<article id="popupContainer" class="bg-black bg-opacity-90 border border-gold-500 w-fit h-fit py-6 px-32">\n  <div id="closeButton" class="luk flex w-full justify-end">\n    ', '\n  </div>\n  <div class="flex flex-col items-center gap-4">\n    <h2 class="text-lg font-display">Love proof</h2>\n    <div class="flex flex-col gap-1 items-center">\n      <p class="body-lg text-grey-200">\n        Hver film du l\xE5ner har du til r\xE5dighed i 48 timer.\n      </p>\n      <img src="../hjul.svg" alt="" class="w-3/5 mt-2">\n      <p class="mt-2">Herefter har du 8 point tilbage denne m\xE5ned</p>\n      <p class="text-grey-200">\n        L\xE6s mere om point <a href="/" class="underline">her</a>\n      </p>\n    </div>\n    ', '\n  </div>\n  <div class="w-full mt-4">\n    <p class="body-sm">Dit biblotek</p>\n    <p class="font-bold">K\xF8benhavns biblioteker</p>\n  </div>\n</article>\n\n<!-- <script>\n  document.getElementById("myButton").addEventListener("click", function () {\n    var popup = document.getElementById("popupContainer");\n    popup.style.display = "block";\n  });\n\n  document.getElementById("closeButton").addEventListener("click", function () {\n    var popup = document.getElementById("popupContainer");\n    popup.style.display = "none";\n  });\n<\/script> -->'])), maybeRenderHead($$result), renderComponent($$result, "Kryds", $$Kryds, { "variant": "medium" }), renderComponent($$result, "Button", $$Button, { "variant": "primary", "tekst": "L\xE5n film", "btnClass": "fuldKnap" }));
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/Play_popup.astro");

const $$Astro$1 = createAstro();
const $$Stjernerating = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Stjernerating;
  const { antal } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="rating flex items-baseline gap-2">
  <div class="">
    ${renderComponent($$result, "Star", $$Star, { "variant": "small" })}
    ${renderComponent($$result, "Star", $$Star, { "variant": "small" })}
    ${renderComponent($$result, "Star", $$Star, { "variant": "small" })}
    ${renderComponent($$result, "Star", $$Star, { "variant": "small" })}
    ${renderComponent($$result, "Star", $$Star, { "variant": "small" })}
  </div>
  <div>
    <p class="body-sm text-grey-400">
      Filmstribens bruger (${antal})
    </p>
  </div>
</div>

<!-- <div class="MoviePlayer-rating-item flex">
  <div>
    <button class="MoviePlayer-stars_f fa fa-star active before:text-gold-500">
      <img class="star" src="public/icons/star.svg" alt="" />
    </button>
  </div>
</div>
  </div>

<style>
.hover\\\\:lightIcon:hover,
.hover\\\\:lightIcon:hover ~ .hover\\\\:lightIcon {
  fill: yellow !important;
}
</style>    
  
  .MoviePlayer-rating-item {
    display: inline-block;
  }

  .MoviePlayer-stars_f.active {
    color: #ffd200;
  }
</style>

-->`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/Stjernerating.astro");

const $$Astro = createAstro();
async function getStaticPaths() {
  return filmdatabase.map((film) => {
    return {
      params: { slug: film.slug },
      props: { myData: film }
    };
  });
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { myData } = Astro2.props;
  console.log(myData);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Filmstriben | ${myData.filmTitel}`, "class": "astro-YVBAHNFJ" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<aside id="popup" class="hidden bg-black bg-opacity-70 fixed justify-center items-center top-0 left-0 w-screen h-screen z-[400] astro-YVBAHNFJ">
    ${renderComponent($$result2, "PlayPopup", $$PlayPopup, { "class": "astro-YVBAHNFJ" })}
  </aside>
  <div class="splash relative w-full h-[60vw] md:h-[40vw] overflow-hidden flex astro-YVBAHNFJ">
    <div id="silder" class="absolute -z-20 flex overflow-hidden astro-YVBAHNFJ">
      <div id="splashSilde1" class="slide bg-no-repeat absolute bg-cover bg-top w-screen h-[40vw] flex flex-col justify-end aspect-ratio ease-in-out duration-700 astro-YVBAHNFJ"${addAttribute(`background-image: url("../../../img/${myData.imgTema}/${myData.imgTitel}/imgSingleview.webp")`, "style")}>
      </div>
      <div id="splashSilde2" class="slide bg-no-repeat bg-cover bg-top w-screen h-[40vw] flex flex-col justify-end aspect-ratio ease-in-out duration-700 astro-YVBAHNFJ"${addAttribute(`background-image: url("../../../img/${myData.imgTema}/${myData.imgTitel}/imgSingleview2.webp")`, "style")}>
      </div>
    </div>
    <a class="text-white absolute m-12 astro-YVBAHNFJ" href="#" onclick="history.go(-1); return false;">
      <span class="lightIcon astro-YVBAHNFJ">arrow-left</span> Tilbage</a>
    <div class="bottom-5 px-10 py-6 w-full justify-between flex items-end astro-YVBAHNFJ">
      <div class="astro-YVBAHNFJ">
        <h1 class="text-2xl font-display uppercase mb-2 max-w-[20ch] astro-YVBAHNFJ">
          ${myData.filmTitel}
        </h1>

        <div class="flex items-center gap-4 astro-YVBAHNFJ">
          ${renderComponent($$result2, "Button", $$Button, { "btnClass": "openPopup", "variant": "primary", "typeIcon": "circle-play", "tekst": "L\xE5n filmen", "class": "astro-YVBAHNFJ" })}
          ${renderComponent($$result2, "Button", $$Button, { "variant": "secondary-uden-icon", "tekst": "Se forsmag", "class": "astro-YVBAHNFJ" })}

          <div class="flex gap-4 astro-YVBAHNFJ">
            <p class="text-white hover:text-gold-500 astro-YVBAHNFJ">
              Føj til favoritter ${renderComponent($$result2, "Heart", $$Heart, { "class": "astro-YVBAHNFJ" })}
            </p>
            <div class="flex gap-2 astro-YVBAHNFJ">
              <p class="text-white hover:text-gold-500 astro-YVBAHNFJ">Del</p>${renderComponent($$result2, "Del", $$Del, { "class": "astro-YVBAHNFJ" })}
            </div>
          </div>
        </div>
      </div>
      <div class="w-20 astro-YVBAHNFJ">
        <img${addAttribute(`../alder/${myData.alder}.webp`, "src")} alt="" class="astro-YVBAHNFJ">
      </div>
    </div>
  </div>
  <main class="astro-YVBAHNFJ">
    <section class="grid grid-cols-2 my-8 px-10 gap-16 astro-YVBAHNFJ">
      <div class="flex flex-col h-full gap-16 pt-4 astro-YVBAHNFJ">
        <div class="infoBar text-grey-200 flex gap-2 items-center body-lg astro-YVBAHNFJ">
          <p class="text-grey-200 body-md astro-YVBAHNFJ">${myData.varighed}</p>|
          <p class="text-grey-200 body-md astro-YVBAHNFJ">${myData.aarstal}</p>|
          <p class="text-grey-200 body-md astro-YVBAHNFJ">${myData.type}</p>|
          <p class="text-grey-200 body-md astro-YVBAHNFJ">${myData.genre}</p>|
          <p class="text-grey-200 body-md astro-YVBAHNFJ">${myData.point} point</p>
        </div>

        <p class="text-white resume max-w-prose body-md astro-YVBAHNFJ">
          ${myData.langResume}
        </p>
        <div class="grid gap-4 astro-YVBAHNFJ">
          ${renderComponent($$result2, "Stjernerating", $$Stjernerating, { "antal": myData.ratingAntal, "class": "astro-YVBAHNFJ" })}
          ${renderComponent($$result2, "Imdb", $$Imdb, { "tal": myData.ratingIMDb, "class": "astro-YVBAHNFJ" })}
        </div>
      </div>

      <div class="dividerLeft py-4 pl-16 astro-YVBAHNFJ">
        <h3 class="text-xs text-white mb-8 astro-YVBAHNFJ">DETALJER:</h3>

        <div class="text-white grid grid-cols-[auto_minmax(0px,_1fr)] gap-y-4 gap-x-20 astro-YVBAHNFJ">
          <p class="text-white astro-YVBAHNFJ">Sprog:</p>
          <div class="tagWrapper astro-YVBAHNFJ">
            ${myData.sprog && myData.sprog.map((sprog) => renderTemplate`${renderComponent($$result2, "Detaljertags", $$Detaljertags, { "tekst": sprog, "class": "astro-YVBAHNFJ" })}`)}
          </div>
          <p class="text-white astro-YVBAHNFJ">Land:</p>
          <div class="tagWrapper astro-YVBAHNFJ">
            ${myData.land && myData.land.map((land) => renderTemplate`${renderComponent($$result2, "Detaljertags", $$Detaljertags, { "tekst": land, "class": "astro-YVBAHNFJ" })}`)}
          </div>

          <p class="astro-YVBAHNFJ">Undergenre:</p>
          <div class="tagWrapper astro-YVBAHNFJ">
            ${myData.underGenre && myData.underGenre.map((underGenre) => renderTemplate`${renderComponent($$result2, "Detaljertags", $$Detaljertags, { "tekst": underGenre, "class": "astro-YVBAHNFJ" })}`)}
          </div>
          <p class="astro-YVBAHNFJ">Instruktør:</p>
          <div class="tagWrapper astro-YVBAHNFJ">
            ${myData.instruktor && myData.instruktor.map((instruktor) => renderTemplate`${renderComponent($$result2, "Detaljertags", $$Detaljertags, { "tekst": instruktor, "class": "astro-YVBAHNFJ" })}`)}
          </div>

          <p class="astro-YVBAHNFJ">Medvirkende:</p>
          <div class="tagWrapper astro-YVBAHNFJ">
            ${myData.medvirkende && myData.medvirkende.map((medvirkende) => renderTemplate`${renderComponent($$result2, "Detaljertags", $$Detaljertags, { "tekst": medvirkende, "class": "astro-YVBAHNFJ" })}`)}
          </div>
          <p class="astro-YVBAHNFJ">Manuskriptforfatter:</p>
          <div class="tagWrapper astro-YVBAHNFJ">
            ${myData.manusforfatter && myData.manusforfatter.map((manusforfatter) => renderTemplate`${renderComponent($$result2, "Detaljertags", $$Detaljertags, { "tekst": manusforfatter, "class": "astro-YVBAHNFJ" })}`)}
          </div>
          <p class="astro-YVBAHNFJ">Filmfotografer:</p>
          <div class="tagWrapper astro-YVBAHNFJ">
            ${myData.filmfotograf && myData.filmfotograf.map((filmfotograf) => renderTemplate`${renderComponent($$result2, "Detaljertags", $$Detaljertags, { "tekst": filmfotograf, "class": "astro-YVBAHNFJ" })}`)}
          </div>

          <p class="astro-YVBAHNFJ">Produktionsselskab:</p>
          <div class="tagWrapper astro-YVBAHNFJ">
            ${myData.produktionsselskab && myData.produktionsselskab.map((produktionsselskab) => renderTemplate`${renderComponent($$result2, "Detaljertags", $$Detaljertags, { "tekst": produktionsselskab, "class": "astro-YVBAHNFJ" })}`)}
          </div>

          <p class="astro-YVBAHNFJ">Emneord:</p>
          <div class="tagWrapper astro-YVBAHNFJ">
            ${myData.emneord.map((emneord) => renderTemplate`${renderComponent($$result2, "Detaljertags", $$Detaljertags, { "tekst": emneord, "class": "astro-YVBAHNFJ" })}`)}
          </div>
        </div>
      </div>
    </section>

    ${renderComponent($$result2, "Primarycard_karrusel", $$PrimarycardKarrusel, { "temaTitel": "Film i samme genre", "class": "astro-YVBAHNFJ" })}
  </main>
` })}

`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/pages/[slug].astro");

const $$file = "/Users/charlottefranciska/Documents/KEA/4. semster /Vi prøver igen/filmstriben/src/pages/[slug].astro";
const $$url = "/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Imdb as $, _slug_ as _, $$Del as a, $$Star as b, $$Detaljertags as c, $$PlayPopup as d, $$Stjernerating as e, $$PrimarycardKarrusel as f };
