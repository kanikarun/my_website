import { createEnv } from "@t3-oss/env-nextjs";
import * as v from "valibot";

const IsRequiredString = v.pipe(v.string(), v.minLength(1));
const IsOptionalString = v.optional(v.string());
const IsRequiredUrl = v.pipe(v.string(), v.url());

export const env = createEnv({
  server: {
    NEXT_STRAPI_URL: IsRequiredUrl,
    NEXT_STRAPI_TOKEN: IsRequiredString,

    NEXT_TELEGRAM_TOKEN: IsRequiredString,
    NEXT_TELEGRAM_CHAT_ID: IsRequiredString,
    NEXT_TELEGRAM_GROUP_ID: IsOptionalString,

    NEXT_RECAPTCHA_SECRET_KEY: IsRequiredString,
  },
  client: {
    NEXT_PUBLIC_SITE_URL: IsRequiredUrl,

    NEXT_PUBLIC_FACEBOOK_PIXEL_ID: IsRequiredString,
    NEXT_PUBLIC_GA_ID: IsRequiredString,

    NEXT_PUBLIC_SMALL_CHAT_ID: IsOptionalString,

    NEXT_PUBLIC_RECAPTCHA_KEY: IsRequiredString,
  },
  runtimeEnv: {
    // Server
    NEXT_STRAPI_URL: process.env.NEXT_STRAPI_URL,
    NEXT_STRAPI_TOKEN: process.env.NEXT_STRAPI_TOKEN,
    NEXT_MAIL_USERNAME: process.env.NEXT_MAIL_USERNAME,
    NEXT_MAIL_PASSWORD: process.env.NEXT_MAIL_PASSWORD,
    NEXT_REDIRECT_EMAIL: process.env.NEXT_REDIRECT_EMAIL,
    NEXT_TELEGRAM_TOKEN: process.env.NEXT_TELEGRAM_TOKEN,
    NEXT_TELEGRAM_CHAT_ID: process.env.NEXT_TELEGRAM_CHAT_ID,
    NEXT_TELEGRAM_GROUP_ID: process.env.NEXT_TELEGRAM_GROUP_ID,
    NEXT_RECAPTCHA_SECRET_KEY: process.env.NEXT_RECAPTCHA_SECRET_KEY,

    // Client
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_FACEBOOK_PIXEL_ID: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    NEXT_PUBLIC_SMALL_CHAT_ID: process.env.NEXT_PUBLIC_SMALL_CHAT_ID,
    NEXT_PUBLIC_RECAPTCHA_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_KEY,
  },
});
