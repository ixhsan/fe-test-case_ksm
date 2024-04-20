import { useRouter } from "next/router";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";
import Link from "next/link";

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

export default function SelectPageSize() {
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
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        {pageSizes.map((pageSize) => (
          <SelectItem key={pageSize.value} value={pageSize.value}>
            <Link
              href={`${router.pathname}?_start=${isStart}&_limit=${pageSize.value}`}
            >
              {pageSize.label}
            </Link>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
