"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

import { env } from "@/env.mjs";
import { usePathname } from "@/i18n/navigation";

/**
 *
 * @link https://github.com/vercel/next.js/tree/canary/examples/with-facebook-pixel
 * @link https://cookieconsent.orestbida.com/advanced/manage-scripts.html
 */
export const FacebookPixel: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!loaded) return;

    if ((window as any).fbq) {
      (window as any).fbq("track", "PageView");
    }
  }, [pathname, loaded]);

  return (
    <Script
      id="fb-pixel"
      strategy="afterInteractive"
      onLoad={() => setLoaded(true)}
      src="/scripts/facebook-pixel.js"
      data-pixel-id={env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}
    />
  );
};
