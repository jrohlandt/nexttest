import Head from "next/head";
import styles from "./Pokemon.module.css";

function Pokemon({ pokemon }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon - {pokemon?.name}</title>
      </Head>
      {pokemon?.name}
      <img src={pokemon?.sprites.front_default} />
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const pokemon = await res.json();

  let paths = pokemon.results.map((p) => {
    return `/pokemon/${p.name}`;
  });

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemon}`
  );
  const pokemon = await res.json();
  return {
    props: { pokemon },
  };
}
export default Pokemon;
