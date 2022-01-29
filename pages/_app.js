import '../styles/globals.css';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import { ThemeProvider } from 'next-themes';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleStart = () => {
    setLoading(true);
  };

  const handleStop = () => {
    setLoading(false);
  };

  useEffect(() => {
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return (
    <ThemeProvider attribute='class'>
      <Layout loading={loading}>
        {/* {loading && <Loading />} */}
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
