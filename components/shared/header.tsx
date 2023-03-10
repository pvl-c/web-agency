import Link from "next/link"

export default function Header() {
  return (
    <div className="navbar bg-base-100 md:container md:mx-auto py-6">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
{/*                 <li tabIndex={0}>
                <a className="justify-between">
                    Info
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                </a>
                <ul className="p-2">
                    <li><a>Submenu 2</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
                </li> */}
            </ul>
            </div>
            <ul className="menu menu-horizontal p-0">
            <li><Link href="/" className="normal-case text-2xl">эксперимент 21</Link></li>
            </ul>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
{/*             <li tabIndex={0}>
                <a>
                Info
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </a>
                <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
                </ul>
            </li> */}
            </ul>
        </div>
        <div className="navbar-end">
            <ul className="menu menu-horizontal p-0">
            <li><Link href="/about" className="normal-case text-xl mx-5">o чем это?</Link></li>
            </ul>
            <Link href="/course" className="btn btn-outline btn-primary normal-case text-xl font-light">начать</Link>
        </div>
    </div>
  )
}
