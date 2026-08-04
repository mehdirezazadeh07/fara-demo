import svgPaths from "./svg-fyrp5ohfta";
import imgAvatar from "./61162284bf66549fbff0a995fdf94b29cc6662d7.png";
type XSmallLabelOnlyTileProps = {
  className?: string;
  disable?: "False";
  label?: string;
  status?: "Default" | "Active";
};

function XSmallLabelOnlyTile({ className, disable = "False", label = "لیبل", status = "Default" }: XSmallLabelOnlyTileProps) {
  const isActiveAndFalse = status === "Active" && disable === "False";
  return (
    <div className={className || `h-[24px] relative rounded-[4px] w-[60px] ${isActiveAndFalse ? "bg-white shadow-[0px_1px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.02),0px_1px_2px_0px_rgba(0,0,0,0.04)]" : ""}`}>
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Label">
            {status === "Default" && disable === "False" && (
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['IRANSansFaNum:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#6d6e71] text-[12px] text-center text-ellipsis whitespace-nowrap">
                <p className="leading-[20px] overflow-hidden text-ellipsis" dir="auto">
                  {label}
                </p>
              </div>
            )}
            {isActiveAndFalse && (
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['IRANSansFaNum:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#25282d] text-[12px] text-center text-ellipsis whitespace-nowrap">
                <p className="leading-[20px] overflow-hidden text-ellipsis" dir="auto">
                  {label}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
type SwitchProps = {
  className?: string;
  active?: "False";
  icon?: "False";
  size?: "MD";
  state?: "Enable";
};

function Switch({ className, active = "False", icon = "False", size = "MD", state = "Enable" }: SwitchProps) {
  return (
    <div className={className || "h-[40px] relative w-[54px]"}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#c7c8c9] content-stretch flex h-[28px] items-center justify-end left-1/2 px-[4px] py-[2px] rounded-[9999px] top-1/2 w-[48px]" data-name="Container">
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Handle">
          <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center p-[8px] right-[12px] rounded-[100px] top-1/2" data-name="State-layer">
            <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[4px] relative rounded-[9999px] shrink-0 size-[20px]" data-name="Handle shape" />
          </div>
        </div>
      </div>
    </div>
  );
}

function VuesaxLinearGift() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/gift">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="gift">
          <path d={svgPaths.p144eab80} id="Vector" stroke="#6D6E71" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d={svgPaths.pfbafc80} id="Vector_2" stroke="#6D6E71" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d={svgPaths.p1298f280} id="Vector_3" stroke="#6D6E71" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d={svgPaths.p25ce9900} id="Vector_4" stroke="#6D6E71" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d={svgPaths.p8291980} id="Vector_5" stroke="#6D6E71" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <g id="Vector_6" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Component() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_3px_8px_rgba(0,0,0,0.04),0px_0px_2px_rgba(0,0,0,0.06)] flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative rounded-[9999px] shrink-0" data-name="کارت و حساب">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansFaNum:Medium',sans-serif] h-[24px] justify-center leading-[0] max-h-[24px] max-w-[88px] not-italic overflow-hidden relative shrink-0 text-[#6d6e71] text-[14px] text-center text-ellipsis w-[88px] whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden text-ellipsis" dir="auto">
          باشگاه مشتریان
        </p>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="gift">
        <VuesaxLinearGift />
      </div>
    </div>
  );
}

function VuesaxLinearShieldTick() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/shield-tick">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="shield-tick">
          <path d={svgPaths.p31b37b00} id="Vector" stroke="#6D6E71" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pea4ac80} id="Vector_2" stroke="#6D6E71" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_3px_8px_rgba(0,0,0,0.04),0px_0px_2px_rgba(0,0,0,0.06)] flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative rounded-[9999px] shrink-0" data-name="خدمات">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansFaNum:Medium',sans-serif] justify-center leading-[0] max-h-[24px] not-italic overflow-hidden relative shrink-0 text-[#6d6e71] text-[14px] text-center text-ellipsis whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden text-ellipsis" dir="auto">
          فرا بیمه
        </p>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="shield-tick">
        <VuesaxLinearShieldTick />
      </div>
    </div>
  );
}

function VuesaxLinearBag() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/bag">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="bag">
          <path d={svgPaths.p1e0be100} id="Vector" stroke="#6D6E71" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d={svgPaths.p282fe80} id="Vector_2" stroke="#6D6E71" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d={svgPaths.p26116400} id="Vector_3" stroke="#6D6E71" strokeWidth="1.5" />
          <path d="M8.13333 11.6667V14.625" id="Vector_4" stroke="#6D6E71" strokeLinecap="round" strokeWidth="1.5" />
          <path d="M11.9667 11.6667V14.625" id="Vector_5" stroke="#6D6E71" strokeLinecap="round" strokeWidth="1.5" />
          <path d={svgPaths.pf0c7c00} id="Vector_6" stroke="#6D6E71" strokeLinecap="round" strokeWidth="1.5" />
          <g id="Vector_7" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_3px_8px_rgba(0,0,0,0.04),0px_0px_2px_rgba(0,0,0,0.06)] flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative rounded-[9999px] shrink-0" data-name="تسهیلات">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansFaNum:Medium',sans-serif] justify-center leading-[0] max-h-[24px] not-italic overflow-hidden relative shrink-0 text-[#6d6e71] text-[14px] text-ellipsis text-right whitespace-nowrap">
        <p className="leading-[24px]" dir="auto">
          سبدگردانی
        </p>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="bag">
        <VuesaxLinearBag />
      </div>
    </div>
  );
}

function VuesaxLinearStatusUp() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/status-up">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="status-up">
          <path d="M5.73333 15.125V13.4" id="Vector" stroke="#6D6E71" strokeLinecap="round" strokeWidth="1.5" />
          <path d="M10 15.125V11.675" id="Vector_2" stroke="#6D6E71" strokeLinecap="round" strokeWidth="1.5" />
          <path d="M14.2667 15.125V9.94167" id="Vector_3" stroke="#6D6E71" strokeLinecap="round" strokeWidth="1.5" />
          <path d={svgPaths.p1a31d680} id="Vector_4" stroke="#6D6E71" strokeLinecap="round" strokeWidth="1.5" />
          <path d={svgPaths.p295a2890} id="Vector_5" stroke="#6D6E71" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1e16c800} id="Vector_6" stroke="#6D6E71" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_7" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Component3() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_3px_8px_rgba(0,0,0,0.04),0px_0px_2px_rgba(0,0,0,0.06)] flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative rounded-[9999px] shrink-0" data-name="تسهیلات">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansFaNum:Medium',sans-serif] justify-center leading-[0] max-h-[24px] not-italic overflow-hidden relative shrink-0 text-[#6d6e71] text-[14px] text-ellipsis text-right whitespace-nowrap">
        <p className="leading-[24px]" dir="auto">
          کارگزاری ملت
        </p>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="status-up">
        <VuesaxLinearStatusUp />
      </div>
    </div>
  );
}

function VuesaxLinearStrongbox() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="vuesax/linear/strongbox-2">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="vuesax/linear/strongbox-2">
          <g id="Vector" opacity="0" />
          <path d={svgPaths.p2c82bc00} fill="white" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansFaNum:Medium',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[14px] text-center text-ellipsis text-white whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden text-ellipsis" dir="auto">
          سرمایه‌گذاری
        </p>
      </div>
      <VuesaxLinearStrongbox />
    </div>
  );
}

function Component4() {
  return (
    <div className="bg-[#f26822] content-stretch drop-shadow-[0px_4px_12px_rgba(242,104,34,0.7)] flex items-center justify-center px-[16px] py-[12px] relative rounded-[9999px] shrink-0" data-name="خانه">
      <Frame4 />
    </div>
  );
}

function NavBar() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[12px] items-center justify-center left-0 pb-[8px] pt-[4px] px-[8px] rounded-[9999px] top-0 w-[687px]" data-name="Nav bar">
      <Component />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
    </div>
  );
}

function Container() {
  return <div className="h-[5px] relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(89.99999999999935deg, rgb(242, 104, 34) 0%, rgb(248, 149, 33) 31.16%, rgb(248, 149, 33) 63.53%, rgb(251, 176, 66) 100%)" }} data-name="Container" />;
}

function Label() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Label">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['IRANSansFaNum:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#6d6e71] text-[16px] text-center text-ellipsis whitespace-nowrap">
        <p className="leading-[28px] overflow-hidden text-ellipsis" dir="auto">
          ابطال
        </p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Label">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['IRANSansFaNum:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#25282d] text-[16px] text-center text-ellipsis whitespace-nowrap">
        <p className="leading-[28px] overflow-hidden text-ellipsis" dir="auto">
          صدور
        </p>
      </div>
    </div>
  );
}

