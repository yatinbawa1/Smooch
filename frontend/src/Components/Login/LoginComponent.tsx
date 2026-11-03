import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

const LoginComponent = () => {
  return (
    <div className="grid min-h-screen bg-base-100 lg:grid-cols-[1.05fr_1fr]">
      <aside className="relative hidden overflow-hidden lg:flex lg:flex-col lg:justify-center bg-linear-to-br from-rose-600 via-pink-600 to-orange-500 p-10 text-white xl:p-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -left-32 size-96 rounded-full bg-white/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/3 -right-24 size-80 rounded-full bg-orange-300/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 left-1/4 size-96 rounded-full bg-rose-900/30 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(rgba(255,255,255,0.7)_1px,transparent_1px)] bg-size-[22px_22px]"
        />

        <div className="relative max-w-md">
          <h1 className="text-4xl leading-[1.08] font-bold tracking-tight text-balance xl:text-5xl">
            Sign in to continue to smooches.
          </h1>
          <p className="mt-4 text-base text-white/85">
            Access your account to pick up right where you left off.
          </p>
        </div>
      </aside>

      {/* Form panel */}
      <main className="relative flex items-center justify-center px-5 py-10 sm:px-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 -z-0 size-72 rounded-full bg-pink-100 blur-3xl lg:hidden"
        />
        <div className="relative z-10 w-full max-w-md">
          <p className="text-sm font-semibold tracking-wide text-pink-600 uppercase">
            Welcome back
          </p>
          <h2 className="mt-1 text-3xl font-bold tracking-tight text-base-content">
            Log in to your account
          </h2>
          <p className="mt-2 text-[15px] text-base-content/60">
            Enter your credentials to continue.
          </p>

          <form className="mt-6 space-y-4">
            <div className="form-control">
              <label htmlFor="email" className="label pb-1.5">
                <span className="label-text font-medium">Email address</span>
              </label>
              <label className="input input-bordered w-full focus-within:input-primary">
                <Mail className="size-4 opacity-60" aria-hidden="true" />
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="grow"
                />
              </label>
            </div>

            <div className="form-control">
              <label htmlFor="password" className="label pb-1.5">
                <span className="label-text font-medium">Password</span>
              </label>
              <label className="input input-bordered w-full focus-within:input-primary">
                <Lock className="size-4 opacity-60" aria-hidden="true" />
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="grow"
                />
              </label>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="label cursor-pointer gap-2.5 p-0">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm checkbox-primary"
                />
                <span className="label-text text-sm">Remember me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-sm font-semibold text-pink-600 hover:text-pink-700 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="btn w-full border-0 bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 text-base font-semibold text-white shadow-lg shadow-pink-500/30 hover:opacity-95"
            >
              Log in
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-base-content/70">
            New to smooches?{" "}
            <Link
              to="/signup"
              className="font-semibold text-pink-600 hover:text-pink-700 hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default LoginComponent;
