import { IButtonColor } from "./colors/IButtonColor";
import { IBorderColor } from "./colors/IBorderColor";
import { IColor } from "./colors/IColor";
import { ITextColor } from "./colors/ITextColor";

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
