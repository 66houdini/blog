import Header from "./header";

export default function Layout({children}) {
  return (
    <>
      <Header />
      <div className="flex">
        
        <main>{children}</main>
      </div>
        
    </>
  );
}
