import { getStaticURL } from './api';
import { Image, Video } from './interface';

export const STRAPI_IMAGE_FIELDS = { fields: ['url', 'name', 'formats', 'blurhash'] };
export const STRAPI_FILE_FIELDS = { fields: ['url', 'name'] };

export function getStrapiMedia(media?: Image, size?: 'S' | 'M' | 'T' | 'L') {
  // ! Note `media?.data?.attributes` is for Strapi & media object is for meilisearch
  // const { url = '', formats = '' } = media?.data?.attributes || media?.attributes || media || {};
  const { url = '', formats } = media?.data?.attributes || {};
  const { url: smallImgUrl = '' } = formats?.small || {};
  const { url: mediumImgUrl = '' } = formats?.medium || {};
  const { url: thumbnailUrl = '' } = formats?.thumbnail || {};
  const { url: largeUrl = '' } = formats?.large || {};

  let imgUrl: string;

  if (size === 'M') {
    imgUrl = mediumImgUrl;
  } else if (size === 'S') {
    imgUrl = smallImgUrl;
  } else if (size === 'T') {
    imgUrl = thumbnailUrl;
  } else if (size === 'L') {
    imgUrl = largeUrl;
  } else {
    imgUrl = url;
  }

  imgUrl = imgUrl || url;

  return imgUrl;
}

export function getStrapiVideo(video?: Video) {
  const url = video?.data?.attributes.url;
  return url ? getStaticURL(video?.data?.attributes.url) : '';
}

// export function getStrapiBlurhash(media?: Image) {
//   const { blurhash } = media?.data?.attributes || {};
//   return blurhash || 'LEHV6nWB2yk8pyo0adR*.7kCMdnj';
// }