function TopPart() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-center justify-end left-[35px] right-[31px] top-[-9px]" data-name="Top Part">
      <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Top Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 466 1" width="466">
            <line id="Top Line" stroke="#D8D9DA" x2="466" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="absolute contents left-0 top-[-9px]" data-name="Border">
      <div className="absolute bottom-0 right-0 top-0 w-[40px]" data-name="Right">
        <div className="absolute inset-[-0.89%_-1.25%_-0.89%_0]">
          <svg className="block size-full" fill="none" height="57" preserveAspectRatio="none" viewBox="0 0 40.5 57" width="40.5">
            <path d={svgPaths.pc7f4bc0} id="Right" stroke="#D8D9DA" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 flex items-center justify-center left-0 top-0 w-[40px]" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
          <div className="relative size-full" data-name="Left">
            <div className="absolute inset-[-0.89%_-1.25%_-0.89%_0]">
              <svg className="block size-full" fill="none" height="57" preserveAspectRatio="none" viewBox="0 0 40.5 57" width="40.5">
                <path d={svgPaths.pc7f4bc0} id="Left" stroke="#D8D9DA" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-0.5px] h-0 left-[40px] right-[40px]" data-name="Botton Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 452 1" width="452">
            <line id="Botton Line" stroke="#D8D9DA" x2="452" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <TopPart />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex gap-[55px] items-center justify-center left-[12px] right-[12px] top-[18px]" data-name="Content">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['IRANSansFaNum:Regular',sans-serif] h-[20px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#25282d] text-[16px] text-ellipsis text-right whitespace-nowrap">
        <p className="leading-[28px] overflow-hidden text-ellipsis" dir="rtl">
          مبلغ سرمایه‌گذاری
        </p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[56px] max-h-[56px] min-h-[56px] relative shrink-0 w-full" data-name="Container">
      <Border />
      <Content />
    </div>
  );
}

function Frame8() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[5px] items-center leading-[21px] not-italic relative shrink-0 text-[#1ac475] whitespace-nowrap">
      <p className="font-['IRANSansFaNum:Medium',sans-serif] relative shrink-0 text-[12px]" dir="auto">
        واحد
      </p>
      <p className="font-['IRANSansFaNum:Bold',sans-serif] relative shrink-0 text-[16px]" dir="auto">
        0
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative">
      <Frame7 />
      <p className="[word-break:break-word] font-['IRANSans:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#949699] text-[14px] whitespace-nowrap" dir="auto">
        تعداد واحد (تقریبی)
      </p>
    </div>
  );
}

function Container3() {
  return <div className="bg-[#dedfe0] h-[16px] relative shrink-0 w-px" data-name="Container" />;
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0 text-[#1ac475]">
      <p className="font-['IRANSansFaNum:Medium',sans-serif] relative shrink-0 text-[12px]" dir="auto">
        ریال
      </p>
      <p className="font-['IRANSansFaNum:Bold',sans-serif] relative shrink-0 text-[16px]" dir="auto">
        10,۱۲۱
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] items-center justify-between leading-[21px] min-w-px not-italic relative whitespace-nowrap">
      <Frame14 />
      <p className="font-['IRANSans:Regular',sans-serif] relative shrink-0 text-[#949699] text-[14px]" dir="auto">
        مبلغ هر واحد (تقریبی)
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full">
      <Frame9 />
      <Container3 />
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#edfff7] content-stretch flex flex-col h-[56px] items-center justify-center px-[20px] py-[16px] relative rounded-[10px] shrink-0 w-[530px]">
      <div aria-hidden className="absolute border border-[#dedfe0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Frame10 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[5px] items-center leading-[21px] not-italic relative shrink-0 text-[#1ac475] whitespace-nowrap">
      <p className="font-['IRANSansFaNum:Medium',sans-serif] relative shrink-0 text-[12px]" dir="auto">
        واحد
      </p>
      <p className="font-['IRANSansFaNum:Bold',sans-serif] relative shrink-0 text-[16px]" dir="auto">
        0
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame19 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative">
      <Frame18 />
      <p className="[word-break:break-word] font-['IRANSans:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#949699] text-[14px] whitespace-nowrap" dir="auto">
        تعداد واحد (تقریبی)
      </p>
    </div>
  );
}

function Container4() {
  return <div className="bg-[#dedfe0] h-[16px] relative shrink-0 w-px" data-name="Container" />;
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0 text-[#1ac475]">
      <p className="font-['IRANSansFaNum:Medium',sans-serif] relative shrink-0 text-[12px]" dir="auto">
        ریال
      </p>
      <p className="font-['IRANSansFaNum:Bold',sans-serif] relative shrink-0 text-[16px]" dir="auto">
        10,۱۲۱
      </p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] items-center justify-between leading-[21px] min-w-px not-italic relative whitespace-nowrap">
      <Frame21 />
      <p className="font-['IRANSans:Regular',sans-serif] relative shrink-0 text-[#949699] text-[14px]" dir="auto">
        مبلغ هر واحد (تقریبی)
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full">
      <Frame17 />
      <Container4 />
      <Frame20 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#edfff7] content-stretch flex flex-col h-[56px] items-center justify-center px-[20px] py-[16px] relative rounded-[10px] shrink-0 w-[530px]">
      <div aria-hidden className="absolute border border-[#dedfe0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Frame16 />
    </div>
  );
}

function TopPart1() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-center justify-end left-[35px] right-[31px] top-[-9px]" data-name="Top Part">
      <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Top Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 466 1" width="466">
            <line id="Top Line" stroke="#D8D9DA" x2="466" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Border1() {
  return (
    <div className="absolute contents left-0 top-[-9px]" data-name="Border">
      <div className="absolute bottom-0 right-0 top-0 w-[40px]" data-name="Right">
        <div className="absolute inset-[-0.89%_-1.25%_-0.89%_0]">
          <svg className="block size-full" fill="none" height="57" preserveAspectRatio="none" viewBox="0 0 40.5 57" width="40.5">
            <path d={svgPaths.pc7f4bc0} id="Right" stroke="#D8D9DA" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 flex items-center justify-center left-0 top-0 w-[40px]" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
          <div className="relative size-full" data-name="Left">
            <div className="absolute inset-[-0.89%_-1.25%_-0.89%_0]">
              <svg className="block size-full" fill="none" height="57" preserveAspectRatio="none" viewBox="0 0 40.5 57" width="40.5">
                <path d={svgPaths.pc7f4bc0} id="Left" stroke="#D8D9DA" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-0.5px] h-0 left-[40px] right-[40px]" data-name="Botton Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 452 1" width="452">
            <line id="Botton Line" stroke="#D8D9DA" x2="452" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <TopPart1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="absolute content-stretch flex gap-[55px] items-center justify-center left-[12px] right-[12px] top-[18px]" data-name="Content">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['IRANSansFaNum:Regular',sans-serif] h-[20px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#25282d] text-[16px] text-ellipsis text-right whitespace-nowrap">
        <p className="leading-[28px] overflow-hidden text-ellipsis" dir="rtl">
          کد معرف (اختیاری)
        </p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[56px] max-h-[56px] min-h-[56px] relative shrink-0 w-full" data-name="Container">
      <Border1 />
      <Content1 />
    </div>
  );
}

function Space() {
  return <div className="relative rounded-[29px] shrink-0 size-[24px]" data-name="Space" />;
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Space />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative self-stretch shrink-0">
      <Frame2 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="Title">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['IRANSansFaNum:Medium',sans-serif] h-[24px] justify-center leading-[0] min-w-px not-italic relative text-[#25282d] text-[14px] text-right">
        <p className="leading-[24px]" dir="auto">
          نكته مهم
        </p>
      </div>
    </div>
  );
}

function Caption() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Caption">
      <p className="[word-break:break-word] flex-[1_0_0] font-['IRANSansFaNum:Regular',sans-serif] leading-[0] min-w-px not-italic relative text-[#6d6e71] text-[0px] text-right" dir="auto">
        <span className="leading-[20px] text-[12px]">{`سرمايه گذار محترم در صورت واريز مبلغ سرمايه گذاري در `}</span>
        <span className="font-['IRANSansFaNum:Bold',sans-serif] leading-[20px] text-[12px]">روزهاي تعطيل</span>
        <span className="leading-[20px] text-[12px]">{` يا `}</span>
        <span className="font-['IRANSansFaNum:Bold',sans-serif] leading-[20px] text-[12px]">غيركاري صندوق</span>
        <span className="leading-[20px] text-[12px]">، بازدهي سرمايه گذاري از اولين روز كاري پس از واريز محاسبه خواهد شد.</span>
      </p>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-end justify-center pl-[8px] pr-[12px] relative size-full">
          <Title />
          <Caption />
        </div>
      </div>
    </div>
  );
}

function VuesaxBoldCloseSquare() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/close-square">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="close-square">
          <path d={svgPaths.p235a1000} fill="#949699" id="Vector" stroke="#6D6E71" strokeWidth="0.375" />
          <path d={svgPaths.p128d3a00} fill="white" id="Vector_2" stroke="#6D6E71" strokeWidth="0.375" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-end min-w-px pt-[4px] relative">
      <Text />
      <div className="relative shrink-0 size-[18px]" data-name="close-square">
        <VuesaxBoldCloseSquare />
      </div>
    </div>
  );
}

