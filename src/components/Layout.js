import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();

  const isActive = (pathname) => router.pathname === pathname;

  return (
    <div className="h-[100svh] flex flex-col overflow-hidden">
      <div
        id="navbar"
        className="p-4 pb-0 space-x-4 uppercase text-sm font-semibold"
      >
        <Link href="/" className={isActive("/") ? "text-blue-500" : ""}>
          Home
        </Link>
        <Link
          href="/employees"
          className={isActive("/employees") ? "text-blue-500" : ""}
        >
          Employees
        </Link>
        <Link
          href="/products"
          className={isActive("/products") ? "text-blue-500" : ""}
        >
          Products
        </Link>
      </div>

      <div id="content" className="flex-grow">
        {children}
      </div>
    </div>
  );
}
