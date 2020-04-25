import { AppThemeColors } from "./AppThemeColors";
import { AppThemeTypography } from "./AppThemeTypography";
import { IAppThemeColors } from "./IAppThemeColors";
import { IAppThemeTypography } from "./IAppThemeTypography";
import { ICreateAppThemeOptions } from "./ICreateAppThemeOptions";

export class DefaultCreateAppThemeOptions implements ICreateAppThemeOptions {
    public themeColors: IAppThemeColors;
    public themeTypography: IAppThemeTypography;

    public static DefaultAppThemeColors = () => new AppThemeColors();
    public static DefaultAppThemeTypography = () => new AppThemeTypography();

    constructor() {
        this.themeColors = DefaultCreateAppThemeOptions.DefaultAppThemeColors();
        this.themeTypography = DefaultCreateAppThemeOptions.DefaultAppThemeTypography();
    }
}
