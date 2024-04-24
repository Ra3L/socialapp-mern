import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

import Form from "../components/loginPage/Form.jsx";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box width="100%" p="2rem 6% 1rem 6%" textAlign="center">
        <Typography fontWeight="bold" fontSize="40px" color="primary">
          Dribbling
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Dribbling!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
