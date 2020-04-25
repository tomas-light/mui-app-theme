import { ClassNameMap } from "@material-ui/styles";
import { useInfoColorStyles } from "./InfoColor/useInfoColorStyles";
import { InfoColorVariant } from "./InfoColor/InfoColorVariant";
import { useMainColorStyles } from "./MainColor/useMainColorStyles";
import { MainColorVariant } from "./MainColor/MainColorVariant";
import { useTextColorStyles } from "./TextColor/useTextColorStyles";
import { TextColorVariant } from "./TextColor/TextColorVariant";

type ColorVariant = TextColorVariant | MainColorVariant | InfoColorVariant;

export const useThemeColorStyles = (props?: any): ClassNameMap<ColorVariant> => ({
    ...useMainColorStyles(props),
    ...useInfoColorStyles(props),
    ...useTextColorStyles(props),
});
