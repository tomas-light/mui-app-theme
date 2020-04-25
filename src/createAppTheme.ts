import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

import { AppTheme } from "./AppTheme";
import { AppThemeColors } from "./AppThemeColors";
import { AppThemeTypography } from "./AppThemeTypography";
import { IAppTheme } from "./IAppTheme";
import { IAppThemeColors } from "./IAppThemeColors";
import { IAppThemeTypography } from "./IAppThemeTypography";
import { overrideMaterialUIPalette, overrideMaterialUIStyles } from "./overrides";

export function createAppTheme(
    themeColors: IAppThemeColors = new AppThemeColors(),
    themeTypography: IAppThemeTypography = new AppThemeTypography()
): IAppTheme {

    const overriddenPalette = overrideMaterialUIPalette(themeColors);
    const overriddenStyles = overrideMaterialUIStyles(themeColors);

    const muiTheme = createMuiTheme({
        palette: overriddenPalette,
        overrides: overriddenStyles,
    });

    const appTheme: IAppTheme = new AppTheme(muiTheme, themeColors, themeTypography);
    return appTheme;
}
