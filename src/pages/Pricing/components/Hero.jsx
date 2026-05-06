import { Box, Chip, Container, Typography } from '@mui/material'
import React from 'react'
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

export default function Hero() {
    return (
        <Box
            sx={{
                textAlign: "center",
                pt: { xs: 8, md: 12 },
                pb: { xs: 6, md: 10 },
                position: "relative",
                overflow: "hidden",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "-120px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "700px",
                    height: "500px",
                    background: "radial-gradient(ellipse, rgba(255,219,207,0.7) 0%, transparent 70%)",
                    pointerEvents: "none",
                },
            }}
        >
            <Container maxWidth="md">
                <Chip
                    label="PRICING"
                    icon={<AutoAwesomeIcon sx={{ fontSize: "14px !important", color: "#802A00 !important" }} />}
                    sx={{
                        mb: 3,
                        bgcolor: "#FFDBCF",
                        color: "#802A00",
                        fontWeight: 700,
                        letterSpacing: 1.5,
                        fontSize: "0.75rem",
                        px: 1,
                    }}
                />
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                        fontWeight: 800,
                        fontFamily: "noto serif",
                        color: "#1a1a1a",
                        mb: 2.5,
                        fontSize: { xs: "2rem", md: "3rem" },
                        lineHeight: 1.15,
                    }}
                >
                    One plan for every{" "}
                    <Box component="span" sx={{ color: "#802A00" }}>
                        kitchen
                    </Box>
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        color: "#666",
                        maxWidth: 500,
                        mx: "auto",
                        fontWeight: 400,
                        lineHeight: 1.7,
                        fontSize: { xs: "1rem", md: "1.1rem" },
                    }}
                >
                    Simple, transparent pricing. No hidden fees, no surprises. Cancel anytime.
                </Typography>
            </Container>
        </Box>
    )
}
