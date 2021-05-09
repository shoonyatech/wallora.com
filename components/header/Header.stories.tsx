import React from 'react';

import { Meta } from '@storybook/react';
import { Header } from '.';

//👇 This default export determines where your story goes in the story list
export default {
    title: 'Header',
    component: Header,
  } as Meta;
  
export const Default: React.VFC<{}> = () => <Header/>;