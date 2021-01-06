import React from "react";

// My types
import type {
  DispatchType,
  FrontEndDataType,
  FrontEndDataActionsType,
  FrontEndDataContextType,
  ReducerFuncType,
} from "@portfolio-types/FrontEndDataProvider";

const FrontEndDataContext = React.createContext<
  FrontEndDataContextType & {
    frontEndDataActions: Partial<FrontEndDataActionsType>;
  }
>(undefined);

export const FrontEndDataProvider: React.FC = ({ children }) => {
  const initState: FrontEndDataType = {
    scrolledPassed: false,
  };

  const reducer: ReducerFuncType = (
    prevState = initState,
    action
  ): FrontEndDataType => {
    switch (action.type) {
      case "TOGGLESCROLLEDPASSED":
        return { ...prevState, scrolledPassed: !prevState.scrolledPassed };
      default:
        return prevState;
    }
  };

  const frontEndDataActions: FrontEndDataActionsType = {
    toggleScrolledPassed() {
      dispatch({ type: "TOGGLESCROLLEDPASSED", scrolledPassed: true });
    },
  };

  const [state, dispatch]: [
    FrontEndDataType,
    React.Dispatch<DispatchType>
  ] = React.useReducer<ReducerFuncType>(reducer, initState);

  return (
    <FrontEndDataContext.Provider
      value={{
        frontEndData: state,
        setFrontEndData: dispatch,
        frontEndDataActions,
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
