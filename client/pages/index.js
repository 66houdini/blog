/* eslint-disable @next/next/no-img-element */
import IndexPage from "./IndexPage";
import { UserContextProvider } from "./UserContext";

export default function Home() {
  return (
    <>
      <UserContextProvider>
        <main>
          <div className="grid grid-flow-row">
            <IndexPage />
          </div>
        </main>
      </UserContextProvider>
    </>
  );
}
