interface Paginated<T> {
  data: T[];
  page: number;
  limit: number;
  total: number;
}