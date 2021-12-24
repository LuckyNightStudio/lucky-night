import {Typography} from "@mui/material";
import {CSSProperties} from "react";
import {theme} from "../../utils/theme";
import {OverridableStringUnion} from "@mui/types";
import {Variant} from "@mui/material/styles/createTypography";
import {TypographyPropsVariantOverrides} from "@mui/material/Typography/Typography";

export const Text = ({ text, variant = 'body1' }: {text: any, variant?: OverridableStringUnion<Variant | 'inherit', TypographyPropsVariantOverrides> }) => {
    if (!text) {
        return null;
    }
    return (<Typography variant={variant} my={2}>
            {
                text.map((value: any, i: number) => {
                    const {
                        annotations: {bold, italic, underline},
                        text, href
                    } = value;
                    const content = text.content.split('\n')
                    const styles = {
                        fontStyle: italic ? "italic": 'normal',
                        fontWeight: bold  ? 600 :'inherit',
                        textDecoration: underline? 'underline' : 'none',
                        cursor: href ? 'pointer': 'inherit',
                        color: href ? theme.palette.primary.main : 'inherit'
                    } as CSSProperties;
                    return (
                        <span style={styles} key={i}>
                            {href ? <a href={href}>{content[0]}</a> : content[0]}
                            {content[1] !== undefined && <br />}
                        </span>
                    );
                })
            }
        </Typography>

    );
}
