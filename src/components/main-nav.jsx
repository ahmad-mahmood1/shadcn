import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Icons } from "./icons";
import { siteName } from "@/configs";

export function MainNav() {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">{siteName}</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/docs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            true ? "text-foreground" : "text-foreground/60"
          )}
        >
          Table Demo
        </Link>
        {/* <Link
          href="/docs/components"
          className={cn(
            "transition-colors hover:text-foreground/80",
            true ? "text-foreground" : "text-foreground/60"
          )}
        >
          Components
        </Link>
        <Link
          href="/examples"
          className={cn(
            "transition-colors hover:text-foreground/80",
            true ? "text-foreground" : "text-foreground/60"
          )}
        >
          Examples
        </Link> */}
      </nav>
    </div>
  );
}
