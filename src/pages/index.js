import Head from "next/head";

export default function Home({ formattedDate }) {
  return (
    <>
      <Head>
        <title>Next.js on Amplify Demo</title>
        <meta name="description" content="Next.js on Amplify Demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1>Static Page</h1>
      <p>This page is static. It was built on {formattedDate}.</p>
      <p>
        <a href="/ssr">View a server-side rendered page.</a>
      </p>
    </>
  );
}

export async function getStaticProps() {
  const buildDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(buildDate);

  return { props: { formattedDate } };
}
