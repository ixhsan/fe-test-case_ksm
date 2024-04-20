import { useRouter } from "next/router";
import React from "react";

export default function usePagination() {
  const router = useRouter();

  return {
    _start:
      router.query._start && typeof router.query._start === "string"
        ? router.query._start
        : "0",
    _limit:
      router.query._limit && typeof router.query._limit === "string"
        ? router.query._limit
        : "10",
  };
}
