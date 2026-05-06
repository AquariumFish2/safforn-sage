import { Box, Container, Typography, Link, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const FooterContainer = styled(Box)(() => ({
  backgroundColor: "#F5F5F5",
  borderTop: "1px solid #E0E0E0",
  padding: "40px 0 20px",
}));

const FooterContent = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: "30px",
  gap: theme.spacing(4),
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

const BrandName = styled(Typography)(({ theme }) => ({
  color: "#8B4513",
  fontWeight: "bold",
  fontSize: "18px",
  marginBottom: theme.spacing(1),
}));

const FooterLink = styled(Link)(() => ({
  color: "#666666",
  textDecoration: "none",
  fontSize: "14px",
  transition: "color 0.3s",
  "&:hover": {
    color: "#D84315",
  },
}));

const FooterDivider = styled(Box)(() => ({
  height: "1px",
  backgroundColor: "#E0E0E0",
  margin: "20px 0",
}));

const CopyrightText = styled(Typography)(({ theme }) => ({
  color: "#999999",
  fontSize: "13px",
  textAlign: "center",
  lineHeight: 1.6,
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

export default function Footer() {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <FooterContent>
          {/* Left - Brand */}
          <Box>
            <BrandName variant="h6">Saffron & Sage</BrandName>
          </Box>

          {/* Right - Navigation Links */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2, sm: 4 }}
            sx={{ marginLeft: { md: "auto" } }}
          >
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Halal Certification</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </Stack>
        </FooterContent>

        {/* Divider */}
        <FooterDivider />

        {/* Copyright */}
        <CopyrightText>
          © 2024 Saffron & Sage. Nourishing the soul, one halal recipe at a
          time.
        </CopyrightText>
      </Container>
    </FooterContainer>
  );
}
