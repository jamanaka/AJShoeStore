"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Eye, EyeOff } from "lucide-react";
import toast, { Toaster } from "react-hot-toast"; // Import toast and Toaster
import Link from "next/link";

// Define the register form schema
const formSchema = z
  .object({
    fullName: z.string().min(2, { message: "Full Name is required." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phoneNumber: z.string().min(10, { message: "Enter a valid phone number." }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters." }),
    confirmPassword: z.string().min(6, { message: "Confirm your password." }),
    address: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match.",
    path: ["confirmPassword"],
  });

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      address: "",
    },
  });

  const onSubmit = (values) => {
    console.log("Register form submitted:", values);
    // Simulate a successful form submission
    toast.success("Registration successful!"); // Display success toast
    form.reset(); // Reset the form fields
  };

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div className="bg-gradient-to-l to-blue-900 from-green-800">
      <div
        ref={sectionRef}
        className="flex flex-col lg:flex-row lg:mt-2 py-6 lg-0 justify-center items-center min-h-screen bg-gradient-to-l to-blue-900 from-green-800 lg: px-4 sm:px-6 lg:px-12"
      >
        <Toaster /> {/* Add the Toaster component to display toasts */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 max-w-2xl lg:pr-16 lg:mb-0"
        >
          <h1 className="text-4xl text-center lg:text-start lg:text-5xl font-extrabold text-white leading-tight">
            Register
          </h1>
          <h1 className="text-2xl text-center lg:text-start lg:text-4xl font-bold text-green-500 leading-tight">
            Welcome To Our Registration Portal!
          </h1>
          <p className="text-md text-center lg:text-md mb-1 font-bold lg:text-justify text-black">
            Create an account to access all features.
          </p>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-4 lg:text-start"
          >
            <Link
              href="/"
              className="text-lg font-semibold text-center hover:text-green-400 underline text-white"
            >
              GO BACK TO HOME PAGE
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 max-w-lg"
        >
          <div className="px-8 py-6 bg-none rounded-2xl shadow-xl border border-white">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-medium text-sm">
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="text-white w-full px-4 py-3 border h-10 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Enter your full name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-medium text-sm">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="text-white w-full px-4 py-3 border h-10 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Enter your email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-medium text-sm">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="text-white w-full px-4 py-3 border h-10 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Enter your phone number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-medium text-sm">
                        Password
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            className="text-white w-full px-4 py-3 border h-10 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            {...field}
                          />
                          <span
                            className="absolute right-3 top-3 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff size={20} className="text-white" />
                            ) : (
                              <Eye size={20} className="text-white" />
                            )}
                          </span>
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-medium text-sm">
                        Confirm Password
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            className="text-white w-full px-4 py-3 border h-10 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                            {...field}
                          />
                          <span
                            className="absolute right-3 top-3 cursor-pointer"
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                          >
                            {showConfirmPassword ? (
                              <EyeOff size={20} className="text-white" />
                            ) : (
                              <Eye size={20} className="text-white" />
                            )}
                          </span>
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-medium text-sm">
                        Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="text-white w-full px-4 py-3 border h-10 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Enter your address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-blue-900">
                  Register
                </Button>
                <div className="text-center text-sm text-white">
                  Don&apos;t have an account?{" "}
                  <Link href="/login" className="text-blue-400 hover:underline">
                    Register
                  </Link>
                </div>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterForm;
