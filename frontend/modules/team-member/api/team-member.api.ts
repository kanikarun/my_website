import { Locale } from "next-intl";

import { fetchAPI, getStrapiMedia, STRAPI_IMAGE_FIELDS } from "@/strapi";
import { getAttributes } from "@/strapi/helper";

import * as I from "./team-member.interface";

export async function getTeamMembers(
  locale: Locale = "en",
): Promise<I.GetTeamMembersResponse> {
  const fields = ["name", "position", "bio", "locale"];
  const { data, meta } = await fetchAPI<I.TeamMembersResponse>(
    "/team-members",
    {
      sort: ["order:ASC"],
      fields,
      pagination: { limit: 100 },
      populate: {
        image: STRAPI_IMAGE_FIELDS,
        localizations: { fields },
      },
    },
  );

  const result = data.map(({ id, attributes }) => {
    const localize = getAttributes(attributes.localizations, locale);
    const attr = { ...attributes, ...localize?.attributes };

    return {
      id: id,
      name: attr.name,
      position: attr.position,
      bio: attr.bio,
      image: getStrapiMedia(attr.image),
    };
  });

  return { data: result, meta };
}
