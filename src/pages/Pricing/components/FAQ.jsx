import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { faqs } from '../pricingData'

export default function FAQ() {
    const { t } = useTranslation();
    return (
        <Box sx={{ mt: 14 }}>
            <Box sx={{ textAlign: "center", mb: 6 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, color: "#1a1a1a", mb: 1 }}>
                    {t("pricing.faq.title")}
                </Typography>
                <Typography sx={{ color: "#777" }}>
                    {t("pricing.faq.subtitle")}
                </Typography>
            </Box>

            <Stack spacing={2} sx={{ width: "100%" }}>
                {faqs.map((faq) => (
                    <Box
                        key={faq.q}
                        sx={{
                            width: "100%",
                            boxSizing: "border-box",
                            p: { xs: 3, md: 4 },
                            borderRadius: "18px",
                            bgcolor: "#fff",
                            border: "1.5px solid #f0ede9",
                            boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                            transition: "border-color 0.2s, box-shadow 0.2s",
                            "&:hover": {
                                borderColor: "#FFDBCF",
                                boxShadow: "0 4px 24px rgba(128,42,0,0.08)",
                            },
                        }}
                    >
                        <Typography
                            sx={{ fontWeight: 700, color: "#802A00", mb: 1, fontSize: "1rem" }}
                        >
                            {t(faq.q)}
                        </Typography>
                        <Typography sx={{ color: "#555", lineHeight: 1.8, fontSize: "0.9rem" }}>
                            {t(faq.a)}
                        </Typography>
                    </Box>
                ))}
            </Stack>
        </Box>
    )
}