function Alerts() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex items-start justify-between pb-[16px] pt-[8px] px-[12px] relative rounded-[16px] shrink-0 w-[530px]" data-name="Alerts">
      <div aria-hidden className="absolute border border-[#e9e9ea] border-solid inset-[-0.5px] pointer-events-none rounded-[16.5px]" />
      <Frame1 />
      <Frame />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 z-[2]" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansFaNum:Regular',sans-serif] justify-center leading-[0] min-w-[32px] not-italic relative shrink-0 text-[#b6b7b9] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[28px]" dir="auto">
          تایید و ادامه
        </p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center justify-center px-[32px] relative size-full">
          <Label2 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-end justify-center relative size-full">
        <div className="bg-[rgba(255,255,255,0)] max-h-[56px] min-h-[56px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
          <div className="flex flex-col items-center justify-center max-h-[inherit] min-h-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center justify-center max-h-[inherit] min-h-[inherit] relative size-full">
              <Container2 />
            </div>
          </div>
        </div>
        <Frame12 />
        <Frame15 />
        <div className="bg-[rgba(255,255,255,0)] max-h-[56px] min-h-[56px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
          <div className="flex flex-col items-center justify-center max-h-[inherit] min-h-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center justify-center max-h-[inherit] min-h-[inherit] relative size-full">
              <Container5 />
            </div>
          </div>
        </div>
        <Alerts />
        <p className="[word-break:break-word] font-['IRANSansFaNum:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" dir="auto">
          <span className="font-['IRANSansFaNum:Medium',sans-serif] leading-[24px] text-[#25282d] text-[16px]">صدور به منزله تایید</span>
          <span className="font-['IRANSansFaNum:Medium',sans-serif] leading-[24px] text-[#8c8c8c] text-[16px]">{` `}</span>
          <span className="[text-underline-position:from-font] decoration-from-font decoration-solid font-['IRANSansFaNum:Medium',sans-serif] leading-[24px] text-[#d48806] text-[16px] underline">قوانین و مقررات</span>
          <span className="font-['IRANSansFaNum:Medium',sans-serif] leading-[24px] text-[#25282d] text-[16px]">{` است. `}</span>
        </p>
        <div className="bg-[#e9e9ea] min-w-[112px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
          <div className="flex flex-col items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] relative size-full">
              <Container6 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[663px] relative shrink-0 w-[580px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-center pb-[12px] pt-[24px] px-[24px] relative size-full">
        <div className="bg-[#e8ebef] h-[56px] max-h-[56px] min-h-[56px] relative rounded-[12px] shrink-0 w-[530px]" data-name="Segmented Button">
          <div className="flex flex-row items-center justify-end max-h-[inherit] min-h-[inherit] size-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-end max-h-[inherit] min-h-[inherit] p-[4px] relative size-full">
              <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-[8px]" data-name="Tile2">
                <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex items-center justify-center px-[24px] relative size-full">
                    <Label />
                  </div>
                </div>
              </div>
              <div className="bg-white flex-[1_0_0] h-[48px] min-w-px relative rounded-[8px] shadow-[0px_1px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.02),0px_1px_2px_0px_rgba(0,0,0,0.04)]" data-name="Tile1">
                <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex items-center justify-center px-[24px] relative size-full">
                    <Label1 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Frame5 />
      </div>
    </div>
  );
}

