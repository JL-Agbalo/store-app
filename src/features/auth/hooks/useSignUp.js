import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { AUTH_ROUTES } from "../../layout/constants/routes";
import { signUpSchema } from "../schemas/SignUpSchema";

export const useSignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data) => {
    try {
      console.log("Form data:", data);
      // Add your signup logic here
      // On successful signup:
      navigate(AUTH_ROUTES.SIGNIN);
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
  };
};
