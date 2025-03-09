"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    const role = user?.publicMetadata.role;
    if (role) {
      router.push(`/${role}`);
    }
  }, [user, router]);

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 max-w-md w-full mx-auto">
        <SignIn.Root>
          <SignIn.Step
            name="start"
            className="bg-white p-10 rounded-2xl shadow-2xl flex flex-col gap-4 border border-gray-100"
          >
            <div className="flex flex-col items-center mb-4">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Image 
                  src="/logo.png" 
                  alt="SchooLama Logo" 
                  width={36} 
                  height={36} 
                  className="drop-shadow-md"
                />
              </div>
              <h1 className="text-2xl font-bold text-center text-gray-800">
                Campusphere
              </h1>
              <h2 className="text-gray-500 text-center mt-1">
                Welcome back! Please sign in to continue
              </h2>
            </div>
            
            <Clerk.GlobalError className="text-sm text-red-500 bg-red-50 p-3 rounded-lg" />
            
            <Clerk.Field name="identifier" className="flex flex-col gap-2">
              <Clerk.Label className="text-sm font-medium text-gray-700">
                Username
              </Clerk.Label>
              <Clerk.Input
                type="text"
                required
                className="p-3 rounded-lg ring-1 ring-gray-300 focus:ring-blue-500 focus:ring-2 outline-none transition-all"
              />
              <Clerk.FieldError className="text-xs text-red-500" />
            </Clerk.Field>
            
            <Clerk.Field name="password" className="flex flex-col gap-2">
              <Clerk.Label className="text-sm font-medium text-gray-700">
                Password
              </Clerk.Label>
              <Clerk.Input
                type="password"
                required
                className="p-3 rounded-lg ring-1 ring-gray-300 focus:ring-blue-500 focus:ring-2 outline-none transition-all"
              />
              <Clerk.FieldError className="text-xs text-red-500" />
            </Clerk.Field>
            
            <div className="flex justify-end my-1">
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                Forgot password?
              </a>
            </div>
            
            <SignIn.Action
              submit
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm p-3 transition-colors shadow-md"
            >
              Sign In
            </SignIn.Action>
            
            <div className="mt-4 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                Sign up
              </a>
            </div>
          </SignIn.Step>
        </SignIn.Root>
      </div>
    </div>
  );
};

export default LoginPage;