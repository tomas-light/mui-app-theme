import { IButtonColor, IBorderColor, IColor, ITextColor } from "./colors";

export interface IAppThemeColors {
    default: IButtonColor;
    primary: IButtonColor;
    secondary: IButtonColor;
    destructive: IButtonColor;

    success: IColor;
    info: IColor;
    warning: IColor;
    error: IColor;

    text: ITextColor;
    border: IBorderColor;

    background: string;
    surface: string;
}
