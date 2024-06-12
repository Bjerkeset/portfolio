"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { motion } from "framer-motion";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }).min(4, {
    message: "Email must be at least 4 characters.",
  }),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(500, {
      message: "Message cannot exceed 500 characters.",
    }),
});

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("values", values);
    // Here you can handle form submission, e.g., send the data to your server
    setSubmitted(true);
  }

  if (submitted) {
    return <div className="text-center">Thank you for your message!</div>;
  }

  return (
    <>
      <div className="pb-4 space-y-1">
        <h2 className="sm:text-xl md:text-2xl">Contact Me</h2>
        <p className="text-center text-sm md:text-base">
          Hope to hear from you! Fill out the form below to get in touch.
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" items-center gap-1 flex-col sm:flex-row hidden"
        >
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <div className="flex gap-2 relative">
                        <FormMessage className="absolute -top-6" />
                        <Input
                          placeholder="youremail@example.com"
                          className="bg-popover/50 h-10 placeholder:text-sm"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormDescription>
                      Please enter your email address.
                    </FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <div className="flex gap-2 relative">
                        <FormMessage className="absolute -top-6" />
                        <Textarea
                          placeholder="Your message"
                          className="bg-popover/50 placeholder:text-sm"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormDescription>
                      Please enter your message (10-500 characters).
                    </FormDescription>
                  </FormItem>
                )}
              />
            </motion.div>
          </div>
          <Button type="submit" className="mb-5" variant={"default"}>
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}
