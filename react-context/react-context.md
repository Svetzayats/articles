# React context

### Structure

- separate file for one context and it's provider
- if one page / component use several contexts - they should be collected in separate file in one big provider

### Template for simple context

Replace all 'Name' with actual name of context.

```ts
import React, { createContext, useContext, useState } from "react";

interface INameContext {
  contextValue: string | null;
  updateValue: (value: string) => void;
}

type IProviderProps = { children: React.ReactNode };

const NameContext = createContext<INameContext>(null);

function NameProvider({ children }: IProviderProps) {
  const [value, setValue] = useState<ConnectType>(null);
  const value = {
    contextValue: value,
    updateValue: setValue,
  };
  return <NameContext.Provider value={value}>{children}</NameContext.Provider>;
}

function useNameContext() {
  const context = useContext(NameContext);
  if (context === undefined) {
    throw new Error("context must be used within a NameProvider");
  }
  return context;
}

export { NameProvider, useNameContext };
```

### Template for context with reducer

// TODO: add template

### Remember about

If values in context are changed often - maybe we need to use useMemo / useCallback.

### Useful links

[How to use React Context effectively by Kent C. Dodds, 2021](https://kentcdodds.com/blog/how-to-use-react-context-effectively)
[How to optimize your context value by Kent C. Dodds, 2021](https://kentcdodds.com/blog/how-to-optimize-your-context-value)
[How to use React Context like a pro by Pierre Quannes, 2021](https://devtrium.com/posts/how-use-react-context-pro) - actually very close to vision of Kent C. Dodds
