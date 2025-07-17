import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, UserPlus } from "lucide-react";

export const ClientsAddPage = () => {
  return (
    <div className="bg-sidebar-accent my-10 mx-35 border rounded p-12">
      <p className="font-sans text-2xl flex justify-center font-medium mb-12">
        New Client
      </p>
      <div className="flex justify-between gap-5">
        <div className="w-[50%]">
          <div className="grid gap-2 mt-2">
            <Label>First Name</Label>
            <Input
              id="firstname"
              name="firstname"
              placeholder="test"
              className="bg-white"
            />
          </div>
          <div className="grid gap-2 mt-6">
            <Label>Last Name</Label>
            <Input
              id="lastname"
              name="lastname"
              placeholder="test"
              className="bg-white"
            />
          </div>
          <div className="grid gap-2 mt-6">
            <Label>Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="test@test.com"
              className="bg-white"
            />
          </div>
        </div>
        <div className=" w-[50%]">
          <div className="grid gap-2 mt-2">
            <Label>Cellphone</Label>
            <Input
              id="id"
              name="id"
              placeholder="0000-0000"
              className="bg-white"
            />
          </div>
          <div className="grid gap-2 mt-6">
            <Label>Identification</Label>
            <Input
              id="id"
              name="id"
              placeholder="0-0000-0000"
              className="bg-white"
            />
          </div>
          <div className="grid gap-2 mt-6">
            <Label>Membership</Label>
            <Select>
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Select a type of membership" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Memberships</SelectLabel>
                  <SelectItem value="membership1">Smart</SelectItem>
                  <SelectItem value="membership2">Black Smart</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-15 gap-10">
        <Button className="w-50">
          <ArrowLeft />
          Regresar
        </Button>
        <Button className="w-50">
          <UserPlus />
          Guardar
        </Button>
      </div>
    </div>
  );
};
