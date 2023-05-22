import { Template } from '@aws-sdk/client-ses';

const notificationTemplate: Template = {
  TemplateName: 'SendConnectEmailNotificationTemplate',
  SubjectPart: `URGENT: {{name}} sent you a message on matthewthompson.us`,
  TextPart:
    "What's good my guy,\n\nIt's me (you) (me?) (us) and someone sent a message on the personal website. Here it is:\n\nName: {{name}}\n\nEmail: {{email}}\n\nOrganization: {{organization}}\n\nMessage:\n\n{{message}}\n\nHit them back as soon as you can, man!\n\nLove,\n\nUs",
};

export { notificationTemplate };
