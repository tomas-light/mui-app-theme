import "jsdom-global/register";
import React, { FunctionComponent } from "react";
import { mount } from "enzyme";

import { IAppTheme } from "./IAppTheme";
import { createAppTheme } from "./createAppTheme";
import { ThemeProvider, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: IAppTheme) => {
    console.log("color", theme.colors.success.main);
    return {
        root: {
            color: theme.colors.success.main,
        },
    };
});

const Component: FunctionComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Dude
        </div>
    );
};

describe("Theme overriding", () => {
    it("with mount", () => {
        const theme = createAppTheme();
        const wrapper = mount(
            <ThemeProvider theme={theme}>
                <Component/>
            </ThemeProvider>
        );
        console.log("mount", wrapper.debug());
    });
});
