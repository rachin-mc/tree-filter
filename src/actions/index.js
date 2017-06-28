export const FILTER_TREEVIEW = 'FILTER_TREEVIEW';

export function filter (fil) {
  return {
    type: FILTER_TREEVIEW,
    payload: fil
  }
}
