import { UserSchema, UserType } from "../types/user";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";
export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>({
    resolver: zodResolver(UserSchema)
  });

  function onSubmit(data: UserType){
      console.log(data)
  }
  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <Navbar />
        <main className="w-full flex-1 flex-col h-screen flex justify-center items-center p-2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="post"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 border border-black p-4 rounded-xl shadow-xl"
          >
            <span className="text-2xl font-bold mb-4 sm:col-span-2 text-center">
              Registration Form
            </span>
            <div className="flex flex-col justify-center items-start">
              <label htmlFor="firstName" className="font-bold">
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                
                className="border-b border-black outline-1 outline-gray-200"
                autoFocus
                {...register("firstName")}
              />
            </div>

            <div className="flex flex-col justify-center items-start">
              <label htmlFor="lastName" className="font-bold">
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                {...register("lastName")}
                
                className="border-b border-black outline-1 outline-gray-200"
              />
            </div>
            {errors.firstName && (
            <span className="col-span-full text-center text-xs text-red-600">
              {errors.firstName.message}
            </span>
          )}

            {errors.lastName && (
            <span className="col-span-full text-center text-xs text-red-600">
              {errors.lastName.message}
            </span>
          )}

            <div className="flex flex-col justify-center items-start">
              <label htmlFor="email" className="font-bold">
                Email:
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                
                className="border-b border-black outline-1 outline-gray-200"
              />
            </div>

            <div className="flex flex-col justify-center items-start">
              <label htmlFor="confirmEmail" className="font-bold">
                Confirm Email:
              </label>
              <input
                type="email"
                id="confirmEmail"
                {...register("confirmEmail")}
                
                className="border-b border-b-black outline-1 outline-gray-200"
              />
            </div>

            <div className="sm:col-span-2 flex flex-col justify-center items-start">
              <label htmlFor="phoneNumber" className="font-bold">
                Phone Number:
              </label>
              <input
                type="tel"
                id="phoneNumber"
                {...register("phoneNumber")}
                
                className="border-b border-black w-full outline-1 outline-gray-200"
              />
            </div>

            <div className="sm:col-span-2 flex flex-col justify-center items-start">
              <label htmlFor="birthdate" className="font-bold">
                Birthdate:
              </label>
              <input
                type="date"
                id="birthdate"
                {...register("dob")}
                
                className="border-b border-black w-full outline-1 outline-gray-200"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="font-bold">Gender:</label>
              <div className="flex space-x-1 justify-center">
                <input
                  type="radio"
                  id="male"
                  {...register("gender")}
                  value="male"
                  checked
                />
                <label htmlFor="male" className="pr-4">
                  Male
                </label>
                <input type="radio" id="female" value="female"  {...register("gender")}/>
                <label htmlFor="female">Female</label>
              </div>
            </div>

            <div className="sm:col-span-2 flex justify-center">
              <input
                type="submit"
                value="Submit"
                className="bg-gray-900 text-white p-2 rounded-lg hover:bg-white hover:text-black cursor-pointer border border-black"
              />
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
