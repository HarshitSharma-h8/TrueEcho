import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User.model";
import { z } from "zod";
import { usernameValidation } from "@/schema/signUpSchema";

const UsernameQuerySchema = z.object({
  username: usernameValidation,
});

export async function GET(request: Request) {
  await dbConnect();

  try {
    const { searchParams } = new URL(request.url);

    const queryParams = {
      username: searchParams.get("username"),
    };

    const result = UsernameQuerySchema.safeParse(queryParams);

    if (!result.success) {
      const usernameErrors = result.error.format().username?._errors || [];
      return Response.json(
        {
          success: false,
          message:
            usernameErrors?.length > 0
              ? usernameErrors.join(", ")
              : "invalid query parameters",
        },
        {
          status: 400,
        }
      );
    }

    const { username } = result.data;

    if(username === ''){
      return Response.json(
        {
          success: false,
          message: "Empty username not accepted",
        },
        { status: 200 }
      );
    }

    const existingVerifiedUser = await UserModel.findOne({
      username,
      isVerified: true,
    });

    if (existingVerifiedUser) {
      return Response.json(
        {
          success: false,
          message: "Username is already taken",
        },
        { status: 200 }
      );
    }

    return Response.json(
      {
        success: true,
        message: "Username is available",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error checking username", error);
    return Response.json(
      {
        success: false,
        messagae: "Error checking username",
      },
      {
        status: 500,
      }
    );
  }
}
