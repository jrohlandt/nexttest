import Head from "next/head";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/pokemon/ditto");
  };
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      Welcome!
      <button onClick={handleClick}>Pokemon</button>
    </div>
  );
}

export default Home;
