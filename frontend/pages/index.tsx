import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { TodoList } from '../features/todos/index';
import st from '../styles/sass/index.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name='description'
          content='Generated by create next app'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>

      <main className={st.main}>
        <h1 className={st.list_top}>ToDo App</h1>
        <div className={st.main_top}>
          <h2 className={st.search_top}>Search ToDo</h2>
          <Link className={st.create_top} href={'/todos/form'}>Create ToDo</Link>
        </div>
        <TodoList />
      </main>
    </>
  );
};

export default Home;
