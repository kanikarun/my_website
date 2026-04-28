import { Locale } from "next-intl";
import React from "react";

import { Props as SectionTitleProps } from "@/components/molecules/section-title";
import { getPortfolios } from "@/modules/portfolio/api/portfolio.api";
import { PortfolioLatest } from "@/modules/portfolio/portfolio-latest";
import { PortfolioList } from "@/modules/portfolio/portfolio-list";

export interface TemplatePortfolioProps {
  sectionTitle?: SectionTitleProps;
  variant: "All" | "Latest";
  searchParams?: any;
  locale: Locale;
}

export const TemplatePortfolio: React.FC<TemplatePortfolioProps> = async ({
  variant,
  searchParams,
  ...rest
}) => {
  switch (variant) {
    case "Latest":
      return <PortfolioLatest {...rest} />;
    case "All":
    default:
      return (
        <PortfolioListServer locale={rest.locale} searchParams={searchParams} />
      );
  }
};

const PortfolioListServer: React.FC<{
  locale: Locale;
  searchParams?: any;
}> = async (props) => {
  const { locale, searchParams } = props;
  const data = await getPortfolios({ ...searchParams, page: 1, locale });
  return <PortfolioList locale={locale} data={data} />;
};
