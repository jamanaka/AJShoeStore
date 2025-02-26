"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
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
import { MailIcon, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

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
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await fetch("https://ajshoestoe-backend-api.onrender.com/api/auth/login", {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Save user data to context
      login(data.user);

      toast.success("Login successful!");
      setTimeout(() => {
        router.push("/shop");
      }, 2000);
    } catch (error) {
      if (error.name === "TypeError" && error.message.includes("Failed to fetch")) {
        toast.error("Network error. Please check your connection.");
      } else {
        toast.error(error.message || "Something went wrong!");
      }
    } finally {
      setLoading(false);
    }
  };

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div className="bg-gradient-to-l pb-16 to-blue-900 from-green-800">
      <div
        ref={sectionRef}
        className="flex flex-col lg:flex-row lg:mt-2 py-2lg-0 justify-center items-center min-h-screen lg: px-4 sm:px-6 lg:px-12"
      >
        <Toaster />
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
                        <div className="relative">
                          <Input
                            id="password"
                            placeholder="Enter your password"
                            type={showPassword ? "text" : "password"}
                            {...field}
                            className="text-white w-full px-4 py-3 border h-10 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          />
                          <span
                            className="absolute right-3 top-3 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={showPassword ? "Hide password" : "Show password"}
                          >
                            {showPassword ? (
                              <EyeOff size={20} className="text-white" />
                            ) : (
                              <Eye size={20} className="text-white" />
                            )}
                          </span>
                        </div>
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
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Loading...
                    </div>
                  ) : (
                    "Login"
                  )}
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