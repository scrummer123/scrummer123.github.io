export interface FrontEndDataType {
  scrolledPassed: boolean;
}

export interface FrontEndDataActionsType {
  toggleScrolledPassed(): void;
}

export interface FrontEndDataContextType {
  frontEndData: FrontEndData;
  setFrontEndData: React.Dispatch<DispatchType>;
}

export type ReducerFuncType = (
  prevState: FrontEndData,
  action: DispatchType
) => FrontEndData;

// < string > = { type } param
// < FrontEndDataType > = Partial< T >
export type DispatchType = HH.DispatchAction<string, FrontEndDataType>;
