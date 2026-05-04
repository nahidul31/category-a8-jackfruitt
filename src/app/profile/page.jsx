"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import {
  Button,
  Avatar,
  Modal,
  FieldError,
  Description,
  Input,
  Label,
  TextField,
  Form,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";
import { useState } from "react";
import { Check, Person } from "@gravity-ui/icons";
import Loading from "../loading";
import { redirect } from "next/dist/server/api-utils";

const ProfilePage = () => {
  const { data: session, isPending, error, refetch } = authClient.useSession();
  const [isOpen, setIsOpen] = useState(false);
  // const session = await getSession();
  console.log(session);
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <p className="text-red-500">Something went wrong</p>
        <Button onClick={() => refetch()}>Retry</Button>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-bold">
        No user available
      </div>
    );
  }

  const user = session.user;

  const handleLogOut = async () => {
    await authClient.signOut();
    toast.success("Log Out Successfully");
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const userData = Object.fromEntries(formData.entries());

      await authClient.updateUser({
        name: userData.name,
        image: userData.imageUrl,
      });

      toast.success("Profile updated successfully!", {
        duration: 800, // 1 second
      });
      setIsOpen(false);
    } catch (error) {
      console.error("Update Error:", error);

      toast.error(error?.message || "Something went wrong!", {
        duration: 1000, // 1 second
      });
    }
  };
  return (
    <div className=" p-10 flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md p-6">
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center gap-4">
          {/* Avatar */}
          <div className="relative w-28 h-28">
            {user?.image?.startsWith("https") ? (
              <Image
                src={user.image}
                alt="profile"
                fill
                sizes="112px"
                className="rounded-full object-cover border-4 border-green-500"
              />
            ) : (
              <Avatar
                color="warning"
                className="w-28 h-28 rounded-full border-4 border-orange-200"
              >
                <Avatar.Fallback>
                  <Person className="w-14 h-14" />
                </Avatar.Fallback>
              </Avatar>
            )}
          </div>

          {/* Info */}
          <div>
            <h1 className="text-xl font-semibold">{user?.name || "User"}</h1>
            <p className="text-gray-500 text-sm">{user?.email}</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-2">
            {/* here use modal- ----===================-------=====---------------=========---------- */}

            <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
              <Button
                onPress={() => setIsOpen(true)}
                className="flex items-center gap-2 bg-amber-600 text-white"
              >
                <Icon icon="mdi:pencil" />
                Edit
              </Button>

              <Modal.Backdrop>
                <Modal.Container>
                  <Modal.Dialog className="sm:max-w-[360px]">
                    <Modal.CloseTrigger />

                    <Modal.Header>
                      <Modal.Heading>Update Your Profile</Modal.Heading>
                    </Modal.Header>

                    <Modal.Body>
                      <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
                        {/* Name */}
                        <TextField isRequired name="name">
                          <Label>Name</Label>
                          <Input placeholder="Enter your name" />
                          <FieldError />
                        </TextField>

                        {/* Image URL */}
                        <TextField isRequired name="imageUrl">
                          <Label>Profile Image URL</Label>
                          <Input placeholder="https://example.com/image.jpg" />
                          <FieldError />
                        </TextField>

                        {/* Submit Button */}
                        <Button
                          type="submit"
                          className="w-full bg-amber-600 text-white"
                        >
                          Update Profile
                        </Button>
                      </Form>
                    </Modal.Body>
                  </Modal.Dialog>
                </Modal.Container>
              </Modal.Backdrop>
            </Modal>

            <Button
              onClick={handleLogOut}
              variant="outline"
              color="danger"
              className="flex items-center gap-2"
            >
              <Icon icon="mdi:logout" />
              Logout
            </Button>
          </div>
        </div>
        {/* Divider */}
        <div className="my-6 border-t"></div>
        {/* Personal Info */}
        <div className="text-sm space-y-2">
          <p>
            <span className="font-medium">Name:</span> {user?.name}
          </p>
          <p>
            <span className="font-medium">Email:</span> {user?.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
