import nodemailer from "nodemailer";
// import VerificationEmail from "../../email/VerificationEmail";


export default async function sendCode(
  email: string,
  username: string,
  verifyCode: string
) {
  

  

  try {
    // Configure Nodemailer with Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail app password
      },
    });

    // Set email options
    const mailOptions = {
      from: `"Your Name" <${process.env.GMAIL_USER}>`,
      to: email, // Replace with the recipient's email
      subject: "New Form Submission",
      html: `
        <p style="font-size: 32px; font-weight: bold;">Hi ${username},</p>
        <p>Thank you for registering. Please use the following verification code to complete your registration:</p>
        <p>${verifyCode}</p>
        <p>If you did not request this code, please ignore this email.</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return { success: true, message: "Verification email sent successfully." };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to send verification email." };
  }
}
