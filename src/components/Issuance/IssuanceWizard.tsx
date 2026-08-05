import { useState } from "react";
import { Box, Typography, Button, Checkbox, InputAdornment, Radio, RadioGroup, TextField } from "@mui/material";
import TermsModal from "./TermsModal";
const c = {
  orange: "#f26822",
  green: "#1ac475",
  red: "#ea1017",
  navy: "#1a1a2e",
  gray: "#6d6e71",
  lightGray: "#949699",
  border: "rgba(0,0,0,0.08)",
};

function ReadOnlyField({ label, value, unit }: { label: string; value: string; unit?: string }) {
  return (
    <TextField
      dir="rtl"
      fullWidth
      label={label}
      value={value}
      variant="outlined"
      slotProps={{
        htmlInput: {
          readOnly: true,
          dir: "rtl",
          style: { textAlign: "center", fontSize: 16 },
        },
        input: {
          readOnly: true,
          endAdornment: unit ? <InputAdornment position="end">{unit}</InputAdornment> : undefined,
        },
        inputLabel: {
          shrink: true,
          dir: "rtl",
          style: {
            right: 14,
            left: "auto",
            transformOrigin: "top right",
            textAlign: "right",
          },
        },
      }}
      sx={{
        direction: "rtl",
        "& .MuiOutlinedInput-root": {
          minHeight: 60,
          borderRadius: "12px",
          bgcolor: "#f7f7f7",
        },
        "& .MuiInputLabel-root": {
          color: "#4f5154",
          transform: "translate(0, -9px) scale(0.75)",
        },
        "& .MuiInputAdornment-root": {
          color: c.gray,
          marginInlineStart: 0,
        },
      }}
    />
  );
}

type PaymentMethodCardProps = {
  value: string;
  title: string;
  details: string[];
  recommended?: boolean;
  links?: string[];
  onSelect: (value: string) => void;
};

