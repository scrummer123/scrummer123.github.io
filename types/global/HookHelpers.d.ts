declare namespace HookHelpers {
  type DispatchAction<T extends string, Y> = { type: T } & Partial<Y>;
}

// Creating alias.
import HH = HookHelpers;

// Both can be used.
export as namespace HH;
export as namespace HookHelpers;
