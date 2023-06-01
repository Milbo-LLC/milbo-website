import mailchimp from "@mailchimp/mailchimp_marketing";
// import { NextApiRequest, NextApiResponse } from "next";

// interface ResponseData {
//   message: string;
// }

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   const { email_address, status } = req.body;

//   // Set the mailchimp config with your API key and server prefix
//   mailchimp.setConfig({
//     apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY, //add yout API key here
//     server: process.env.NEXT_PUBLIC_MAILCHIMP_SERVER_URL, //add server prefix here
//   });

//   // Set the Audience ID generated earlier to add email to that audience
//   try {
//     await mailchimp.lists.addListMember(
//       process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID as string,
//       {
//         email_address: email_address,
//         status,
//       }
//     );

//     //Create a custom success message
//     res.status(200).json({
//       message: `You will receive article updates in ${email_address}`,
//     });
//   } catch (err: any) {
//     console.log("error: ", err);
//     const errorResponse = JSON.parse(err.response.text);
//     return res.status(err.status).json({ message: errorResponse.title });
//   }
// }

import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  console.log("req: ", req);
  // return NextResponse.json({ message: "Hello World" });
  // const { email_address, status } = await req.json();

  // Set the mailchimp config with your API key and server prefix
  mailchimp.setConfig({
    apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY, //add yout API key here
    server: process.env.NEXT_PUBLIC_MAILCHIMP_SERVER_URL, //add server prefix here
  });

  // Set the Audience ID generated earlier to add email to that audience
  try {
    await mailchimp.lists.addListMember(
      process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID as string,
      {
        // email_address: email_address,
        // status,
        email_address: "n.milberger@gmail.com",
        status: "pending",
      }
    );

    //Create a custom success message
    // res.status(200).json({
    //   message: `You will receive article updates in ${email_address}`,
    // });
    return NextResponse.json({
      message: `You will receive article updates in ${"n.milberger@gmail.com"}`,
    });
  } catch (err: any) {
    console.log("error: ", err);
    const errorResponse = JSON.parse(err.response.text);
    return NextResponse.json({ message: errorResponse });
  }
}
