import { t } from '@superset-ui/core';

// externalConfig.js
export const generateTextControls = (count: number) => {
  const controls = [];
  for (let i = 1; i <= count; i++) {
    controls.push([
      {
        name: 'subHeader_'+ i,
        config: {
          type: 'TextControl',
          label: t(`subHeader_`+ i),
          renderTrigger: true,
          description: t(`Description text that shows up below your Big Number`),
        },
      },
    ]);
  }
  return controls;
};


export const backgroundColorControl = (count : number) =>{
  const controls = [];
  for (let i = 1; i <= count; i++) {
    controls.push([{
      name: 'background_color_'+ i,
      config: {
      type: 'SelectControl',
      label: t(`background_color_` + i),
      renderTrigger: true,
      clearable: false,
      default: 'white',
      // Values represent the percentage of space a subheader should take
      options: [
        {
          label: t('Blue'),
          value: '#4287f5',
        },
        {
          label: t('Pink'),
          value: '#f54298',
        },
        {
          label: t('Red'),
          value: '#f54245',
        },
        {
          label: t('Violet'),
          value: '#e642f5',
        },
        {
          label: t('Cornsilk'),
          value: '#FFF8DC',
        },
        {
          label: t('White'),
          value: 'white',
        },
        {
          label: t('Seashell'),
          value: '#FFF5EE',
        },
        {
          label: t('Misty Rose'),
          value: '#FFE4E1',
        },
        {
          label: t('Yellow'),
          value: '#eff542',
        },
        {
          label: t('Lemon Chiffon'),
          value: '#FFFACD',
        },
        {
          label: t('Lavender Blush'),
          value: '#FFF0F5',
        },
      ],
    },
  }])
 }
return controls;
}

// subHeadTextColor

export const subHeadTextColorControl = ( textPortion: string , count : number) =>{
  const controls = [];
  for (let i = 1; i <= count; i++) {
    controls.push([{
      name: textPortion + i,
      config: {
      type: 'SelectControl',
      label: t(textPortion + i),
      renderTrigger: true,
      clearable: false,
      default: 'black',
      // Values represent the percentage of space a subheader should take
      options: [
        {
          label: t('Blue'),
          value: '#4287f5',
        },
        {
          label: t('Pink'),
          value: '#f54298',
        },
        {
          label: t('Yellow'),
          value: '#eff542',
        },
        {
          label: t('Red'),
          value: '#f54245',
        },
        {
          label: t('Violet'),
          value: '#e642f5',
        },
        {
          label: t('Jet Black'),
          value: '#343434',
        },
        {
          label: t('White'),
          value: 'white',
        },
        {
          label: t('Charcoal'),
          value: '#36454F',
        },
        {
          label: t('Misty Rose'),
          value: '#FFE4E1',
        },
        {
          label: t('Black'),
          value: 'black',
        },
        {
          label: t('Golden Brown'),
          value: '#996515',
        },
        {
          label: t('Chocolate'),
          value: '#D2691E',
        },
      ],
    },
  }])
 }
  return controls;
}

