import type { Preview } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/theme.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;