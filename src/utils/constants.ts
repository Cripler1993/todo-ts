import { SelectedType } from "../App";

export interface FilterElement {
  label: string;
  value: SelectedType;
}
export const filters: FilterElement[] = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Completed", value: "completed" },
];
