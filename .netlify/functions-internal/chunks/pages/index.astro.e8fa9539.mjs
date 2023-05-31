/* empty css                             */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.9b869f1a.mjs';
import 'html-escaper';
import { a as filmdatabase, c as $$Layout } from './_alder_.astro.d19dbea5.mjs';
import { $ as $$Hero, a as $$PlakatKarrusel, b as $$Maanedscard, c as $$TemaKarrusel } from './componentsite.astro.895a4808.mjs';
import { f as $$PrimarycardKarrusel } from './_slug_.astro.66ddc43a.mjs';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                                   *//* empty css                            *//* empty css                             *//* empty css                             *//* empty css                                   *//* empty css                                   *//* empty css                                   *//* empty css                            *//* empty css                            *//* empty css                            */
const $$Astro = createAstro("https://filmstriben.netlify.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  filmdatabase.filter((film) => film.tema === "K\xE6rlighed");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Filmstriben | Forside" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Hero", $$Hero, {})}
  
  ${maybeRenderHead($$result2)}<main class="flex flex-col gap-20 pt-12">
    ${renderComponent($$result2, "Primarycard_karrusel", $$PrimarycardKarrusel, { "temaTitel": "Popul\xE6re" })}

    <section class="flex flex-row px-20 justify-between text-center">
      <div class="flex flex-col justify-items-center gap-5">
        <p class="lightIcon text-lg text-gold-500">ticket</p>
        <h3 class="text-sm font-display uppercase">Point</h3>
        <p class="max-w-[25ch] body-md text-grey-200">
          Du skal bruge point for at se film på Filmstriben. Point uddeles
          automatisk af biblioteket i din bopælskommune. <a href="">Læs mere</a>
        </p>
      </div>
      <div class="flex flex-col justify-items-center gap-5">
        <p class="lightIcon font-extralight text-lg text-gold-500">
          camera-movie
        </p>
        <h3 class="text-sm font-display uppercase">Om Filmstriben</h3>
        <p class="max-w-[25ch] body-md text-grey-200">
          Filmstriben indeholder en bred vifte af spillefilm, kort- og
          dokumentarfilm for børn, unge og voksne.
        </p>
      </div>
      <div class="flex flex-col justify-items-center gap-5">
        <p class="lightIcon text-lg text-gold-500">film</p>
        <h3 class="text-sm font-display uppercase">Låneperiode</h3>
        <p class="max-w-[25ch] body-md text-grey-200">
          Du låner filmen i 48 timer. <br> Når låneperioden er afsluttet, skal
          du ikke foretage dig yderligere
        </p>
      </div>
      <div class="flex flex-col justify-items-center gap-5">
        <p class="lightIcon text-lg text-gold-500">popcorn</p>
        <h3 class="text-sm font-display uppercase">Hjemmebio</h3>
        <p class="max-w-[25ch] body-md text-grey-200">
          På Filmstriben kan du se film, når det passer dig. På din computer,
          tablet, smartphone eller Apple TV - og via Chromecast eller Airplay.
        </p>
      </div>
    </section>
    ${renderComponent($$result2, "Primarycard_karrusel", $$PrimarycardKarrusel, { "temaTitel": "Mine favoritter" })}
    ${renderComponent($$result2, "Plakat_karrusel", $$PlakatKarrusel, { "temaTitel": "Oscar-film | vindere og nominerede" })}

    ${renderComponent($$result2, "Primarycard_karrusel", $$PrimarycardKarrusel, { "temaTitel": "Senest tilf\xF8jet" })}
    <section>
      ${renderComponent($$result2, "Maanedscard", $$Maanedscard, {})}
    </section>
    ${renderComponent($$result2, "Primarycard_karrusel", $$PrimarycardKarrusel, { "temaTitel": "K\xE6rlighed" })}
    ${renderComponent($$result2, "Tema_karrusel", $$TemaKarrusel, { "temaTitel": "Film om Mongoliet" })}

    ${renderComponent($$result2, "Primarycard_karrusel", $$PrimarycardKarrusel, { "temaTitel": "Danske kortfilm" })}
  </main>
` })}`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/pages/index.astro");

const $$file = "/Users/charlottefranciska/Documents/KEA/4. semster /Vi prøver igen/filmstriben/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
