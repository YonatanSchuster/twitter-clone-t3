import { type NextPage } from "next";

import { signIn, signOut, useSession } from "next-auth/react";
import { NewTweetForm } from "~/components/NewTweetForm";

const Home: NextPage = () => {
  return (
    <>
    <header className="sticky top-0 z-10 border-b bg-white pt2">
      <h1 className="bm-4 px-4 text-lg font-bold">Home</h1>
      <NewTweetForm />
    </header>
    
    </>
  )
};

export default Home;
