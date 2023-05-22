interface SendConnectEmailRequest {
  name: string;
  email: string;
  organization?: string;
  message: string;
}

interface ConfirmationEmailBody {
  name: string;
  email: string;
}

type NotificationEmailBody = SendConnectEmailRequest;

export type {
  SendConnectEmailRequest,
  ConfirmationEmailBody,
  NotificationEmailBody,
};
