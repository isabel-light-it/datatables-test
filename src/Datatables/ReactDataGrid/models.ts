export interface Filter extends Omit<Row, "id" | "complete"> {
  complete: number | undefined;
  enabled: boolean;
}

export interface Row {
  id: string;
  firstName: string;
  status: string;
  age: number;
}
