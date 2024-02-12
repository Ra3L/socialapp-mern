import { Typography, useTheme } from "@mui/material";

import FlexBetween from "../../styles/FlexBetween.jsx";
import WidgetWrapper from "../../styles/WidgetWrapper.jsx";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src={`${process.env.REACT_APP_API_URL}/assets/DailySoccer.jpeg`}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>DailySoccer</Typography>
        <Typography color={medium}>dailysoccer.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Daily Soccer brings you the latest football and soccer news from all
        over the world.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
