import Logo from "./Logo"
import Menu from "./Menu"

const Header = () => {
    return (
        <header className="bg-zinc-950/50 shadow-zinc-950 shadow-2xl  w-full flex items-center justify-between px-8 py-5">
            <Logo />
            <Menu />
        </header>
    )
}

export default Header