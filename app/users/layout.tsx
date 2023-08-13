import React from "react";
import Sidebar from "../components/sidebar/Sidebar";

interface UserLayoutProps {
  children: React.ReactNode;
}

const UsersLayout = async ({ children }: UserLayoutProps) => {
  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">{children}</div>
    </Sidebar>
  );
};

export default UsersLayout;
