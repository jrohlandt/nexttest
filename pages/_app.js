import "../styles.css";
export default function Application({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// export function reportWebVitals(metric) {
//   switch (metric) {
//     case "FCP":
//       // First Contentful Paint
//       break;
//     case "LCP":
//       // Largest Contentful Paint
//       break;
//     case "CLS":
//       // Cumalitive Layout Shift
//       break;
//     case "FID":
//       // First Input Delay
//       break;
//     case "TTFB":
//       // Time To First Byte
//       break;
//     case "Next.js-hydration":
//       // time it takes to start and finish hydrating
//       break;
//     case "Next.js-route-change-to-render":
//       // time it takes for a page to start rendering after a  route change
//       break;
//     case "Next.js-render":
//       // time it takes for a page to finish rendering after a route change
//       console.log("NEXT RENDERRR", { metric });
//       break;
//     default:
//       break;
//   }
}
