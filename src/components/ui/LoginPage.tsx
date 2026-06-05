"use client";

import React, { useState } from "react";
import { useAuthStore } from "@/src/store/useAuthStore";
import { loginSchema, LoginInput } from "@/src/types/schemas";

export default function LoginPage() {
  const setAuth = useAuthStore((state) => state.setAuth);
  
  // Local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Partial<Record<keyof LoginInput, string>>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [generalError, setGeneralError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setGeneralError("");

    // Validate using Zod
    const result = loginSchema.safeParse({ email, password });
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof LoginInput, string>> = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof LoginInput;
        fieldErrors[path] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API login call
      await new Promise((resolve) => setTimeout(resolve, 1200));

      // Mock user & token payload matching schemas
      if (email === "admin@res.com" && password === "password123") {
        setAuth(
          {
            id: "usr_1",
            name: "John Doe",
            email: email,
            role: "admin",
          },
          "mock_jwt_token_xyz"
        );
      } else {
        setGeneralError("Invalid credentials. Try admin@res.com / password123");
      }
    } catch {
      setGeneralError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row bg-background">
      {/* Left side: Premium branding & illustration placeholder */}
      <div className="hidden lg:flex w-1/2 flex-col justify-between bg-secondary p-12 text-white relative overflow-hidden">
        {/* Decorative background grid and gradient */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-primary opacity-20 blur-3xl" />
        
        {/* Top: Logo */}
        <div className="flex items-center gap-3 z-10">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight">RES HRMS</span>
        </div>

        {/* Center: Message */}
        <div className="max-w-md my-auto z-10 space-y-6">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight">
            Streamline your workforce management.
          </h2>
          <p className="text-lg text-neutral-400">
            A comprehensive solution for attendance, payroll, onboarding, and performance management.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full bg-surface-elevated/10 px-4 py-2 text-xs font-semibold text-primary backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-tertiary animate-pulse" />
            Version 1.0.0
          </div>
        </div>

        {/* Bottom: Footer Info */}
        <div className="text-xs text-neutral-500 z-10">
          &copy; {new Date().getFullYear()} RES HRMS. All rights reserved.
        </div>
      </div>

      {/* Right side: Login Form */}
      <div className="flex flex-1 flex-col justify-center px-6 py-12 md:px-12 lg:px-20 bg-background relative">
        <div className="mx-auto w-full max-w-sm">
          {/* Header */}
          <div className="text-center lg:text-left space-y-2 mb-8">
            {/* Logo on mobile view */}
            <div className="flex lg:hidden justify-center items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-text-primary">RES HRMS</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-text-primary">Welcome Back</h1>
            <p className="text-sm text-text-secondary">
              Please enter your details to sign into your account.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* General Alert */}
            {generalError && (
              <div className="rounded-lg bg-error-bg p-4 text-xs font-medium text-error border border-error/20 flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 shrink-0"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>{generalError}</span>
              </div>
            )}

            {/* Email field */}
            <div className="space-y-1">
              <label
                htmlFor="email"
                className="text-xs font-semibold uppercase tracking-wider text-text-primary"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className={`w-full h-11 rounded-lg border bg-surface px-4 text-sm text-text-primary transition-all outline-none focus:border-primary ${
                  errors.email ? "border-error focus:border-error" : "border-border focus:border-primary-light"
                }`}
              />
              {errors.email && (
                <p className="text-xs font-medium text-error flex gap-1 items-center mt-1">
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            {/* Password field */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label
                  htmlFor="password"
                  className="text-xs font-semibold uppercase tracking-wider text-text-primary"
                >
                  Password
                </label>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-xs font-semibold text-primary hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className={`w-full h-11 rounded-lg border bg-surface px-4 text-sm text-text-primary transition-all outline-none focus:border-primary ${
                  errors.password ? "border-error focus:border-error" : "border-border focus:border-primary-light"
                }`}
              />
              {errors.password && (
                <p className="text-xs font-medium text-error flex gap-1 items-center mt-1">
                  <span>{errors.password}</span>
                </p>
              )}
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 rounded border-border text-primary focus:ring-primary-light focus:ring-2 accent-primary"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-xs font-medium text-text-secondary cursor-pointer select-none"
              >
                Keep me signed in
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-11 inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-hover hover:shadow-md disabled:opacity-50 active:scale-[0.98]"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-4.5 w-4.5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Signing In...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Quick Demo Credentials Info */}
          <div className="mt-8 rounded-xl bg-surface p-4 border border-border space-y-2">
            <h4 className="text-xs font-bold text-text-primary flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-tertiary" />
              Demo Credentials
            </h4>
            <div className="text-[11px] text-text-secondary space-y-1 font-mono">
              <div>Email: <span className="font-semibold text-text-primary">admin@res.com</span></div>
              <div>Password: <span className="font-semibold text-text-primary">password123</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
