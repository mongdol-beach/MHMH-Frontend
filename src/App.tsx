import { Suspense, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import PAGE_PATH from "./constants/path";
import AppLayout from "./components/Layout";

import BalanceGamePage from "./pages/BalanceGamePage";

import { MainPage, SituationPage, TopicListPage } from "./pages/index";
import { OverlayProvider } from "overlay-kit";

import TopicsBySituationPage from "./pages/TopicsBySituationPage";
import RandomTopicsPage from "./pages/RandomTopicsPage";
import { Helmet } from "react-helmet";

function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            throwOnError: true, // 에러 발생 시 에러 전파(에러 바운더리 캐치)
          },
        },
      }),
  );

  return (
    <>
      <Helmet>
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/og-image.png`}
        />
        <meta property="og:image:alt" content="말해머해 오픈 그래프 이미지" />
      </Helmet>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <OverlayProvider>
            <AppLayout>
              <Suspense fallback={<div>임시 로딩 처리..</div>}>
                <Routes>
                  <Route path={PAGE_PATH.MAIN} element={<MainPage />} />
                  <Route
                    path={PAGE_PATH.SITUATION}
                    element={<SituationPage />}
                  />
                  <Route
                    path={PAGE_PATH.TOPIC_LIST}
                    element={<TopicListPage />}
                  />
                  <Route
                    path={`${PAGE_PATH.TOPICS_BY_SITUATION}/:situationId`}
                    element={<TopicsBySituationPage />}
                  />
                  <Route
                    path={PAGE_PATH.TOPICS_RANDOM}
                    element={<RandomTopicsPage />}
                  />
                </Routes>
                <GlobalStyle />
              </Suspense>
            </AppLayout>
          </OverlayProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
