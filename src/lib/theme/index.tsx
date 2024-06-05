import {CssBaseline, PaletteOptions} from "@mui/material";
import {ThemeOptions, ThemeProvider, createTheme} from "@mui/material/styles";
import React, {createContext, useContext, useMemo} from "react";
import breakpoints from "./breakpoints";
import {colors} from "./colors";
import palette from "./palette";
import typography from "./typography";

export const defaultTheme: ThemeOptions = {
    typography: typography,
    palette: palette.dark,
    breakpoints: breakpoints,
    components: {
        MuiTab: {
            styleOverrides: {
                root: {
                    color: colors.primary.darkAquamarine,
                    backgroundColor: colors.primary.white,
                    fontSize: ".875rem",
                    "@media (max-width:1400px)": {
                        fontSize: ".7rem",
                    },
                    "&.Mui-selected": {
                        color: colors.primary.blue,
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: colors.primary.white006,
                },
            },
        },
    },
};

export const AppThemeContext = createContext<{
    themeName: string;
    setThemeName: (name: string) => void;
}>({
    themeName: "",
    setThemeName: (name: string) => {},
});

export type TAppThemeProviderProps = {
    children?: React.ReactNode;
    options?: Partial<ThemeOptions>;
};

export function AppThemeProvider({children, options}: TAppThemeProviderProps) {
    const {themeName} = useContext(ArkhonThemeContext);

    const getThemeOptions = (palette: PaletteOptions) => {
        return {
            ...defaultTheme,
            palette,
            ...scrollThemeOptions(palette),
            ...options,
        };
    };

    const theme = useMemo(() => {
        switch (themeName) {
            case "light":
                return createTheme({
                    ...getThemeOptions(palette.light),
                });
            case "dark":
            default:
                return createTheme({
                    ...getThemeOptions(palette.dark),
                });
        }
    }, [themeName]);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>{children}</CssBaseline>
        </ThemeProvider>
    );
}
export function useChangeTheme() {
    const context = useContext(ArkhonThemeContext);
    if (context === undefined) {
        throw new Error(
            "useChangeTheme must be used within AppThemeContext.Provider"
        );
    }
    return context;
}
