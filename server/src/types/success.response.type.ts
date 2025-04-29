import { Response } from "express";
import { ApiResponse } from "./api.response.type.js";

export const successResponse = <T>(
  res: Response,
  data: T,
  message: string,
  status = 200
): Response<ApiResponse<T>> => {
  return res.status(status).json({
    success: true,
    message,
    data,
  });
};
