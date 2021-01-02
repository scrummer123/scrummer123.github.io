export interface FetchData {
  props: {
    error?: {
      error: Error;
      message: string;
    };
    data?: {};
  };
}