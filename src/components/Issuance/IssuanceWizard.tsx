import { useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
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
            <Box sx={{ width: "100%", height: 56, bgcolor: "#edfff7", borderRadius: "10px", border: "1px solid #dedfe0", display: "flex", alignItems: "center", px: "20px", justifyContent: "space-between" }}>
                <Typography sx={{ color: c.green }}>۰ واحد</Typography>
                <Box sx={{ display: "flex", gap: "8px" }}>
                    <Typography>۱,۰۰۹,۴۹۳ ریال</Typography>
                    <Typography sx={{ color: c.gray }}>مبلغ هر واحد (تقریبی) | تعداد واحد (تقریبی)</Typography>
                </Box>
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
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {/* Read-only inputs */}
            <Box sx={{ width: "100%", height: 56, bgcolor: "#f5f5f5", border: `1px solid ${c.border}`, borderRadius: "10px", display: "flex", alignItems: "center", px: "16px", justifyContent: 'flex-end' }}>
                <Typography sx={{ color: '#555' }}>سروش آذرنیا</Typography>
            </Box>
            <Box sx={{ width: "100%", height: 56, bgcolor: "#f5f5f5", border: `1px solid ${c.border}`, borderRadius: "10px", display: "flex", alignItems: "center", px: "16px", justifyContent: 'flex-end' }}>
                <Typography sx={{ color: '#555' }}>صندوق سرمایه‌گذاری اوج ملت (درآمد ثابت)</Typography>
            </Box>
            <Box sx={{ width: "100%", height: 56, bgcolor: "#f5f5f5", border: `1px solid ${c.border}`, borderRadius: "10px", display: "flex", alignItems: "center", px: "16px", justifyContent: 'space-between' }}>
                <Typography sx={{ color: '#555' }}>۱۰۰,۰۰۰,۰۰۰</Typography>
                <Typography sx={{ color: '#555' }}>ریال</Typography>
            </Box>

            <Box sx={{ border: '1px solid #e0e0e0', borderRadius: '12px', p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <input 
                  type="checkbox" 
                  checked={acceptTerms} 
                  onChange={(e) => setAcceptTerms(e.target.checked)} 
                />
                <Typography>
                  پذیرش مفاد <span style={{ color: '#d48806', textDecoration: 'underline' }}>اساسنامه و امیدنامه</span> صندوق
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <input 
                  type="checkbox" 
                  checked={acceptConditions} 
                  onChange={(e) => setAcceptConditions(e.target.checked)} 
                />
                <Typography>
                  در صورت واریز مبلغ سرمایه‌گذاری در روزهای تعطیل و غیرکاری صندوق، شروع محاسبه بازدهی سرمایه‌گذاری از اولین روز کاری پس از واریز آگاهی دارم.
                </Typography>
              </Box>
            </Box>
            
            <Button 
                variant="contained" 
                onClick={nextStep} 
                disabled={!(acceptTerms && acceptConditions)}
                sx={{ 
                    bgcolor: (acceptTerms && acceptConditions) ? c.orange : '#e0e0e0',
                    color: (acceptTerms && acceptConditions) ? '#fff' : '#9e9e9e',
                    height: 56, 
                    borderRadius: '12px' 
                }}
            >
                تایید و ادامه
            </Button>
            <Button variant="outlined" onClick={prevStep} sx={{ height: 56, borderRadius: '12px', borderColor: '#e0e0e0', color: '#333' }}>بازگشت به مرحله قبل</Button>
        </Box>
      )}

      {step === 3 && (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {['واریز مستقیم از حساب بانک ملت', 'واریز از طریق شعب بانک', 'واریز از طریق کارت بانکی'].map((method, index) => (
             <Box key={method} sx={{ border: '1px solid #e0e0e0', borderRadius: '12px', p: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                <input type="radio" checked={paymentMethod === String(index)} onChange={() => setPaymentMethod(String(index))} />
                <Typography>{method}</Typography>
             </Box>
          ))}
          <Button variant="contained" onClick={nextStep} sx={{ bgcolor: c.green, height: 56, borderRadius: '12px' }}>پرداخت</Button>
          <Button variant="outlined" onClick={prevStep} sx={{ height: 56, borderRadius: '12px', borderColor: '#e0e0e0', color: '#333' }}>بازگشت به مرحله قبل</Button>
        </Box>
      )}

      {step === 4 && (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "center", textAlign: "center" }}>
            <Box sx={{ bgcolor: "#e8fdf2", p: 3, borderRadius: "50%", mb: 1 }}>
                <Box sx={{ color: c.green, fontSize: 48 }}>✓</Box>
            </Box>
            <Typography variant="h6" sx={{ color: c.green, fontWeight: 700 }}>درخواست صدور موفق</Typography>
            
            <Box sx={{ width: "100%", border: "1px dashed #ccc", borderRadius: "12px", p: 2, display: "flex", flexDirection: "column", gap: 1.5 }}>
                {[
                    { label: "تعداد واحد صادر شده", value: "۱۰۰ واحد" },
                    { label: "مبلغ", value: "۱۰۰,۵۲۰ ریال" },
                    { label: "تاریخ و ساعت", value: "۱۴۰۲/۰۵/۱۰ ۱۰:۵۲" },
                    { label: "به نام", value: "سروش آذرنیا" },
                    { label: "شماره پیگیری", value: "۱۰۵۹۷۳۲۴۶۵" }
                ].map(item => (
                    <Box key={item.label} sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography sx={{ color: c.gray }}>{item.label}</Typography>
                        <Typography sx={{ fontWeight: 600 }}>{item.value}</Typography>
                    </Box>
                ))}
            </Box>
            
            <Button 
                variant="contained" 
                onClick={() => setStep(1)} 
                sx={{ width: "100%", height: 56, borderRadius: '12px', bgcolor: "#e0e0e0", color: "#333", '&:hover': { bgcolor: "#d0d0d0" } }}
            >
                پیگیری وضعیت درخواست
            </Button>
        </Box>
      )}
    </Box>
  );
}
