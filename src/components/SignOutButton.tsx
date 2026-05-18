"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  async function handleSignOut() {
    await signOut({ redirect: false });
    window.location.href = "/";
  }

  return (
    <button
      onClick={handleSignOut}
      className="text-sm text-gray-500 hover:text-red-400 transition"
    >
      Sign out
    </button>
  );
}