function PaymentMethodCard({ value, title, details, recommended = false, links = ["فایل راهنما"], onSelect }: PaymentMethodCardProps) {
  return (
    <Box
      onClick={() => onSelect(value)}
      sx={{
        minHeight: 116,
        border: "1px solid #dedfe0",
        borderRadius: "16px",
        px: "18px",
        py: "16px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        cursor: "pointer",
      }}
    >
      <Radio
        value={value}
        sx={{
          p: 0,
          color: "#73777b",
          "&.Mui-checked": { color: "#ff8a00" },
        }}
      />
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
          <Typography sx={{ fontSize: 16, fontWeight: 700 }}>{title}</Typography>
          {recommended && (
            <Typography
              component="span"
              sx={{ px: "10px", py: "3px", borderRadius: "20px", bgcolor: "#e9f9f1", color: "#189a62", fontSize: 11 }}
            >
              روش پیشنهادی
            </Typography>
          )}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", mt: "8px", color: c.gray }}>
          {details.map((detail, index) => (
            <Box key={detail} sx={{ display: "flex", alignItems: "center" }}>
              {index > 0 && <Box sx={{ width: "1px", height: 14, bgcolor: "#d8d8d8", mx: "8px" }} />}
              <Typography sx={{ fontSize: 12, color: c.gray }}>{detail}</Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ display: "flex", gap: "22px", mt: "8px" }}>
          {links.map((link) => (
            <Typography key={link} sx={{ color: "#1677ff", fontSize: 12, cursor: "pointer" }}>
              ♧ {link}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default function IssuanceWizard() {
  const [step, setStep] = useState(1);
  const [termsOpen, setTermsOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptConditions, setAcceptConditions] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("direct");

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: "20px" }}>
      <TermsModal open={termsOpen} onClose={() => setTermsOpen(false)} />
      
      {step === 1 && (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}>
            <TextField
              dir="rtl"
              fullWidth
              label="مبلغ سرمایه‌گذاری"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              variant="outlined"
              slotProps={{
                htmlInput: {
                  dir: "rtl",
                  style: { textAlign: "right" },
                },
                inputLabel: {
                  dir: "rtl",
                  style: {
                    right: 14,
                    left: "auto",
                    transformOrigin: "top right",
                    textAlign: "right",
                  },
                },
              }}
              sx={{
                direction: "rtl",
                "& .MuiOutlinedInput-root": { borderRadius: "10px" },
                "& .MuiInputLabel-root": {
                  transform: "translate(0, 16px) scale(1)",
                },
                "& .MuiInputLabel-shrink": {
                  transform: "translate(0, -9px) scale(0.75)",
                },
              }}
            />
            
            {/* Info Box */}
            <Box
              sx={{
                width: "100%",
                minHeight: 56,
                bgcolor: "#edfff7",
                borderRadius: "10px",
                border: "1px solid #d7e8e0",
                display: "flex",
                alignItems: "center",
                px: "16px",
                gap: "12px",
              }}
            >
              <Typography sx={{ color: c.lightGray, fontSize: 13, whiteSpace: "nowrap" }}>
                مبلغ هر واحد (تقریبی)
              </Typography>
              <Typography sx={{ color: c.green, fontSize: 14, fontWeight: 700, whiteSpace: "nowrap" }}>
                ۱٬۰۰۹٬۴۹۳ ریال
              </Typography>
              <Box sx={{ width: "1px", height: 20, bgcolor: "#d8dedb", mx: "2px", flexShrink: 0 }} />
              <Typography sx={{ color: c.lightGray, fontSize: 13, whiteSpace: "nowrap" }}>
                تعداد واحد (تقریبی)
              </Typography>
              <Typography sx={{ color: c.green, fontSize: 14, fontWeight: 700, whiteSpace: "nowrap", marginInlineStart: "auto" }}>
                ۰ واحد
              </Typography>
            </Box>

            <TextField
              dir="rtl"
              fullWidth
              label="کد معرف (اختیاری)"
              value={referralCode}
              onChange={(event) => setReferralCode(event.target.value)}
              variant="outlined"
              slotProps={{
                htmlInput: {
                  dir: "rtl",
                  style: { textAlign: "right" },
                },
                inputLabel: {
                  dir: "rtl",
                  style: {
                    right: 14,
                    left: "auto",
                    transformOrigin: "top right",
                    textAlign: "right",
                  },
                },
              }}
              sx={{
                direction: "rtl",
                "& .MuiOutlinedInput-root": { borderRadius: "10px" },
                "& .MuiInputLabel-root": {
                  transform: "translate(0, 16px) scale(1)",
                },
                "& .MuiInputLabel-shrink": {
                  transform: "translate(0, -9px) scale(0.75)",
                },
              }}
            />

            {/* Warning Box */}
            <Box sx={{ width: "100%", bgcolor: "#f9fafb", borderRadius: "10px", border: "1px solid #e9e9ea", p: "16px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <Box sx={{ width: 20, height: 20, borderRadius: "4px", bgcolor: "#a0a0a0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Typography sx={{ color: "white", fontSize: 16, fontWeight: "bold" }}>!</Typography>
                </Box>
                <Typography sx={{ fontSize: 12, color: c.gray }}>سرمایه‌گذار محترم در صورت واریز مبلغ سرمایه‌گذاری در روزهای تعطیل یا غیرکاری صندوق، بازدهی سرمایه‌گذاری از اولین روز کاری پس از واریز محاسبه خواهد شد.</Typography>
            </Box>

            {/* Legal */}
            <Typography sx={{ fontSize: 16, color: "#25282d", textAlign: "left", width: 1 }}>
                صدور به منزله تایید{" "}
                <span onClick={() => setTermsOpen(true)} style={{ color: "#d48806", textDecoration: "underline", cursor: "pointer" }}>قوانین و مقررات</span>
                {" "}است.
            </Typography>

            <Button variant="contained" onClick={nextStep} sx={{ bgcolor: c.green, height: 56, borderRadius: "12px" }}>تایید و ادامه</Button>
        </Box>
      )}

      {step === 2 && (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
          <ReadOnlyField label="نام و نام خانوادگی" value="سروش آذرنیا" />
          <ReadOnlyField label="نام صندوق" value="صندوق سرمایه‌گذاری اوج ملت (درآمد ثابت)" />
          <ReadOnlyField label="مبلغ" value={amount || "۱۰۰٬۰۰۰٬۰۰۰"} unit="ریال" />

          <Box sx={{ display: "flex", flexDirection: "column", gap: "14px", mt: "8px" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Checkbox
                checked={acceptTerms}
                onChange={(event) => setAcceptTerms(event.target.checked)}
                sx={{ p: 0, color: "#34373a", "&.Mui-checked": { color: c.orange } }}
              />
              <Typography sx={{ fontSize: 15, fontWeight: 600, lineHeight: 1.8 }}>
                پذیرش مفاد{" "}
                <Box component="span" sx={{ color: "#d48806", textDecoration: "underline", cursor: "pointer" }}>
                  اساسنامه و امیدنامه
                </Box>{" "}
                صندوق
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
              <Checkbox
                checked={acceptConditions}
                onChange={(event) => setAcceptConditions(event.target.checked)}
                sx={{ p: 0, mt: "3px", color: "#34373a", "&.Mui-checked": { color: c.orange } }}
              />
              <Typography sx={{ fontSize: 14, fontWeight: 600, lineHeight: 1.9 }}>
                در صورت واریز مبلغ سرمایه‌گذاری در روزهای تعطیل و غیرکاری صندوق، شروع محاسبه بازدهی سرمایه‌گذاری از اولین روز کاری پس از واریز آگاهی دارم.
              </Typography>
            </Box>
          </Box>

          <Button
            variant="contained"
            onClick={nextStep}
            disabled={!(acceptTerms && acceptConditions)}
            sx={{
              height: 56,
              mt: "8px",
              borderRadius: "12px",
              bgcolor: c.green,
              boxShadow: "none",
              "&:hover": { bgcolor: "#16ad68", boxShadow: "none" },
              "&.Mui-disabled": { bgcolor: "#ededed", color: "#b9b9b9" },
            }}
          >
            تایید و ادامه
          </Button>
          <Button
            variant="outlined"
            onClick={prevStep}
            sx={{ height: 56, borderRadius: "12px", borderColor: "#dedede", color: "#333", fontWeight: 600 }}
          >
            بازگشت به مرحله قبل
          </Button>
        </Box>
      )}

      {step === 3 && (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
          <RadioGroup
            name="payment-method"
            value={paymentMethod}
            onChange={(event) => setPaymentMethod(event.target.value)}
            sx={{ gap: "24px" }}
          >
            <PaymentMethodCard
              value="direct"
              title="واریز مستقیم از حساب بانک ملت (بانکداری باز)"
              details={["بدون سقف واریز", "محاسبه سود از روز واریز وجه", "قابل مشاهده پس از ۱ روز کاری"]}
              recommended
              links={["قابل حذف دسترسی", "فایل راهنما"]}
              onSelect={setPaymentMethod}
            />
            <PaymentMethodCard
              value="branch"
              title="واریز از طریق شعب بانک (با شناسه واریز «کدملی»)"
              details={["بدون سقف واریز", "محاسبه سود از روز واریز وجه", "قابل مشاهده پس از ۱ روز کاری"]}
              onSelect={setPaymentMethod}
            />
            <PaymentMethodCard
              value="card"
              title="واریز از طریق کارت بانکی"
              details={["سقف واریز ۴۰۰ میلیون", "سود از ۱ روز بعد از واریز وجه", "قابل مشاهده پس از ۲ روز کاری"]}
              onSelect={setPaymentMethod}
            />
          </RadioGroup>

          <Button
            variant="contained"
            onClick={nextStep}
            sx={{
              bgcolor: c.green,
              height: 56,
              mt: "8px",
              borderRadius: "12px",
              boxShadow: "none",
              fontSize: 16,
              "&:hover": { bgcolor: "#16ad68", boxShadow: "none" },
            }}
          >
            پرداخت
          </Button>
          <Button
            variant="outlined"
            onClick={prevStep}
            sx={{ height: 56, borderRadius: "12px", borderColor: "#dedede", color: "#333", fontWeight: 600 }}
          >
            بازگشت به مرحله قبل
          </Button>
        </Box>
      )}

      {step === 4 && paymentMethod !== "branch" && (
        <Box
          sx={{
            width: "100%",
            borderRadius: "14px",
            background: "linear-gradient(180deg, #dcfff0 0%, #f5fff9 25%, #ffffff 62%)",
            px: "20px",
            pt: "24px",
            pb: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: 58,
              height: 58,
              borderRadius: "50%",
              bgcolor: "#12a865",
              border: "6px solid #c7f3df",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
              <path d="M3 11.5L10.5 19L25 3" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Box>

          <Typography
            sx={{
              mt: "22px",
              mb: "28px",
              px: "7px",
              py: "4px",
              bgcolor: "#c9f3df",
              borderRadius: "4px",
              color: "#15935c",
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            درخواست صدور موفق
          </Typography>

          <Box sx={{ width: "100%", border: "1px dashed #d4d7d8", borderRadius: "14px", px: "18px" }}>
            {[
              { label: "تعداد واحد صادر شده", value: "۱۰۰ واحد" },
              { label: "مبلغ", value: "۱۰۰٬۵۲۰ ریال" },
              { label: "تاریخ و ساعت", value: "۱۴۰۲/۰۵/۱۰ ۱۰:۵۲" },
              { label: "به نام", value: "سروش آذرنیا" },
              { label: "شماره پیگیری", value: "۱۰۵۹۷۳۲۴۶۵" },
            ].map((item, index, items) => (
              <Box
                key={item.label}
                sx={{
                  minHeight: 51,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: index < items.length - 1 ? "1px dashed #dedfe0" : "none",
                }}
              >
                <Typography sx={{ color: c.gray, fontSize: 12 }}>{item.label}</Typography>
                <Typography sx={{ color: "#25282d", fontSize: 12, fontWeight: 700 }}>{item.value}</Typography>
              </Box>
            ))}
          </Box>

          <Button
            variant="contained"
            onClick={() => setStep(1)}
            sx={{
              width: "100%",
              height: 48,
              mt: "24px",
              borderRadius: "10px",
              bgcolor: "#e8e8e8",
              color: "#25282d",
              boxShadow: "none",
              "&:hover": { bgcolor: "#dddddd", boxShadow: "none" },
            }}
          >
            پیگیری وضعیت درخواست
          </Button>
        </Box>
      )}

      {step === 4 && paymentMethod === "branch" && (
        <Box
          sx={{
            width: "100%",
            borderRadius: "14px",
            background: "linear-gradient(180deg, #dcfff0 0%, #f4fff9 35%, #ffffff 100%)",
            px: "22px",
            pt: "28px",
            pb: "20px",
          }}
        >
          <Typography sx={{ color: c.green, fontSize: 18, fontWeight: 800, textAlign: "center" }}>
            درخواست صدور
          </Typography>

          <Typography sx={{ mt: "30px", color: "#25282d", fontSize: 14, fontWeight: 700, lineHeight: 2, textAlign: "right" }}>
            درخواست صدور شما یک ساعت پس از واریز وجه به حساب صندوق ثبت خواهد شد.
          </Typography>

          <Typography sx={{ mt: "24px", color: c.gray, fontSize: 12, fontWeight: 700, lineHeight: 2, textAlign: "right" }}>
            از طریق یکی از روش‌های زیر مبلغ سرمایه‌گذاری خود را به حساب‌های صندوق واریز نمایید:
          </Typography>
          <Box component="ol" sx={{ mt: "4px", mb: 0, pr: "20px", color: c.gray }}>
            <Typography component="li" sx={{ color: c.gray, fontSize: 12, lineHeight: 2 }}>
              مراجعه به شعب بانکی و واریز وجه با درج کد ملی به عنوان شناسه واریز در فیش پایا (بدون محدودیت در سقف واریز وجه)
            </Typography>
            <Typography component="li" sx={{ color: c.gray, fontSize: 12, lineHeight: 2 }}>
              ورود به اینترنت بانک یا همراه بانک و واریز وجه با درج کد ملی به عنوان شناسه واریز (سقف واریز وجه ۴۰۰ میلیون تومان)
            </Typography>
          </Box>

          <Typography sx={{ mt: "22px", color: c.gray, fontSize: 12, lineHeight: 2, textAlign: "right" }}>
            <Box component="span" sx={{ fontWeight: 800 }}>توجه:</Box>{" "}
            براساس الزامات سازمان بورس و اوراق بهادار و قانون مبارزه با پولشویی، کد ملی، نام و نام خانوادگی واریز کننده وجه به حساب صندوق باید با مشخصات ایشان در صندوق مطابقت داشته باشد.
          </Typography>

          <Box
            sx={{
              mt: "26px",
              minHeight: 52,
              px: "16px",
              borderRadius: "9px",
              border: "1px solid #cce5d9",
              bgcolor: "#eafff4",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ color: c.lightGray, fontSize: 12 }}>شناسه واریز (کدملی سرمایه‌گذار):</Typography>
            <Typography sx={{ color: c.green, fontSize: 14, fontWeight: 800 }}>۰۰۱۵۲۵۰۳۶۷</Typography>
          </Box>

          <Box sx={{ mt: "24px", border: "1px dashed #d4d7d8", borderRadius: "14px", px: "18px" }}>
            {[
              { label: "شماره حساب صندوق اندوخته ملت", value: "۵۷۲۵۱۸۴۵۲۱" },
              { label: "شماره شبا صندوق اندوخته ملت", value: "IR۶۴ ۰۱۲۰ ۰۲۰۰ ۰۰۰۰ ۵۷۲۵ ۱۸۴۵ ۲۱" },
            ].map((item, index) => (
              <Box
                key={item.label}
                sx={{
                  minHeight: 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: index === 0 ? "1px dashed #dedfe0" : "none",
                }}
              >
                <Typography sx={{ color: c.gray, fontSize: 12 }}>{item.label}</Typography>
                <Typography sx={{ color: "#25282d", fontSize: 12, fontWeight: 700, direction: "ltr" }}>{item.value}</Typography>
              </Box>
            ))}
          </Box>

          <Button
            variant="contained"
            onClick={() => setStep(1)}
            sx={{
              width: "100%",
              height: 48,
              mt: "24px",
              borderRadius: "10px",
              bgcolor: "#e8e8e8",
              color: "#25282d",
              boxShadow: "none",
              "&:hover": { bgcolor: "#dddddd", boxShadow: "none" },
            }}
          >
            پیگیری وضعیت درخواست
          </Button>
        </Box>
      )}
    </Box>
  );
}
