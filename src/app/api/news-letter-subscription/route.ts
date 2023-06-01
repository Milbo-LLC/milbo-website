import mailchimp from "@mailchimp/mailchimp_marketing";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { email_address, status } = await req.json();

  // Set the mailchimp config with your API key and server prefix
  mailchimp.setConfig({
    apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY, //add yout API key here
    server: process.env.NEXT_PUBLIC_MAILCHIMP_API_SERVER, //add server prefix here
  });

  // Set the Audience ID generated earlier to add email to that audience
  try {
    await mailchimp.lists.addListMember(
      process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID as string,
      {
        email_address: "n.milberger@gmail.com",
        status: status,
      }
    );
    //Create a custom success message
    return NextResponse.json({
      message: `You will receive article updates in ${email_address}`,
    });
  } catch (err: any) {
    const errorResponse = JSON.parse(err.response.text);
    return NextResponse.json({ message: errorResponse });
  }
}
