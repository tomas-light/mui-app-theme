import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

import { AppTheme } from "./AppTheme";
import { DefaultCreateAppThemeOptions } from "./DefaultCreateAppThemeOptions";
import { IAppTheme } from "./IAppTheme";
import { ICreateAppThemeOptions } from "./ICreateAppThemeOptions";
import { overrideMaterialUIPalette, overrideMaterialUIStyles } from "./overrides";

export function createAppTheme(options: ICreateAppThemeOptions = new DefaultCreateAppThemeOptions()): IAppTheme {
    if (!options.themeColors) {
        options.themeColors = DefaultCreateAppThemeOptions.DefaultAppThemeColors();
    }

    if (!options.themeTypography) {
        options.themeTypography = DefaultCreateAppThemeOptions.DefaultAppThemeTypography();
    }

    const overriddenPalette = overrideMaterialUIPalette(options.themeColors);
    const overriddenStyles = overrideMaterialUIStyles(options.themeColors);

    const muiTheme = createMuiTheme({
        palette: overriddenPalette,
        overrides: overriddenStyles,
    });

    const appTheme: IAppTheme = new AppTheme(muiTheme, options);
    return appTheme;
}
