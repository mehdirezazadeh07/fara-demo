import { useState } from "react"

type KSection = 'ipo' | 'deposit' | 'withdraw'

export default function Broker() {
  const [section, setSection] = useState<KSection>('ipo')
  
  // استیت‌های تب عرضه اولیه
  const [isIpoActivated, setIsIpoActivated] = useState(false) // تبدیل حالت اولیه به جدول توافق‌نامه
  const [ipoAgreement, setIpoAgreement] = useState(false) // سوییچ توافق‌نامه

  // استیت‌های سایر تب‌ها
  const [depositAmount, setDepositAmount] = useState('120000000')
  const [withdrawAmount, setWithdrawAmount] = useState('')
  const [withdrawDate, setWithdrawDate] = useState('')

  const brokerSections: Array<{ key: KSection; label: string }> = [
    { key: 'ipo', label: 'عرضه اولیه' },
    { key: 'deposit', label: 'واریز وجه به کیف پول کارگزاری' },
    { key: 'withdraw', label: 'برداشت وجه از کیف پول کارگزاری' },
  ]

  const maxBalance = "۱۲۵,۰۰۰,۰۰۰"

  const handleSelectAll = () => {
    setWithdrawAmount("125000000")
  }

  const getTomanLabel = (val: string) => {
    const num = Number(val.replace(/,/g, ''))
    if (!num) return ''
    const toman = Math.floor(num / 10)
    if (toman === 12000000) return 'دوازده میلیون تومان'
    return `${toman.toLocaleString('fa-IR')} تومان`
  }

  return (
    <div dir="rtl" className="w-full bg-[#f8f9fa] min-h-screen py-8 px-4 font-['IranSans']">
      <div className="max-w-8/12 mx-auto overflow-hidden rounded-3xl shadow-sm bg-white border border-gray-100">
        
        {/* هدر کارگزاری ملت */}
        <div 
          style={{ background: 'linear-gradient(135deg, #EAA638 0%, #D48C18 100%)' }} 
          className="w-full relative px-8 py-10 text-white flex justify-between items-center"
        >
          <div className="text-right z-10">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">کارگزاری ملت</h1>
            <p className="text-xs sm:text-sm opacity-90">خدمات کارگزاری شامل عرضه اولیه، واریز وجه و برداشت از کیف پول</p>
          </div>
          <div className="hidden sm:flex items-center justify-center opacity-80 text-4xl">
            🏆
          </div>
        </div>

        {/* بدنه اصلی */}
        <div className="p-6 sm:p-10">
          
          {/* تب‌ها */}
          <div className="bg-[#f3f4f6] p-1.5 rounded-xl flex items-center mb-8">
            {brokerSections.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSection(tab.key)}
                className={`flex-1 py-3 text-xs sm:text-sm font-medium rounded-lg transition-all text-center ${
                  section === tab.key
                    ? 'bg-white text-gray-900 shadow-sm font-semibold'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* ────────────── 1. بخش عرضه اولیه ────────────── */}
          {section === 'ipo' && (
            <div className="space-y-6">
              
              {/* حالت ۱: قبل از فعال‌سازی (عکس اول از سمت چپ) */}
              {!isIpoActivated ? (
                <div className="max-w-xl mx-auto text-center py-8 space-y-6">
                  <h2 className="text-base font-bold text-gray-900">فعال‌سازی عرضه اولیه</h2>
                  
                  <p className="text-xs text-gray-500 leading-7 text-justify px-4">
                    سرمایه‌گذار محترم، به پاس قدردانی از همراهی شما با فراسود ملت، امکان خرید عرضه اولیه سهام شرکت‌های پذیرفته شده در بازار سرمایه بدون نیاز به مراجعه حضوری و با کمترین هزینه از طریق کارگزاری بانک ملت فراهم شده است. (در صورتی که قدرت خرید شما در کارگزاری ثبت باشد، خرید از محل آن انجام خواهد شد.)
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => setIsIpoActivated(true)}
                      className="bg-[#1e232a] text-white hover:bg-black px-8 py-3.5 rounded-xl text-xs font-semibold transition-all shadow-sm"
                    >
                      فعال‌سازی عرضه اولیه
                    </button>
                  </div>
                </div>
              ) : (
                /* حالت ۲ و ۳ و ۴: پس از فعال‌سازی (نمایش توافق‌نامه و جدول) */
                <div className="space-y-6 max-w-3xl mx-auto">
                  
                  {/* باکس توافق‌نامه */}
                  <div className={`p-5 rounded-2xl border transition-all duration-300 ${
                    ipoAgreement 
                      ? 'bg-[#e6f7f0] border-[#a7f3d0]' 
                      : 'bg-[#f8f9fa] border-gray-200'
                  }`}>
                    <div className="flex items-center justify-between gap-4">
                      
                      {/* سمت راست: متن و عنوان */}
                      <div className="text-right flex-1">
                        <h3 className={`text-xs font-bold mb-1.5 ${
                          ipoAgreement ? 'text-[#065f46]' : 'text-gray-800'
                        }`}>
                          توافق‌نامه
                        </h3>
                        <p className={`text-[11px] leading-6 ${
                          ipoAgreement ? 'text-[#047857]' : 'text-gray-500'
                        }`}>
                          با تایید و فعال‌سازی این توافق‌نامه به کارگزاری بانک ملت اختیار داده می‌شود تا نسبت به خرید سهام شرکت‌هایی که سهام آن‌ها در بازار سرمایه عرضه اولیه خواهد شد بنام اینجانب و سپس فروش آن اقدام نماید.
                        </p>
                      </div>

                      {/* سمت چپ: سوییچ (Toggle Switch) */}
                      <div className="flex-shrink-0">
                        <button
                          type="button"
                          onClick={() => setIpoAgreement(!ipoAgreement)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                            ipoAgreement ? 'bg-[#10b981]' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              ipoAgreement ? '-translate-x-6' : '-translate-x-1'
                            }`}
                          />
                        </button>
                      </div>

                    </div>
                  </div>

                  {/* جدول عرضه اولیه‌ها */}
                  <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                    {/* هدر جدول */}
                    <div className="grid grid-cols-4 bg-[#f9fafb] border-b border-gray-100 py-3.5 px-4 text-center text-xs font-semibold text-gray-400">
                      <span>نماد</span>
                      <span>تاریخ درخواست</span>
                      <span>وضعیت درخواست</span>
                      <span>عملیات</span>
                    </div>

                    {/* بدنه جدول */}
                    <div className="divide-y divide-gray-50">
                      {ipoAgreement ? (
                        /* نمونه داده در حالت فعال بودن توافق‌نامه (عکس چهارم) */
                        <div className="grid grid-cols-4 py-4 px-4 text-center text-xs items-center text-gray-700">
                          <span className="font-bold text-gray-800">اخزا۱۰۱</span>
                          <span className="text-gray-500">۱۴۰۲/۰۹/۲۵</span>
                          <span>
                            <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-600">
                              ثبت شده
                            </span>
                          </span>
                          <span>
                            <button className="text-red-500 hover:text-red-700 font-medium text-[11px]">
                              انصراف
                            </button>
                          </span>
                        </div>
                      ) : (
                        /* حالت بدون داده (عکس دوم و سوم) */
                        <div className="py-12 text-center text-xs text-gray-400">
                          عرضه اولیه‌ای برای نمایش وجود ندارد
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              )}

            </div>
          )}

          {/* ────────────── 2. بخش واریز وجه ────────────── */}
          {section === 'deposit' && (
            <div className="max-w-md mx-auto text-center py-2 space-y-6">
              <div className="space-y-2 mb-6">
                <h2 className="text-base font-bold text-gray-900">واریز وجه به کیف پول کارگزاری</h2>
                <p className="text-xs text-gray-400">برای افزایش وجه کیف پول کارگزاری مبلغ دلخواه خود را وارد کنید</p>
              </div>

              <div className="space-y-1 text-right">
                <div className="relative mt-2">
                  <span className="absolute -top-2.5 right-4 bg-white px-1 text-[11px] text-gray-500 z-10">
                    مبلغ افزایش وجه
                  </span>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(e.target.value)}
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-sm text-center text-gray-800 font-medium focus:outline-none focus:border-orange-500 transition-colors"
                    />
                    <span className="absolute left-4 text-xs text-gray-400">ریال</span>
                  </div>
                </div>
                
                {depositAmount && (
                  <div className="text-center pt-1">
                    <span className="text-[11px] text-gray-400">
                      {getTomanLabel(depositAmount)}
                    </span>
                  </div>
                )}
              </div>

              <div className="pt-2">
                <button
                  disabled={!depositAmount}
                  className={`w-full py-3.5 rounded-xl text-sm font-semibold transition-all ${
                    depositAmount
                      ? 'bg-[#1e232a] text-white hover:bg-black'
                      : 'bg-[#e5e7eb] text-gray-400 cursor-not-allowed'
                  }`}
                >
                  واریز
                </button>
              </div>
            </div>
          )}

          {/* ────────────── 3. بخش برداشت وجه ────────────── */}
          {section === 'withdraw' && (
            <div className="max-w-md mx-auto text-center py-2 space-y-5">
              <div className="space-y-2 mb-6">
                <h2 className="text-base font-bold text-gray-900">برداشت وجه از کیف پول کارگزاری</h2>
                <p className="text-xs text-gray-400">برای برداشت وجه از کیف پول کارگزاری مبلغ موردنظر خود را وارد کنید.</p>
              </div>

              <div className="bg-[#eff6ff] border border-[#dbeafe] rounded-xl px-4 py-3 flex justify-between items-right text-xs">
                <span className="text-gray-500">موجودی قابل برداشت</span>
                <span className="font-bold text-[#2563eb]">{maxBalance} ریال</span>
              </div>

              <div className="space-y-1 text-right">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                    placeholder="مبلغ برداشت وجه"
                    className="w-full bg-[#f9fafb] border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-right focus:outline-none focus:border-blue-500 transition-colors placeholder-gray-400"
                  />
                  <span className="absolute left-4 text-xs text-gray-400">ریال</span>
                </div>
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={handleSelectAll}
                    className="text-[11px] text-[#2563eb] hover:underline font-medium"
                  >
                    برداشت تمام موجودی
                  </button>
                </div>
              </div>

              <div className="relative flex items-center">
                <button type="button" className="absolute left-4 text-gray-400 hover:text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </button>
                <input
                  type="text"
                  value={withdrawDate}
                  onChange={(e) => setWithdrawDate(e.target.value)}
                  placeholder="انتخاب تاریخ"
                  className="w-full bg-[#f9fafb] border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-right focus:outline-none focus:border-blue-500 transition-colors placeholder-gray-400"
                />
              </div>

              <div className="pt-2">
                <button
                  disabled={!withdrawAmount || !withdrawDate}
                  className={`w-full py-3.5 rounded-xl text-sm font-semibold transition-all ${
                    withdrawAmount && withdrawDate
                      ? 'bg-gray-900 text-white hover:bg-gray-800'
                      : 'bg-[#e5e7eb] text-gray-400 cursor-not-allowed'
                  }`}
                >
                  برداشت
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}