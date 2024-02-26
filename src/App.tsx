import { Provider } from "react-redux";
import RootLayout from "./layout/RootLayout";
import { store } from "./store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CompaniesAdd from "./pages/CompaniesAdd";



function App() {
  return (
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
  );
}

export default App;
