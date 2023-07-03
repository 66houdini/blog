import Link from "next/link";


export default function Header() {
  return (
    <>
      <header>
        <Link href="/" className="logo">
          My Blog
        </Link>
        <nav>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </nav>
      </header>
    </>
  );
}
