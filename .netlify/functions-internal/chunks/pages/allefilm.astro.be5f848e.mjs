/* empty css                             */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent } from '../astro.9b869f1a.mjs';
import 'html-escaper';
import { $ as $$UndersideLayout, a as filmdatabase, b as $$Moviecard, c as $$Layout } from './_alder_.astro.d19dbea5.mjs';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                                   *//* empty css                            *//* empty css                             *//* empty css                             */
const $$Astro = createAstro("https://filmstriben.netlify.app");
const $$Allefilm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Allefilm;
  const antalfilm = filmdatabase.length;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Alle film" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "UndersideLayout", $$UndersideLayout, { "undersideTitel": "Alle film", "antaltTitler": antalfilm }, { "default": ($$result3) => renderTemplate`${filmdatabase.map((film) => renderTemplate`${renderComponent($$result3, "MovieCard", $$Moviecard, { "varighed": film.varighed, "genre": film.genre, "aarstal": film.aarstal, "filmTitle": film.filmTitel, "imgSrc": `../img/${film.imgTema}/${film.imgTitel}/imgCard.webp`, "slug": film.slug, "point": film.point })}`)}` })}
` })}`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/pages/allefilm.astro");

const $$file = "/Users/charlottefranciska/Documents/KEA/4. semster /Vi prøver igen/filmstriben/src/pages/allefilm.astro";
const $$url = "/allefilm";

export { $$Allefilm as default, $$file as file, $$url as url };
