import Head from "next/head";

export default function PageTitle({ title }) {
  return (
    <>
      <Head>
        <title>AVLocals - {title}</title>
      </Head>
    </>
  );
}
