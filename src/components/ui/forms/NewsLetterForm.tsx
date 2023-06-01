import { FieldValues, UseFormSetValue, useForm } from "react-hook-form";
import { FormProps } from ".";
import TextField from "../form-fields/TextField";
import { REGEX_EMAIL } from "@/components/utils/regex";
import Button from "../buttons/Button";
import { Grid } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";

const defaultTitle = `Sign up to stay up to date with what we build.`;
const buttonLabel = `Sign me up!`;

export default function NewsLetterForm({
  // loading,
  // onSubmit,
  title,
}: FormProps) {
  // React Hook Form variables
  const {
    control,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm<FieldValues>();

  const [loading, setLoading] = useState(false);

  const onSubmit = async ({
    data,
    setValue,
  }: {
    data: any;
    setValue: UseFormSetValue<FieldValues>;
  }) => {
    setLoading(true);
    try {
      await fetch("/api/news-letter-subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: data.email,
          status: "pending",
        }),
      });
      Object.keys(data).map((keys) => setValue(`${keys}`, ""));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Error: ", error);
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 30 }}
    >
      <form
        onSubmit={handleSubmit((data) => onSubmit({ data, setValue }))}
        className="flex self-center items-center flex-col w-fit gap-4"
      >
        <div className="text-[24px]">{title || defaultTitle}</div>
        <div className="flex w-full gap-4">
          <TextField
            control={control}
            name="email"
            type="text"
            placeholder="Enter your email address..."
            required="Email is required."
            pattern={{
              value: REGEX_EMAIL,
              message: "Please enter a valid email address",
            }}
            errors={errors}
          />
          <div className="min-w-fit">
            <Button
              label={buttonLabel}
              loading={loading}
              className="text-black"
              bgColor="#64B6AC"
            />
          </div>
        </div>
      </form>
    </motion.div>
  );
}
