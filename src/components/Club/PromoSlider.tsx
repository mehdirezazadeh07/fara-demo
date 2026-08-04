import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import promoSlide1 from "../../assets/club/promo-slide-1.png";
import promoSlide2 from "../../assets/club/promo-slide-2.png";
import promoSlide3 from "../../assets/club/promo-slide-3.png";
import promoSlide4 from "../../assets/club/promo-slide-4.png";
import { clubColors } from "../../theme";

const SLIDES = [
  { id: 1, image: promoSlide1, alt: "همکار ما باشید درآمد کسب کنید" },
  { id: 2, image: promoSlide2, alt: "تخفیف بیمه شخص ثالث ویژه باشگاه مشتریان" },
  { id: 3, image: promoSlide3, alt: "جایزه‌های هیجان‌انگیز" },
  { id: 4, image: promoSlide4, alt: "سرمایه‌گذار دعوت کن درآمد کسب کن" },
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
          aspectRatio: "1 / 1",
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
              alt={slide.alt}
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
