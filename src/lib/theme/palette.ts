import {PaletteOptions} from '@mui/material/styles';
import {darkPalette, lightPalette} from './palettes';


// ----------------------------------------------------------------------
function createGradient(color1: string, color2: string) {
    return `linear-gradient(to bottom, ${color1}, ${color2})`;
}
export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

interface ChartPaletteOptions {
    tooltip: string;
    tooltipText: string;
    tooltipLabel: string;
    label: string;
    button: string;
    line: string;
}

interface TablePaletteOptions {
    hover: string;
    active: string;
    label: string;
    text: string;
    radioBorder: string;
    radioBg: string;
}
declare module '@mui/material/styles/createPalette' {
    interface TypeBackground {
        logo: string;
        main: string;
        card: string;
        cardSecondary: string;
        tooltip: string;
        navigation: string;
        button: string;
        buttonActive: string;
        popper: string;
        popperHighlight: string;
        glassModal: string;
        solidModal: string;
        confirmationModal?: string;
        confirmationModalField?: string;
        dropdown?: string;
        disabled?: string;
        menu?: string;
        menuHighlight?: string;
        avatar: string;
    }
    interface TypeText {
        title: string;
        primary: string;
        secondary: string;
        tooltip: string;
        icon: string;
        card: string;
        cardSecondary: string;
        tabActive: string;
        tabInactive: string;
        disabled: string;
        disabledButton: string;
    }

    interface Palette {
        graph?: ChartPaletteOptions;
        table?: TablePaletteOptions;
        cta: {
            primary: string;
            disabled: string;
        };
        border: {
            thumbnail: string;
            card: string;
            buttonActive: string;
            buttonInactive: string;
            divider: string;
            checkbox: string;
            buttonGroup: string;
        };
        custom: {
            avatarImg?: string;
            longImg?: boolean;
            height?: string;
        };
    }
    interface PaletteOptions {
        graph?: ChartPaletteOptions;
        table?: TablePaletteOptions;
        cta: {
            primary: string;
            disabled: string;
        };
        border: {
            buttonActive: string;
            buttonInactive: string;
            divider: string;
            checkbox: string;
            buttonGroup: string;
        };
        custom: {
            avatarImg?: string;
            longImg?: boolean;
        };
        scrollbar: {
            thumb: string;
            track: string;
            trackBackground: string;
            thumbFocus: string;
            thumbActive: string;
            thumbHover: string;
            thumbCorner: string;
        };
    }
}
declare module '@mui/material' {
    interface Color {
        0: string;
        500_8: string;
        500_12: string;
        500_16: string;
        500_24: string;
        500_32: string;
        500_48: string;
        500_56: string;
        500_80: string;
    }
}

const palette: Record<string, PaletteOptions> = {
    light: lightPalette,
    dark: darkPalette,
} as const;

export default palette;
