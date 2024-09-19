/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import {
  ColorFormatters,
  getColorFormatters,
  Metric,
} from '@superset-ui/chart-controls';
import {
  GenericDataType,
  getMetricLabel,
  extractTimegrain,
  QueryFormData,
  getValueFormatter, t,
} from '@superset-ui/core';
import { BigNumberTotalChartProps, BigNumberVizProps } from '../types';
import { getDateFormatter, parseMetricValue } from '../utils';
import { Refs } from '../../types';

export default function transformProps(
  chartProps: BigNumberTotalChartProps,
): BigNumberVizProps {
  const {
    width,
    height,
    queriesData,
    formData,
    rawFormData,
    hooks,
    datasource: { currencyFormats = {}, columnFormats = {} },
  } = chartProps;
  const {
    headerFontSize,
    metric = 'value',
    subheader = '',
    subheaderFontSize,
    forceTimestampFormatting,
    timeFormat,
    yAxisFormat,
    conditionalFormatting,
    currencyFormat,
    textColor,
    subHeadTextColor,
  } = formData;
  const refs: Refs = {};
  const { data = [], coltypes = [] } = queriesData[0];
  const granularity = extractTimegrain(rawFormData as QueryFormData);
  const metricName = getMetricLabel(metric);
  const formattedSubheader = subheader;
  const bigNumber =
    data.length === 0 ? null : parseMetricValue(data[0][queriesData[0].colnames[0]]);
  
  let bigNumberConfig = bigNumberConfigProvider(formData, queriesData[0]);

  let metricEntry: Metric | undefined;
  if (chartProps.datasource?.metrics) {
    metricEntry = chartProps.datasource.metrics.find(
      metricItem => metricItem.metric_name === metric,
    );
  }

  const formatTime = getDateFormatter(
    timeFormat,
    granularity,
    metricEntry?.d3format,
  );

  const numberFormatter = getValueFormatter(
    metric,
    currencyFormats,
    columnFormats,
    yAxisFormat,
    currencyFormat,
  );

  const headerFormatter =
    coltypes[0] === GenericDataType.Temporal ||
    coltypes[0] === GenericDataType.String ||
    forceTimestampFormatting
      ? formatTime
      : numberFormatter;

  const { onContextMenu } = hooks;

  const defaultColorFormatters = [] as ColorFormatters;

  const colorThresholdFormatters =
    getColorFormatters(conditionalFormatting, data, false) ??
    defaultColorFormatters;

  return {
    width,
    height,
    bigNumber,
    headerFormatter,
    headerFontSize,
    subheaderFontSize,
    textColor,
    subHeadTextColor,
    subheader: formattedSubheader,
    onContextMenu,
    refs,
    colorThresholdFormatters,
    bigNumberConfig
  };
}

function bigNumberConfigProvider(formData:any , queriesData:any) {
  const { text1, text2, text3, text4, text5, text6, text7, text8, text9, text10} = formData;
  const { backgroundColor, backgroundColor1 ,backgroundColor2, backgroundColor3, backgroundColor4, 
    backgroundColor5, backgroundColor6, backgroundColor7, backgroundColor8, backgroundColor9, backgroundColor10 } = formData;

  const { textColor1, textColor2, textColor3, textColor4, textColor5, 
      textColor6, textColor7, textColor8, textColor9, textColor10 } = formData;
  
  const { subHeaderTextColor1, subHeaderTextColor2, subHeaderTextColor3, subHeaderTextColor4, subHeaderTextColor5,
    subHeaderTextColor6, subHeaderTextColor7, subHeaderTextColor8, subHeaderTextColor9, subHeaderTextColor10 } = formData; 

  let bigNumberConfig = [];
  let bigNum = queriesData.colnames;
  let value = [];   
  if (typeof queriesData.data !== 'undefined') {
    for (let i = 0; i < bigNum.length ; i++) {
      let key = bigNum[i];
      let index = i+1;
      let subHeaderText = eval('text' + index);
      let backgoundColour = eval('backgroundColor' + index);
      let textColour = eval('textColor' + index);
      let subHeaderTextColour = eval('subHeaderTextColor' + index);
      value.push(queriesData.data[0][key]);
      bigNumberConfig.push({
        subHeader: subHeaderText,
        subHeaderTextColour: subHeaderTextColour,
        bigNumberText: queriesData.data[0][key],
        textColour: textColour,
        backgoundColour: backgoundColour
      })
    }
  }
  return bigNumberConfig;
}
