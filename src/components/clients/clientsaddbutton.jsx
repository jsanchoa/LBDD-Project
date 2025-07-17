import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export const ClientsAddButton = ({ text }) => {
  return (
    <>
      <Button className="w-28">
        <Plus /> {text}
      </Button>
    </>
  );
};
