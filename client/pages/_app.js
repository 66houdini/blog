import "@/styles/globals.css";
import Layout from "./layout";
import { UserContextProvider } from "./UserContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <UserContextProvider>
        <Layout />
        <Component {...pageProps} />
      </UserContextProvider>
    </>
  );
}
