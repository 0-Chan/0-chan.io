import { useRouter } from "next/router";

const Logo = ({ height }) => (
  <svg width="36" height={height} viewBox="0 0 1180 1280">
    <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
      <path d="M6237 10920 c-816 -64 -1514 -347 -2152 -872 -127 -104 -391 -362
      -505 -493 -492 -565 -828 -1232 -986 -1963 -70 -323 -103 -619 -111 -992 -15
      -706 96 -1284 353 -1835 51 -109 631 -1203 684 -1290 457 -748 1169 -1368
      1895 -1653 411 -160 748 -227 1205 -239 631 -16 1222 109 1766 372 269 130
      475 258 707 438 435 339 909 883 1346 1541 117 177 130 210 117 301 -16 103
      -14 102 -715 571 -552 370 -663 440 -780 495 -121 56 -143 63 -196 63 -95 -1
      -123 -22 -291 -223 -181 -215 -556 -592 -719 -723 -356 -286 -692 -451 -1074
      -528 -644 -130 -1252 -39 -1688 253 l-93 62 -36 85 c-153 361 -256 840 -294
      1365 -13 180 -13 708 0 895 56 802 249 1483 574 2025 140 231 276 404 462 585
      365 355 770 543 1225 567 l116 6 70 -84 c88 -104 199 -275 258 -394 24 -49 76
      -167 114 -262 151 -370 238 -501 404 -607 81 -52 1285 -550 1382 -572 105 -24
      318 -23 430 0 89 19 208 67 292 118 198 120 357 362 420 641 20 91 22 316 4
      412 -66 346 -214 627 -461 875 -188 189 -393 332 -715 496 -358 183 -673 292
      -1040 358 -151 28 -1152 178 -1300 196 -120 14 -533 21 -668 10z"/>
    </g>
  </svg>
);

export default {
  projectLink: "https://github.com/0-chan",
  docsRepositoryBase: "https://github.com/0-Chan/chan-blog",
  titleSuffix: " – 0-Chan",
  search: true,
  unstable_flexsearch: true,
  floatTOC: true,
  defaultMenuCollapsed: true,
  feedbackLabels: "feedback",
  logo: () => {
    const { locale } = useRouter();
    return (
      <>
        <span className="text-xl mr-2 font-extrabold hidden md:inline">0 -</span>
        <Logo height={48} />
        <span className="text-xl mr-2 font-extrabold hidden md:inline">han</span>
        <span className="text-gray-600 font-normal hidden md:inline">
          개발 블로그
        </span>
      </>
    );
  },
  head: ({ title, meta }) => {
    const { route } = useRouter();

    // const ogImage =
    //   meta.image ||
    //   `https://swr-card.vercel.app${
    //     /\/index\.+/.test(route) ? "" : "?title=" + encodeURIComponent(title)
    //   }`;

    return (
      <>
        {/* Favicons, meta */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta httpEquiv="Content-Language" content="ko" />
        {/* <meta
          name="description"
          content={
            meta.description ||
            "SWR is a React Hooks library for data fetching. SWR first returns the data from cache (stale), then sends the fetch request (revalidate), and finally comes with the up-to-date data again."
          }
        /> */}
        {/* <meta
          name="og:description"
          content={
            meta.description ||
            "SWR is a React Hooks library for data fetching. SWR first returns the data from cache (stale), then sends the fetch request (revalidate), and finally comes with the up-to-date data again."
          }
        /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        {/* <meta name="twitter:image" content={ogImage} /> */}
        <meta
          name="og:title"
          content={
            title ? title + "  – 0-Chan" : "0-Chan's blog"
          }
        />
        {/* <meta name="og:image" content={ogImage} /> */}
        <meta name="apple-mobile-web-app-title" content="SWR" />
      </>
    );
  },
  footerEditLink: "Github에서 이 페이지 편집하기 →",
  footerText: <>{new Date().getFullYear()} © 0-Chan</>,
  i18n: [
    { locale: "ko", text: "한국어" },
  ],
};
