import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import promoBanner from "../../assets/club/promo-banner.png";
import { clubColors } from "../../theme";

const SLIDES = [
  { id: 1, image: promoBanner },
  { id: 2, image: promoBanner },
  { id: 3, image: promoBanner },
];

export default function PromoSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 4500);
    return () => window.clearInterval(t);
  }, []);

  return (
    <Box sx={{ position: "relative", borderRadius: "16px", overflow: "hidden" }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: "274 / 320",
          bgcolor: "#F7F7F7",
        }}
      >
        {SLIDES.map((slide, i) => (
          <Box
            key={slide.id}
            sx={{
              position: "absolute",
              inset: 0,
              opacity: i === index ? 1 : 0,
              transition: "opacity 0.5s ease",
              pointerEvents: i === index ? "auto" : "none",
            }}
          >
            <Box
              component="img"
              src={slide.image}
              alt="بنر باشگاه مشتریان"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                borderRadius: "16px",
              }}
            />
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 12,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 0.75,
          zIndex: 2,
        }}
      >
        {SLIDES.map((slide, i) => (
          <Box
            key={slide.id}
            onClick={() => setIndex(i)}
            sx={{
              width: i === index ? 18 : 7,
              height: 7,
              borderRadius: 999,
              bgcolor: i === index ? clubColors.orange : "rgba(255,255,255,0.7)",
              cursor: "pointer",
              transition: "all 0.25s",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