function QuickBuyPanel() {
  return (
    <div className="bg-white h-[702px] relative rounded-[15px] shrink-0 w-[580px]" data-name="QuickBuyPanel">
      <div className="content-stretch flex flex-col items-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Container />
        <Container1 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[15px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container7() {
  return <div className="h-[5px] relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(89.99999999999935deg, rgb(242, 104, 34) 0%, rgb(248, 149, 33) 31.16%, rgb(248, 149, 33) 63.53%, rgb(251, 176, 66) 100%)" }} data-name="Container" />;
}

function Group28() {
  return (
    <div className="h-[48px] relative shrink-0 w-[105.641px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="48" preserveAspectRatio="none" viewBox="0 0 105.641 48" width="105.641">
        <g id="Group 1261157263">
          <path d={svgPaths.p7145ef0} fill="#3C3C3B" id="Vector" />
          <path d={svgPaths.p221ac480} fill="#3C3C3B" id="Vector_2" />
          <path d={svgPaths.p18db2100} fill="#3C3C3B" id="Vector_3" />
          <path d={svgPaths.p2887ec00} fill="#3C3C3B" id="Vector_4" />
          <path d={svgPaths.p3ee57380} fill="#3C3C3B" id="Vector_5" />
          <path d={svgPaths.p3812f200} fill="#3C3C3B" id="Vector_6" />
          <path d={svgPaths.p1a43f600} fill="#3C3C3B" id="Vector_7" />
          <path d={svgPaths.p1ad28c00} fill="#3C3C3B" id="Vector_8" />
          <path d={svgPaths.p905700} fill="#3C3C3B" id="Vector_9" />
          <path d={svgPaths.p3912e100} fill="#3C3C3B" id="Vector_10" />
          <path d={svgPaths.p2b5a6c80} fill="#3C3C3B" id="Vector_11" />
          <path d={svgPaths.p197fca00} fill="#3C3C3B" id="Vector_12" />
          <path d={svgPaths.p2d733500} fill="#3C3C3B" id="Vector_13" />
          <path d={svgPaths.p19be2980} fill="#3C3C3B" id="Vector_14" />
          <path d={svgPaths.p9d4fd80} fill="#3C3C3B" id="Vector_15" />
          <path d={svgPaths.p1a191f80} fill="#3C3C3B" id="Vector_16" />
          <path d={svgPaths.p2a4e2480} fill="#3C3C3B" id="Vector_17" />
          <path d={svgPaths.p3c2d2880} fill="#3C3C3B" id="Vector_18" />
          <path d={svgPaths.p1ffffc00} fill="#3C3C3B" id="Vector_19" />
          <path d={svgPaths.p2292f600} fill="#3C3C3B" id="Vector_20" />
          <path d={svgPaths.p21352f70} fill="#3C3C3B" id="Vector_21" />
          <path d={svgPaths.pf4d3680} fill="#3C3C3B" id="Vector_22" />
        </g>
      </svg>
    </div>
  );
}

function Group29() {
  return (
    <div className="h-[47.771px] relative shrink-0 w-[49.23px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="47.77" preserveAspectRatio="none" viewBox="0 0 49.2303 47.77" width="49.2303">
        <g id="Group 1261157264">
          <path d={svgPaths.p31c7e5f0} fill="#E30521" id="Vector" />
          <path d={svgPaths.p3afa2600} fill="#E30521" id="Vector_2" />
          <path d={svgPaths.p11a7e340} fill="#E30521" id="Vector_3" />
          <path d={svgPaths.p1e3443f2} fill="#E30521" id="Vector_4" />
          <path d={svgPaths.p243c4200} fill="#E30521" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[48px] relative shrink-0 w-[172.563px]">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[17.693px] items-center justify-end py-[139.771px] relative size-full">
          <Group28 />
          <Group29 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="Container">
      <Frame6 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0 text-[#1ac475] text-[16px]">
      <p className="font-['IRANSansFaNum:Medium',sans-serif] relative shrink-0" dir="auto">
        %
      </p>
      <p className="font-['IRANSansFaNum:Bold',sans-serif] relative shrink-0" dir="auto">
        +35
      </p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[21px] not-italic relative shrink-0 w-full whitespace-nowrap">
      <Frame24 />
      <p className="font-['IRANSans:Regular',sans-serif] relative shrink-0 text-[#949699] text-[14px]" dir="auto">{`بازدهی سالانه موثر `}</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="bg-[#f7f8fa] flex-[1_0_0] min-w-px relative rounded-[8px]">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[20px] relative size-full">
        <Frame23 />
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0 text-[#1ac475] text-[16px]">
      <p className="font-['IRANSansFaNum:Medium',sans-serif] relative shrink-0" dir="auto">
        %
      </p>
      <p className="font-['IRANSansFaNum:Bold',sans-serif] relative shrink-0" dir="auto">
        +30.39
      </p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="[word-break:break-word] content-stretch flex h-[17px] items-center justify-between leading-[21px] not-italic relative shrink-0 w-full whitespace-nowrap">
      <Frame26 />
      <p className="font-['IRANSans:Regular',sans-serif] relative shrink-0 text-[#949699] text-[14px]" dir="auto">
        بازدهی سالانه
      </p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-[#f7f8fa] flex-[1_0_0] h-[61px] min-w-px relative rounded-[8px]">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[20px] relative size-full">
        <Frame25 />
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <Frame51 />
      <Frame54 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0 text-[#ea1017]">
      <p className="font-['IRANSansFaNum:Medium',sans-serif] relative shrink-0 text-[12px]" dir="auto">
        ریال
      </p>
      <p className="font-['IRANSansFaNum:Bold',sans-serif] relative shrink-0 text-[16px]" dir="auto">
        10,۱14
      </p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[21px] not-italic relative shrink-0 w-full whitespace-nowrap">
      <Frame28 />
      <p className="font-['IRANSans:Regular',sans-serif] relative shrink-0 text-[#949699] text-[14px]" dir="auto">
        هر واحد ابطال
      </p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-[#f7f8fa] flex-[1_0_0] min-w-px relative rounded-[8px]">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[20px] relative size-full">
        <Frame27 />
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0 text-[#1ac475]">
      <p className="font-['IRANSansFaNum:Medium',sans-serif] relative shrink-0 text-[12px]" dir="auto">
        ریال
      </p>
      <p className="font-['IRANSansFaNum:Bold',sans-serif] relative shrink-0 text-[16px]" dir="auto">
        10,۱۲۱
      </p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="[word-break:break-word] content-stretch flex h-[17px] items-center justify-between leading-[21px] not-italic relative shrink-0 w-full whitespace-nowrap">
      <Frame30 />
      <p className="font-['IRANSans:Regular',sans-serif] relative shrink-0 text-[#949699] text-[14px]" dir="auto">
        هر واحد صدور
      </p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="bg-[#f7f8fa] flex-[1_0_0] h-[61px] min-w-px relative rounded-[8px]">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[20px] relative size-full">
        <Frame29 />
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <Frame56 />
      <Frame49 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[530px]">
      <Frame52 />
      <Frame55 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="relative shrink-0">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center leading-[21px] not-italic relative size-full text-white whitespace-nowrap">
        <p className="font-['IRANSansFaNum:Medium',sans-serif] relative shrink-0 text-[12px]" dir="auto">
          ریال
        </p>
        <p className="font-['IRANSansFaNum:Black',sans-serif] relative shrink-0 text-[20px] tracking-[-3px]" dir="auto">
          100,۱۲۱,000
        </p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="h-full relative shrink-0" data-name="Text">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
          <p className="[word-break:break-word] font-['IRANSans:Regular',sans-serif] leading-[38.7px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap" dir="auto">
            مبلغ دارایی در صندوق:
          </p>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Frame31 />
      <Text1 />
    </div>
  );
}

function Container11() {
  return <div className="bg-[rgba(255,255,255,0.3)] h-px relative shrink-0 w-[482px]" data-name="Container" />;
}

function Frame59() {
  return (
    <div className="relative shrink-0">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start leading-[21px] not-italic relative size-full text-white whitespace-nowrap">
        <p className="font-['IRANSansFaNum:Medium',sans-serif] relative shrink-0 text-[12px]" dir="auto">
          واحد
        </p>
        <p className="font-['IRANSansFaNum:Black',sans-serif] relative shrink-0 text-[18px] tracking-[-3px]" dir="auto">
          10,00 3
        </p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Frame59 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[31px] relative shrink-0 w-[27px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[4px] relative size-full">
        <p className="[word-break:break-word] font-['IRANSans:Regular',sans-serif] leading-[38.7px] not-italic relative shrink-0 text-[16px] text-right text-white w-[161px]" dir="auto">
          تعداد واحد صندوق:
        </p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-[160px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text3 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Container13 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full">
      <Container10 />
      <Container11 />
      <Container12 />
    </div>
  );
}

function VuesaxLinearInfoCircle() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/info-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="info-circle">
          <path d={svgPaths.p13592300} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 5.33333V8.66667" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7.9974 10.6667H8.00338" id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
          <g id="Vector_4" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="relative size-[16px]" data-name="info-circle">
            <VuesaxLinearInfoCircle />
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['IRANSans:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.75)] whitespace-nowrap" dir="auto">
        سرمایه گذاری مجدد سود تقسیمی
      </p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-end relative shrink-0">
      <p className="[word-break:break-word] font-['IRANSans:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-right text-white w-full" dir="auto">
        سود مرکب
      </p>
      <Frame45 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-end px-[8px] py-[12px] relative size-full">
          <Frame44 />
          <Switch className="h-[40px] relative shrink-0 w-[54px]" />
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full">
      <Frame32 />
      <Frame46 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0 z-[2]" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansFaNum:Regular',sans-serif] justify-center leading-[0] min-w-[32px] not-italic relative shrink-0 text-[#d48806] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[28px]" dir="auto">
          دریافت گواهی
        </p>
      </div>
    </div>
  );
}

function VuesaxOutlineDocumentDownload() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/document-download">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="document-download">
          <path d={svgPaths.p16a8df00} fill="#D48806" id="Vector" />
          <path d={svgPaths.p362e4dc0} fill="#D48806" id="Vector_2" />
          <path d={svgPaths.pcc7b170} fill="#D48806" id="Vector_3" />
          <path d={svgPaths.p13f9fb00} fill="#D48806" id="Vector_4" />
          <g id="Vector_5" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center justify-center px-[32px] relative size-full">
          <Label3 />
          <div className="relative shrink-0 size-[20px] z-[1]" data-name="Style=outline">
            <VuesaxOutlineDocumentDownload />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-end justify-center p-[24px] relative rounded-[16px] shrink-0 w-[530px]" style={{ backgroundImage: "linear-gradient(149.1157987896318deg, rgba(251, 176, 66, 0.9) 0%, rgba(248, 149, 33, 0.9) 50%, rgba(242, 104, 34, 0.9) 100%)" }}>
      <Frame47 />
      <div className="bg-[#fffbe6] min-w-[112px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-col items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] relative size-full">
            <Container14 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[34px] items-start relative size-full">
        <Container9 />
        <Frame53 />
        <Frame33 />
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-end relative size-full">
        <p className="[word-break:break-word] font-['IRANSansFaNum:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1d293d] text-[16px] whitespace-nowrap" dir="auto">
          اطلاعات صندوق
        </p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <Frame34 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IRANSansFaNum:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#25282d] text-[14px] whitespace-nowrap" dir="auto">
          تامین سرمایه بانک ملت
        </p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IRANSansFaNum:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6d6e71] text-[14px] whitespace-nowrap" dir="auto">
          مدیر صندوق
        </p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Text4 />
        <Text5 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IRANSansFaNum:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#25282d] text-[14px] whitespace-nowrap" dir="auto">
          در اوراق بهادار با درآمد ثابت - صدور و ابطالی
        </p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IRANSansFaNum:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6d6e71] text-[14px] whitespace-nowrap" dir="auto">
          نوع صندوق
        </p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pt-[10px] relative size-full">
        <Text6 />
        <Text7 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IRANSansFaNum:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#25282d] text-[14px] whitespace-nowrap" dir="auto">
          بانک ملت (سهامی عام)
        </p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IRANSansFaNum:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6d6e71] text-[14px] whitespace-nowrap" dir="auto">
          ضامن نقد شوندگی
        </p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pt-[10px] relative size-full">
        <Text8 />
        <Text9 />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IRANSansFaNum:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#25282d] text-[14px] whitespace-nowrap" dir="auto">
          ماهانه
        </p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IRANSansFaNum:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6d6e71] text-[14px] whitespace-nowrap" dir="auto">
          دوره تقسیم سود
        </p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pt-[10px] relative size-full">
        <Text10 />
        <Text11 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IRANSansFaNum:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#25282d] text-[14px] whitespace-nowrap" dir="auto">
          شرکت مشاور سرمایه گذاری سهم آشنا
        </p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IRANSansFaNum:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6d6e71] text-[14px] whitespace-nowrap" dir="auto">
          متولی صندوق
        </p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[26px] relative shrink-0 w-[488px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pt-[10px] relative size-full">
        <Text12 />
        <Text13 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IRANSansFaNum:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#25282d] text-[14px] whitespace-nowrap" dir="auto">
          موسسه حسابرسی فراز مشاور دیلمی
        </p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IRANSansFaNum:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6d6e71] text-[14px] whitespace-nowrap" dir="auto">
          حسابرس
        </p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[26px] relative shrink-0 w-[487px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pt-[10px] relative size-full">
        <Text14 />
        <Text15 />
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IRANSansFaNum:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#25282d] text-[14px] whitespace-nowrap">۱۳۹1/۰۴/11</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IRANSansFaNum:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6d6e71] text-[14px] whitespace-nowrap" dir="auto">
          تاریخ آغاز فعالیت
        </p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-[487px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pt-[10px] relative size-full">
        <Text16 />
        <Text17 />
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IRANSansFaNum:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#25282d] text-[14px] whitespace-nowrap" dir="auto">
          393,200 میلیارد ریال
        </p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IRANSansFaNum:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6d6e71] text-[14px] whitespace-nowrap" dir="auto">
          خالص ارزش کل دارایی‌های صندوق
        </p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pt-[10px] relative size-full">
        <Text18 />
        <Text19 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-[488px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pt-[12px] relative size-full">
        <Container17 />
        <Container18 />
        <Container19 />
        <Container20 />
        <Container21 />
        <Container22 />
        <Container23 />
        <Container24 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#dedfe0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[7px] items-start pb-[33px] pt-[25px] px-[21px] relative size-full">
        <Heading />
        <Container16 />
      </div>
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container15 />
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Label">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['IRANSansFaNum:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#25282d] text-[12px] text-center text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden text-ellipsis" dir="auto">
          ۱ سال
        </p>
      </div>
    </div>
  );
}

function SegmentedButton() {
  return (
    <div className="bg-[#e8ebef] h-[32px] max-h-[32px] min-h-[32px] relative rounded-[8px] shrink-0 w-[248px]" data-name="Segmented Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-end max-h-[inherit] min-h-[inherit] overflow-clip p-[4px] relative rounded-[inherit] size-full">
        <div className="bg-white flex-[1_0_0] h-[24px] min-w-px relative rounded-[4px] shadow-[0px_1px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.02),0px_1px_2px_0px_rgba(0,0,0,0.04)]" data-name="Tile1">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center px-[8px] relative size-full">
              <Label4 />
            </div>
          </div>
        </div>
        <XSmallLabelOnlyTile className="flex-[1_0_0] h-[24px] min-w-px relative rounded-[4px]" label="۶ ماه" />
        <XSmallLabelOnlyTile className="flex-[1_0_0] h-[24px] min-w-px relative rounded-[4px]" label="۳ ماه" />
        <XSmallLabelOnlyTile className="flex-[1_0_0] h-[24px] min-w-px relative rounded-[4px]" label="۱ ماه" />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Vazirmatn:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1d293d] text-[16px] whitespace-nowrap" dir="auto">
          نمودار قیمت صندوق
        </p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-[478px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <SegmentedButton />
        <Heading1 />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[8.61%_0.7%_15.91%_9.04%]" data-name="Group">
      <div className="absolute inset-[8.61%_0.7%_15.91%_9.04%]" data-name="recharts-area-_r_f_">
        <svg className="absolute block inset-0 size-full" fill="none" height="166.05" preserveAspectRatio="none" viewBox="0 0 438.684 166.05" width="438.684">
          <path d={svgPaths.p2db99200} fill="url(#paint0_linear_0_300)" fillOpacity="0.6" id="recharts-area-_r_f_" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_300" x1="0" x2="0" y1="0" y2="166.05">
              <stop offset="0.05" stopColor="#F59E0B" stopOpacity="0.2" />
              <stop offset="0.95" stopColor="#F59E0B" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[8.61%_0.7%_59.68%_9.04%]" data-name="Vector">
        <div className="absolute inset-[-1.4%_0_-1.43%_0]">
          <svg className="block size-full" fill="none" height="71.7204" preserveAspectRatio="none" viewBox="0 0 439.008 71.7204" width="439.008">
            <path d={svgPaths.p1bb50100} id="Vector" stroke="#F59E0B" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[8.61%_0.7%_15.91%_9.04%]" data-name="Group">
      <Group3 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[8.61%_0.7%_15.91%_9.04%]" data-name="Group">
      <Group2 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[25.59%_0.7%_15.91%_9.04%]" data-name="Group">
      <div className="absolute inset-[25.59%_0.7%_15.91%_9.04%]" data-name="recharts-area-_r_g_">
        <svg className="absolute block inset-0 size-full" fill="none" height="128.7" preserveAspectRatio="none" viewBox="0 0 438.684 128.7" width="438.684">
          <path d={svgPaths.p492b500} fill="url(#paint0_linear_0_355)" fillOpacity="0.6" id="recharts-area-_r_g_" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_355" x1="0" x2="0" y1="0" y2="128.7">
              <stop offset="0.05" stopColor="#94A3B8" stopOpacity="0.1" />
              <stop offset="0.95" stopColor="#94A3B8" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[25.59%_0.7%_57.64%_9.04%]" data-name="Vector">
        <div className="absolute inset-[-2.02%_0_-2.03%_0]">
          <svg className="block size-full" fill="none" height="38.3955" preserveAspectRatio="none" viewBox="0 0 438.798 38.3955" width="438.798">
            <path d={svgPaths.p35b84b30} id="Vector" stroke="#94A3B8" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[25.59%_0.7%_15.91%_9.04%]" data-name="Group">
      <Group6 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[25.59%_0.7%_15.91%_9.04%]" data-name="Group">
      <Group5 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[8.61%_0.7%_15.91%_9.04%]" data-name="Group">
      <Group1 />
      <Group4 />
    </div>
  );
}

function Group9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
      <p className="[word-break:break-word] col-1 font-['Vazirmatn:Regular',sans-serif] font-normal leading-[normal] ml-0 mt-0 relative row-1 text-[#94a3b8] text-[10px] text-center w-[22.033px]" dir="auto">
        بهمن
      </p>
    </div>
  );
}

function Group10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
      <p className="[word-break:break-word] col-1 font-['Vazirmatn:Regular',sans-serif] font-normal leading-[normal] ml-0 mt-0 relative row-1 text-[#94a3b8] text-[10px] text-center w-[27px]" dir="auto">
        اسفند
      </p>
    </div>
  );
}

