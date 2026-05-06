import { Box } from "@mui/material";
import Hero from "./Components/Hero";
import FoodCards from "./Components/FoodCards";
import SmartFeature from "./Components/SmartFeature";
import AmazingChefs from "./Components/AmazingChefs";
import BestDiets from "./Components/BestDiets";

export default function Landing() {
  return (
    <Box>
      <Hero></Hero>
      <FoodCards></FoodCards>
      <AmazingChefs></AmazingChefs>
      <SmartFeature></SmartFeature>
      <BestDiets></BestDiets>
    </Box>
  );
}
