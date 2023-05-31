/* empty css                             */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent } from '../astro.9b869f1a.mjs';
import 'html-escaper';
import { f as filmgenre, a as filmdatabase, $ as $$UndersideLayout, b as $$Moviecard, c as $$Layout } from './_alder_.astro.d3e97eab.mjs';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                                   *//* empty css                            *//* empty css                             *//* empty css                             */
const $$Astro = createAstro();
async function getStaticPaths() {
  return filmgenre.map((genre) => {
    return {
      params: { genre },
      props: { genreData: genre }
    };
  });
}
const $$genre = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$genre;
  Astro2.params;
  const { genreData } = Astro2.props;
  console.log(genreData.length);
  const filtretGenre = filmdatabase.filter(
    (film) => film.genre === genreData || film.underGenre.includes(genreData)
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": genreData }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "UndersideLayout", $$UndersideLayout, { "undersideTitel": genreData, "antaltTitler": filtretGenre.length }, { "default": ($$result3) => renderTemplate`${filtretGenre.map(
    (film) => (console.log(film), renderTemplate`${renderComponent($$result3, "MovieCard", $$Moviecard, { "varighed": film.varighed, "genre": film.genre, "aarstal": film.aarstal, "filmTitle": film.filmTitel, "imgSrc": `../img/${film.imgTema}/${film.imgTitel}/imgCard.webp`, "slug": film.slug, "point": film.point })}`)
  )}` })}
` })}`;
}, "/Users/charlottefranciska/Documents/KEA/filmstriben/src/pages/[genre].astro");

const $$file = "/Users/charlottefranciska/Documents/KEA/filmstriben/src/pages/[genre].astro";
const $$url = "/[genre]";

export { $$genre as default, $$file as file, getStaticPaths, $$url as url };
