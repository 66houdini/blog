import Link from "next/link";
import { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";


export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, [setUserInfo]);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;
  return (
    <>
      <header className="p-3 mt-0 text-white bg-black">
        <Link href="/" className="logo">
          TRINITY
        </Link>
        <nav>
          {username && (
            <>
              <Link href="/create">Create New Post</Link>
              <a onClick={logout}>Logout</a>
            </>
          )}
          {!username && (
            <>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </>
          )}
        </nav>
      </header>
    </>
  );
}