function Group11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
      <p className="[word-break:break-word] col-1 font-['Vazirmatn:Regular',sans-serif] font-normal leading-[normal] ml-0 mt-0 relative row-1 text-[#94a3b8] text-[10px] text-center w-[32px]" dir="auto">
        فروردین
      </p>
    </div>
  );
}

function Group12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
      <p className="[word-break:break-word] col-1 font-['Vazirmatn:Regular',sans-serif] font-normal leading-[normal] ml-0 mt-0 relative row-1 text-[#94a3b8] text-[10px] text-center w-[40px]" dir="auto">
        اردیبهشت
      </p>
    </div>
  );
}

function Group13() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
      <p className="[word-break:break-word] col-1 font-['Vazirmatn:Regular',sans-serif] font-normal leading-[normal] ml-0 mt-0 relative row-1 text-[#94a3b8] text-[10px] text-center w-[22.527px]" dir="auto">
        خرداد
      </p>
    </div>
  );
}

function Group14() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
      <p className="[word-break:break-word] col-1 font-['Vazirmatn:Regular',sans-serif] font-normal leading-[normal] ml-0 mt-0 relative row-1 text-[#94a3b8] text-[10px] text-center w-[12px]" dir="auto">
        تیر
      </p>
    </div>
  );
}

function Group15() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
      <p className="[word-break:break-word] col-1 font-['Vazirmatn:Regular',sans-serif] font-normal leading-[normal] ml-0 mt-0 relative row-1 text-[#94a3b8] text-[10px] text-center w-[23.95px]" dir="auto">
        مرداد
      </p>
    </div>
  );
}

function Group16() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
      <p className="[word-break:break-word] col-1 font-['Vazirmatn:Regular',sans-serif] font-normal leading-[normal] ml-0 mt-0 relative row-1 text-[#94a3b8] text-[10px] text-center w-[30px]" dir="auto">
        شهریور
      </p>
    </div>
  );
}

function Group17() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
      <p className="[word-break:break-word] col-1 font-['Vazirmatn:Regular',sans-serif] font-normal leading-[normal] ml-0 mt-0 relative row-1 text-[#94a3b8] text-[10px] text-center w-[15.049px]" dir="auto">
        مهر
      </p>
    </div>
  );
}

function Group18() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
      <p className="[word-break:break-word] col-1 font-['Vazirmatn:Regular',sans-serif] font-normal leading-[normal] ml-0 mt-0 relative row-1 text-[#94a3b8] text-[10px] text-center w-[15.929px]" dir="auto">
        آبان
      </p>
    </div>
  );
}

function Group19() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
      <p className="[word-break:break-word] col-1 font-['Vazirmatn:Regular',sans-serif] font-normal leading-[normal] ml-0 mt-0 relative row-1 text-[#94a3b8] text-[10px] text-center w-[11.458px]" dir="auto">
        آذر
      </p>
    </div>
  );
}

function Group20() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
      <p className="[word-break:break-word] col-1 font-['Vazirmatn:Regular',sans-serif] font-normal leading-[normal] ml-0 mt-0 relative row-1 text-[#94a3b8] text-[10px] text-center whitespace-nowrap" dir="auto">
        دی
      </p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center justify-end leading-[0] left-[44px] top-[190px] w-[439px]">
      <Group9 />
      <Group10 />
      <Group11 />
      <Group12 />
      <Group13 />
      <Group14 />
      <Group15 />
      <Group16 />
      <Group17 />
      <Group18 />
      <Group19 />
      <Group20 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[44px] top-[190px]" data-name="Group">
      <Frame35 />
    </div>
  );
}

function Group22() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
      <p className="[word-break:break-word] col-1 font-['Vazirmatn:Regular',sans-serif] font-normal leading-[normal] ml-0 mt-0 relative row-1 text-[#94a3b8] text-[10px] text-right whitespace-nowrap">20K</p>
    </div>
  );
}

function Group23() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
      <p className="[word-break:break-word] col-1 font-['Vazirmatn:Regular',sans-serif] font-normal leading-[normal] ml-0 mt-0 relative row-1 text-[#94a3b8] text-[10px] text-right w-[18.528px]">15K</p>
    </div>
  );
}

function Group24() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
      <p className="[word-break:break-word] col-1 font-['Vazirmatn:Regular',sans-serif] font-normal leading-[normal] ml-0 mt-0 relative row-1 text-[#94a3b8] text-[10px] text-right whitespace-nowrap">10K</p>
    </div>
  );
}

