"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
import { MailIcon, LockKeyhole, PhoneIcon } from "lucide-react";
import { MdLocationOn, MdWhatsapp } from "react-icons/md";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast"; // Import toast and Toaster

// Define the login form schema
const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    console.log("Register form submitted:", values);
    // Simulate a successful form submission
    toast.success("Registration successful!"); // Display success toast
    // form.reset(); // Reset the form fields
  };

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div className="bg-gradient-to-l pb-16 to-blue-900 from-green-800">
      <div
        ref={sectionRef}
        className="flex flex-col lg:flex-row lg:mt-2 py-2lg-0 justify-center items-center min-h-screen lg: px-4 sm:px-6 lg:px-12"
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 max-w-2xl lg:pr-16 lg:mb-0"
        >
          <h1 className="text-4xl text-center lg:text-start lg:text-5xl font-extrabold text-white leading-tight">
            Login
          </h1>
          <h1 className="text-3xl text-center lg:text-start lg:text-4xl font-bold text-green-500 leading-tight">
            Welcome Back!
          </h1>
          <p className="text-md lg:text-md font-bold text-center mb-1 lg:text-justify text-black">
            Sign in to your account to continue.
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

        {/* Form Container */}
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
                {/* Email Field */}
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
                        id="email"
                          placeholder="Enter your email"
                          {...field}
                          className="text-white w-full px-4 py-3 border h-10 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm" />
                    </FormItem>
                  )}
                />

                {/* Password Field */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-medium text-sm">
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                        id="password"
                          type="password"
                          placeholder="Enter your password"
                          {...field}
                          className="text-white w-full px-4 py-3 border h-10 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm" />
                    </FormItem>
                  )}
                />

                {/* Forgot Password Link */}
                <div className="text-right">
                  <Link
                    href="/forgot-password"
                    className="text-sm text-blue-400 hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-blue-900 shadow z-40 hover:bg-green-900 text-green-200 font-bold h-12 py-5 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Login
                </Button>

                {/* Register Link */}
                <div className="text-center text-sm text-white">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/register"
                    className="text-blue-400 hover:underline"
                  >
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

export default LoginForm;
