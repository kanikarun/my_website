import { SiFacebook, SiGithub } from "@icons-pack/react-simple-icons";
import { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";

import { LinkedIn } from "@/components/atoms/icons";
import { Image } from "@/components/atoms/image";
import { ROUTES } from "@/config/routes";
import { Link } from "@/i18n/navigation";
import { getConfig, getStrapiMedia } from "@/strapi";

export const Footer: React.FC<{ locale: Locale }> = async ({ locale }) => {
  const [t, config] = await Promise.all([
    getTranslations("navigation.footer"),
    getConfig(locale),
  ]);
  const {
    facebook_url,
    github_url,
    linkedin_url,
    slogan,
    products,
    company,
    resources,
    image,
    image_dark,
  } = config || {};

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-navy-blue">
      <div className="pb-2 pt-6 lg:pt-14">
        <div className="container grid grid-cols-12 lg:gap-x-8">
          <div className="col-span-12 mt-12 lg:col-span-4 lg:mt-0">
            <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
              <div className="w-56">
                <Link href={ROUTES.HOME}>
                  <Image
                    src={getStrapiMedia(image)}
                    alt="OneWorld Technology"
                    className="object-cover block dark:hidden"
                    height={500}
                    width={500}
                  />
                  <Image
                    src={getStrapiMedia(image_dark)}
                    alt="OneWorld Technology"
                    className="object-cover hidden dark:block"
                    height={500}
                    width={500}
                  />
                </Link>
              </div>
              <p className="mt-8 max-w-lg text-center text-black dark:text-slate-300 lg:text-start">
                {slogan}
              </p>
              <div className="mt-4 text-center lg:text-start">
                <p
                  className="font-bold text-primary-500 dark:text-white"
                  hidden={!facebook_url && !linkedin_url && !github_url}
                >
                  {t("follow-us")}
                </p>
                <div className="mt-4 flex justify-center space-x-6 lg:justify-start">
                  {!!facebook_url && (
                    <Link href={facebook_url} rel="noreferrer" target="_blank">
                      <span className="sr-only">Facebook</span>
                      <SiFacebook
                        size={24}
                        className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-gray-200"
                      />
                    </Link>
                  )}
                  {!!linkedin_url && (
                    <Link href={linkedin_url} rel="noreferrer" target="_blank">
                      <span className="sr-only">Linkedin</span>
                      <LinkedIn />
                    </Link>
                  )}
                  {!!github_url && (
                    <Link href={github_url} rel="noreferrer" target="_blank">
                      <span className="sr-only">Github</span>
                      <SiGithub
                        size={24}
                        className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-gray-200"
                      />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 mt-10 lg:col-span-8 lg:mt-0">
            <div className="mx-auto grid grid-cols-12 gap-y-10 md:gap-y-0">
              {products && (
                <ul className="col-span-12 space-y-2 px-3 text-center text-black dark:text-slate-300 md:col-span-5 md:space-y-4 lg:text-start">
                  <p className="text-center font-bold text-primary-500 dark:text-white md:text-start">
                    {t("services")}
                  </p>
                  {products.map((x) => (
                    <li
                      key={x.name}
                      className="hover:underline  hover:text-primary-500 md:w-fit"
                    >
                      <Link href={x.url}>{x.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
              {company && (
                <ul className="col-span-12 space-y-2 px-3 text-center text-black dark:text-slate-300 md:col-span-4 md:space-y-4 lg:text-start">
                  <p className="text-center font-bold text-primary-500 dark:text-white md:text-start">
                    {t("company")}
                  </p>
                  {company.map((c) => (
                    <li
                      key={c.name}
                      className="hover:underline  hover:text-primary-500 md:w-fit"
                    >
                      <Link href={c.url}>{c.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
              {resources && (
                <ul className="col-span-12 space-y-2 px-3 text-center text-black dark:text-slate-300 md:col-span-3 md:space-y-4 lg:text-start">
                  <p className="text-center font-bold text-primary-500 dark:text-white md:text-start">
                    {t("resources")}
                  </p>
                  {resources.map((r) => (
                    <li
                      key={r.name}
                      className="hover:underline  hover:text-primary-500 md:w-fit"
                    >
                      <Link href={r.url}>{r.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <p className="container mt-16 border-t border-gray-200 dark:border-slate-300 p-4 text-center text-base font-normal text-black dark:text-slate-300">
          {t("copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
};
