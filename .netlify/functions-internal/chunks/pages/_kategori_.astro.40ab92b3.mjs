/* empty css                             */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent } from '../astro.9b869f1a.mjs';
import 'html-escaper';
import { d as filmkategori, a as filmdatabase, $ as $$UndersideLayout, b as $$Moviecard, c as $$Layout } from './_alder_.astro.d3e97eab.mjs';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                                   *//* empty css                            *//* empty css                             *//* empty css                             */
const $$Astro = createAstro();
async function getStaticPaths() {
  return filmkategori.map((kategori) => {
    return {
      params: { kategori },
      props: { kategoriData: kategori }
    };
  });
}
const $$kategori = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$kategori;
  Astro2.params;
  const { kategoriData } = Astro2.props;
  const filtretGenre = filmdatabase.filter(
    (film) => film.type === kategoriData || film.genre.includes(kategoriData)
  );
  console.log(filmdatabase.length);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": kategoriData }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "UndersideLayout", $$UndersideLayout, { "undersideTitel": kategoriData, "antaltTitler": filtretGenre.length }, { "default": ($$result3) => renderTemplate`${filtretGenre.map((film) => renderTemplate`${renderComponent($$result3, "MovieCard", $$Moviecard, { "varighed": film.varighed, "genre": film.genre, "aarstal": film.aarstal, "filmTitle": film.filmTitel, "imgSrc": `../img/${film.imgTema}/${film.imgTitel}/imgCard.webp`, "slug": film.slug, "point": film.point })}`)}` })}
` })}`;
}, "/Users/charlottefranciska/Documents/KEA/filmstriben/src/pages/[kategori].astro");

const $$file = "/Users/charlottefranciska/Documents/KEA/filmstriben/src/pages/[kategori].astro";
const $$url = "/[kategori]";

export { $$kategori as default, $$file as file, getStaticPaths, $$url as url };
