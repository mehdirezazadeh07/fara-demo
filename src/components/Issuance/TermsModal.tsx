import { Modal, Box, Button, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 600,
  bgcolor: 'background.paper',
  borderRadius: '24px',
  boxShadow: 24,
  p: 4,
  textAlign: 'right',
  direction: 'rtl'
};

const terms = [
  "امکان واریز در ۷ روز هفته ۲۴ ساعته ( ۰۰:۰۰ الی ۲۳:۴۵ ) و حتی در روزهای تعطیل فراهم می‌باشد.",
  "موعد پرداخت سود در صندوق اوج ملت «اولین روز کاری» هرماه می‌باشد. در مواردی که روز یکم جمعه یا تعطیل رسمی باشد، پرداخت سود در روز کاری بعد تا پایان وقت اداری صندوق انجام می‌پذیرد.",
  "توجه داشته باشید در هر زمان که اقدام به واریز وجه جهت صدور واحد در صندوق اوج ملت می‌نمایید، بخشی از وجه واریزی شما طی دو مرحله عودت داده می‌شود مرحله اول تتمه صدور می‌باشد که ۲ تا ۷ روز کاری پس از تایید صدور و مرحله بعدی همراه با اولین سود واریز می‌گردد. بنابراین اصل مبلغ سرمایه گذاری شما در صندوق، به میزان مبالغ مذکور، از مبلغ واریزی شما سرمایه گذار محترم کمتر خواهد بود.",
  "تفاوت قیمت صدور و ابطال درصندوق اوج ملت وجود ندارد. (از محل منابع تامین سرمایه پرداخت می‌شود).",
  "براساس الزامات سازمان بورس و اوراق بهادار و قانون مبارزه با پولشویی، نام و نام خانوادگی واریزکننده با نام و نام خانوادگی درخواست کننده صدور بایستی مطابقت داشته باشد.",
  "در صورت مغایرت شناسه واریز کد ملی با نام خانوادگی و کد ملی واریز کننده ، صدور مبلغ برای شخص واریز کننده در صندوق ثبت خواهد شد و در صورت نبودن شخص مبلغ عودت داده می‌شود."
];

export default function TermsModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <List sx={{ pt: 0 }}>
          {terms.map((term, index) => (
            <ListItem key={index} alignItems="flex-start" sx={{ px: 0, py: 1 }}>
              <ListItemIcon sx={{ minWidth: 30, mt: 0.5 }}>
                <FiberManualRecordIcon sx={{ color: '#00c853', fontSize: 12 }} />
              </ListItemIcon>
              <ListItemText
                primary={term}
                primaryTypographyProps={{ sx: { fontSize: '14px', color: '#555', lineHeight: 1.6 } }}
              />
            </ListItem>
          ))}
        </List>
        <Button 
            onClick={onClose} 
            variant="contained" 
            sx={{ 
                width: "100%", 
                borderRadius: "16px", 
                bgcolor: "#e0e0e0", 
                color: "#333",
                mt: 2,
                py: 1.5,
                fontWeight: 700,
                '&:hover': { bgcolor: "#d0d0d0" }
            }}
        >
            متوجه شدم
        </Button>
      </Box>
    </Modal>
  );
}
