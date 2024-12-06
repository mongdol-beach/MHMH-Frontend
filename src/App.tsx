import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import GlobalStyle from "./styles/global";

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
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <GlobalStyle />
    </QueryClientProvider>
  );
}

export default App;
