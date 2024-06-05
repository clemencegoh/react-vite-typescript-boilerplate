import {pxToRem, responsiveFontSizes} from 'src/lib/utils/ui';

// ----------------------------------------------------------------------
declare module '@mui/material/styles' {
    interface TypographyVariants {
        h0: React.CSSProperties;
        subtitle3: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        h0: React.CSSProperties;
        subtitle3?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        h0: true;
        subtitle3: true;
    }
}

const typography = {
    fontFamily: 'Mulish',
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightSemiBold: 700,
    fontWeightBold: 800,
    /**
     * Bad planning - Market page suddenly needed 1 larger
     */
    h0: {
        fontWeight: 500,
        lineHeight: 'normal',
        fontSize: pxToRem(40),
    },
    /**
     * Used in:
     * - TransactionCompleteModal title
     */
    h1: {
        fontWeight: 600,
        lineHeight: 'normal',
        fontSize: pxToRem(32),
    },
    h2: {
        fontWeight: 500,
        lineHeight: 'normal',
        fontSize: pxToRem(24),
        ...responsiveFontSizes({sm: 20, md: 22, lg: 24}),
    },

    /**
     * Used in:
     * - Balance summary USDC
     */
    h3: {
        fontWeight: 500,
        fontSize: pxToRem(20),
        ...responsiveFontSizes({sm: 18, md: 18, lg: 20}),
    },
    /**
     * Used in:
     * - OrderDetails SideDetailDrawer title
     */
    h4: {
        fontWeight: 500,
        lineHeight: 'normal',
        fontSize: pxToRem(24),
    },
    /**
     * Used in:
     * - TransactionCompleteModal line 1
     */
    h5: {
        fontWeight: 400,
        lineHeight: 'normal',
        fontSize: pxToRem(24),
    },
    /**
     * Used in:
     * - TransactionCompleteModal line 2, copy text
     */
    h6: {
        fontWeight: 400,
        lineHeight: 'normal',
        fontSize: pxToRem(18),
    },
    subtitle1: {
        fontWeight: 300,
        lineHeight: 1.5,
        fontSize: pxToRem(16),
        ...responsiveFontSizes({sm: 14, md: 16, lg: 16}),
    },
    /**
     * Used in:
     * - SideDetailItem title
     */
    subtitle2: {
        fontWeight: 500,
        fontSize: pxToRem(14),
        lineHeight: 'normal',
        ...responsiveFontSizes({sm: 12, md: 12, lg: 14}),
    },
    subtitle3: {
        fontWeight: 500,
        fontSize: pxToRem(18),
        ...responsiveFontSizes({sm: 16, md: 18, lg: 18}),
    },
    /**
     * Used in:
     * - SideDetailItem content
     */
    body1: {
        fontWeight: 500,
        fontSize: pxToRem(16),
        ...responsiveFontSizes({sm: 12, md: 14, lg: 16}),
    },
    body2: {
        fontWeight: 400,
        lineHeight: 'normal',
        fontSize: pxToRem(16),
        ...responsiveFontSizes({sm: 12, md: 14, lg: 16}),
    },
    caption: {
        fontWeight: 400,
        lineHeight: 1.5,
        fontSize: pxToRem(12),
        ...responsiveFontSizes({sm: 9.6, md: 12, lg: 12}),
    },
    overline: {
        fontWeight: 800,
        lineHeight: 1.5,
        fontSize: pxToRem(11),
        textTransform: 'uppercase',
        ...responsiveFontSizes({sm: 9.6, md: 11, lg: 11}),
    },
    button: {
        fontWeight: 500,
        lineHeight: 'normal',
        fontSize: pxToRem(16),
        textTransform: 'none',
    },
} as const;
export default typography;
