import Link from "next/link";

import { getStrapiMedia, Image } from "@/strapi";

import { SectionTitle } from "@/components/atoms/section-title";
import { Button } from "@/components/atoms/button";

export interface TemplateServicesProps {
  title: string;
  subtitle: string;
  description: string;
  features: Array<ServiceCardProps>;
  button?: { text: string; link?: string; target?: string };
  isHide: boolean;
}

interface ServiceCardProps {
  icon: Image;
  title: string;
  subtitle: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, subtitle, icon }) => {
  return (
    <div className="h-full rounded-xl border border-gray-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-800">
      <img
        src={getStrapiMedia(icon)}
        alt={title}
        className="h-16 w-16 object-contain"
      />
      <h2 className="pt-3 text-xl font-semibold text-gray-800 dark:text-white">
        {title}
      </h2>
      <div className="pt-3 text-base leading-relaxed text-gray-500 dark:text-gray-400">
        {subtitle}
      </div>
    </div>
  );
};

export const TemplateServices: React.FC<TemplateServicesProps> = (props) => {
  const { features, subtitle, title, description, button, isHide } = props;

  if (isHide) return null;
  return (
    <section className="py-16">
      <div className="container">
        <div className="mb-10">
          <SectionTitle
            title={subtitle}
            subTitle={title}
            className="max-w-lg"
          />
          {description && (
            <p className="mt-4 max-w-2xl text-base text-gray-500 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {features?.map((x) => (
            <ServiceCard
              key={x.title}
              title={x.title}
              subtitle={x.subtitle}
              icon={x.icon}
            />
          ))}
        </div>

        {button?.text && button?.link && (
          <div className="mt-12 flex justify-center">
            <Button variant="default">
              <Link href={button.link} target={button.target}>
                {button.text}
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
