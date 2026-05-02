"use client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { Icon, InlineIcon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const SignUpPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="flex-1 flex justify-center items-center p-6 sm:p-10 bg-orange-50 order-2 lg:order-1">
        <Form
          className="flex w-full max-w-md flex-col gap-4 bg-white border border-orange-100 p-6 sm:p-10 rounded-2xl shadow-sm"
          onSubmit={onSubmit}
        >
          {/* Title */}
          <div className="mb-1">
            <h1 className="text-2xl font-bold text-orange-950">
              Create Account
            </h1>
            <p className="text-xs text-orange-700 opacity-70 mt-1">
              Join thousands of summer lovers today
            </p>
          </div>

          {/* Name */}
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) return "Name must be at least 3 characters";
              return null;
            }}
          >
            <Label className="text-sm font-medium text-orange-900">
              Full Name
            </Label>
            <Input
              placeholder="Your full name"
              className="rounded-xl border-orange-200"
            />
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          {/* Image URL */}
          <TextField isRequired name="imgUrl" type="text">
            <Label className="text-sm font-medium text-orange-900">
              Profile Image URL
            </Label>
            <Input
              placeholder="https://example.com/photo.jpg"
              className="rounded-xl border-orange-200"
            />
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
                return "Please enter a valid email address";
              return null;
            }}
          >
            <Label className="text-sm font-medium text-orange-900">
              Email Address
            </Label>
            <Input
              placeholder="mail@example.com"
              className="rounded-xl border-orange-200"
            />
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8)
                return "Password must be at least 8 characters";
              if (!/[A-Z]/.test(value))
                return "Must contain at least one uppercase letter";
              if (!/[0-9]/.test(value))
                return "Must contain at least one number";
              return null;
            }}
          >
            <Label className="text-sm font-medium text-orange-900">
              Password
            </Label>
            <Input
              placeholder="Enter your password"
              className="rounded-xl border-orange-200"
            />
            <Description className="text-xs text-orange-600 opacity-70 mt-1">
              Min 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          {/* Submit */}
          <Button
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-xl mt-2 transition"
            type="submit"
          >
            <Check />
            Create Account
          </Button>
          {/* Divider------------------------------------------------- */}
          <div className="flex items-center gap-3 my-1">
            <div className="flex-1 h-px bg-orange-100" />
            <span className="text-xs text-orange-400">or continue with</span>
            <div className="flex-1 h-px bg-orange-100" />
          </div>

          <Button className="w-full" variant="tertiary">
            <InlineIcon icon="devicon:google" />
            Sign Up with Google
          </Button>
          {/* GitHub Button */}
          <Button className="w-full" variant="tertiary">
            <Icon icon="mdi:github" />
            Sign Up with GitHub
          </Button>
          {/* Login link */}
          <p className="text-xs text-center text-orange-700 opacity-70">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-orange-600 font-medium underline"
            >
              Sign in
            </Link>
          </p>
        </Form>
      </div>

      {/* Right — ------------------------- */}
      <div className="flex-1 min-h-[260px] sm:min-h-[320px] lg:min-h-screen relative overflow-hidden order-1 lg:order-2">
        <Image
          alt="Summer registration"
          fill
          className="object-cover object-center"
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/85 via-black/50 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end lg:justify-center p-6 sm:p-10 lg:p-12 text-white">
          <div className="max-w-sm">
            <span className="inline-block bg-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full mb-3">
              Welcome to SunCart!
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3">
              Your Summer
              <br />
              <span className="text-orange-400">Journey Starts Here</span>
            </h2>

            <p className="text-sm text-white/80 leading-relaxed mb-5 hidden sm:block">
              Create your free account and unlock exclusive summer deals, tips,
              and the best products curated just for you.
            </p>

            {/* Benefits */}
            <ul className="space-y-2 text-sm text-white/90">
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </span>
                Free account — no credit card needed
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </span>
                Access 500+ premium summer products
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </span>
                Exclusive deals for registered members
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </span>
                Free shipping on every order
              </li>
            </ul>

            {/* Trust badge */}
            <div className="mt-6 flex items-center gap-3 hidden sm:flex">
              <div>
                <p className="text-xs font-medium text-white">
                  50,000+ members
                </p>
                <p className="text-xs text-white/60">joined this summer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
