// pages/api/todos.ts
import { baseApi } from "@/constant";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      if (baseApi) {
        const response = await fetch(baseApi.concat("/todos"));
        console.log({ response, baseApi });

        const todos = await response.json();
        res.status(200).json(todos);
      }
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch todos" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
