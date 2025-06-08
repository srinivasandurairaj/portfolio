// import nodemailer from "nodemailer";

export async function POST() {
  // const { name, email, message } = await request.json();
  // const transporter = nodemailer.createTransport({
  //   host: "smtp.gmail.com",
  //   port: 587,
  //   auth: {
  //     user: "sriniferrari094@gmail.com",
  //     pass: "telecom16",
  //   },
  // });
  // try {
  //   await transporter.sendMail({
  //     from: process.env.GMAIL_USERNAME,
  //     to: "recipient@example.com",
  //     subject: `New message from ${name}`,
  //     text: message,
  //     replyTo: email,
  //   });
  //   return new Response(
  //     JSON.stringify({ message: "Email sent successfully!" }),
  //     {
  //       status: 200,
  //       headers: { "Content-Type": "application/json" },
  //     }
  //   );
  // } catch (error) {
  //   console.error(error);
  //   return new Response(JSON.stringify({ message: "Failed to send email." }), {
  //     status: 200,
  //     headers: { "Content-Type": "application/json" },
  //   });
  // }
}
