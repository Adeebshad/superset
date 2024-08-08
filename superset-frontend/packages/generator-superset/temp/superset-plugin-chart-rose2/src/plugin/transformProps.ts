import { ChartProps } from '@superset-ui/core';
import { RoseProps } from '../types';

export default function transformProps(chartProps: ChartProps): RoseProps {
  const { width, height, formData, queriesData } = chartProps;
  const { data } = queriesData[0];

  // Extracting the groupby and metric fields from the formData
  const { groupby, metric } = formData;

  // Transform the data into the format expected by the Rose Chart
  const transformedData = data.map((row) => ({
    type: row[groupby],
    value: row[metric],
  }));

  // Return the transformed props
  return {
    data: transformedData,
    height,
    width,
  };
}
