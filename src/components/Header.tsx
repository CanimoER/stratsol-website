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
import { Link } from "react-router-dom";

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
      title: "Home",
      href: "/",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Services",
      href: "#services",
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
      <div className="container mx-auto h-full px-4">
        <div className="flex items-center justify-between h-full">
          {/* Left section: Mobile menu and Logo */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-gray-700 hover:text-purple-600">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-white border-gray-200">
                  <nav className="flex flex-col gap-4 mt-8">
                    {menuItems.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        className="block px-2 py-1 text-lg text-gray-700 hover:text-purple-600 transition-colors"
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

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/images/Stratsolr2.png" 
                alt="Stratsol Inc." 
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Center section: Navigation Menu */}
          <div className="hidden lg:block flex-1 px-4">
            <NavigationMenu className="mx-auto">
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.items ? (
                      <NavigationMenuTrigger className="text-gray-700">{item.title}</NavigationMenuTrigger>
                    ) : (
                      <NavigationMenuLink
                        className={cn(
                          "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-purple-600 text-gray-700 focus:text-purple-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50",
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
          </div>

          {/* Right section: Contact Button */}
          <div className="flex items-center">
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-md hidden sm:inline-flex"
              onClick={() => {
                const currentPath = window.location.pathname;
                if (isHomePage(currentPath)) {
                  const contactSection = document.getElementById("contact-section");
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
      </div>
    </header>
  );
};

export default Header;
