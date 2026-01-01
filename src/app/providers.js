'use client';

import TutorialHeader from 'C:/Users/bmats/Documents/GitHub/klj/carfinder2/carbon-tutorial-nextjs/src/app/components/TutorialHeader/TutorialHeader';
import { Content, Theme } from '@carbon/react';

export function Providers({ children }) {
  return (
    <div>
      <Theme theme="g90">
        <TutorialHeader />
      </Theme>
      <Content>{children}</Content>
    </div>
  );
}
