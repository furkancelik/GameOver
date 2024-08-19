import Link from "next/link";
import ConnectWallet from "./ConnectWallet";
import { LINK } from "@/lib/data";

export default function Header() {
  return (
    <header className=" absolute w-full z-20 mt-2">
      <div className=" flex  items-center justify-between container mx-auto">
        <div>
          <img
            src="/images/logo-dark.svg"
            className="w-36 h-auto m-4 dark:hidden"
            alt="Light Logo"
          />
          <img
            src="/images/logo-light.svg"
            className="w-36 h-auto m-4 hidden dark:block"
            alt="Dark Logo"
          />
        </div>
        <nav>
          <ul className="flex gap-5">
            {LINK.map(({ href, title, ...props }, index) => (
              <li key={index}>
                <Link
                  href={href}
                  className={`text-lg px-3 pb-3 group cursor-pointer dark:text-white`}
                  {...props}
                >
                  <span className="group-hover:border-b border-b-blue-950 dark:border-b-white pb-3 px-1 opacity-70 group-hover:opacity-100  ">
                    {title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <ConnectWallet />
          {/* <button
            onClick={() => {
              document.documentElement.classList.toggle("dark");
            }}
            className="bg-primary-500 hover:bg-primary-600 hover:text-white px-5 py-3 rounded-md text-sm cursor-pointer "
          >
            Connect Wallet
          </button> */}
        </div>
      </div>
    </header>
  );
}
