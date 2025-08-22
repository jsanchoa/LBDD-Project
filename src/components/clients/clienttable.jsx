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

import { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import axios from 'axios';
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { coerce } from "zod";
import { useFormHook } from "../../hooks/use-hook";

export const ClientTable = () => {

  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [user, setUser] = useState(null);
  const [formState, setFormState] = useState({
    NOMBRE: '',
    APELLIDO: '',
    CORREO: '',
    TELEFONO: '',
    CEDULA: '',
    ID_ROL: 0,
  });
  const [idUser, setIDUser] = useState(0);
  
  // Nuevo estado para controlar apertura modal editar
  const [isEditOpen, setIsEditOpen] = useState(false);

  const getListaUsuarios = async() => {
    await axios.get('http://localhost:3000/v1/usuarios/lista')
    .then(response => {
      // Manejar la respuesta exitosa
      setListaUsuarios(response.data);
    })
    .catch(error => {
      // Manejar errores
      console.error(error);
    });
  };

  useEffect(() => {
    getListaUsuarios();
  }, []);

  const handleUpdate = async(event) => {
    event.preventDefault();

    try {
      await axios.patch(`http://localhost:3000/v1/usuarios/modificar/${idUser}`, {
        nombre: formState.NOMBRE,
        apellido: formState.APELLIDO,
        correo: formState.CORREO,
        telefono: formState.TELEFONO,
        cedula: formState.CEDULA,
        id_rol: Number(formState.ID_ROL)
      });

      await getListaUsuarios();
      toast.success(`El usuario con el id: ${idUser} modificado correctamente`);
      setIsEditOpen(false);
    } catch(error) {
      toast.error(`El usuario no pudo ser modificado.`);
      setIsEditOpen(false);
    }
  }

  const handleDelete = async(event, id) => {
    //* Esto permite que cuando accione el boton, no se refresque la pagina
    event.preventDefault();

    try {
      await axios.delete(`http://localhost:3000/v1/usuarios/borrar/${id}`);
      await getListaUsuarios();
      toast.success(`El usuario con el id: ${id} eliminado correctamente`);
    } catch(error) {
      toast.error(`El usuario no pudo ser eliminado correctamente.`);
    }
  }

  // Función para cargar datos y abrir modal
  const openEditModal = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/v1/usuarios/info/${id}`);
      setUser(res.data[0]);
      setIsEditOpen(true);

      setFormState({
        NOMBRE: res.data[0].NOMBRE || '',
        APELLIDO: res.data[0].APELLIDO || '',
        CORREO: res.data[0].CORREO || '',
        TELEFONO: res.data[0].TELEFONO || '',
        CEDULA: res.data[0].CEDULA || '',
        ID_ROL: res.data[0].ID_ROL ?? 0
      });

      setIDUser(res.data[0].ID_USUARIO ?? id);
      
    } catch {
      toast.error("No se pudo obtener la información del usuario");
    }
  };


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
                <TableHead>Estado</TableHead>
                <TableHead className="w-[150px]"> </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {listaUsuarios.map((usuario) => (
                <TableRow key={usuario.ID_USUARIO}>
                  <TableCell className="font-medium">{usuario.ID_USUARIO}</TableCell>
                  <TableCell className="font-medium">
                    {usuario.NOMBRE}
                  </TableCell>
                  <TableCell>{usuario?.APELLIDO}</TableCell>
                  <TableCell>{usuario?.CORREO}</TableCell>
                  <TableCell>{usuario?.TELEFONO}</TableCell>
                  <TableCell>{usuario?.CEDULA}</TableCell>
                  <TableCell>{usuario?.ESTADO === "A" ? "Activo" : "Inactivo" }</TableCell>
                  <TableCell className="flex justify-end gap-2">
                      <Button 
                      className="w-8 h-8" 
                      onClick={() => openEditModal(usuario.ID_USUARIO)}
                    >
                      <Pencil />
                    </Button>
                    
                    <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
                      <DialogContent className="sm:max-w-md lg:max-w-lg">
                        <DialogHeader>
                          <div className="flex justify-center">
                            <DialogTitle>Modificar Usuario</DialogTitle>
                          </div>
                          <div className="flex justify-center">
                            <DialogDescription>
                              Acá podrás realizar los cambios al perfil seleccionado.
                            </DialogDescription>
                          </div>
                        </DialogHeader>

                      <div className="grid gap-4 mt-2">
                        <div className="grid gap-3">
                          <Label htmlFor="NOMBRE">Nombre</Label>
                          <Input
                            id="NOMBRE"
                            name="NOMBRE"
                            value={formState.NOMBRE}
                            onChange={(e) =>
                              setFormState({ ...formState, NOMBRE: e.target.value })
                            }
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="apellido">Apellido</Label>
                          <Input
                            id="apellido"
                            name="apellido"
                            value={formState.APELLIDO}
                            onChange={(e) =>
                              setFormState({ ...formState, APELLIDO: e.target.value })
                            }
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="correo">Correo</Label>
                          <Input
                            id="correo"
                            name="correo"
                            value={formState.CORREO}
                            onChange={(e) =>
                              setFormState({ ...formState, CORREO: e.target.value })
                            }
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="telefono">Teléfono</Label>
                          <Input
                            id="telefono"
                            name="telefono"
                            value={formState.TELEFONO}
                            onChange={(e) =>
                              setFormState({ ...formState, TELEFONO: e.target.value })
                            }
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="cedula">Cédula</Label>
                          <Input
                            id="cedula"
                            name="cedula"
                            value={formState.CEDULA}
                            onChange={(e) =>
                              setFormState({ ...formState, CEDULA: e.target.value })
                            }
                          />
                        </div>
                      </div>

                        <DialogFooter className="sm:justify-center">
                          <DialogClose asChild>
                            <Button onClick={(event) => {
                              handleUpdate(event)
                              }}>Confirmar</Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>


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
                            <Button onClick={(event) => {
                              handleDelete(event, usuario.ID_USUARIO)
                              }}>Confirmar</Button>
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
