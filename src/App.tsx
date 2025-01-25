import { Suspense, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import PAGE_PATH from "./constants/path";
import AppLayout from "./components/Layout";
import BalanceGamePage from "./pages/BalanceGamePage";
import {
  MainPage,
  SituationPage,
  TopicListPage,
  LoginPage,
} from "./pages/index";
import KakaoRedirect from "./pages/login-redirect/kakao";
import { OverlayProvider } from "overlay-kit";
import TopicsBySituationPage from "./pages/TopicsBySituationPage";
import RandomTopicsPage from "./pages/RandomTopicsPage";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./components/Error";
import Loading from "./components/Loading";
import Header from "./components/Header";
import TagManager from "react-gtm-module";
import Toast from "./components/Toast";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            throwOnError: true, // 에러 발생 시 에러 전파(에러 바운더리 캐치)
            retry: 1,
          },
        },
      }),
  );

  useEffect(() => {
    TagManager.initialize({
      gtmId: import.meta.env.VITE_GTM_ID,
    });
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <OverlayProvider>
            <AppLayout>
              <ErrorBoundary FallbackComponent={ErrorPage}>
                <Routes>
                  <Route path={PAGE_PATH.MAIN} element={<MainPage />} />
                  <Route path={PAGE_PATH.LOGIN} element={<LoginPage />} />
                  <Route
                    path={PAGE_PATH.KAKAO_REDIRECT}
                    element={<KakaoRedirect />}
                  />

                  <Route
                    path={PAGE_PATH.SITUATION}
                    element={<SituationPage />}
                  />
                  <Route
                    path={PAGE_PATH.TOPIC_LIST}
                    element={
                      <Suspense
                        fallback={
                          <>
                            <Header title="토픽 리스트 | 말해머해" />
                            <Loading />
                          </>
                        }
                      >
                        <TopicListPage />
                      </Suspense>
                    }
                  />
                  <Route
                    path={`${PAGE_PATH.TOPICS_BY_SITUATION}/:situationId`}
                    element={<TopicsBySituationPage />}
                  />
                  <Route
                    path={PAGE_PATH.TOPICS_RANDOM}
                    element={<RandomTopicsPage />}
                  />
                  <Route
                    path={PAGE_PATH["BALANCE-GAME"]}
                    element={<BalanceGamePage />}
                  />
                </Routes>
                <Toast />
                <GlobalStyle />
              </ErrorBoundary>
            </AppLayout>
          </OverlayProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
