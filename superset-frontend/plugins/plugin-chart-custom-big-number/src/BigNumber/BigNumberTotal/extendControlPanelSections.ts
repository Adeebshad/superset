import { t } from '@superset-ui/core';

// externalConfig.js
export const generateTextControls = (count: any) => {
  const controls = [];
  console.log('global : ', count);
  for (let i = 1; i <= count; i++) {
    controls.push([
      {
        name: `text${i}`,
        config: {
          type: 'TextControl',
          label: t(`text${i}`),
          renderTrigger: true,
          description: t(`Description text that shows up below your Big Number`),
        },
      },
    ]);
  }
  return controls;
};
