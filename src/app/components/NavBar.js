import Link from "next/link";


export default function NavBar() {
  return (
    <header>
      <Link href='/'>Home</Link>
      <Link href='/profile'>Profile</Link>
      <Link href='/data'>Weather data</Link>
    </header>
  )
}
