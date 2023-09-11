import { ERROR_STATUS_ARRAY } from '../constants/ErrorData';

interface ErrorResponse {
  error: string;
}

interface SuccessResponse<T> {
  status: number;
  message: string;
  data: T;
}

interface Response<T> {
  status: number;
  message: string;
  data: T;
}

function findErrorMessage(
  status: number,
): ErrorResponse | (typeof ERROR_STATUS_ARRAY)[number] {
  return (
    ERROR_STATUS_ARRAY.find((v) => v.status === status) || {
      error: 'There must be an error',
    }
  );
}

/**
 * Success Response.
 * @param {number} status - Success response status
 * @param {string} succMessage - Success response message
 * @param {any} data - Success response custom data
 */
function successResponse<T>(
  status: number,
  succMessage: string,
  data: T,
): SuccessResponse<T> {
  return {
    status,
    message: succMessage,
    data,
  };
}

function Response<T>(status: number, message: string, data: T): Response<T> {
  return {
    status: status,
    message: message,
    data: data,
  };
}

/**
 * Error Response.
 * @param {{message, statusCode: number}} statusCode - Error Status Code
 */
function errorResponse(
  statusCode: number,
): ErrorResponse | (typeof ERROR_STATUS_ARRAY)[number] {
  return findErrorMessage(statusCode);
}

export default { errorResponse, successResponse, Response };
