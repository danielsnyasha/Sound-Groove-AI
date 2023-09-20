"use client";

import { MyUserContextProvider } from "@/hooks/useUser";

interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({
  children
}) => {
  return ( // Corrected: Removed extra space here
    <MyUserContextProvider>
      {children}
    </MyUserContextProvider>
  );
}
 
export default UserProvider;
