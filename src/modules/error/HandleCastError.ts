import mongoose from "mongoose";
import { IGenericErrorMessage } from "../interfaces/IGenericErrorMessage";

// const handleCastError = (error: mongoose.Error.CastError) => {
//   const errors: IGenericErrorMessage[] = [
//     {
//       path: error.path,
//       message: 'Invalid Id',
//     },
//   ];

//   const statusCode = 400;
//   return {
//     statusCode,
//     message: 'Cast Error',
//     errorMessages: errors,
//   };
// };

// export default handleCastError;
const handleCastError = (error: mongoose.Error.CastError) => {
  const errors: IGenericErrorMessage[] = [
    {
      path: error.path,
      message: "Invalied Id",
    },
  ];
  const statusCode = 400;
  return {
    statusCode,
    message: "Cast Error",
    errorMessages: errors,
  };
};
export default handleCastError;
