import React from "react";

// Data is not required when dispatching
interface FrontEndData {
  scrolledPassed?: boolean;
}

interface FrontEndDataDispatch extends FrontEndData {
  type: "TOGGLESCROLLEDPASSED";
}

type DispatchFunction = React.Dispatch<
  React.SetStateAction<FrontEndDataDispatch>
>;
type ReducerFunction = React.Reducer<
  FrontEndData,
  React.ReducerAction<React.Reducer<any, any>>
>;

interface FrontEndDataActions {
  toggleScrolledPassed(): void;
}

export interface FrontEndDataContext extends FrontEndDataActions {
  frontEndData: FrontEndData;
  setFrontEndData: DispatchFunction;
}

const FrontEndDataContext = React.createContext<
  FrontEndDataContext | undefined
>(undefined);

export const FrontEndDataProvider: React.FC = ({ children }) => {
  const initState: FrontEndData = {
    scrolledPassed: false,
  };

  const reducer: ReducerFunction = (
    prevState = initState,
    action
  ): FrontEndData => {
    switch (action.type) {
      case "TOGGLESCROLLEDPASSED":
        return { ...prevState, scrolledPassed: !prevState.scrolledPassed };
      default:
        return prevState;
    }
  };

  const frontEndDataActions: FrontEndDataActions = {
    toggleScrolledPassed() {
      dispatch({ type: "TOGGLESCROLLEDPASSED" });
    },
  };

  const [state, dispatch]: [FrontEndData, DispatchFunction] = React.useReducer(
    reducer,
    initState
  );

  return (
    <FrontEndDataContext.Provider
      value={{
        frontEndData: state,
        setFrontEndData: dispatch,
        ...frontEndDataActions,
      }}
    >
      {children}
    </FrontEndDataContext.Provider>
  );
};

export const useFrontEndData = () => {
  const context = React.useContext(FrontEndDataContext);
  if (!context) throw new Error("FrontEndDataContext is undefined");

  return context;
};
