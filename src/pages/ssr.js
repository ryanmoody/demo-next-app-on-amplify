import Head from "next/head";

export default function SSR({ formattedDate }) {
  return (
    <>
      <Head>
        <title>Next.js on Amplify Demo</title>
        <meta name="description" content="Next.js on Amplify Demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1>Server-Side Rendered Page</h1>
      <p>
        This page is server-side rendered. It was rendered on {formattedDate}.
      </p>
      <p>
        <a href="/">View a static page.</a>
      </p>
    </>
  );
}

export async function getServerSideProps() {
  const renderDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(renderDate);

  console.log(
    `SSR ran on ${formattedDate}. This will be logged in CloudWatch.`
  );

  return { props: { formattedDate } };
}
