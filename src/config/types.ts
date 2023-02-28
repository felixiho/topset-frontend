type  ApiSuccessResponse<K> = {
    isError: false;
    result: K;
  };
  
  type ApiErrorResponse = {
    isError: true;
    data: any;
    message: string;
    name: string;
  };
  
  export type ApiResponse<K> =
    | ApiErrorResponse
    | ApiSuccessResponse<K>;
  