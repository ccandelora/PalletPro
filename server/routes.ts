import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import nodemailer from "nodemailer";

// Contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  subject: z.string().min(1),
  message: z.string().min(10),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate form data
      const validatedData = contactFormSchema.parse(req.body);
      
      // For production, you would set up a real email service
      // This is a simple implementation for demonstration
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || "smtp.example.com",
        port: parseInt(process.env.EMAIL_PORT || "587"),
        secure: process.env.EMAIL_SECURE === "true",
        auth: {
          user: process.env.EMAIL_USER || "user@example.com",
          pass: process.env.EMAIL_PASS || "password",
        },
      });
      
      // Email content
      const mailOptions = {
        from: `"Bay State Pallet Website" <${process.env.EMAIL_FROM || "contact@example.com"}>`,
        to: process.env.EMAIL_TO || "info@baystatepallet.com",
        subject: `New Contact Form: ${validatedData.subject}`,
        text: `
          Name: ${validatedData.name}
          Company: ${validatedData.company}
          Email: ${validatedData.email}
          Phone: ${validatedData.phone}
          Subject: ${validatedData.subject}
          Message: ${validatedData.message}
        `,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Company:</strong> ${validatedData.company}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Phone:</strong> ${validatedData.phone}</p>
          <p><strong>Subject:</strong> ${validatedData.subject}</p>
          <p><strong>Message:</strong> ${validatedData.message}</p>
        `,
      };
      
      // In development, we'll just log the email content
      if (process.env.NODE_ENV === "development") {
        console.log("Email would be sent:", mailOptions);
        return res.status(200).json({ success: true, message: "Message received (development mode)" });
      }
      
      // Send email in production
      await transporter.sendMail(mailOptions);
      
      return res.status(200).json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      console.error("Contact form error:", error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({ success: false, message: "Invalid form data", errors: error.errors });
      }
      
      return res.status(500).json({ success: false, message: "Failed to send message" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
