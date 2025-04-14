import { toaster } from "../ui/toaster";

interface GeneralToastProps {
  status: number;
  message: string;
  duration: number
}

const generalToast = ({ status, message, duration }: GeneralToastProps) => {
  toaster.create({
    type: status === 200 ? "success" : "error",
    title: message,
    duration: duration,
    meta: {
      bg: "#243647",
    },
  });
};

export default generalToast;
