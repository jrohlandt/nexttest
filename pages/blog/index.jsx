import Head from "next/head";
import Link from "next/link";

function Home() {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      blog!
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
}

export default Home;
