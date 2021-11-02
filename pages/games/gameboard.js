import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";
//import styles from "../../styles/gameboard.page.css";

export default function GameBoard() {
  return (
    <Layout>
      <Head>
        <title>Gameboard</title>
      </Head>
      <Image
        src="/images/reverse-uno.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={400} // Desired size with correct aspect ratio
        alt="Your Name"
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
