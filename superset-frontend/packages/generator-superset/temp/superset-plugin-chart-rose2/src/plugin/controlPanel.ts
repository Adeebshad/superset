import { t} from '@superset-ui/core';
import { ControlPanelConfig, sections } from '@superset-ui/chart-controls';


const config: ControlPanelConfig = {
  // Basic control set
  controlPanelSections: [
    {
      label: t('Query'),
      expanded: true,
      controlSetRows: [
        ['groupby'],
        ['metric'],
        ['adhoc_filters'],
        ['row_limit'],
      ],
    },
  ],

  // Control configuration
  controlOverrides: {
    groupby: {
      label: t('Categories'),
      description: t('The categories for the Rose Chart.'),
    },

  },
};
export default config;

