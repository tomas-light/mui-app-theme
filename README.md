# Installation
```bush
npm install mui-app-theme
```

# How to use

```ts
// MyColors.ts
import { AppThemeColors } from "mui-app-theme";

export class MyColors extends AppThemeColors {
    constructor() {
        super();
        this.primary = {
            main: "rgba(33, 33, 33)",
            hover: "rgba(66, 66, 66)",
            text: "rgba(189, 189, 189, 0.87)",
        
            outline: {
                main: "rgba(255, 255, 255)",
                hover: "rgba(0, 0, 0, 0.08)",
            },
            disabled: {
                main: "rgba(238, 238, 238)",
                text: "rgba(189, 189, 189, 0.87)",
            },
        };
    }
}
```

```tsx
// App.tsx
import { createAppTheme } from "mui-app-theme";
import React, { FunctionComponent } from "react";
import { ThemeProvider } from "@material-ui/styles";

import { MyColors } from "./MyColors";

const App: FunctionComponent = () => {
    const appTheme = createAppTheme(new MyColors());

    return (
        <ThemeProvider theme={appTheme}>
            {
            // children
            }
        </ThemeProvider>
    );
};
```
