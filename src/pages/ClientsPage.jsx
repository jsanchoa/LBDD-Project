import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router";
import { ClientTable } from "../components/clients/clienttable";

export const ClientsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="mb-4 mt-12 mr-54 flex justify-end">
        <Button
          className="w-28"
          onClick={() => navigate("/dashboard/clients/add")}
        >
          <Plus /> Añadir
        </Button>
      </div>
      <ClientTable />
    </>
  );
};
