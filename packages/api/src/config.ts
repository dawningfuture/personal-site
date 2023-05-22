import { confirmationTemplate } from './aws/ses/templates/sendConnectEmail/confirmationTemplate';
import { notificationTemplate } from './aws/ses/templates/sendConnectEmail/notificationTemplate';

const config = {
  aws: {
    region: 'us-east-1',
  },
  handlers: {
    sendConnectEmail: {
      ses: {
        fromAddress: 'connect@matthewthompson.us',
        notificationTemplate,
        confirmationTemplate,
      },
    },
  },
};

export { config };
