# EmailJS Configuration for Contact Form
# ======================================

## Setup Instructions:

1. Go to https://www.emailjs.com/ and create a free account

2. Create an Email Service:
   - Go to "Email Services" tab
   - Click "Add New Service"
   - Select "Gmail" 
   - Connect your Gmail account (maddaliumamahesh@gmail.com)
   - Note your SERVICE_ID

3. Create an Email Template:
   - Go to "Email Templates" tab
   - Click "Create New Template"
   - Use this template content:
   
   Subject: New Inquiry from {{from_name}} - Automate SMMA

   Body:
   ```
   New Contact Form Submission
   
   Name: {{from_name}}
   Email: {{from_email}}
   Company: {{company}}
   Industry: {{industry}}
   
   Message:
   {{message}}
   ```
   
   - Note your TEMPLATE_ID

4. Get your Public Key:
   - Go to "Account" > "General"
   - Copy your "Public Key"

5. Create .env.local file in your project root with:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

6. Restart your dev server: npm run dev

## Free Tier Limits:
- 200 emails per month
- 2 email templates
- Sufficient for small business inquiries
