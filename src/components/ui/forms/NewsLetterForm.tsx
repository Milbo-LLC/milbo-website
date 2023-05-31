import { FieldValues, useForm } from "react-hook-form";
import { FormProps } from ".";
import TextField from "../form-fields/TextField";
import { REGEX_EMAIL } from "@/components/utils/regex";
import Button from "../buttons/Button";
import { Grid } from "@mui/material";

const title = `Sign up to stay up to date with what we build.`;
const buttonLabel = `Sign me up!`;

export default function NewsLetterForm({ loading, onSubmit }: FormProps) {
  // React Hook Form variables
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FieldValues>();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex self-center items-center flex-col w-fit gap-4"
    >
      <div className="text-[24px]">{title}</div>
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
  );
}
