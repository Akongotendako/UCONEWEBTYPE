import { toaster } from "../ui/toaster";

interface GeneralToastProps {
  status: number;
  message: string;
}

const generalToast = ({ status, message }: GeneralToastProps) => {
  toaster.create({
    type: status === 200 ? "success" : status === 500 ? "error" : "info",
    title: message,
    meta: {
      bg: "#243647",
    },
  });
};

export default generalToast;
