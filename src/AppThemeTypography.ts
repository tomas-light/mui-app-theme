import { CSSProperties } from "react";
import { IAppThemeTypography } from "./IAppThemeTypography";

export class AppThemeTypography implements IAppThemeTypography {
    private static readonly defaultFontFamily = "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif";
    private readonly fontFamily: string;

    public 50: CSSProperties;
    public 100: CSSProperties;
    public 175: CSSProperties;
    public 200: CSSProperties;
    public 300: CSSProperties;
    public 400: CSSProperties;
    public 700: CSSProperties;

    constructor(fontFamily: string = AppThemeTypography.defaultFontFamily) {
        this.fontFamily = fontFamily;

        this["50"] = this.createVariant(300, 10, "14px", 0.03333);
        this["100"] = this.createVariant(300, 12, "16px");
        this["175"] = this.createVariant(300, 13.5, "18px");
        this["200"] = this.createVariant(300, 14, "20px", 0.01071);
        this["300"] = this.createVariant(300, 16, "22px", 0.00938);
        this["400"] = this.createVariant(300, 18, "25px", 0);
        this["700"] = this.createVariant(300, 24, "34px", -0.00833);
    }

    protected createVariant(
        fontWeight: number,
        fontSize: number,
        lineHeight: string,
        letterSpacing?: number
    ): CSSProperties {

        const css: CSSProperties = {
            fontWeight,
            fontSize,
            lineHeight,
        };

        // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
        // across font-families can cause issues with the kerning.
        if (this.fontFamily === AppThemeTypography.defaultFontFamily && letterSpacing !== undefined) {
            // TODO: understand what is it? Found in material-ui repo:
            // https://github.com/mui-org/material-ui/blob/a3fc81288510c6fdf7c00daacdb772f02a26680e/packages/material-ui/src/styles/createTypography.js#L4
            const coefficient = 1e5;

            const round = (value: number) => Math.round(value * coefficient) / coefficient;

            css.letterSpacing = `${round(letterSpacing / fontSize)}em`;
        }

        return css;
    }
}
