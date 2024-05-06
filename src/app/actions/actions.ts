"use server";
import { cookies } from "next/headers";

export async function setCookie(key: string, value: string) {
  cookies().set(key, value);
}

export async function getFavoritesList() {
  return (
    cookies()
      .get("favorites")
      ?.value.split(",")
      .filter((x) => x !== "") || []
  );
}
