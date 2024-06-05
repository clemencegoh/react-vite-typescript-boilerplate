import {PaletteMode} from '@mui/material';

export const darkPalette = {
    mode: 'dark' as PaletteMode,
    custom: {},
    common: {
        white: '#ffffff',
        black: '#000000',
        grey: '#90caf9',
    },
    background: {
        logo: '#6AA2FF',
        main: `
      radial-gradient(40% 60% at 90% 20%, #69379A40, #58272900),
      radial-gradient(80% 80% at 20% 90%, #4614B12a, #1442B100),
      linear-gradient(#070E1B, #070E1B) center center
      `,
        card: 'linear-gradient(90deg, #86A3FF2A, #4332A82A )',
        cardSecondary: '#0E1A28',
        tooltip: '#1D2D4E',
        navigation: '#0d162a',
        button: '#19224B',
        buttonActive: '#19224B',
        popper: '#1D2D4E',
        popperHighlight: '#1D2D4E',
        menu: '#293161',
        menuHighlight: '#3B478C',
        glassModal: 'transparent',
        solidModal: '#141e3f',
        confirmationModal: '#192F6B80',
        confirmationModalField: '#202E64',
        tableFilter: '#131823',
        default: '#070E1B',
        dropdown: '#131823',
        disabled: '#435187',
        avatar: 'transparent',
    },
    cta: {
        primary: '#6487E9',
        disabled: '#232C54',
    },
    text: {
        title: '#6AA2FF',
        primary: '#ffffff',
        secondary: '#6AA2FF',
        tooltip: '#6AA2FF',
        icon: '#5F6D88',
        card: '#9B9B9B',
        cardSecondary: '#6B7A97',
        tabActive: '#6AA2FF',
        tabInactive: '#9B9B9B',
        disabled: '#787F8F',
        disabledButton: '#787F8F',
    },
    border: {
        thumbnail: '#865BE5 #5B91E9',
        card: 'transparent',
        buttonActive: 'linear-gradient(#865BE5, #5B91E9)', // use border-image-source for this
        buttonInactive: '#9B9B9B',
        divider: '#323768',
        checkbox: '#6AA6FF',
        buttonGroup: '#3E61C3',
    },
    success: {
        main: '#52FA77',
    },
    warning: {
        main: '#FFCE21',
    },
    error: {
        main: '#FF4E4E',
    },
    info: {
        main: '#29D9FF',
    },
    graph: {
        tooltip: '#193A71E0',
        tooltipText: '#6AA2FF',
        tooltipLabel: '#ffffff',
        label: '#BABABA',
        button: '#D9D9D9',
        line: '#0ECEF6',
    },
    table: {
        hover: '#202E64',
        active: '#213BA3',
        label: '#9B9B9B',
        text: '#FFFFFF',
        radioBorder: '#68A2F9',
        radioBg: '#202E64',
    },
    tooltip: {
        color: '#1D2D4E',
    },
    scrollbar: {
        thumb: '#6b6b6b',
        track: '#2b2b2b',
        trackBackground: '#070E1B09',
        thumbFocus: '#959595',
        thumbActive: '#959595',
        thumbHover: '#959595',
        thumbCorner: '#2b2b2b',
    },
};
