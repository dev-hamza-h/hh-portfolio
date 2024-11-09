import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/LOGO.png";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react"; 
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";

export default function Header() {
    return (
        <header className="flex justify-between fixed top-0 left-0 right-0 z-50 px-4 py-4 bg-blue-950">
            {/* LOGO CONTENT */}
            <div className="flex ml-0 md:ml-10">
                <Image src={Logo} alt="Logo" height={50} width={50} />
                <h1 className="mt-2 text-2xl font-bold text-white">
                    Hamza <span className="text-cyan-500">Hassan</span>
                </h1>
            </div>
            {/* LINK */}
            <div>
                <ul className="hidden md:block">
                    <li className="mt-2 mx-2 space-x-4 text-xl text-white">
                        <Link href="/" className="link-hover">
                            Home
                        </Link>
                        <Link href="/about" className="link-hover">
                            About
                        </Link>
                        <Link href="/skills" className="link-hover">
                            Skills
                        </Link>
                        <Link href="/education" className="link-hover">
                            Education
                        </Link>
                        <Link href="/services" className="link-hover">
                            Services
                        </Link>
                        <Link href="/contact" className="link-hover">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            {/* BUTTON CONTENT */}
            <div className="px-10 mt-2 hidden md:block">
                <a href="mailto:hk5732065@gmail.com">
                    <Button className="bg-cyan-500 font-serif font-semibold rounded-xl">
                        HIRE ME
                    </Button>
                </a>
            </div>

            {/*MENU CONTENT*/}
            <Sheet>
                <SheetTrigger className="md:hidden">
                    <Menu className="text-cyan-500 w-8 h-8" />
                </SheetTrigger>
                <SheetContent className="bg-blue-900 text-white p-0">
                    <div className="flex items-center mb-4 ml-0" style={{ marginLeft: 0, paddingLeft: 0 }}>
                        <Image src={Logo} alt="Logo" height={40} width={40} />
                        <h1 className="text-xl font-bold text-white">
                            Hamza <span className="text-cyan-500">Hassan</span>
                        </h1>
                    </div>
                    <ul className="mt-4">
                        <li className="mb-2 ml-3">
                            <SheetClose asChild>
                                <Link href="/" className="link-hover">
                                    Home
                                </Link>
                            </SheetClose>
                        </li>
                        <li className="mb-2 ml-3">
                            <SheetClose asChild>
                                <Link href="/about" className="link-hover">
                                    About
                                </Link>
                            </SheetClose>
                        </li>
                        <li className="mb-2 ml-3">
                            <SheetClose asChild>
                                <Link href="/skills" className="link-hover">
                                    Skills
                                </Link>
                            </SheetClose>
                        </li>
                        <li className="mb-2 ml-3">
                            <SheetClose asChild>
                                <Link href="/education" className="link-hover">
                                    Education
                                </Link>
                            </SheetClose>
                        </li>
                        <li className="mb-2 ml-3">
                            <SheetClose asChild>
                                <Link href="/services" className="link-hover">
                                    Services
                                </Link>
                            </SheetClose>
                        </li>
                        <li className="mb-2 ml-3">
                            <SheetClose asChild>
                                <Link href="/contact" className="link-hover">
                                    Contact
                                </Link>
                            </SheetClose>
                        </li>
                    </ul>
                    <div className="mt-4 ml-3 mr-5">
                        <a href="mailto:hk5732065@gmail.com">
                            <Button className="bg-cyan-500 font-serif font-semibold w-full">
                                HIRE ME
                            </Button>
                        </a>
                    </div>
                </SheetContent>
            </Sheet>
        </header>
    );
}
