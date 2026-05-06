import { Box, Button, Card, CardActions, CardContent, Collapse, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Stack, Typography, useMediaQuery, useTheme, CircularProgress } from "@mui/material";
import { useState } from "react";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useAuth } from "../../../context/AuthContext";
import { supabase } from "../../../supabase";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

export default function PricingCard({ tier }) {
    const { t } = useTranslation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [expanded, setExpanded] = useState(!isMobile);
    const { user } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleCheckout = async () => {
        if (!user) {
            navigate("/login");
            return;
        }

        if (!tier.priceId) return; // Free tier

        setLoading(true);
        try {
            const { data, error } = await supabase.functions.invoke('create-checkout-session', {
                body: { 
                    priceId: tier.priceId,
                    userId: user.id,
                    userEmail: user.email
                }
            });

            if (error) throw error;
            if (data?.url) {
                window.location.href = data.url;
            }
        } catch (err) {
            console.error("Checkout error:", err);
            alert("Failed to start checkout. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card
            elevation={0}
            sx={{
                width: {xs:"100vw",sm:"300px" },
                display: "flex",
                flexDirection: "column",
                borderRadius: "24px",
                bgcolor: "#fff",
                border: tier.cardBorder,
                boxShadow: tier.cardShadow,
                position: "relative",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                overflow: "hidden",
                "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: tier.cardHoverShadow,
                },
            }}
        >
            {tier.popular && (
                <Box
                    sx={{
                        width: "100%",
                        textAlign: "center",
                        py: 0.8,
                        background: "linear-gradient(135deg, #802A00, #c94a0a)",
                        color: "white",
                        fontWeight: 700,
                        fontSize: "0.72rem",
                        textTransform: "uppercase",
                        letterSpacing: 1.5,
                    }}
                >
                    ✦ {t("pricing.tiers.most_popular")}
                </Box>
            )}

            <CardContent sx={{ flexGrow: 1, p: { xs: 3, md: 4 } }}>
                <Stack direction="row" spacing={1.5} mb={1.5}>
                    <Box
                        sx={{
                            width: 44,
                            height: 44,
                            flexShrink: 0,
                            borderRadius: "12px",
                            background: tier.iconBg,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: tier.iconColor,
                        }}
                    >
                        {tier.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: "#1a1a1a" }}>
                        {t(tier.title)}
                    </Typography>
                    {isMobile && (
                        <IconButton
                            onClick={() => setExpanded((prev) => !prev)}
                            size="small"
                            sx={{
                                ml: "auto !important",
                                color: "#802A00",
                                transition: "transform 0.3s",
                                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                            }}
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    )}
                </Stack>

                <Stack direction="row" sx={{ justifyContent: "flex-end" }} spacing={0.5} mb={0.5}>
                    <Typography sx={{ color: "#aaa", fontWeight: 500, fontSize: "1rem", mb: 0.4 }}>$</Typography>
                    <Typography sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: "2.6rem", lineHeight: 1 }}>
                        {tier.price}
                    </Typography>
                </Stack>
                <Typography sx={{ color: "#aaa", fontSize: "0.82rem", mb: isMobile ? 0 : 2, textAlign: { xs: "start", md: "end" } }}>
                    {t(tier.period)}
                </Typography>

                <Collapse in={expanded}>
                    <Typography variant="body2" sx={{ color: "#777", mt: 1.5, mb: 2, minHeight: 36 }}>
                        {t(tier.description)}
                    </Typography>

                    <Divider sx={{ borderColor: "#f0ede9", mb: 2 }} />

                    <List disablePadding>
                        {tier.features.map((feature) => (
                            <ListItem key={feature.text} disablePadding sx={{ py: 0.6 }}>
                                <ListItemIcon sx={{ minWidth: 30 }}>
                                    {feature.included ? (
                                        <CheckRoundedIcon sx={{ fontSize: 17, color: tier.accentColor }} />
                                    ) : (
                                        <CloseRoundedIcon sx={{ fontSize: 17, color: "#ddd" }} />
                                    )}
                                </ListItemIcon>
                                <ListItemText
                                    primary={t(feature.text)}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Collapse>
            </CardContent>

            <Collapse in={expanded}>
                <CardActions sx={{ px: { xs: 3, md: 4 }, pb: { xs: 3, md: 4 }, pt: 0 }}>
                    <Button
                        fullWidth
                        variant={tier.buttonVariant}
                        onClick={handleCheckout}
                        disabled={loading}
                        sx={{
                            py: 1.5,
                            borderRadius: "12px",
                            fontWeight: 700,
                            fontSize: "0.95rem",
                            textTransform: "none",
                            ...tier.buttonSx,
                        }}
                    >
                        {loading ? <CircularProgress size={24} color="inherit" /> : t(tier.buttonText)}
                    </Button>
                </CardActions>
            </Collapse>
        </Card>
    );
}