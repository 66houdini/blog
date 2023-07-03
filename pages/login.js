import { useRouter } from "next/router";
import Header from "./header";

export default function Login() {
  return (
    <>
      <form action="">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>
    </>
  );
}
