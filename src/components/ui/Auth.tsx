"use client";
import { signIn, signOut } from "next-auth/react";
import React from "react";

interface AuthProps {
  name: string;
  email: string;
  image: string;
}
const Auth = ({ name, email, image }: AuthProps) => {
  return (
    <div className="flex items-center justify-between gap-2">
      {name ? (
        <>
          <div className="bg-yellow-300 flex items-center gap-2 rounded-full pl-2">
            <div className=" flex items-center gap-2">
              <img src={image} alt="avatar" className="rounded-full size-12" />
              <div className="flex flex-col">
                <p className="text-sm font-bold">Hello, {name.split(" ")[0]}</p>
              </div>
            </div>
            <button
              className="bg-yellow-500 border-2 border-yellow-300 px-7 py-4 font-bold rounded-full hover:drop-shadow-lg hover:border-2 hover:border-yellow-900"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </div>
        </>
      ) : (
        <>
          <button
            className="bg-yellow-300 border-2 border-white px-6 py-3 font-bold rounded-full hover:drop-shadow-lg hover:border-2 hover:border-yellow-900"
            onClick={() => signIn("github")}
          >
            Sign In
          </button>
          <button
            className="bg-yellow-500 border-2 border-white px-6 py-3 font-bold rounded-full hover:drop-shadow-lg hover:border-2 hover:border-yellow-900"
            onClick={() => signIn("github")}
          >
            Sign Up
          </button>
        </>
      )}
    </div>
  );
};

export default Auth;