function Group25() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
      <p className="[word-break:break-word] col-1 font-['Vazirmatn:Regular',sans-serif] font-normal leading-[normal] ml-0 mt-0 relative row-1 text-[#94a3b8] text-[10px] text-right w-[13.529px]">5K</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[26px] items-end left-[20px] top-[1.05px] w-[18.529px]">
      <Group22 />
      <Group23 />
      <Group24 />
      <Group25 />
      <p className="[word-break:break-word] font-['Vazirmatn:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#94a3b8] text-[10px] text-right w-[min-content]">0K</p>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents left-[20px] top-[1.05px]" data-name="Group">
      <Frame36 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[20px] top-[1.05px]" data-name="Group">
      <Group8 />
      <Group21 />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[220px] relative shrink-0 w-full" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group />
        <Group7 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[220px] relative shrink-0 w-[486px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container29 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col h-[220px] items-start relative shrink-0 w-full" data-name="Container">
      <Container28 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Container:margin">
      <Container27 />
    </div>
  );
}

function Text20() {
  return <div className="bg-[#f59e0b] h-[2px] relative rounded-[4px] shrink-0 w-[16px]" data-name="Text" />;
}

function Container31() {
  return (
    <div className="h-full relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text20 />
        <p className="[word-break:break-word] font-['Vazirmatn:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#62748e] text-[12px] whitespace-nowrap" dir="auto">
          قیمت صدور
        </p>
      </div>
    </div>
  );
}

function Text21() {
  return <div className="bg-[#94a3b8] h-[2px] relative rounded-[10px] shrink-0 w-[16px]" data-name="Text" />;
}

function Container32() {
  return (
    <div className="h-full relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text21 />
        <p className="[word-break:break-word] font-['Vazirmatn:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#62748e] text-[12px] whitespace-nowrap" dir="auto">
          قیمت ابطال
        </p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[20px] h-[24px] items-start pt-[8px] relative shrink-0" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <ContainerMargin1 />
        <Container30 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] relative rounded-[16px] shrink-0 w-[530px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#dedfe0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-center justify-center px-[21px] py-[25px] relative size-full">
        <Container26 />
        <Frame37 />
      </div>
    </div>
  );
}

function Button() {
  return <div className="h-[16px] relative shrink-0 w-0" data-name="Button" />;
}

