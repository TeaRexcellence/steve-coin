//@ts-check

function stripUrl(url) {
  if (url.includes('//')) {
    const splitUrl = url.split('//');
    return splitUrl[1];
  }
  return url;
}

export const Config = {
  url: process.env.SITE_URL,
  stripped_url: process.env.SITE_URL ? stripUrl(process.env.SITE_URL) : '',
  site_name: '$STEVE',
  title: '$STEVE',
  description: 'Steve is a community owned meme coin ready to take over the world!',
  locale: 'en',
  author: 'Steve community leadership',
  author_image: '/favicon.jpg',
  blog_pagination_size: 3,
  post_fields: ['title', 'description', 'date', 'image', 'tags', 'slug'],
  metaImg: '/favicon.jpg',
};
