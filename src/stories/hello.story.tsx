import React from 'react';
import HelloWorld from 'components/hello';

import '../styles/global.scss';

export default {
  title: 'Hello World',
  component: HelloWorld,
};

export function HelloStory() {
  return <HelloWorld />;
}