function Label5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.615px] relative shrink-0 z-[2]" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansFaNum:Regular',sans-serif] justify-center leading-[0] min-w-[21.69014024734497px] not-italic relative shrink-0 text-[#ff8037] text-[10.85px] text-center whitespace-nowrap">
        <p className="leading-[18.075px]" dir="auto">
          گزارش درخواست‌ها
        </p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[28.92px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex isolate items-center justify-center px-[14.46px] relative size-full">
          <div className="relative shrink-0 size-[12.653px] z-[3]" data-name="Style=outline">
            <div className="absolute inset-[21.59%_11.46%_21.58%_11.47%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="7.19" preserveAspectRatio="none" viewBox="0 0 9.75182 7.19" width="9.75182">
                <path d={svgPaths.pe326980} fill="#FF8037" id="Vector" />
              </svg>
            </div>
          </div>
          <Label5 />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <p className="[word-break:break-word] font-['IRANSans:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25282d] text-[16px] whitespace-nowrap" dir="auto">
        5 درخواست اخیر
      </p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="relative shrink-0 w-[488px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <div className="bg-[#fff2eb] min-w-[57.84037399291992px] relative rounded-[7.23px] shrink-0 w-[129px]" data-name="Button">
          <div className="flex flex-col items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] relative size-full">
              <Container35 />
            </div>
          </div>
        </div>
        <Heading2 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[20px] relative size-full">
          <Button />
          <Frame43 />
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Vazirmatn:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#00a63e] text-[12px] whitespace-nowrap" dir="auto">
          ۴۴۵٬۰۰۰٬۰۰۰ ریال
        </p>
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.883px] relative shrink-0" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansFaNum:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d48806] text-[8.65px] text-center whitespace-nowrap">
        <p className="leading-[14.416px]" dir="auto">
          در انتظار تایید
        </p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <p className="[word-break:break-word] font-['Vazirmatn:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#1d293d] text-[12px] whitespace-nowrap" dir="auto">
          خرید - 25 واحد
        </p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <p className="[word-break:break-word] font-['Vazirmatn:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#90a1b9] text-[12px] whitespace-nowrap">۱۴۰۳/۱۰/۱۵</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-[516.109_0_0] flex-col items-end justify-center min-w-px relative" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Icon">
          <path d={svgPaths.p37248a50} id="Vector" stroke="#00A63E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p1c5a7ac0} id="Vector_2" stroke="#00A63E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[#f0fdf4] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="flex-[1_0_0] min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-end relative size-full">
        <Container37 />
        <Container38 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 w-[530px]" data-name="Container">
      <div aria-hidden className="absolute border-[#f8fafc] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pb-[13px] pt-[12px] px-[20px] relative size-full">
        <Paragraph />
        <div className="relative shrink-0" data-name="Tag">
          <div className="flex flex-col items-center justify-center size-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
              <div className="bg-[#fffbe6] h-[17.299px] max-h-[17.299449920654297px] max-w-[230.65933227539062px] min-h-[17.299449920654297px] min-w-[28.832416534423828px] relative rounded-[7207.383px] shrink-0 w-full" data-name="*Tag / Status">
                <div aria-hidden className="absolute border-[#ffe58f] border-[0.721px] border-solid inset-0 pointer-events-none rounded-[7207.383px]" />
                <div className="flex flex-row items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] size-full">
                  <div className="content-stretch flex items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] px-[5.766px] relative size-full">
                    <Label6 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Frame42 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Vazirmatn:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#fb2c36] text-[12px] whitespace-nowrap" dir="auto">
          ‎−۱۷۲٬۰۰۰٬۰۰۰ ریال
        </p>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[33554400px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Vazirmatn:Regular',sans-serif] font-normal leading-[13.5px] relative shrink-0 text-[#008236] text-[9px] whitespace-nowrap" dir="auto">
          تکمیل شده
        </p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <p className="[word-break:break-word] font-['Vazirmatn:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#1d293d] text-[12px] whitespace-nowrap" dir="auto">
          فروش - 10 واحد
        </p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <p className="[word-break:break-word] font-['Vazirmatn:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#90a1b9] text-[12px] whitespace-nowrap">۱۴۰۳/۱۰/۱۵</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-[516.109_0_0] flex-col items-end justify-center min-w-px relative" data-name="Container">
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Icon">
          <path d={svgPaths.p34707c00} id="Vector" stroke="#FB2C36" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p9c71652} id="Vector_2" stroke="#FB2C36" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-[#fef2f2] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="flex-[1_0_0] min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-end relative size-full">
        <Container40 />
        <Container41 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 w-[530px]" data-name="Container">
      <div aria-hidden className="absolute border-[#f8fafc] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pb-[13px] pt-[12px] px-[20px] relative size-full">
        <Paragraph3 />
        <Text22 />
        <Frame48 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Vazirmatn:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#00a63e] text-[12px] whitespace-nowrap" dir="auto">
          ۴۴۵٬۰۰۰٬۰۰۰ ریال
        </p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[33554400px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Vazirmatn:Regular',sans-serif] font-normal leading-[13.5px] relative shrink-0 text-[#008236] text-[9px] whitespace-nowrap" dir="auto">
          تکمیل شده
        </p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <p className="[word-break:break-word] font-['Vazirmatn:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#1d293d] text-[12px] whitespace-nowrap" dir="auto">
          خرید - 25 واحد
        </p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <p className="[word-break:break-word] font-['Vazirmatn:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#90a1b9] text-[12px] whitespace-nowrap">۱۴۰۳/۱۰/۱۵</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-[516.109_0_0] flex-col items-end justify-center min-w-px relative" data-name="Container">
      <Paragraph7 />
      <Paragraph8 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Icon">
          <path d={svgPaths.p37248a50} id="Vector" stroke="#00A63E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p1c5a7ac0} id="Vector_2" stroke="#00A63E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[#f0fdf4] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="flex-[1_0_0] min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-end relative size-full">
        <Container43 />
        <Container44 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-[530px]" data-name="Container">
      <div aria-hidden className="absolute border-[#f8fafc] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pb-[13px] pt-[12px] px-[20px] relative size-full">
        <Paragraph6 />
        <Text23 />
        <Frame50 />
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Vazirmatn:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#00a63e] text-[12px] whitespace-nowrap" dir="auto">
          ۴۴۵٬۰۰۰٬۰۰۰ ریال
        </p>
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[33554400px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Vazirmatn:Regular',sans-serif] font-normal leading-[13.5px] relative shrink-0 text-[#008236] text-[9px] whitespace-nowrap" dir="auto">
          تکمیل شده
        </p>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <p className="[word-break:break-word] font-['Vazirmatn:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#1d293d] text-[12px] whitespace-nowrap" dir="auto">
          خرید - 25 واحد
        </p>
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <p className="[word-break:break-word] font-['Vazirmatn:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#90a1b9] text-[12px] whitespace-nowrap">۱۴۰۳/۱۰/۱۵</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-[516.109_0_0] flex-col items-end justify-center min-w-px relative" data-name="Container">
      <Paragraph10 />
      <Paragraph11 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Icon">
          <path d={svgPaths.p37248a50} id="Vector" stroke="#00A63E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p1c5a7ac0} id="Vector_2" stroke="#00A63E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-[#f0fdf4] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="flex-[1_0_0] min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-end relative size-full">
        <Container46 />
        <Container47 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 w-[530px]" data-name="Container">
      <div aria-hidden className="absolute border-[#f8fafc] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pb-[13px] pt-[12px] px-[20px] relative size-full">
        <Paragraph9 />
        <Text24 />
        <Frame57 />
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Vazirmatn:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#fb2c36] text-[12px] whitespace-nowrap" dir="auto">
          ‎−۱۷۲٬۰۰۰٬۰۰۰ ریال
        </p>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[33554400px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Vazirmatn:Regular',sans-serif] font-normal leading-[13.5px] relative shrink-0 text-[#008236] text-[9px] whitespace-nowrap" dir="auto">
          تکمیل شده
        </p>
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <p className="[word-break:break-word] font-['Vazirmatn:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#1d293d] text-[12px] whitespace-nowrap" dir="auto">
          فروش - 10 واحد
        </p>
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <p className="[word-break:break-word] font-['Vazirmatn:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#90a1b9] text-[12px] whitespace-nowrap">۱۴۰۳/۱۰/۱۵</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-[516.109_0_0] flex-col items-end justify-center min-w-px relative" data-name="Container">
      <Paragraph13 />
      <Paragraph14 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Icon">
          <path d={svgPaths.p34707c00} id="Vector" stroke="#FB2C36" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p9c71652} id="Vector_2" stroke="#FB2C36" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-[#fef2f2] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="flex-[1_0_0] min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-end relative size-full">
        <Container49 />
        <Container50 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 w-[530px]" data-name="Container">
      <div aria-hidden className="absolute border-[#f8fafc] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pb-[13px] pt-[12px] px-[20px] relative size-full">
        <Paragraph12 />
        <Text25 />
        <Frame58 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-[530px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container34 />
        <Container36 />
        <Container39 />
        <Container42 />
        <Container45 />
        <Container48 />
      </div>
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Button1() {
  return <div className="h-[16px] relative shrink-0 w-[81px]" data-name="Button" />;
}

function Heading3() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['IRANSans:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#25282d] text-[16px] whitespace-nowrap" dir="auto">
          اطلاعیه‌های صندوق
        </p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[20px] relative size-full">
          <Button1 />
          <Heading3 />
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[28.92px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex isolate items-center justify-center px-[7.23px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[10.845px] z-[1]" data-name="Arrow / Chevron_Down">
            <div className="absolute inset-[33.33%_16.67%_29.17%_16.67%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="4.74468" preserveAspectRatio="none" viewBox="0 0 8.43496 4.74468" width="8.43496">
                <path d={svgPaths.pcd21bf0} fill="#FF8037" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="relative shrink-0 w-[317px]">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-end leading-[normal] not-italic relative size-full text-right whitespace-nowrap">
        <p className="font-['IRANSans:Regular',sans-serif] overflow-hidden relative shrink-0 text-[#25282d] text-[14px] text-ellipsis w-[268px]" dir="auto">
          افشای اطلاعات بااهمیت - (نقل و انتقال دارایی های ثابت شرکت - گروه الف) منتهی به سال مالی 1402/09/30
        </p>
        <p className="font-['IRANSansFaNum:Regular',sans-serif] min-w-full overflow-hidden relative shrink-0 text-[#6d6e71] text-[12px] text-ellipsis w-[min-content]" dir="auto">
          زمان انتشار : ۱۳۹1/۰۴/11
        </p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0 w-[529px]" data-name="Container">
      <div aria-hidden className="absolute border-[#f8fafc] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[13px] pt-[12px] px-[20px] relative size-full">
        <div className="flex items-center justify-center min-w-[28.92018699645996px] relative shrink-0 size-[28.92px]">
          <div className="flex-none rotate-90">
            <div className="bg-[#ffe7d9] relative rounded-[7.23px] w-[28.92px]" data-name="Button">
              <div className="flex flex-col items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center min-w-[inherit] relative size-full">
                  <Container54 />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Frame39 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[28.92px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex isolate items-center justify-center px-[7.23px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[10.845px] z-[1]" data-name="Arrow / Chevron_Down">
            <div className="absolute inset-[33.33%_16.67%_29.17%_16.67%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="4.74468" preserveAspectRatio="none" viewBox="0 0 8.43496 4.74468" width="8.43496">
                <path d={svgPaths.pcd21bf0} fill="#FF8037" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="relative shrink-0 w-[317px]">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-end leading-[normal] not-italic relative size-full text-right whitespace-nowrap">
        <p className="font-['IRANSans:Regular',sans-serif] overflow-hidden relative shrink-0 text-[#25282d] text-[14px] text-ellipsis w-[268px]" dir="auto">
          افشای اطلاعات بااهمیت - (نقل و انتقال دارایی های ثابت شرکت - گروه الف) منتهی به سال مالی 1402/09/30
        </p>
        <p className="font-['IRANSansFaNum:Regular',sans-serif] min-w-full overflow-hidden relative shrink-0 text-[#6d6e71] text-[12px] text-ellipsis w-[min-content]" dir="auto">
          زمان انتشار : ۱۳۹1/۰۴/11
        </p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0 w-[529px]" data-name="Container">
      <div aria-hidden className="absolute border-[#f8fafc] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[13px] pt-[12px] px-[20px] relative size-full">
        <div className="flex items-center justify-center min-w-[28.92018699645996px] relative shrink-0 size-[28.92px]">
          <div className="flex-none rotate-90">
            <div className="bg-[#ffe7d9] relative rounded-[7.23px] w-[28.92px]" data-name="Button">
              <div className="flex flex-col items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center min-w-[inherit] relative size-full">
                  <Container56 />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Frame40 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[28.92px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex isolate items-center justify-center px-[7.23px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[10.845px] z-[1]" data-name="Arrow / Chevron_Down">
            <div className="absolute inset-[33.33%_16.67%_29.17%_16.67%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="4.74468" preserveAspectRatio="none" viewBox="0 0 8.43496 4.74468" width="8.43496">
                <path d={svgPaths.pcd21bf0} fill="#FF8037" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="relative shrink-0 w-[317px]">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-end leading-[normal] not-italic relative size-full text-right whitespace-nowrap">
        <p className="font-['IRANSans:Regular',sans-serif] overflow-hidden relative shrink-0 text-[#25282d] text-[14px] text-ellipsis w-[268px]" dir="auto">
          افشای اطلاعات بااهمیت - (نقل و انتقال دارایی های ثابت شرکت - گروه الف) منتهی به سال مالی 1402/09/30
        </p>
        <p className="font-['IRANSansFaNum:Regular',sans-serif] min-w-full overflow-hidden relative shrink-0 text-[#6d6e71] text-[12px] text-ellipsis w-[min-content]" dir="auto">
          زمان انتشار : ۱۳۹1/۰۴/11
        </p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0 w-[529px]" data-name="Container">
      <div aria-hidden className="absolute border-[#f8fafc] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[13px] pt-[12px] px-[20px] relative size-full">
        <div className="flex items-center justify-center min-w-[28.92018699645996px] relative shrink-0 size-[28.92px]">
          <div className="flex-none rotate-90">
            <div className="bg-[#ffe7d9] relative rounded-[7.23px] w-[28.92px]" data-name="Button">
              <div className="flex flex-col items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center min-w-[inherit] relative size-full">
                  <Container58 />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Frame41 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-[530px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container52 />
        <Container53 />
        <Container55 />
        <Container57 />
      </div>
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[1637px] relative shrink-0 w-[578px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-center pb-[12px] pt-[24px] px-[24px] relative size-full">
        <Frame22 />
        <ContainerMargin />
        <Container25 />
        <Container33 />
        <Container51 />
      </div>
    </div>
  );
}

function QuickBuyPanel1() {
  return (
    <div className="bg-white h-[2094px] relative rounded-[15px] shrink-0 w-[580px]" data-name="QuickBuyPanel">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container7 />
        <Container8 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[15px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[32px] items-start justify-end left-0 top-0">
      <QuickBuyPanel />
      <QuickBuyPanel1 />
    </div>
  );
}

function Group26() {
  return (
    <div className="-translate-y-1/2 absolute aspect-[293.59893798828125/103.02285766601562] left-0 right-0 top-0" data-name="Group">
      <div className="absolute inset-[0_-2.19%_-12.5%_-2.19%]">
        <svg className="block size-full" fill="none" height="36" preserveAspectRatio="none" viewBox="0 0 95.1956 36" width="95.1956">
          <g filter="url(#filter0_d_0_279)" id="Group">
            <path d={svgPaths.p3c310400} fill="#727272" id="Vector" />
            <path d={svgPaths.p1ed69800} fill="#727272" id="Vector_2" />
            <path d={svgPaths.p1af1ba80} fill="#727272" id="Vector_3" />
            <path d={svgPaths.p325e9500} fill="#727272" id="Vector_4" />
            <path d={svgPaths.p1ff36a80} fill="#FBB042" id="Vector_5" />
            <path d={svgPaths.p3bfe6700} fill="#F89521" id="Vector_6" />
            <path d={svgPaths.p17c0ed80} fill="#F26822" id="Vector_7" />
            <path d={svgPaths.p37bd4980} fill="#EF4237" id="Vector_8" />
            <path d={svgPaths.pf4fb300} fill="#5C5C5A" id="Vector_9" />
            <path d={svgPaths.p33ea080} fill="#727272" id="Vector_10" />
            <path d={svgPaths.p4cda500} fill="#727272" id="Vector_11" />
            <path d={svgPaths.p7b27b00} fill="#727272" id="Vector_12" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="36" id="filter0_d_0_279" width="95.1956" x="-1.09431e-10" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_279" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_279" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-[9px] relative rounded-[19.875px] shrink-0 size-[40px]" data-name="Profile">
      <div aria-hidden className="absolute border-3 border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[19.875px]" />
      <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar} />
      </div>
    </div>
  );
}

function VuesaxLinearNotification() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/notification">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="notification">
          <path d={svgPaths.pcc64600} id="Vector" stroke="#25282D" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.125" />
          <path d={svgPaths.p2627d800} id="Vector_2" stroke="#25282D" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.125" />
          <path d={svgPaths.p32ce5580} id="Vector_3" stroke="#25282D" strokeMiterlimit="10" strokeWidth="1.125" />
          <path d={svgPaths.p10e5ea80} id="Vector_4" opacity="0" stroke="#25282D" strokeWidth="0.75" />
        </g>
      </svg>
    </div>
  );
}

function Notification() {
  return (
    <div className="bg-[#fafafa] content-stretch flex gap-[7.5px] items-center justify-center p-[9px] relative rounded-[19.875px] shrink-0 size-[40px]" data-name="Notification">
      <div aria-hidden className="absolute border-[#f5f5f5] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[19.875px]" />
      <div className="relative shrink-0 size-[18px]" data-name="notification">
        <VuesaxLinearNotification />
      </div>
      <div className="absolute left-[32px] size-[8px] top-0">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="#EA1017" id="Ellipse 207" r="4" />
        </svg>
      </div>
    </div>
  );
}

function ProfileNotif() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Profile+Notif">
      <Profile />
      <Notification />
    </div>
  );
}

function ProfileNotifSwitch() {
  return (
    <div className="absolute content-stretch flex h-[55.023px] items-center left-0 top-0" data-name="Profile+Notif+Switch">
      <ProfileNotif />
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group26 />
      <ProfileNotifSwitch />
    </div>
  );
}

function Group27() {
  return (
    <div className="-translate-y-1/2 absolute aspect-[293.59893798828125/103.02285766601562] left-0 right-0 top-0" data-name="Group">
      <div className="absolute inset-[0_-2.19%_-12.5%_-2.19%]">
        <svg className="block size-full" fill="none" height="36" preserveAspectRatio="none" viewBox="0 0 95.1956 36" width="95.1956">
          <g filter="url(#filter0_d_0_279)" id="Group">
            <path d={svgPaths.p3c310400} fill="#727272" id="Vector" />
            <path d={svgPaths.p1ed69800} fill="#727272" id="Vector_2" />
            <path d={svgPaths.p1af1ba80} fill="#727272" id="Vector_3" />
            <path d={svgPaths.p325e9500} fill="#727272" id="Vector_4" />
            <path d={svgPaths.p1ff36a80} fill="#FBB042" id="Vector_5" />
            <path d={svgPaths.p3bfe6700} fill="#F89521" id="Vector_6" />
            <path d={svgPaths.p17c0ed80} fill="#F26822" id="Vector_7" />
            <path d={svgPaths.p37bd4980} fill="#EF4237" id="Vector_8" />
            <path d={svgPaths.pf4fb300} fill="#5C5C5A" id="Vector_9" />
            <path d={svgPaths.p33ea080} fill="#727272" id="Vector_10" />
            <path d={svgPaths.p4cda500} fill="#727272" id="Vector_11" />
            <path d={svgPaths.p7b27b00} fill="#727272" id="Vector_12" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="36" id="filter0_d_0_279" width="95.1956" x="-1.09431e-10" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_279" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_279" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Profile1() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center p-[9px] relative rounded-[19.875px] shrink-0 size-[40px]" data-name="Profile">
      <div aria-hidden className="absolute border-3 border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[19.875px]" />
      <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar} />
      </div>
    </div>
  );
}

function VuesaxLinearNotification1() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/notification">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="notification">
          <path d={svgPaths.pcc64600} id="Vector" stroke="#25282D" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.125" />
          <path d={svgPaths.p2627d800} id="Vector_2" stroke="#25282D" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.125" />
          <path d={svgPaths.p32ce5580} id="Vector_3" stroke="#25282D" strokeMiterlimit="10" strokeWidth="1.125" />
          <path d={svgPaths.p10e5ea80} id="Vector_4" opacity="0" stroke="#25282D" strokeWidth="0.75" />
        </g>
      </svg>
    </div>
  );
}

function Notification1() {
  return (
    <div className="bg-[#fafafa] content-stretch flex gap-[7.5px] items-center justify-center p-[9px] relative rounded-[19.875px] shrink-0 size-[40px]" data-name="Notification">
      <div aria-hidden className="absolute border-[#f5f5f5] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[19.875px]" />
      <div className="relative shrink-0 size-[18px]" data-name="notification">
        <VuesaxLinearNotification1 />
      </div>
      <div className="absolute left-[32px] size-[8px] top-0">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="#EA1017" id="Ellipse 207" r="4" />
        </svg>
      </div>
    </div>
  );
}

function ProfileNotif1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Profile+Notif">
      <Profile1 />
      <Notification1 />
    </div>
  );
}

function ProfileNotifSwitch1() {
  return (
    <div className="absolute content-stretch flex h-[55.023px] items-center left-0 top-0" data-name="Profile+Notif+Switch">
      <ProfileNotif1 />
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group27 />
      <ProfileNotifSwitch1 />
    </div>
  );
}

function Container59() {
  return <div className="h-[30px] relative shrink-0 w-[91px]" data-name="Container" />;
}

function Text27() {
  return <div className="h-[21px] relative shrink-0 w-[103px]" data-name="Text" />;
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[280px] items-center justify-end left-[-0.13px] top-0 w-[161px]">
      <Text27 />
      <p className="[word-break:break-word] font-['IRANSansFaNum:Bold',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#1a1a2e] text-[16px] whitespace-nowrap" dir="auto">
        صندوق سرمایه‌گذاری اوج ملت
      </p>
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[21px] relative shrink-0 w-[161.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Frame3 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex isolate items-center justify-center px-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[12px] z-[1]" data-name="Arrow / Chevron_Down">
            <div className="absolute inset-[33.33%_16.67%_29.17%_16.67%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="5.24996" preserveAspectRatio="none" viewBox="0 0 9.33322 5.24996" width="9.33322">
                <path d={svgPaths.p35d07700} fill="#FF8037" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[16px] h-[46px] items-center justify-end pb-[13px] pt-[12px] px-[20px] right-0 top-1/2 w-[1209px]" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <Text26 />
      <div className="flex items-center justify-center min-w-[32px] relative shrink-0 size-[32px]">
        <div className="-rotate-90 flex-none">
          <div className="bg-[#fff2eb] relative rounded-[8px]" data-name="Button">
            <div className="flex flex-col items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center min-w-[inherit] relative size-full">
                <Container61 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center justify-between left-0 top-0 w-[1209px]">
      <Container59 />
      <Container60 />
    </div>
  );
}

export default function Group32() {
  return (
    <div className="contents relative size-full">
      <NavBar />
      <div className="absolute h-[2251px] left-0 top-0 w-[1280px]" data-name="Bg">
        <div className="absolute inset-[-1.07%_-1.88%]">
          <svg className="block size-full" fill="none" height="2299" preserveAspectRatio="none" viewBox="0 0 1328 2299" width="1328">
            <g filter="url(#filter0_d_0_388)" id="Bg">
              <path d={svgPaths.p201e7800} fill="white" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2299" id="filter0_d_0_388" width="1328" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="12" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_388" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_388" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[2323px] left-0 top-0 w-[1280px]" data-name="Bg">
        <div className="absolute inset-[-1.03%_-1.88%]">
          <svg className="block size-full" fill="none" height="2371" preserveAspectRatio="none" viewBox="0 0 1328 2371" width="1328">
            <g filter="url(#filter0_d_0_343)" id="Bg">
              <path d={svgPaths.p3c7f3440} fill="white" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2371" id="filter0_d_0_343" width="1328" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="12" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_343" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_343" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Frame13 />
      <Group30 />
      <Group31 />
      <Frame38 />
    </div>
  );
}