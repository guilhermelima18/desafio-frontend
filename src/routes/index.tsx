import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ClientsDataProvider } from "../hooks/useClients";
import { ToastContainer } from "react-toastify";
import Home from "../pages/Home";
import { Header } from "../components/Header";
import { GlobalStyle } from "../styles/GlobalStyle";
import { GroupsDataProvider } from "../hooks/useGroups";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ClientsDataProvider>
        <GroupsDataProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit-client/:id" element={<Home />} />
            <Route path="/delete-client/:id" element={<Home />} />
          </Routes>
          <ToastContainer autoClose={3000} />
        </GroupsDataProvider>
      </ClientsDataProvider>
    </BrowserRouter>
  );
};
