

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../state";



export const Step1 = () => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });
  const watchPassword = watch("password");
  const navigate = useNavigate();

  const saveData = (data: FormData) => {
    setState({ ...state, ...data });
    navigate("/education");
  };

  return (
    <form onSubmit={handleSubmit(saveData)}>
      
        <legend>Contact</legend>
        
        <label> Name</label>
      <input {...register("firstName", { required: "Name is required" })}/>

      <label>Email</label>
      <input type="email" {...register("email", { required: "Email is required" })}/>

      <label>Password</label>
      <input type="password" {...register("password", { required: "Password is required" })}/>
    
        
        <button>Next {">"}</button>
      
    </form>
  );
};
