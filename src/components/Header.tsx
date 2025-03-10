import React from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useNavigate, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { cn } from "../lib/utils";

interface HeaderProps {
  logo?: string;
  menuItems?: Array<{
    title: string;
    href: string;
    description?: string;
    items?: Array<{
      title: string;
      href: string;
      description: string;
    }>;
  }>;
}

const Header = ({
  logo = "Stratsol",
  menuItems = [
    {
      title: "Services",
      href: "#services",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Testimonials",
      href: "#testimonials",
    },
  ],
}: HeaderProps) => {
  const isHomePage = React.useCallback((path: string) => {
    return path === "/" || path === "/preview/in/";
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = React.useCallback(
    (href: string) => {
      if (href.startsWith("#")) {
        if (isHomePage(location.pathname)) {
          const element = document.getElementById(href.substring(1));
          element?.scrollIntoView({ behavior: "smooth" });
        } else {
          sessionStorage.setItem("scrollTarget", href.substring(1));
          navigate("/");
        }
      } else {
        const basePath = location.pathname.startsWith("/preview/in")
          ? "/preview/in"
          : "";
        navigate(`${basePath}${href}`);
      }
    },
    [isHomePage, location.pathname, navigate],
  );

  return (
    <header className="w-full h-20 bg-white border-b border-gray-200 fixed top-0 z-50">
      {/* Mobile Menu */}
      <div className="md:hidden absolute left-4 top-1/2 -translate-y-1/2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="block px-2 py-1 text-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.href);
                  }}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-primary">
            {logo}
          </a>
        </div>

        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.items ? (
                  <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                ) : (
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                    )}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.href);
                    }}
                  >
                    {item.title}
                  </NavigationMenuLink>
                )}

                {item.items && (
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {item.items.map((subItem) => (
                        <li key={subItem.title}>
                          <NavigationMenuLink
                            href={subItem.href}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            )}
                          >
                            <div className="text-sm font-medium leading-none">
                              {subItem.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {subItem.description}
                            </p>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <Button
            variant="default"
            size="lg"
            onClick={() => {
              const currentPath = window.location.pathname;
              if (isHomePage(currentPath)) {
                const contactSection =
                  document.getElementById("contact-section");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              } else {
                sessionStorage.setItem("scrollTarget", "contact-section");
                window.location.href = "/";
              }
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
