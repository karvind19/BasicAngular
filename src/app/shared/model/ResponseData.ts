import { Hits } from './Hits';

export interface ResponseData {
    hits: Hits[];
    nbHits: number;
    page: number;
    nbPages: number;
  }