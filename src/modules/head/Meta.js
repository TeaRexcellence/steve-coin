import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Config } from '../../../utils/Config';
import { addTrailingSlash } from '../../../utils/Url';

const Meta = (props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {props.canonical && (
          <link rel="canonical" href={props.canonical} key="canonical" />
        )}

        <link
          rel="apple-touch-icon"
          href={`${process.env.baseUrl}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${process.env.baseUrl}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${process.env.baseUrl}/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${process.env.baseUrl}/favicon.ico`}
          key="favicon"
        />

        {/* PAGE TITLE - using normal title attribute*/}
        {/* Is a home page */}
        {router.pathname === '/' ? (
          <title>{`${Config.site_name} | ${props.metaTitle}`}</title>
        ) : (
          ''
        )}
        {/* Is not a post or the home page */}
        {router.pathname.indexOf('post') == -1 && router.pathname !== '/' ? (
          <title>{`${Config.site_name} | ${props.title}`}</title>
        ) : (
          ''
        )}

        {/* OG TITLE - using meta title attribute*/}
        {/* Is a post page */}
        {router.pathname.indexOf('post') !== -1 ? (
          <meta
            property="og:title"
            content={`${props.metaTitle} | ${Config.site_name}`}
            key="og:title"
          />
        ) : (
          ''
        )}
        {/* Is not a post or the home page */}
        {router.pathname.indexOf('post') == -1 && router.pathname !== '/' ? (
          <meta
            property="og:title"
            content={`${props.metaTitle}`}
            key="og:title"
          />
        ) : (
          ''
        )}

        {/* TWITTER TITLE - using meta title attribute*/}
        {/* Is the home page */}
        {router.pathname === '/' ? (
          <meta
            key="twitter:title"
            name="twitter:title"
            content={`${props.metaTitle}`}
          />
        ) : (
          ''
        )}

        {/* Is not a post or the home page */}
        {router.pathname.indexOf('post') == -1 && router.pathname !== '/' ? (
          <meta
            key="twitter:title"
            name="twitter:title"
            content={`${props.metaTitle}`}
          />
        ) : (
          ''
        )}

        {/* Is not a post page */}
        {router.pathname.indexOf('post') == -1 ? (
          <meta
            property="og:image"
            content={props.metaImg ? props.metaImg : Config.metaImg}
            key="og:image"
          />
        ) : (
          ''
        )}
        {router.pathname.indexOf('post') == -1 ? (
          <meta
            key="twitter:image"
            name="twitter:image"
            content={props.metaImg ? props.metaImg : Config.metaImg}
          ></meta>
        ) : (
          ''
        )}

        <meta property="og:type" content="article" key="og:type" />
        <meta property="og:locale" content={Config.locale} key="og:locale" />
        <meta
          property="og:site_name"
          content={Config.site_name}
          key="og:site_name"
        />

        <meta
          key="twitter:site"
          name="twitter:site"
          content="@SteveSeagullEt"
        />
        <meta
          key="twitter:creator"
          name="twitter:creator"
          content="@SteveSeagullEt"
        />
        <meta
          key="twitter:card"
          name="twitter:card"
          content="summary_large_image"
        ></meta>

        <meta
          name="author"
          content={props.pauthor ? props.pauthor : Config.author}
          key="author"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Righteous&amp;display=swap"
          rel="stylesheet"
        />
      </Head>
    </>
  );
};

export { Meta };
