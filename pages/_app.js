import '../styles/globals.scss'
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';

function MyApp({ Component, pageProps}) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
}, []);
  return(

    <Component {...pageProps} />
  )
}
export default MyApp
