import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Head from "next/head";
import { SideNav } from "~/components/SideNav";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Tweeter Clone</title>
        <meta
          name="description"
          content="this is a tweter clone by yonatan schuster"
        />
      </Head>
      <div className="container mx-auto flex items-start  sm:print:">
        <SideNav />
        <div className="min-h-screen flex-grow">

        <Component {...pageProps} />
        </div>
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
