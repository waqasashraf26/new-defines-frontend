"use client";

//* imports
import React, { useState } from "react";
import * as Yup from "yup"; // Import Yup for validation schema

//* lib imports
import {
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import axios from "axios";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phone: Yup.string().required("Phone Number is required"),
  message: Yup.string().required("Message is required"),
});

const FormContactUsComp = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { values, handleSubmit, handleChange, resetForm, errors, touched } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      const loadingToastId = toast.loading('Loading...');  //set loading
      try {
        const response = await axios.post('/api/send-email', values);
        console.log(response);
        toast.success("Email sent Successfully!", { id: loadingToastId });
        resetForm();
      } catch (error) {
        console.log(error);
        let errorMessage = "Error sending email";
 
        // Check if the error is related to authentication
        if (error.response && error.response.data && error.response.data.message) {
          const detailedMessage = error.response.data.message;
          if (detailedMessage.includes("Username and Password not accepted")) {
            errorMessage = "Username and Password not accepted";
          }
        }

        toast.error(errorMessage, { id: loadingToastId });
      }
    }
  });

  return (
    <>
      <div className="w-full h-auto bg-white rounded-[10px] p-4">
        <Toaster />
        <Form>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col items-center justify-start w-full h-auto gap-5 lg:flex-row">
              {/* first name */}
              <div className="w-full space-y-5 lg:w-1/2">
                <label htmlFor="firstName">First Name</label>
                <Input
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  type="text"
                  className={errors.firstName && touched.firstName ? 'border-red-500' : ''}
                />
                {errors.firstName && touched.firstName && <div className="text-red-500">{errors.firstName}</div>}
              </div>

              {/* last name */}
              <div className="w-full space-y-5 lg:w-1/2">
                <label htmlFor="lastName">Last Name</label>
                <Input
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  type="text"
                  className={errors.lastName && touched.lastName ? 'border-red-500' : ''}
                />
                {errors.lastName && touched.lastName && <div className="text-red-500">{errors.lastName}</div>}
              </div>
            </div>

            {/* email */}
            <div className="space-y-5">
              <label htmlFor="email">Email</label>
              <Input
                name="email"
                value={values.email}
                onChange={handleChange}
                type="email"
                className={errors.email && touched.email ? 'border-red-500' : ''}
              />
              {errors.email && touched.email && <div className="text-red-500">{errors.email}</div>}
            </div>

            {/* phone */}
            <div className="space-y-5">
              <label htmlFor="phone">Phone Number</label>
              <Input
                name="phone"
                value={values.phone}
                onChange={handleChange}
                type="text"
                className={errors.phone && touched.phone ? 'border-red-500' : ''}
              />
              {errors.phone && touched.phone && <div className="text-red-500">{errors.phone}</div>}
            </div>

            {/* message */}
            <div className="space-y-5">
              <label htmlFor="message">Message</label>
              <Textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                type="text"
                className={errors.message && touched.message ? 'border-red-500' : ''}
              />
              {errors.message && touched.message && <div className="text-red-500">{errors.message}</div>}
            </div>

            <div className="w-full h-auto">
              <Button
                type="submit"
                variant="custom"
                className="w-full text-white bg-fSeaGreen text-[20px] font-normal h-[50px]"
                disabled={isLoading}
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default FormContactUsComp;
