import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";

export const tiers = [
  {
    title: "pricing.tiers.free.title",
    price: "0",
    period: "pricing.tiers.free.period",
    description: "pricing.tiers.free.description",
    icon: <FreeBreakfastIcon sx={{ fontSize: 24 }} />,
    iconBg: "linear-gradient(135deg, #e0e0e0 0%, #bdbdbd 100%)",
    iconColor: "#555",
    popular: false,
    features: [
      { text: "pricing.features.basic_recipes", included: true },
      { text: "pricing.features.save_favorites", included: true },
      { text: "pricing.features.community", included: true },
      { text: "pricing.features.ad_free", included: false },
    ],
    buttonText: "pricing.tiers.free.button",
    buttonSx: {
      color: "#802A00",
      borderColor: "#802A00",
      "&:hover": { bgcolor: "#FFDBCF", borderColor: "#5c1e00" },
    },
    buttonVariant: "outlined",
    cardBorder: "1.5px solid #eeddd6",
    cardShadow: "0 4px 24px rgba(0,0,0,0.05)",
    cardHoverShadow: "0 16px 48px rgba(0,0,0,0.10)",
    accentColor: "#4caf50",
  },
  {
    title: "pricing.tiers.smart.title",
    price: "9",
    period: "pricing.tiers.smart.period",
    description: "pricing.tiers.smart.description",
    icon: <RestaurantMenuIcon sx={{ fontSize: 24 }} />,
    iconBg: "linear-gradient(135deg, #802A00 0%, #b83d00 100%)",
    iconColor: "#fff",
    popular: true,
    features: [
      { text: "pricing.features.nutritional", included: true },
      { text: "pricing.features.meal_planning", included: true },
      { text: "pricing.features.all_premium", included: true },
      { text: "pricing.features.unlimited_favorites", included: true },
      { text: "pricing.features.ad_free", included: true },
      { text: "pricing.features.priority_support", included: false },
    ],
    buttonText: "pricing.tiers.smart.button",
    priceId: "price_1TT6DeBbPnudb4jzA4idHIHI",
    buttonSx: {
      background: "linear-gradient(135deg, #802A00, #c94a0a)",
      color: "white",
      boxShadow: "0 4px 16px rgba(128,42,0,0.3)",
      "&:hover": {
        background: "linear-gradient(135deg, #5c1e00, #a33200)",
        boxShadow: "0 6px 24px rgba(128,42,0,0.45)",
      },
    },
    buttonVariant: "contained",
    cardBorder: "2px solid #802A00",
    cardShadow: "0 8px 40px rgba(128,42,0,0.12)",
    cardHoverShadow: "0 24px 64px rgba(128,42,0,0.2)",
    accentColor: "#802A00",
  },
  {
    title: "pricing.tiers.family.title",
    price: "19",
    period: "pricing.tiers.family.period",
    description: "pricing.tiers.family.description",
    icon: <FamilyRestroomIcon sx={{ fontSize: 24 }} />,
    iconBg: "linear-gradient(135deg, #4a1a6b 0%, #7b2fa8 100%)",
    iconColor: "#fff",
    popular: false,
    features: [
      { text: "pricing.features.everything_smart", included: true },
      { text: "pricing.features.family_accounts", included: true },
      { text: "pricing.features.advanced_planning", included: true },
      { text: "pricing.features.custom_servings", included: true },
      { text: "pricing.features.priority_customer_support", included: true },
    ],
    buttonText: "pricing.tiers.family.button",
    priceId: "price_1TT6E3BbPnudb4jz4sCFAEUC",
    buttonSx: {
      background: "linear-gradient(135deg, #4a1a6b, #7b2fa8)",
      color: "white",
      "&:hover": { background: "linear-gradient(135deg, #36124e, #5e227f)" },
    },
    buttonVariant: "contained",
    cardBorder: "1.5px solid #e8d5f5",
    cardShadow: "0 4px 24px rgba(74,26,107,0.07)",
    cardHoverShadow: "0 16px 48px rgba(74,26,107,0.14)",
    accentColor: "#7b2fa8",
  },
];

export const faqs = [
  {
    q: "pricing.faq.q1",
    a: "pricing.faq.a1",
  },
  {
    q: "pricing.faq.q2",
    a: "pricing.faq.a2",
  },
  {
    q: "pricing.faq.q3",
    a: "pricing.faq.a3",
  },
  {
    q: "pricing.faq.q4",
    a: "pricing.faq.a4",
  },
];
