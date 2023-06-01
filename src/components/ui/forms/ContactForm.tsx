"use client";

import { FieldValues, useForm } from "react-hook-form";
import { FormProps } from ".";
import { Box, Grid } from "@mui/material";
import TextField from "../form-fields/TextField";
import { REGEX_EMAIL } from "@/components/utils/regex";
import Button from "../buttons/Button";

export default function ContactForm({ loading, onSubmit }: FormProps) {
  // React Hook Form variables
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FieldValues>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ flexGrow: 1 }} className="w-full max-w-2xl">
        <Grid container columnSpacing={3}>
          <Grid item xs={12}>
            <TextField
              control={control}
              name="name"
              type="text"
              placeholder="Full name"
              required="Full name is required."
              errors={errors}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              control={control}
              name="email"
              type="text"
              placeholder="Email address"
              required="Email address is required."
              pattern={{
                value: REGEX_EMAIL,
                message: "Please enter a valid email address",
              }}
              errors={errors}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              control={control}
              name="message"
              type="text"
              placeholder="Message"
              required="Message is required."
              errors={errors}
              multiline
              minRows={4}
              maxRows={4}
            />
          </Grid>
          <Grid item xs={12} className="flex justify-center pt-8">
            <Button label="Submit" loading={loading} />
          </Grid>
        </Grid>
      </Box>
    </form>
  );
}
