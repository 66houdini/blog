import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState("");
  const {setUserInfo} = useContext(UserContext);

  const router = useRouter();
  async function login(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({username, password}),
      headers: { "Content-Type": "application/json"},
      credentials: "include", //the cookie will be considered as credentials
    });
    if (response.ok){
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        setRedirect(true);
      })
        
    } else {
      alert("Wrong credentials");
    }
  }


  if (redirect) {
    router.push("/");
  }

  return (
    <>
      <form className="login" onSubmit={login}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button>Login</button>
      </form>
    </>
  );
}
