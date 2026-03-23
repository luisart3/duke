import { MagnifyingGlassIcon, Bars2Icon } from "@heroicons/react/24/outline"


export const NavBar = () => {

    return (
        <nav className=" flex justify-between items-center h-16">
            <a  className=" text-white text-4xl">DUKE</a>

            <div className=" hidden md:flex bg-black/10 p-2 px-6 rounded-2xl h-12 items-center">
                    <ul className="flex items-center flex-wrap gap-6">
                        <a href="" className="bfont-[KoHo] font-bold border border-white/35 rounded-md px-4 py-1.5 " aria-current="page">Home</a>
                        <a href="" className="font-[KoHo] font-bold px-4 py-1.5 border border-transparent hover:border-white/35 rounded-md">Explore</a>
                        <a href="" className="font-[KoHo] font-bold px-4 py-1.5 border border-transparent hover:border-white/35 rounded-md">About</a>
                        <button className="shrink-0  hover:scale-125 transition duration-200 "><MagnifyingGlassIcon className="size-6 "/></button>
                    </ul>
            </div>
            <button className="bg-black/10 w-12 h-12 p-3 rounded-2xl">
                <Bars2Icon className="size-6 text-white"/>
            </button>
        </nav>
    )
}