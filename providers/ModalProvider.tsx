"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/AuthModal";
import SubscribeModal from "@/components/SubscribeModal";
import UploadModal from "@/components/UploadModal";
import { ProductWithPrice } from "@/types";
import Modal from "@/components/Modal";

interface ModalProviderProps {
  // products: ProductWithPrice[];
}

const ModalProvider: React.FC<ModalProviderProps> = ({
  // products
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
    <AuthModal />
      {/* <Modal
      title="Test Modal"
      description="Test Description"
      isOpen
      onChange={()=>{}}>
        Test 
      </Modal> */}
      
      {/* <SubscribeModal products={products} /> */}
      {/* <UploadModal /> */}
    </>
  );
}

export default ModalProvider;