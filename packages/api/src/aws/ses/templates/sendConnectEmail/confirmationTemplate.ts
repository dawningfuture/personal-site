import { Template } from '@aws-sdk/client-ses';

const confirmationTemplate: Template = {
  TemplateName: 'SendConnectEmailConfirmationTemplate',
  SubjectPart: `Thank You {{name}} - I've Received Your Request To Connect!`,
  TextPart:
    "Hello {{name}}!\n\nI set up this autoreply to let you know that I've received your message from my website.\n\nMaking connections with good people is my favorite thing to do; thanks for taking the time to make a connection yourself. I will do my best to respond to you as quickly as possible. I'll respond to the email you provided on my website ({{email}}), and we can connect from there.\n\nThanks for reaching out, and I'm excited for the conversation to come!\n\nBest,\n\nMatthew",
};

export { confirmationTemplate };
