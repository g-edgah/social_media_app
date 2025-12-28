import { Typography, useTheme } from "@mui/material";

import FlexBetween from "../styled/flexBetween.jsx";
import WidgetWrapper from "../home/WidgetWrapper.jsx";

const AdvertWidget = () => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;
    const api_url = import.meta.env.VITE_API_URL;   

    return (
        <WidgetWrapper margin="2rem 0">
            <FlexBetween>
                <Typography color={dark} variant="h5" fontWeight="500">
                    Sponsored
                </Typography>
                <Typography color={medium} variant="h5" fontWeight="500">
                    Create Ad
                </Typography>
            </FlexBetween>
            <img 
                src={`${api_url}/assets/ad.jpeg`}
                alt="advert"
                style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "0.75rem",
                    margin: "0.75rem 0"
                }}
            />
            <FlexBetween>
                <Typography color={main}>
                    ishimilele cosmetics
                </Typography>
                <Typography color={medium}>
                    ishimilele.com
                </Typography>
                <Typography color={medium} m='0.5rem 0'>
                    cosmetics that make you feel and look immortal!
                </Typography>
            </FlexBetween>  
        </WidgetWrapper>
    );
};

export default AdvertWidget;


