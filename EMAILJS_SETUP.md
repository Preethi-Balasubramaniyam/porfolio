# EmailJS Setup Instructions

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy your **Service ID**

## Step 3: Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio contact form:

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save and copy your **Template ID**

## Step 4: Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key**

## Step 5: Update Environment Variables
1. Open `.env.local` in your project root
2. Replace the placeholder values:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 6: Test the Form
1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check your email for the message!

## Template Variables Available:
- `{{from_name}}` - Name from form
- `{{from_email}}` - Email from form  
- `{{message}}` - Message from form
- `{{to_name}}` - Your name (hardcoded as "Preethi")

## Troubleshooting:
- Make sure your service is active in EmailJS dashboard
- Check browser console for error messages
- Verify environment variables are set correctly
- Ensure template variables match exactly