"use client";
import { ArrowRight } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { Icon, InlineIcon } from "@iconify/react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signIn.email({
      email: userData.email, // required
      password: userData.password, // required
      callbackURL: "/",
    });
    if (error) {
      toast.error(error.message);
    }
    if (data) {
      toast.success("Log In Successfully!");
      e.currentTarget.reset();
    }
  };
  // with google-------------
  const handleGoogleLogin = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message);
    }
  };
  // with github------------
  const handleGithubLogin = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });
  };
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left — Form */}
      <div className="flex-1 flex justify-center items-center p-6 sm:p-10 bg-orange-50 order-2 lg:order-1">
        <Form
          className="flex w-full max-w-md flex-col gap-4 bg-white border border-orange-100 p-6 sm:p-10 rounded-2xl shadow-sm"
          onSubmit={onSubmit}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 mb-1">
            <div className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center">
              <span className="text-white text-xs font-bold">S</span>
            </div>
            <span className="text-sm font-semibold text-orange-700">
              SunCart
            </span>
          </div>

          {/* Title */}
          <div className="mb-1">
            <h1 className="text-2xl font-bold text-orange-950">Welcome Back</h1>
            <p className="text-xs text-orange-700 opacity-70 mt-1">
              Sign in to your account to continue
            </p>
          </div>

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
          <TextField isRequired name="password" type="password">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium text-orange-900">
                Password
              </Label>
              <a
                href="/forgot-password"
                className="text-xs text-orange-600 underline"
              >
                Forgot password?
              </a>
            </div>
            <Input
              placeholder="Enter your password"
              className="rounded-xl border-orange-200"
            />
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          {/* Submit */}
          <Button
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-xl mt-2 transition"
            type="submit"
          >
            <ArrowRight />
            Sign In
          </Button>

          {/* Divider------------------------------------------------- */}
          <div className="flex items-center gap-3 my-1">
            <div className="flex-1 h-px bg-orange-100" />
            <span className="text-xs text-orange-400">or continue with</span>
            <div className="flex-1 h-px bg-orange-100" />
          </div>

          {/* Google Button -=============*/}

          <Button
            onClick={() => handleGoogleLogin()}
            className="w-full"
            variant="tertiary"
          >
            <InlineIcon icon="devicon:google" />
            Sign in with Google
          </Button>
          {/* GitHub Button */}
          <Button
            onClick={handleGithubLogin}
            className="w-full"
            variant="tertiary"
          >
            <Icon icon="mdi:github" />
            Sign in with GitHub
          </Button>

          {/* Register link */}
          <p className="text-xs text-center text-orange-700 opacity-70">
            Don`t have an account?{" "}
            <Link
              href="/signup"
              className="text-orange-600 font-medium underline"
            >
              Sign up free
            </Link>
          </p>
        </Form>
      </div>

      {/* Right ----------------------------------------------------------*/}
      <div className="flex-1 min-h-[260px] sm:min-h-[320px] lg:min-h-screen relative overflow-hidden order-1 lg:order-2">
        <Image
          alt="Summer login"
          fill
          className="object-cover object-center"
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/85 via-black/50 to-transparent" />

        <div className="absolute inset-0 z-10 flex flex-col justify-end lg:justify-center p-6 sm:p-10 lg:p-12 text-white">
          <div className="max-w-sm">
            <span className="inline-block bg-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full mb-3">
              Summer 2025
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3">
              Good to See
              <br />
              <span className="text-orange-400">You Again!</span>
            </h2>

            <p className="text-sm text-white/80 leading-relaxed mb-5 hidden sm:block">
              Sign in and pick up right where you left off. Your summer
              essentials are waiting for you.
            </p>

            <ul className="space-y-2 text-sm text-white/90">
              {[
                "Track your orders in real time",
                "Access your saved summer wishlist",
                "Get member-only exclusive discounts",
                "Fast checkout with saved address",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 hidden sm:flex items-center gap-3">
              <div>
                <p className="text-xs font-medium text-white">
                  50,000+ members
                </p>
                <p className="text-xs text-white/60">active this summer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
