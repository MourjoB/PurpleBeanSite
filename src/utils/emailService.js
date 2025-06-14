import emailjs from 'emailjs-com';

// Initialize EmailJS with your public key
const EMAILJS_SERVICE_ID = 'service_iomg1a5';
const EMAILJS_TEMPLATE_ID = 'template_iphc52d';
const EMAILJS_PUBLIC_KEY = 'bzUzhC_OUyCIBe8Ot';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export const sendContactEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company || 'Not provided',
      subject: formData.subject,
      message: formData.message,
      to_email: 'ayushv3533e@gmail.com',
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    return { success: true, response };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error };
  }
};

export const sendQuoteEmail = async (productName, userEmail = '') => {
  try {
    const templateParams = {
      from_name: 'Website Visitor',
      from_email: userEmail || 'visitor@website.com',
      subject: `Quote Request for ${productName}`,
      message: `A quote has been requested for the product: ${productName}`,
      to_email: 'purplebeanagro@gmail.com',
      product_name: productName,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      'template_quote_request',
      templateParams
    );

    return { success: true, response };
  } catch (error) {
    console.error('Quote email sending failed:', error);
    return { success: false, error };
  }
};

// Fallback email function using fetch to a backend service
export const sendEmailFallback = async (emailData) => {
  try {
    // This would be your backend endpoint
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    if (response.ok) {
      return { success: true };
    } else {
      throw new Error('Email sending failed');
    }
  } catch (error) {
    console.error('Fallback email sending failed:', error);
    return { success: false, error };
  }
};