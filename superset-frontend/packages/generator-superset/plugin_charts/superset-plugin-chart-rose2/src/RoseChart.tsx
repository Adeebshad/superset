import React from 'react';
import { styled } from '@superset-ui/core';
import { Rose as AntvRose } from '@ant-design/plots';

// Import the RoseProps interface
import { RoseProps } from './types';

// Define the Styles component with height and width props
const Styles = styled.div<{ height: number; width: number }>`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
`;

const RoseChart: React.FC<RoseProps> = (props) => {
  const { data,xField, yField, seriesField, radius, legendPosition, height, width } = props;

  //const data = [
  //  {
  //    type: 'Hello',
  //    value: 27,
  //  },
  //  {
  //    type: 'Bye',
  //    value: 25,
  //  },
  //  {
  //    type: 'Bop',
  //    value: 18,
  //  },
  //  {
  //    type: 'Mew',
  //    value: 15,
  //  },
  //  {
  //    type: 'Hey',
  //    value: 10,
  //  },
  //  {
  //    type: 'Piu',
  //    value: 5,
  //  },
  //];

  // Define the AntV config using the provided props
  const config = {
    data,
    xField: 'type',
    yField: 'value',
    seriesField: 'type',
    radius: 0.9,
    label: {
      offset: -15,
    },
    legend: {
      position: 'bottom',
    },
    width,
    height,
    autoFit: false,
  };

  return (
    <Styles height={height} width={width}>
      {/* Render the AntV Rose Chart with the config */}
      <AntvRose {...config} />
    </Styles>
  );
};

export default RoseChart;
