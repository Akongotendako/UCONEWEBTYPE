import { ApiResponse } from "./api.response.type.js";
import { Response } from "express";

export const errorResponse = <T>(
  res: Response,
  message: string,
  status: number,
  error?: unknown
): Response<ApiResponse<T>> => {
  return res.status(status).json({
    success: false,
    message,
    error: error instanceof Error ? error : "Unknown error",
  });
};
