import { Plugin } from '@nuxt/types';
import { initializeAxios } from '@/plugins/api';

const accessor: Plugin = ({ $axios }) => {
  initializeAxios($axios);
};

export default accessor;
