"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { FormInput } from "@/components/shared/form/FormInput";
import { Heading, Text } from "@/components/shared/typography";
import { AuthVisualColumn } from "@/components/auth/AuthVisualColumn";
import {
  clientRegisterSchema,
  type ClientRegisterInput,
} from "@/validation/auth.validation";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<ClientRegisterInput>({
    resolver: zodResolver(clientRegisterSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: ClientRegisterInput) => {
    setIsLoading(true);
    try {
      // Simulate register request or integrate with backend
      await new Promise((resolve) => setTimeout(resolve, 800));
      toast.success("Account created successfully!");
    } catch {
      toast.error("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container relative z-10 mx-auto w-full px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
        {/* Left Side: Branding, Visual Course Cards, and 3D Floating Shapes */}
        <div className="w-full flex justify-center lg:justify-start">
          <AuthVisualColumn
            title="Sign up and come in"
            description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
          />
        </div>

        {/* Right Side: Centered White Form Card */}
        <div className="w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-[480px] bg-white rounded-[32px] p-8 sm:p-10 lg:p-12 shadow-2xl transition-all duration-300">
            {/* Header Eyebrow & Title using Typography components */}
            <div className="mb-8">
              <Text size="s" className="text-primary font-medium block mb-1.5">
                Create an Account
              </Text>

              <Heading size="m" className="text-slate-900">
                Welcome to <br />
                ByteSpace
              </Heading>
            </div>

            {/* Form Inputs handled via FormProvider and FormInput */}
            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="space-y-5"
                noValidate
              >
                <FormInput
                  name="fullName"
                  label="Full Name"
                  placeholder="Jamie Davis"
                />

                <FormInput
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="designer@example.com"
                />

                <FormInput
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="********"
                />

                {/* Right-aligned Neon Yellow/Lime Action Button */}
                <div className="flex justify-end pt-2">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    variant={"secondary"}
                    className="rounded-full px-4"
                  >
                    {isLoading ? "Creating..." : "Continue"}
                  </Button>
                </div>
              </form>
            </FormProvider>

            {/* Bottom Footer Switcher to Login */}
            <div className="text-center text-sm text-slate-600 mt-10 sm:mt-14">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary font-semibold hover:underline"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
