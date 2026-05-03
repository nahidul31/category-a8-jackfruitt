"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { Button, Avatar } from "@heroui/react";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";
import { useState } from "react";
import { Person } from "@gravity-ui/icons";
const ProfilePage = () => {
  const { data: session, isPending, error, refetch } = authClient.useSession();

  if (isPending) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

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
      <div className="flex items-center justify-center h-screen">
        Please login first
      </div>
    );
  }

  const user = session.user;

  const handleLogOut = async () => {
    await authClient.signOut();
    toast.success("Log Out Successfully");
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
            <Button className="flex items-center gap-2">
              <Icon icon="mdi:pencil" />
              Edit
            </Button>

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
