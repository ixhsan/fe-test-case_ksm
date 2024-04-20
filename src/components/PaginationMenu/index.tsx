import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter } from "next/router";

import React from "react";

const pageSizes = [
  {
    label: "10",
    value: "10",
  },
  {
    label: "20",
    value: "20",
  },
  {
    label: "30",
    value: "30",
  },
];

export default function PaginationMenu() {
  const router = useRouter();
  const isStart =
    router.query._start && typeof router.query._start === "string"
      ? router.query._start
      : "0";
  const isLimit =
    router.query._limit && typeof router.query._limit === "string"
      ? router.query._limit
      : "10";

  return (
    <Pagination className="flex justify-between">
      <PaginationContent className="flex gap-4">
        {pageSizes.map((pageSize, idx) => (
          <PaginationLink
            key={pageSize.value}
            href={`${router.pathname}?_start=${isStart}&_limit=${pageSize.value}`}
            className={`w-20 bg-slate-300 py-4`}
          >
            {pageSize.label}
          </PaginationLink>
        ))}
        <h4 className="text-sm">Items Per Page</h4>
      </PaginationContent>

      <PaginationContent className="flex gap-4">
        <PaginationItem>
          {isStart !== "0" && (
            <PaginationLink
              href={`${router.pathname}?_start=${String(
                parseInt(isStart) - parseInt(isLimit)
              )}&_limit=${isLimit}`}
              className="w-20 bg-slate-300 py-4"
            >
              Previous
            </PaginationLink>
          )}
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href={`${router.pathname}?_start=${String(
              parseInt(isStart) + parseInt(isLimit)
            )}&_limit=${isLimit}`}
            className="w-20 bg-slate-300 py-4"
          >
            Next
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
