import React from "react";
import { FaEdit } from "react-icons/fa";

const FrontEndDataContext = React.createContext<
  FEDT.FrontEndDataContext | undefined
>(undefined);

export const FrontEndDataProvider: React.FC = ({ children }) => {
  const initState: FEDT.FrontEndData = {
    scrolledPassed: false,
  };

  const reducer: FEDT.ReducerFunction<FEDT.FrontEndDataDispatch> = (
    prevState = initState,
    action
  ): FEDT.FrontEndData => {
    switch (action.type) {
      case "TOGGLESCROLLEDPASSED":
        return { ...prevState, scrolledPassed: !prevState.scrolledPassed };
      default:
        return prevState;
    }
  };

  const frontEndDataActions: FEDT.FrontEndDataActions = {
    toggleScrolledPassed() {
      dispatch({ type: "TOGGLESCROLLEDPASSED", scrolledPassed: true });
    },
  };

  const [state, dispatch]: [
    FEDT.FrontEndData,
    FEDT.DispatchFunction
  ] = React.useReducer(reducer, initState);

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
