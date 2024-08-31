import Image from "next/image";
import Link from "next/link";

function HeaderLogo() {
    return (
        <Link href="/">
            <div className="items-center hidden lg:flex">
                <Image src="/logo-checkFinance.svg" alt="logo" width={28} height={28} />
                <p className="font-semibold text-2xl text-white ml-2.5">checkFinance</p>
            </div>
        </Link>
    );
}

export default HeaderLogo;
