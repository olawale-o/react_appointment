import { createLogger } from 'redux-logger';

const logger = createLogger({
  colors: {
    title: () => 'red',
    prevState: () => '#9E9E9E',
    action: () => '#03A9F4',
    nextState: () => '#4CAF50',
  },
});

export default logger;
