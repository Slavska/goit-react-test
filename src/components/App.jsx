import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Box, ChakraProvider, Spinner } from '@chakra-ui/react';

const Home = lazy(() => import('pages/Home/Home'));
const Tweets = lazy(() => import('pages/Tweets/Tweets'));

export function App() {
  return (
    <>
      <Suspense
        fallback={
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="purple.500"
            size="xl"
            display="flex"
            m="auto"
          />
        }
      >
        <ChakraProvider>
          <Box
            bg="#ebd8ff"
            width="100vw"
            height="100%"
            minHeight="100vh"
            fontFamily="Montserrat"
            p="20px"
          >
            <Routes>
              <Route index element={<Home />} />
              <Route path="tweets" element={<Tweets />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Box>
        </ChakraProvider>
      </Suspense>
    </>
  );
}
