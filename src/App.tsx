import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import PAGE_PATH from "./constants/path";
import AppLayout from "./components/Layout";
import SituationPage from "./pages/SituationPage";
import BalanceGamePage from "./pages/BalanceGamePage";
import TopicsBySituationPage from "./pages/TopicsBySituationPage";
import RandomTopicsPage from "./pages/RandomTopicsPage";

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
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AppLayout>
          <Routes>
            <Route path={PAGE_PATH.MAIN} element={<MainPage />} />
            <Route path={PAGE_PATH.SITUATION} element={<SituationPage />} />
            <Route
              path={PAGE_PATH["BALANCE-GAME"]}
              element={<BalanceGamePage />}
            />
            <Route
              path={PAGE_PATH.TOPICS_BY_SITUATION}
              element={<TopicsBySituationPage />}
            />
            <Route
              path={PAGE_PATH.TOPICS_RANDOM}
              element={<RandomTopicsPage />}
            />
          </Routes>
          <GlobalStyle />
        </AppLayout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
