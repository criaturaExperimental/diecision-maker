import { generateUID } from 'helpers/generateUID';
export function formatDecisionToItem(decision) {
  return { id: generateUID(), label: decision };
}
