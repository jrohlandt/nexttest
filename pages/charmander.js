import Head from "next/head";
function Pokemon({ pokemon }) {
  return (
    <div>
      <Head>
        <title>Pokemon - {pokemon?.name}</title>
      </Head>
      {pokemon?.name}
      <img src={pokemon?.sprites.front_default} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/charmander");
  const pokemon = await res.json();
  return {
    props: { pokemon },
  };
}
export default Pokemon;
