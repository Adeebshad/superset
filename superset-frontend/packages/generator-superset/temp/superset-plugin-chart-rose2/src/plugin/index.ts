import { t, ChartMetadata, ChartPlugin } from '@superset-ui/core';
import buildQuery from './buildQuery';
import controlPanel from './controlPanel'; // Rename 'controlPanel' to 'ControlPanel'
import transformProps from './transformProps';
import thumbnail from '../images/thumbnailRose.png';
import example1 from '../images/thumbnailRose.png';
import example2 from '../images/example2.png';
import example3 from '../images/example3.png';
import example4 from '../images/example4.png';

export default class RoseChartPlugin extends ChartPlugin { // Rename 'LiquidChartPlugin' to 'RoseChartPlugin'
  /**
   * The constructor is used to pass relevant metadata and callbacks that get
   * registered in respective registries that are used throughout the library
   * and application. A more thorough description of each property is given in
   * the respective imported file.
   *
   * It is worth noting that `buildQuery` is optional, and only needed for
   * advanced visualizations that require either post-processing operations
   * (pivoting, rolling aggregations, sorting, etc.) or submitting multiple queries.
   */
  constructor() {
    const metadata = new ChartMetadata({
      description: 'A plugin for circumnplex Chart',
      name: t('CircumPlex2 Chart'), // Change the chart name to 'Rose Chart'
      thumbnail,
      exampleGallery: [
        { url: example1, caption: t('Basic Circumplex') },
        //{ url: example2, caption: t('Diamond') },
        //{ url: example3, caption: t('Pin') },
        //{ url: example4, caption: t('Triangle') },
      ]
    });

    super({
      buildQuery,
      controlPanel,
      loadChart: () => import('../RoseChart'), // Use the renamed 'RoseChart'
      metadata,
      transformProps,
    });
  }
}
