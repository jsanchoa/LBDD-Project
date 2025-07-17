import { Route, Routes } from "react-router";
import Layout from "../Layout";
import { ClientsAddPage } from "../pages/ClientsAddPage";
import { ClientsPage } from "../pages/ClientsPage";
import { LoginPage } from "../pages/LoginPage";
import { MainPage } from "../pages/MainPage";

export const AppRouter = () => {
  const data = {
    clientes: {
      first_page: "Panel",
      second_page: "Clientes",
      link: "",
    },
    clientes_anadir: {
      first_page: "Clientes",
      second_page: "Añadir",
      link: "/dashboard/clients",
    },
  };

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/dashboard"
        element={
          <Layout>
            <MainPage />
          </Layout>
        }
      />

      <Route
        path="/dashboard/clients"
        element={
          <Layout data={data.clientes}>
            <ClientsPage />
          </Layout>
        }
      />

      <Route
        path="/dashboard/clients/add"
        element={
          <Layout data={data.clientes_anadir}>
            <ClientsAddPage />
          </Layout>
        }
      />
    </Routes>
  );
};
