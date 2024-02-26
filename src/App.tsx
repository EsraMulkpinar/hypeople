import { Provider } from "react-redux";
import RootLayout from "./layout/RootLayout";
import { store } from "./store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CompaniesAdd from "./pages/CompaniesAdd";
import { ConfigProvider } from "antd";



function App() {
  return (
    <ConfigProvider  theme={{
      token: {
        fontFamily: "Inter"
      }
    }}>
      <Provider store={store}>
      <BrowserRouter>
        <RootLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<CompaniesAdd/>} />
          </Routes>
        </RootLayout>
      </BrowserRouter>
    </Provider>
    </ConfigProvider>
  );
}

export default App;
