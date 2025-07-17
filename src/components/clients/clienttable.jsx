import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Pencil, Trash2 } from "lucide-react";

const clients = [
  {
    Number: "1",
    FirstName: "Jose Adrián",
    LastName: "Sancho Astacio",
    Email: "jose@ufide.ac.cr",
    Cellphone: "918181881",
    ID: "123129321930",
  },
  {
    Number: "2",
    FirstName: "Mitchell",
    LastName: "",
    Email: "Mitchell@ufide.ac.cr",
    Cellphone: "918000001",
    ID: "3591293923",
  },
  {
    Number: "3",
    FirstName: "Julian",
    LastName: "",
    Email: "julian@ufide.ac.cr",
    Cellphone: "918181881",
    ID: "2393194123",
  },
];

export const ClientTable = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div>
          <Table className="rounded-[12px] w-[1250px]">
            <TableCaption>Una lista de tus clientes.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>Apellido</TableHead>
                <TableHead>Correo</TableHead>
                <TableHead>Telefono</TableHead>
                <TableHead>Cedula</TableHead>
                <TableHead className="w-[150px]"> </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clients.map((client) => (
                <TableRow key={client.Number}>
                  <TableCell className="font-medium">{client.Number}</TableCell>
                  <TableCell className="font-medium">
                    {client.FirstName}
                  </TableCell>
                  <TableCell>{client.LastName}</TableCell>
                  <TableCell>{client.Email}</TableCell>
                  <TableCell>{client.Cellphone}</TableCell>
                  <TableCell>{client.ID}</TableCell>
                  <TableCell className="flex justify-end gap-2">
                    <Button className="w-8 h-8">
                      <Pencil />
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-8 h-8">
                          <Trash2 />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Confirmación</DialogTitle>
                          <DialogDescription>
                            Esta accion no se puede deshacer. Esto será
                            permanente y borrará la información de nuestro
                            servidor.
                          </DialogDescription>
                        </DialogHeader>

                        <DialogFooter className="sm:justify-center">
                          <DialogClose asChild>
                            <Button>Confirmar</Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow className="bg-white"></TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </div>
  );
};
