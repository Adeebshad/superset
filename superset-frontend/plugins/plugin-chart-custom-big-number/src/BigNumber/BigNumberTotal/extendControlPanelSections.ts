import { t } from '@superset-ui/core';
import { BigNumberTotalChartProps, BigNumberVizProps } from '../types';

// externalConfig.js
export const generateTextControls = (count: number) => {
  const controls = [];
  // BigNumberTotalChartProps er = BigNumberTotalChartProps(); 
  // transformProps(BigNumberTotalChartProps);
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



// function transformProps(
//   chartProps: BigNumberTotalChartProps,
// ) {
//   const {
//     width,
//     height,
//     queriesData,
//     formData,
//     rawFormData,
//     hooks,
//   } = chartProps;
//   const {
//     subheader = '',

//   } = formData;
//   const refs: Refs = {};
//   const { data = [], coltypes = [] } = queriesData[0];
//   // const granularity = extractTimegrain(rawFormData as QueryFormData);
//   // const metricName = getMetricLabel(metric);
//   const formattedSubheader = subheader;
//   const bigNumber =
//     data.length === 0 ? null : parseMetricValue(data[0][queriesData[0].colnames[0]]);

//   console.log(data[0][queriesData[0].colnames[0]]);

//   return {
//     width,
//     height,
//     bigNumber,
//   };
// }