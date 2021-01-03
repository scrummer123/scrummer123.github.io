declare namespace FrontEndDataTypes {
  interface FrontEndDataActions {
    toggleScrolledPassed(): void;
  }

  interface FrontEndDataContext extends FrontEndDataActions {
    frontEndData: FrontEndData;
    setFrontEndData: DispatchFunction;
  }

  interface FrontEndData {
    scrolledPassed: boolean;
  }

  interface FrontEndDataDispatch extends Partial<FrontEndData> {
    type: "TOGGLESCROLLEDPASSED";
  }

  type DispatchFunction = React.Dispatch<
    React.SetStateAction<FrontEndDataDispatch>
  >;

  type ReducerFunction = React.Reducer<
    FrontEndData,
    React.ReducerAction<React.Reducer<any, any>>
  >;
}

// Creating alias.
import FEDT = FrontEndDataTypes;

// Both can be used.
export as namespace FEDT;
export as namespace FrontEndDataTypes;
