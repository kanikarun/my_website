"use client";

import { useMemo, useState } from "react";

import { Image } from "@/components/atoms/image";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/modules/navigation/components/theme-toggle";
import {
  NavButton,
  NavLink,
  SmNavLink,
} from "@/modules/navigation/header/navigation-bar/navigation-item";
import { getStrapiMedia } from "@/strapi";

import { INavigation } from "../../api/navigation.interface";
import { LocaleToggle } from "../../components/locale-toggle";

interface Props {
  navigation?: INavigation | null;
  isMatch?: boolean;
}

export const NavigationBar: React.FC<Props> = ({ navigation }) => {
  const pathname = usePathname();

  const isMatch = useMemo(() => {
    return [ROUTES.HOME, "/home", ROUTES.ODOO_ERP].some((x) =>
      pathname.endsWith(x),
    );
  }, [pathname]);

  return (
    <header
      className={cn("w-full", {
        "absolute z-50 [&_a]:text-white [&_button]:text-white [&_label]:text-white ":
          isMatch,
      })}
    >
      <DesktopNavigationBar navigation={navigation} />
      <MobileNavigationBar navigation={navigation} />
    </header>
  );
};

const DesktopNavigationBar: React.FC<Props> = ({ navigation }) => {
  const pathname = usePathname();
  const isMatch = useMemo(
    () =>
      [ROUTES.HOME, "/home", ROUTES.ODOO_ERP].some((x) => pathname.endsWith(x)),
    [pathname],
  );

  return (
    <div className="container hidden py-4 items-center justify-between xl:flex">
      <Link href={ROUTES.HOME}>
        <Image
          src={getStrapiMedia(
            isMatch ? navigation?.logo_dark : navigation?.logo,
          )}
          alt="OneWorld Technology"
          width={160}
          height={40}
          className={isMatch ? "block" : "block dark:hidden"}
        />
        {!isMatch && (
          <Image
            src={getStrapiMedia(navigation?.logo_dark)}
            alt="OneWorld Technology"
            width={160}
            height={40}
            className="hidden dark:block"
          />
        )}
      </Link>
      {!!navigation && <NavLink {...navigation} />}
      <div className="flex items-center space-x-4">
        <LocaleToggle />
        <ThemeToggle />
        <Button variant="theme-toggle" asChild>
          <Link href={navigation?.cta_url || ROUTES.CONTACT}>
            {navigation?.cta_text || "Free Consultation"}
          </Link>
        </Button>
      </div>
    </div>
  );
};

const MobileNavigationBar: React.FC<Props> = ({ navigation }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();
  const isMatch = useMemo(
    () =>
      [ROUTES.HOME, "/home", ROUTES.ODOO_ERP].some((x) => pathname.endsWith(x)),
    [pathname],
  );

  return (
    <div
      className={cn("xl:hidden transition-all", {
        "backdrop-blur-sm": isNavOpen,
      })}
    >
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <Link href={ROUTES.HOME}>
            <Image
              src={getStrapiMedia(
                isMatch ? navigation?.logo_dark : navigation?.logo,
              )}
              alt="OneWorld Technology"
              width={160}
              height={24}
              className={isMatch ? "block" : "block dark:hidden"}
            />
            {!isMatch && (
              <Image
                src={getStrapiMedia(navigation?.logo_dark)}
                alt="OneWorld Technology"
                width={160}
                height={24}
                className="hidden dark:block"
              />
            )}
          </Link>
          <div className="flex items-center space-x-4">
            <LocaleToggle />
            <ThemeToggle />
            <NavButton
              onClick={() => setIsNavOpen((x) => !x)}
              isNavOpen={isNavOpen}
            />
          </div>
        </div>
        <div className={cn("py-4", { hidden: !isNavOpen })}>
          {!!navigation && (
            <SmNavLink {...navigation} onClick={() => setIsNavOpen(false)} />
          )}
          <br />
          <div className="flex flex-col space-y-2">
            <label className="text-primary-500 dark:text-white font-bold">
              Need Help?
            </label>
            <Button variant="theme-toggle" asChild>
              <Link href={navigation?.cta_url || ROUTES.CONTACT}>
                {navigation?.cta_text || "Free Consultation"}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
