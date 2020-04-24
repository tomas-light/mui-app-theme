import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

import { AppTheme } from "./AppTheme";
import { AppThemeColors } from "./AppThemeColors";
import { IAppTheme } from "./IAppTheme";
import { IAppThemeColors } from "./IAppThemeColors";
import { overrideMaterialUIPalette, overrideMaterialUIStyles } from "./overrides";

export function createAppTheme(themeColors: IAppThemeColors = new AppThemeColors()): IAppTheme {
    const overriddenPalette = overrideMaterialUIPalette(themeColors);
    const overriddenStyles = overrideMaterialUIStyles(themeColors);

    const muiTheme = createMuiTheme({
        palette: overriddenPalette,
        overrides: overriddenStyles,
    });

    const appTheme: IAppTheme = new AppTheme(muiTheme, themeColors);
    return appTheme;
}
