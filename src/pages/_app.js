import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";

import '../styles/main.scss'
import '../styles/showfligth.scss'
import '../styles/plantrip.scss'
import "../styles/detailview.scss";
import "../styles/reviews.scss";
import "../styles/subscribe.scss";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
