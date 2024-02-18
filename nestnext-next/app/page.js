import Head from "next/head";
import Layout from "../components/layout/layout";
import ToDoList from "../components/todo/todo-list";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Full Stack App</title>
        <meta name="description" content="Full Stack App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ToDoList />
      </Layout>
    </div>
  );
}
