import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ClientsDataProvider } from "../hooks/useClients";
import { ToastContainer } from "react-toastify";
import Home from "../pages/Home";
import { Header } from "../components/Header";
import { GroupsDataProvider } from "../hooks/useGroups";
import { GroupsBoxCard } from "../components/Cards/GroupsBoxCard";
import { ClientsBoxCard } from "../components/Cards/ClientsBoxCard";
import { GlobalStyle } from "../styles/GlobalStyle";
import Summaries from "../pages/Summaries";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ClientsDataProvider>
        <GroupsDataProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="summaries" element={<Summaries />} />
            <Route path="/clients" element={<ClientsBoxCard />} />
            <Route path="/clients/edit/:id" element={<ClientsBoxCard />} />
            <Route path="/clients/delete/:id" element={<ClientsBoxCard />} />
            <Route path="/groups" element={<GroupsBoxCard />} />
            <Route path="/groups/edit/:id" element={<GroupsBoxCard />} />
          </Routes>
          <ToastContainer autoClose={3000} />
        </GroupsDataProvider>
      </ClientsDataProvider>
    </BrowserRouter>
  );
};
