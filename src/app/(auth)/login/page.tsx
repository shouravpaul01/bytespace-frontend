"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { FormInput } from "@/components/shared/form/FormInput";
import { Heading, Text } from "@/components/shared/typography";
import { AuthVisualColumn } from "@/components/auth/AuthVisualColumn";
import { SocialAuth } from "@/components/auth/SocialAuth";
import {
  clientLoginSchema,
  type ClientLoginInput,
} from "@/validation/auth.validation";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<ClientLoginInput>({
    resolver: zodResolver(clientLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: ClientLoginInput) => {
    setIsLoading(true);
    try {
      // TODO: Replace with backend authentication service
      await new Promise((resolve) => setTimeout(resolve, 800));
      toast.success("Signed in successfully!");
    } catch {
      toast.error("Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container relative z-10 mx-auto w-full px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="w-full flex justify-start">
          <AuthVisualColumn
            title="Sign in with ease"
            description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
          />
        </div>

        <div className="w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-[480px] bg-white rounded-[32px] p-7 sm:p-9 lg:p-10 shadow-2xl transition-all duration-300">
            <div className="mb-8">
              <Text size="s" className="text-primary font-medium block mb-1.5">
                Sign In
              </Text>

              <Heading size="m" className="text-gray-900">
                Welcome Back
              </Heading>
            </div>

            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="space-y-5"
                noValidate
              >
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

                <div className="flex justify-end pt-2">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    variant={"secondary"}
                    className="rounded-full px-6"
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </div>
              </form>
            </FormProvider>

            <SocialAuth />

            <div className="text-center text-sm text-slate-600 mt-8">
              New user?{" "}
              <Link
                href="/register"
                className="text-primary font-semibold hover:underline"
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
