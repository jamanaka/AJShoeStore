"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { MailIcon, PhoneIcon } from "lucide-react";
import { MdLocationOn, MdWhatsapp } from "react-icons/md";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Link from "next/link";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  enquiryType: z.string({
    required_error: "Please select the type of enquiry.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const ContactUsForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      enquiryType: "",
      message: "",
    },
  });

  const onSubmit = (values) => {
    console.log("Form submitted:", values);
  };

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div
      ref={sectionRef}
      className="flex flex-col-reverse lg:flex-row lg:mt-2 mt-20 pt-8 lg-0 justify-center items-center min-h-screen bg-gradient-to-l to-blue-900 from-green-800 lg: px-4 sm:px-6 lg:px-12"
    >
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-1/2 max-w-2xl lg:pr-16 pt-8 mb-12 lg:mb-0"
      >
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Get in touch with us
        </h1>
        <h1 className="text-3xl lg:text-4xl font-bold text-green-500 mb-2 leading-tight">
          The Gambia
        </h1>
        <p className="flex items-center font-bold gap-2 mb-4">
          <MdLocationOn className="text-green-500" size={30} /> Brusubi
          Turntable, MSJ Plaza Office 05 & 04 – WCR
        </p>
        <p className="text-md lg:text-md font-bold text-justify text-black">
          Have questions or need assistance? Our team is here to help. Fill out
          the form and we&apos;ll get back to you promptly.
        </p>
        <div className="mt-8 flex flex-col text-left items-start justify-normal space-y-6">
          {/* WhatsApp Link */}
          <Link
            href="https://wa.me/2205018946"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-green-700 py-5 shadow hover:bg-blue-800 hover:text-white text-black px-6 h-12 w-full lg:w-96 text-left text-sm transition-all duration-300 transform hover:scale-105">
              <MdWhatsapp className="text-blue-400 mr-2" size={24} />
              Whatsapp: +220 501 8946
            </Button>
          </Link>

          {/* Phone Support Link */}
          <Link href="tel:+2205018946">
            <Button className="bg-green-700 py-5 shadow hover:bg-blue-800 hover:text-white text-black px-6 h-12 w-full lg:w-96 text-left text-sm transition-all duration-300 transform hover:scale-105">
              <PhoneIcon size={24} className="mr-2 text-blue-400" />
              Support: +220 501 8946
            </Button>
          </Link>

          {/* Email Link */}
          <Link href="mailto:support@ajshoestore.com">
            <Button className="bg-green-700 py-5 shadow hover:bg-blue-800 hover:text-white text-black px-6 h-12 w-full lg:w-96 text-left text-sm transition-all duration-300 transform hover:scale-105">
              <MailIcon size={24} className="mr-2 text-blue-400" />
              Email: support@ajshoestore.com
            </Button>
          </Link>
        </div>
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Full Name Field */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white font-medium text-sm">
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your full name"
                        {...field}
                        className="w-full px-4 py-3 border h-10 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />

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
                        placeholder="Enter a valid email address"
                        {...field}
                        className="w-full px-4 py-3 border h-10 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />

              {/* Enquiry Type Field */}
              <FormField
                control={form.control}
                name="enquiryType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white bg-none font-medium text-sm">
                      Type of Enquiry
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full px-4 py-3 border h-10 bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all">
                          <SelectValue placeholder="Select the type of enquiry" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="border border-gray-300 bg-white rounded-lg shadow-lg">
                        <SelectItem value="personal-banking">
                          Personal
                        </SelectItem>
                        <SelectItem value="institutional-banking">
                          Delivery
                        </SelectItem>
                        <SelectItem value="financial-solutions">
                          Financial Solutions
                        </SelectItem>
                        <SelectItem value="business-banking">
                          Business Banking
                        </SelectItem>
                        <SelectItem value="bancassurance">
                          Bancassurance
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />

              {/* Message Field */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white font-medium text-sm">
                      Your Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here..."
                        {...field}
                        className="w-full h-24 px-4 py-3 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-blue-900 shadow z-40 hover:bg-green-900 text-green-200 font-bold h-12 py-5 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUsForm;
