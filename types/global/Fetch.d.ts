declare namespace Fetched {
  interface Data {
    props: {
      error?: {
        error: Error;
        message: string;
      };
      data?: {};
    };
  }
}

export as namespace Fetched;
