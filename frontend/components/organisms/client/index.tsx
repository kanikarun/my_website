import { cluster } from "radash";
import React from "react";

import {
  Props as SectionTitleProps,
  SectionTitle,
} from "@/components/molecules/section-title";
import { ClientsResponse } from "@/modules/client/api/client.interface";
import { getStrapiMedia } from "@/strapi";

import { ClientMarquee } from "./misc";

interface Props {
  sectionTitle?: SectionTitleProps;
  data: ClientsResponse;
}

export const ClientListAll: React.FC<Props> = async ({
  sectionTitle,
  data,
}) => {
  const rows = cluster(data.data, data.data.length / 2);
  return (
    <div className="dark:bg-black">
      <div className="container space-y-9 py-8 lg:py-16 ">
        {sectionTitle && <SectionTitle {...sectionTitle} />}
        {rows.map((x, i) => (
          <ClientMarquee
            direction={i % 2 ? "right" : "left"}
            key={`client-row-${i}`}
            data={x.map(({ attributes }) => ({
              name: attributes.name,
              image: {
                light: getStrapiMedia(attributes.image),
                dark: getStrapiMedia(attributes.imageDark),
              },
              link: attributes.link,
            }))}
          />
        ))}
      </div>
    </div>
  );
};

export const ClientListByType: React.FC<Props> = async ({
  sectionTitle,
  data,
}) => {
  return (
    <div className="py-6 border-y border-border dark:bg-black">
      <div className="container flex lg:flex-row flex-col items-center space-y-6 lg:space-y-0">
        <h5
          hidden={!sectionTitle?.title}
          className="max-w-xs text-sm sm:text-base text-center lg:text-left w-full font-semibold"
        >
          {sectionTitle?.title}
        </h5>
        <ClientMarquee
          data={data.data.map(({ attributes }) => ({
            name: attributes.name,
            image: {
              light: getStrapiMedia(attributes.image),
              dark: getStrapiMedia(attributes.imageDark),
            },
            link: attributes.link,
          }))}
        />
      </div>
    </div>
  );
};