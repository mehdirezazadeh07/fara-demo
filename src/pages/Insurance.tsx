import { useState } from 'react'
import { Outlet, useNavigate } from "react-router-dom";
// import KaregozariView from './KaregozariPage'

type View = 'landing' | 'history' | 'form' | 'farabima' | 'karegozari'

const historyData = [
  { id: 1, name: 'علی محمدی', type: 'بیمه عمر', start: '۱۴۰۲/۰۱/۰۱', end: '۱۴۰۳/۰۱/۰۱', amount: '۲,۵۰۰,۰۰۰', status: 'فعال' },
  { id: 2, name: 'فاطمه کریمی', type: 'بیمه درمان', start: '۱۴۰۲/۰۳/۱۵', end: '۱۴۰۳/۰۳/۱۵', amount: '۱,۸۰۰,۰۰۰', status: 'فعال' },
  { id: 3, name: 'رضا احمدی', type: 'بیمه خودرو', start: '۱۴۰۱/۰۶/۰۱', end: '۱۴۰۲/۰۶/۰۱', amount: '۳,۲۰۰,۰۰۰', status: 'منقضی' },
  { id: 4, name: 'مریم حسینی', type: 'بیمه آتش‌سوزی', start: '۱۴۰۲/۰۵/۲۰', end: '۱۴۰۳/۰۵/۲۰', amount: '۹۵۰,۰۰۰', status: 'فعال' },
  { id: 5, name: 'امیر صادقی', type: 'بیمه عمر', start: '۱۴۰۱/۱۱/۱۰', end: '۱۴۰۲/۱۱/۱۰', amount: '۴,۱۰۰,۰۰۰', status: 'منقضی' },
  { id: 6, name: 'زهرا موسوی', type: 'بیمه درمان', start: '۱۴۰۲/۰۸/۰۱', end: '۱۴۰۳/۰۸/۰۱', amount: '۲,۰۰۰,۰۰۰', status: 'فعال' },
  { id: 7, name: 'حسن رضایی', type: 'بیمه خودرو', start: '۱۴۰۲/۰۲/۱۲', end: '۱۴۰۳/۰۲/۱۲', amount: '۲,۷۵۰,۰۰۰', status: 'فعال' },
]
const formSteps = ['شرایط و قوانین', 'مشخصات', 'اطلاعات سرمایه‌گذاری', 'اطلاعات تکمیلی']

interface Beneficiary {
  name: string
  lastName: string
  nationalId: string
  relation: string
  share: string
}

interface InsuranceForm {
  accepted: boolean
  nationalId: string
  birthDate: string
  gender: string
  mobile: string
  // health questions
  hasDisease: '' | 'yes' | 'no'
  diseaseDesc: string
  hasSurgery: '' | 'yes' | 'no'
  surgeryDesc: string
  hasSmoke: '' | 'yes' | 'no'
  address: string
  // beneficiaries
  beneficiaries: Beneficiary[]
}

const emptyBeneficiary = (): Beneficiary => ({ name: '', lastName: '', nationalId: '', relation: '', share: '' })

const initialInsuranceForm: InsuranceForm = {
  accepted: false,
  nationalId: '',
  birthDate: '',
  gender: '',
  mobile: '',
  hasDisease: '',
  diseaseDesc: '',
  hasSurgery: '',
  surgeryDesc: '',
  hasSmoke: '',
  address: '',
  beneficiaries: [emptyBeneficiary()],
}

function Navbar({ view, setView }: { view: View; setView: (v: View) => void }) {
  return (
    <nav style={{ backgroundColor: '#fff', borderBottom: '1px solid #f1f2f4' }} className="sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo192.png" alt="logo" className="h-8 w-auto opacity-90" />
        </div>

        <div className="flex items-center gap-3 mx-auto">
          {[
            { key: 'club', label: 'باشگاه مشتریان' },
            { key: 'farabima', label: 'فرا بیمه' },
            { key: 'sepid', label: 'سپیدگردانی' },
            { key: 'kargo', label: 'کارگزاری ملت' },
            { key: 'sarmayegozari', label: 'سرمایه‌گذاری' },
          ].map((it) => (
            <button
              key={it.key}
              onClick={() => setView(it.key === 'farabima' ? 'farabima' : it.key === 'kargo' ? 'karegozari' : 'landing')}
              className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm transition-all ${it.key === 'farabima' ? 'bg-orange-500 text-white' : 'bg-white text-gray-600 border border-gray-100 hover:shadow-md'}`}
              style={{ boxShadow: it.key === 'farabima' ? '0 4px 14px rgba(232,160,32,0.18)' : undefined }}
            >
              {it.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">🔔</button>
          <div className="w-9 h-9 rounded-full overflow-hidden">
            <img src="https://i.pravatar.cc/40" alt="avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </nav>
  )
}

function HeroBanner({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div
      style={{ background: 'linear-gradient(135deg, #E8A020 0%, #C8880A 100%)' }}
      className="w-full relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 py-8 flex items-center justify-between">
        <div className="text-white z-10">
          <h1 className="text-2xl font-bold mb-1">{title}</h1>
          {subtitle && <p className="text-orange-100 text-sm">{subtitle}</p>}
        </div>
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=300&h=150&fit=crop&auto=format"
          alt="نمای شهر"
          className="h-28 w-48 object-cover rounded-xl opacity-80 hidden sm:block"
        />
      </div>
      {/* Decorative circles */}
      <div className="absolute -left-8 -top-8 w-32 h-32 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />
      <div className="absolute left-16 bottom-0 w-20 h-20 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }} />
    </div>
  )
}

function LandingView({ setView }: { setView: (v: View) => void }) {
  return (
    <>
      <HeroBanner title="فریا بیمه ما" subtitle="بهترین خدمات بیمه‌ای با کمترین هزینه برای شما و خانواده‌تان" />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <div className="bg-white rounded-2xl shadow-md w-full sm:w-3/5 p-6">
            <div className="rounded-lg overflow-hidden mb-4">
              <div className="px-4 py-3" style={{ background: 'linear-gradient(90deg,#E8A020,#C8880A)', color: '#fff', borderRadius: 8 }}>
                <h2 className="text-xl font-bold">فریا بیمه ما</h2>
                <p className="text-sm mt-1 text-orange-50">بهترین خدمات بیمه‌ای با کمترین هزینه</p>
              </div>
            </div>

            <div className="text-gray-600 text-sm leading-8 space-y-3 mb-4">
              <p>
                فریا بیمه ما یک پلتفرم نوین در حوزه خدمات بیمه‌ای است که با هدف ارائه ساده‌ترین و سریع‌ترین روش برای دریافت انواع بیمه‌نامه راه‌اندازی شده است. ما معتقدیم که هر ایرانی باید به راحتی به خدمات بیمه‌ای باکیفیت دسترسی داشته باشد.
              </p>
              <p>
                با استفاده از این پلتفرم می‌توانید در کمتر از ۱۰ دقیقه بیمه‌نامه خود را دریافت کنید. انواع بیمه‌های عمر، درمان، خودرو، آتش‌سوزی و مسئولیت در این پلتفرم در دسترس شماست.
              </p>
              <p>
                تیم ما متشکل از متخصصان باسابقه در صنعت بیمه است که ۲۴ ساعته پاسخگوی نیازهای شما هستند. ما به شفافیت، سرعت و کیفیت خدمات اهمیت می‌دهیم.
              </p>
            </div>

            <div className="mt-4 flex items-center justify-start">
              <button
                onClick={() => setView('form')}
                className="px-8 py-2 rounded-lg text-white font-semibold shadow-md"
                style={{ backgroundColor: '#111827' }}
              >
                شروع
              </button>
            </div>
          </div>

          <div className="hidden sm:block w-full sm:w-2/5">
            <div className="bg-white rounded-2xl shadow-sm p-3 h-full flex items-center justify-center" style={{ minHeight: 220 }}>
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=360&fit=crop&auto=format"
                alt="نمای شهر"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function HistoryView() {
  return (
    <>
      <HeroBanner title="تاریخچه بیمه‌نامه‌ها" subtitle="لیست تمام بیمه‌نامه‌های ثبت‌شده در سیستم" />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: 'var(--primary)' }} className="text-white">
                  {['شماره', 'نام بیمه‌گذار', 'نوع بیمه', 'تاریخ شروع', 'تاریخ پایان', 'مبلغ (ریال)', 'وضعیت'].map((col) => (
                    <th key={col} className="px-4 py-3 text-right font-semibold whitespace-nowrap">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {historyData.map((row, i) => (
                  <tr
                    key={row.id}
                    className="border-b border-gray-100 hover:bg-orange-50 transition-colors"
                    style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#fafafa' }}
                  >
                    <td className="px-4 py-3 text-gray-500">{row.id}</td>
                    <td className="px-4 py-3 font-medium text-gray-800">{row.name}</td>
                    <td className="px-4 py-3 text-gray-600">{row.type}</td>
                    <td className="px-4 py-3 text-gray-600">{row.start}</td>
                    <td className="px-4 py-3 text-gray-600">{row.end}</td>
                    <td className="px-4 py-3 text-gray-600">{row.amount}</td>
                    <td className="px-4 py-3">
                      <span
                        className="px-2 py-0.5 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: row.status === 'فعال' ? '#dcfce7' : '#fee2e2',
                          color: row.status === 'فعال' ? '#16a34a' : '#dc2626',
                        }}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

function StepIndicator({ current }: { current: number }) {
  const sublabels = ['طرح فرابیمه', 'بیمه‌گذار / بیمه شده', 'بیمه‌نامه', 'اطلاعات تکمیلی']
  const progressWidth = current === 0 ? 0 : (current / (formSteps.length - 1)) * 100

  return (
    <div className="w-full mb-8">
      <div className="max-w-5xl mx-auto px-4" dir="rtl">
        <div className="relative py-4">
          <div className="absolute" style={{ right: '12.5%', width: '75%', top: '1.8rem', zIndex: 0 }}>
            <div className="absolute inset-x-0 h-px bg-gray-200" />
            <div className="absolute right-0 h-px bg-black" style={{ width: `${progressWidth}%` }} />
          </div>
          <div className="grid grid-cols-4 gap-0 relative">
            {formSteps.map((label, i) => {
              const isActive = i === current
              const isCompleted = i < current
              const circleColor = isCompleted || isActive ? '#111827' : '#f3f4f6'
              const circleBorder = isCompleted || isActive ? '2px solid #fff' : '1px solid #e5e7eb'
              const textColor = isCompleted || isActive ? '#fff' : '#9ca3af'
              return (
                <div key={label} className="flex flex-col items-center text-center">
                  <div className="relative z-10">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{ backgroundColor: circleColor, color: textColor, border: circleBorder, boxShadow: isActive ? '0 4px 10px rgba(0,0,0,0.1)' : undefined }}
                    >
                      {isCompleted ? '✓' : i + 1}
                    </div>
                  </div>

                  <div className="mt-2">
                    <div className="text-xs" style={{ color: isActive ? 'var(--primary-dark)' : '#9ca3af', fontWeight: isActive ? 700 : 500 }}>{label}</div>
                    <div className="text-[11px] text-gray-400 mt-1">{sublabels[i]}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export function FaraBimaView() {
  const [tab, setTab] = useState<'info' | 'history'>('info')
  const navigate = useNavigate();

  return (
    <>
      {/* Hero */}
      <div
        style={{ background: 'linear-gradient(135deg, #E8A020 0%, #C8880A 100%)' }}
        className="w-full relative overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-4 py-10 flex items-center justify-between">
          <div className="text-white z-10 flex-1">
            <button className="mb-4 border border-white/60 text-white text-xs px-4 py-1.5 rounded-full hover:bg-white/10 transition-colors">
              دریافت فایل راهنما
            </button>
            <h1 className="text-3xl font-extrabold mb-2 tracking-wide">فـرا بیمـه مـا</h1>
            <p className="text-orange-100 text-sm">صدور بیمه زندگی و مستمری از طریق اعطای تسهیلات بانکی</p>
          </div>
          {/* 3D-style house/shield icon */}
          <div className="hidden sm:flex items-center justify-center w-40 h-36 relative">
            <div className="relative">
              {/* House shape composed of divs */}
              <div className="text-7xl select-none" style={{ filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.25))' }}>
                🏠
              </div>
              <div
                className="absolute -bottom-1 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-lg"
                style={{ backgroundColor: '#fff', color: 'var(--primary)' }}
              >
                %
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -left-8 -top-8 w-32 h-32 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />
        <div className="absolute left-24 bottom-0 w-20 h-20 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }} />
      </div>

      {/* Inner tab bar */}
      <div className="max-w-5xl mx-auto px-4 mt-6">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="flex border-b border-gray-100">
            <button
              onClick={() => setTab('info')}
              className="flex-1 py-3 text-sm font-semibold transition-colors"
              style={{
                color: tab === 'info' ? 'var(--primary-dark)' : '#6b7280',
                borderBottom: tab === 'info' ? '2px solid var(--primary)' : '2px solid transparent',
              }}
            >
              فرابیمه ما
            </button>
            <button
              onClick={() => setTab('history')}
              className="flex-1 py-3 text-sm font-semibold transition-colors"
              style={{
                color: tab === 'history' ? 'var(--primary-dark)' : '#6b7280',
                borderBottom: tab === 'history' ? '2px solid var(--primary)' : '2px solid transparent',
              }}
            >
              تاریخچه
            </button>
          </div>

          {/* Tab content */}
          {tab === 'info' ? (
            <div className="p-6 space-y-5">
              <h2 className="text-lg font-bold text-gray-800 text-center">ویژگی‌های طرح فرابیمه</h2>
              <div className="text-gray-700 text-sm leading-9 text-center space-y-2 max-w-2xl mx-auto">
                <p>
                  عرضه محصول مشترک بانک ملت و بیمه «ما» برای اولین‌بار در صنعت بیمه، ارائه بیمه زندگی و مستمری از طریق تسهیلات ویژه بانک ملت به صورت دیجیتال و آنلاین بدون نیاز به مراجعه حضوری؛
                </p>
                <p>دریافت تسهیلات ۲۳ درصدی بدون مسدودی و بازپرداخت طی ۳۶ ماه؛</p>
                <p>
                  واریز تسهیلات بانکی تا سقف ۲٬۰۰۰٬۰۰۰٬۰۰۰ ریال به حساب اندوخته بیمه‌ای سرمایه‌گذار نزد شرکت بیمه ما بدون نیاز به چک و بدون نیاز به ضامن حداکثر تا ۴۸ ساعت پس از صدور بیمه‌نامه به صورت حساب اندوخته‌ای بیمه‌ای سرمایه‌گذار نزد شرکت بیمه ما؛
                </p>
                <p>ارائه پوشش‌های بیمه‌ای و سرمایه‌گذاری با قابلیت تبدیل شدن به مستمری در صورت درخواست بیمه‌گذار.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {[
                  { icon: '🏦', label: 'تسهیلات بانکی', desc: 'تا ۲ میلیارد ریال بدون ضامن' },
                  { icon: '📋', label: 'بازپرداخت ۳۶ ماهه', desc: 'نرخ سود ۲۳ درصدی' },
                  { icon: '⚡', label: 'ثبت آنلاین', desc: 'بدون مراجعه حضوری' },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center text-center p-4 rounded-xl" style={{ backgroundColor: 'var(--primary-light)' }}>
                    <span className="text-2xl mb-2">{item.icon}</span>
                    <p className="font-semibold text-gray-800 text-sm">{item.label}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center pt-2">
                <button
                  onClick={() => navigate("/insurance/create")}
                  className="px-16 py-3 rounded-xl text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-md"
                  style={{ backgroundColor: '#1a1a1a' }}
                >
                  شروع
                </button>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'var(--primary)' }} className="text-white">
                    {['شماره', 'نام بیمه‌گذار', 'نوع بیمه', 'تاریخ شروع', 'تاریخ پایان', 'مبلغ (ریال)', 'وضعیت'].map((col) => (
                      <th key={col} className="px-4 py-3 text-right font-semibold whitespace-nowrap">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {historyData.map((row, i) => (
                    <tr
                      key={row.id}
                      className="border-b border-gray-100 hover:bg-orange-50 transition-colors"
                      style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#fafafa' }}
                    >
                      <td className="px-4 py-3 text-gray-500">{row.id}</td>
                      <td className="px-4 py-3 font-medium text-gray-800">{row.name}</td>
                      <td className="px-4 py-3 text-gray-600">{row.type}</td>
                      <td className="px-4 py-3 text-gray-600">{row.start}</td>
                      <td className="px-4 py-3 text-gray-600">{row.end}</td>
                      <td className="px-4 py-3 text-gray-600">{row.amount}</td>
                      <td className="px-4 py-3">
                        <span
                          className="px-2 py-0.5 rounded-full text-xs font-medium"
                          style={{
                            backgroundColor: row.status === 'فعال' ? '#dcfce7' : '#fee2e2',
                            color: row.status === 'فعال' ? '#16a34a' : '#dc2626',
                          }}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <div className="pb-10" />
    </>
  )
}

export function FormView() {
  const navigate = useNavigate();

  const [step, setStep] = useState(0)
  const [form, setForm] = useState<InsuranceForm>(initialInsuranceForm)
  const [insuredSameAsHolder, setInsuredSameAsHolder] = useState(true)
  const [insuredPerson, setInsuredPerson] = useState({  
    relation: 'خودم',
    name: 'سنا',
    lastName: 'رابطاط',
    nationalId: '۰۰۷۸۵۴۳۲۱',
    birthDate: '۱۳۶۵/۰۵/۱۵',
    job: '',
    postalCode: '',
  })

  const setField = <K extends keyof InsuranceForm>(key: K, value: InsuranceForm[K]) =>
    setForm((f) => ({ ...f, [key]: value }))

  const setBeneficiary = (idx: number, key: keyof Beneficiary, value: string) =>
    setForm((f) => {
      const b = f.beneficiaries.map((r, i) => i === idx ? { ...r, [key]: value } : r)
      return { ...f, beneficiaries: b }
    })

  const addBeneficiary = () =>
    setForm((f) => ({ ...f, beneficiaries: [...f.beneficiaries, emptyBeneficiary()] }))

  const removeBeneficiary = (idx: number) =>
    setForm((f) => ({ ...f, beneficiaries: f.beneficiaries.filter((_, i) => i !== idx) }))

  const inp = (
    value: string,
    onChange: (v: string) => void,
    placeholder = '',
    type = 'text'
  ) => (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none w-full"
      onFocus={(e) => (e.target.style.borderColor = 'var(--primary)')}
      onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
    />
  )

  const Field = ({ label, value, onChange, placeholder, type }: {
    label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string
  }) => (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      {inp(value, onChange, placeholder, type)}
    </div>
  )

  const RadioGroup = ({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) => (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium text-gray-700">{label}</p>
      <div className="flex gap-6">
        {[{ v: 'yes', l: 'بله' }, { v: 'no', l: 'خیر' }].map(({ v, l }) => (
          <label key={v} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name={label}
              value={v}
              checked={value === v}
              onChange={() => onChange(v)}
              className="accent-orange-500 w-4 h-4"
            />
            <span className="text-sm text-gray-700">{l}</span>
          </label>
        ))}
      </div>
    </div>
  )

  const canNext = step === 0 ? form.accepted : true

  const handleSubmit = () => {
    alert('بیمه‌نامه شما با موفقیت ثبت شد!')
    // setView('landing')
  }

  return (
    <>
      <HeroBanner title="درخواست بیمه‌نامه" subtitle="مراحل دریافت بیمه‌نامه خود را طی کنید" />
      <div className="max-w-8/12 mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <StepIndicator current={step} />

          {/* ── مرحله ۱: شرایط طرح ── */}
          {step === 0 && (
            <div className="space-y-6">
              <h3 className="font-bold text-red-600 text-center text-lg">شرایط طرح فرابیمه</h3>

              <div className="max-w-2xl mx-auto text-center text-gray-700 text-sm leading-8">
                <p className="font-medium mb-3">شرایط و ضوابط استفاده از طرح فرابیمه عبارتند از:</p>
                <div className="h-60 overflow-y-auto px-6 text-right" style={{ direction: 'rtl' }}>
                  <ul className="list-inside space-y-4 text-sm text-gray-600">
                    {[
                      'داشتن حساب فعال نزد بانک ملت.',
                      'تطابق مالکیت شماره تلفن همراه بیمه‌گذار با شماره همراه ثبت‌شده در حساب بانک ملت.',
                      'عدم وجود چک برگشتی و بدهی معوقه به شبکه بانکی.',
                      'کارت معافیت دائم یا پایان خدمت برای آقایان.',
                      'عقد قرارداد درخواست وام به همراه امضای دیجیتال (لینک دانلود نرم‌افزار امضای دیجیتال).',
                      'واریز تسهیلات بانکی تا سقف ۲,۰۰۰,۰۰۰,۰۰۰ ریال به حساب اندوخته بیمه‌ای سرمایه‌گذار نزد شرکت بیمه.',
                      'پرداخت منظم اقساط.'
                    ].map((it, idx) => (
                      <li key={idx} className="text-sm">• {it}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="max-w-2xl mx-auto mt-6">
                <div className="rounded-lg px-4 py-3 flex items-center gap-3" style={{ backgroundColor: '#FEF3C7', color: '#92400e' }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-yellow-200">⚠️</div>
                  <div className="flex-1 text-sm">ادامه به منزله پذیرش شرایط فرابیمه است</div>
                </div>
              </div>

              <div className="max-w-2xl mx-auto mt-4 text-right">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.accepted}
                    onChange={(e) => setField('accepted', e.target.checked)}
                    className="w-4 h-4 accent-orange-500"
                  />
                  <span className="text-sm text-gray-700">شرایط و قوانین را خوانده‌ام و قبول می‌کنم</span>
                </label>
              </div>

              <div className="max-w-2xl mx-auto flex items-center justify-center gap-6 mt-6">
                <button
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!form.accepted}
                  className="px-10 py-3 rounded-full text-sm font-semibold text-white shadow-md"
                  style={{ backgroundColor: form.accepted ? '#111827' : '#d1d5db' }}
                >
                  ادامه
                </button>

                <button
                  // onClick={() => setView('landing')}
                  className="px-8 py-3 rounded-full text-sm font-medium border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                >
                  انصراف
                </button>
              </div>
            </div>
          )}

          {/* ── مرحله ۲: اطلاعات بیمه‌گذار ── */}
          {step === 1 && (
                <div className="space-y-10" dir="rtl">

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="text-xs text-gray-500 mb-2 block text-right">نام و نام خانوادگی</label>
                  <input
                    value={insuredPerson.name + ' ' + insuredPerson.lastName}
                    readOnly
                    disabled
                    dir="rtl"
                    className="w-full border border-gray-200 rounded-2xl bg-slate-100 px-4 py-3 text-sm text-right text-slate-500 shadow-sm cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-500 mb-2 block text-right">کد ملی</label>
                  <input
                    value={insuredPerson.nationalId}
                    disabled
                    placeholder="۰۰۷۸۵۴۳۲۱"
                    dir="rtl"
                    className="w-full border border-gray-200 rounded-2xl bg-slate-100 px-4 py-3 text-sm text-right text-slate-500 shadow-sm cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-500 mb-2 block text-right">تاریخ تولد</label>
                  <div className="relative">
                    <input
                      value={insuredPerson.birthDate}
                      disabled
                      placeholder="۱۳۶۵/۰۵/۱۵"
                      dir="rtl"
                      className="w-full border border-gray-200 rounded-2xl bg-slate-100 px-4 py-3 text-sm text-right text-slate-500 shadow-sm cursor-not-allowed"
                    />
                    <div className="absolute left-4 top-3 text-gray-400">📅</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
                <div>
                  <label className="text-xs text-gray-500 mb-2 block text-right">شماره تلفن همراه</label>
                  <div className="relative">
                    <input
                      value={form.mobile}
                      onChange={(e) => setField('mobile', e.target.value)}
                      placeholder="۰۹۱۲●●●●●●●"
                      dir="rtl"
                      className="w-full border border-gray-200 rounded-2xl bg-white px-4 py-3 pr-12 text-sm text-right shadow-sm"
                    />
                    <div className="absolute right-4 top-3 text-gray-400">📱</div>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-500 mb-2 block text-right">شغل</label>
                  <div className="relative">
                    <select
                      value={insuredPerson.job}
                      onChange={(e) => setInsuredPerson((p) => ({ ...p, job: e.target.value }))}
                      dir="rtl"
                      className="w-full border border-gray-200 rounded-2xl bg-white px-4 py-3 pr-10 text-sm text-right shadow-sm appearance-none"
                    >
                      <option value="">انتخاب</option>
                      <option value="کارمند">کارمند</option>
                      <option value="آزاد">آزاد</option>
                      <option value="بازنشسته">بازنشسته</option>
                    </select>
                    <div className="absolute left-4 top-3 text-gray-400">▾</div>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-500 mb-2 block text-right">کد پستی</label>
                  <input
                    value={insuredPerson.postalCode}
                    onChange={(e) => setInsuredPerson((p) => ({ ...p, postalCode: e.target.value }))}
                    placeholder="کد پستی"
                    dir="rtl"
                    className="w-full border border-gray-200 rounded-2xl bg-white px-4 py-3 text-sm text-right shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-500 mb-2 block text-right">آدرس</label>
                <textarea
                  value={form.address}
                  onChange={(e) => setField('address', e.target.value)}
                  rows={2}
                  placeholder="آدرس"
                  dir="rtl"
                  className="w-full border border-gray-200 rounded-2xl bg-white px-4 py-3 text-sm resize-none text-right shadow-sm"
                />
              </div>

              <div className="flex flex-col gap-3">
                <div className="text-sm font-semibold text-red-600">بیمه‌نامه زندگی و مستمری را برای چه کسی می‌خواهید؟</div>
                <div dir="ltr" className="inline-flex w-[14rem] overflow-hidden rounded-full border border-gray-200 bg-slate-100 p-0.5 text-[11px] shadow-sm">
                  <button
                    type="button"
                    onClick={() => setInsuredSameAsHolder(false)}
                    className={`flex-1 text-center px-3 py-1.5 rounded-full font-semibold transition ${!insuredSameAsHolder ? 'bg-white text-black shadow-sm' : 'text-gray-500'}`}
                  >
                    اعضای خانواده
                  </button>
                  <button
                    type="button"
                    onClick={() => setInsuredSameAsHolder(true)}
                    className={`flex-1 text-center px-3 py-1.5 rounded-full font-semibold transition ${insuredSameAsHolder ? 'bg-white text-black shadow-sm' : 'text-gray-500'}`}
                  >
                    خودم
                  </button>
                </div>
              </div>

              {!insuredSameAsHolder && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <label className="text-xs text-gray-500 mb-2 block text-right">نسبت با بیمه‌گذار</label>
                      <select
                        value={insuredPerson.relation}
                        onChange={(e) => setInsuredPerson((p) => ({ ...p, relation: e.target.value }))}
                        dir="rtl"
                        className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm bg-white text-right"
                      >
                        <option>خودم</option>
                        <option>همسر</option>
                        <option>فرزند</option>
                        <option>والدین</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs text-gray-500 mb-2 block text-right">نام</label>
                      <input
                        value={insuredPerson.name}
                        onChange={(e) => setInsuredPerson((p) => ({ ...p, name: e.target.value }))}
                        placeholder="نام"
                        dir="rtl"
                        className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm text-right"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-500 mb-2 block text-right">نام خانوادگی</label>
                      <input
                        value={insuredPerson.lastName}
                        onChange={(e) => setInsuredPerson((p) => ({ ...p, lastName: e.target.value }))}
                        placeholder="نام خانوادگی"
                        dir="rtl"
                        className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm text-right"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
                    <div>
                      <label className="text-xs text-gray-500 mb-2 block text-right">شماره تلفن همراه</label>
                      <div className="relative">
                        <input
                          value={form.mobile}
                          onChange={(e) => setField('mobile', e.target.value)}
                          placeholder="۰۹۱۲●●●●●●●"
                          dir="rtl"
                          className="w-full border border-gray-200 rounded-lg px-3 py-3 pr-12 text-sm text-right"
                        />
                        <div className="absolute right-4 top-3 text-gray-400">📱</div>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-gray-500 mb-2 block text-right">تاریخ تولد</label>
                      <div className="relative">
                        <input
                          value={insuredPerson.birthDate}
                          onChange={(e) => setInsuredPerson((p) => ({ ...p, birthDate: e.target.value }))}
                          placeholder="تاریخ تولد"
                          dir="rtl"
                          className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm text-right"
                        />
                        <div className="absolute left-3 top-3 text-gray-400">📅</div>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-gray-500 mb-2 block text-right">کد ملی</label>
                      <input
                        value={insuredPerson.nationalId}
                        onChange={(e) => setInsuredPerson((p) => ({ ...p, nationalId: e.target.value }))}
                        placeholder="کد ملی"
                        dir="rtl"
                        className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm text-right"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
                    <div>
                      <label className="text-xs text-gray-500 mb-2 block text-right">شغل</label>
                      <select
                        value={insuredPerson.job}
                        onChange={(e) => setInsuredPerson((p) => ({ ...p, job: e.target.value }))}
                        dir="rtl"
                        className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm bg-white text-right"
                      >
                        <option value="">انتخاب</option>
                        <option value="کارمند">کارمند</option>
                        <option value="آزاد">آزاد</option>
                        <option value="بازنشسته">بازنشسته</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs text-gray-500 mb-2 block text-right">کد پستی</label>
                      <input
                        value={insuredPerson.postalCode}
                        onChange={(e) => setInsuredPerson((p) => ({ ...p, postalCode: e.target.value }))}
                        placeholder="کد پستی"
                        dir="rtl"
                        className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm text-right"
                      />
                    </div>

                    <div className="hidden sm:block" />
                  </div>

                  <div>
                    <label className="text-xs text-gray-500 mb-2 block text-right">آدرس</label>
                    <textarea
                      value={form.address}
                      onChange={(e) => setField('address', e.target.value)}
                      rows={2}
                      placeholder="آدرس"
                      dir="rtl"
                      className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm resize-none text-right"
                    />
                  </div>
                </>
              )}

              <div className="max-w-2xl mx-auto flex items-center justify-center gap-8 mt-4">
                <button
                  onClick={() => setStep((s) => s + 1)}
                  className="px-10 py-3 rounded-full text-sm font-semibold text-white shadow-md"
                  style={{ backgroundColor: '#111827' }}
                >
                  ادامه
                </button>

                <button
                  // onClick={() => setView('landing')}
                  className="px-8 py-3 rounded-full text-sm font-medium border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                >
                  انصراف
                </button>
              </div>
            </div>
          )}

          {/* ── مرحله ۳: اطلاعات سرمایه‌گذاری ── */}
          {step === 2 && (
            <div className="space-y-10">
              <div className="text-right text-sm font-medium text-gray-700">{insuredPerson.name} {insuredPerson.lastName} عزیز</div>

              <div className="w-full">
                <div className="w-full mx-auto" dir="rtl">
                  <div className="rounded-full px-5 py-4 text-sm w-full relative" dir="rtl" style={{ backgroundColor: '#eef6ff', color: '#3730a3', border: '1px solid rgba(55,48,163,0.12)' }}>
                    <div className="text-right pr-14">مبلغ تسهیلاتی که برای صدور بیمه نامه زندگی و مستمری درخواست دارید را اعلام فرمایید تا تعدات طرح فرابیمه نمایش داده شود .</div>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full" style={{ backgroundColor: 'rgba(22,163,74,0.08)' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#3730a3" opacity="0.08" />
                        <path d="M11 10h2v6h-2v-6zm0-4h2v2h-2V6z" fill="#3730a3" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                  <div>
                    <label className="text-xs text-gray-500 mt-2 block">مبلغ تسهیلات درخواستی (ریال)</label>
                    <input
                      placeholder="۲۱۰۰۰۰۰۰۰"
                      className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm bg-white"
                    />
                    <div className="text-xs text-gray-400 max-w-3xl mx-auto">حداکثر مبلغ دو میلیارد ریال می‌باشد</div>
                  </div>

                  <div>
                    <label className="text-xs text-gray-500 mb-2 block">مدت بیمه‌نامه</label>
                    <input
                      placeholder="۳۶"
                      className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-gray-500 mb-2 block">مدت بازپرداخت</label>
                    <select className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm bg-white">
                      <option>۳۶ ماه</option>
                      <option>۶۰ ماه</option>
                      <option>۱۲ ماه</option>
                    </select>
                    
                  </div>
                </div>

                

                <div className="w-full mt-6">
                  <div className="w-full mx-auto" dir="rtl">
                    <div className="rounded-full px-5 py-4 text-sm w-full relative" dir="rtl" style={{ backgroundColor: '#f0fdf4', color: '#16a34a', border: '1px solid rgba(22,163,74,0.12)' }}>
                      <div className="text-right pr-14">اقساط قابل پرداخت ماهانه : ۹,۸۰۰,۰۰۰ ریال معادل ۹۸۰ هزار تومان</div>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full" style={{ backgroundColor: 'rgba(22,163,74,0.08)' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#16a34a" opacity="0.08" />
                          <path d="M9.29 16.29L5.7 12.7l1.41-1.41 2.18 2.18 6.59-6.59L17.7 8.7z" fill="#16a34a" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-100 rounded-lg p-5 mt-5">
                    
                    <h4 className="text-sm font-medium mb-3">جدول پوشش ها و اندوخته بیمه نامه</h4>
                    <div dir="rtl" className="w-full flex items-center justify-end gap-4 mt-4 flex-row-reverse">
                      <div className="text-xs bg-gray-100 px-3 py-1 rounded-full">سن بیمه‌شده: 65 سال</div>
                      <div className="text-xs bg-gray-100 px-3 py-1 rounded-full">سال بیمه‌ای: 1405</div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-700 space-y-4 sm:space-y-0 mt-8">
                      <div>
                        <div className="flex items-center justify-end gap-3 text-xs font-semibold text-gray-500 flex-row-reverse border-r-4 pr-3" style={{ borderColor: '#2563eb' }}>
                          <span>پوشش‌های فوت و حادثه</span>
                        </div>
                        <div className="mt-4 space-y-3">
                          <div className="flex items-center justify-between text-sm text-slate-900 flex-row-reverse gap-3">
                            <span>۱,۰۰۰,۰۰۰,۰۰۰ ریال</span>
                            <span className="text-gray-500">سرمایه فوت به هر علت</span>
                          </div>
                          <div className="flex items-center justify-between text-sm text-slate-900 flex-row-reverse gap-3">
                            <span>۱,۰۰۰,۰۰۰,۰۰۰ ریال</span>
                            <span className="text-gray-500">سرمایه فوت در اثر حادثه</span>
                          </div>
                          <div className="flex items-center justify-between text-sm text-slate-900 flex-row-reverse gap-3">
                            <span>۱,۰۰۰,۰۰۰,۰۰۰ ریال</span>
                            <span className="text-gray-500">سرمایه نقص عضو</span>
                          </div>
                          <div className="flex items-center justify-between text-sm text-slate-900 flex-row-reverse gap-3">
                            <span>۱,۰۰۰,۰۰۰,۰۰۰ ریال</span>
                            <span className="text-gray-500">سرمایه هزینه‌های پزشکی حادثه</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-end gap-3 text-xs font-semibold text-gray-500 flex-row-reverse border-r-4 pr-3" style={{ borderColor: '#f59e0b' }}>
                          <span>وضعیت اندوخته‌ها</span>
                        </div>
                        <div className="mt-4 space-y-3">
                          <div className="flex items-center justify-between text-sm flex-row-reverse gap-3">
                            <span className="text-blue-600">۱,۰۰۰,۰۰۰,۰۰۰ ریال</span>
                            <span className="text-gray-500">اندوخته با سود علی‌الحساب ۱۶-۱۳-۱۰٪</span>
                          </div>
                          <div className="flex items-center justify-between text-sm flex-row-reverse gap-3">
                            <span className="text-blue-600">۸۰,۰۰۰,۰۰۰ ریال</span>
                            <span className="text-gray-500">اندوخته با سود پیش‌بینی ۲۵٪</span>
                          </div>
                          <div className="flex items-center justify-between text-sm flex-row-reverse gap-3">
                            <span className="text-blue-600">۱,۰۰۰,۰۰۰,۰۰۰ ریال</span>
                            <span className="text-gray-500">اندوخته با سود پیش‌بینی ۲۲٪</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-end gap-3 text-xs font-semibold text-gray-500 flex-row-reverse border-r-4 pr-3" style={{ borderColor: '#16a34a' }}>
                          <span>پوشش امراض خاص</span>
                        </div>
                        <div className="mt-4 space-y-3">
                          <div className="flex items-center justify-between text-sm text-slate-900 flex-row-reverse gap-3">
                            <span>۱,۰۰۰,۰۰۰,۰۰۰ ریال</span>
                            <span className="text-gray-500">سرمایه امراض خاص</span>
                          </div>
                          <div className="flex items-center justify-between text-sm text-slate-900 flex-row-reverse gap-3">
                            <span>۱,۰۰۰,۰۰۰,۰۰۰ ریال</span>
                            <span className="text-gray-500">سرمایه امراض خاص تکمیلی</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="max-w-3xl mx-auto flex items-center justify-between gap-8 mt-4">
                    <button
                      onClick={() => setStep((s) => s + 1)}
                      className="px-8 py-3 rounded-full text-sm font-semibold text-white shadow-md"
                      style={{ backgroundColor: '#111827' }}
                    >
                      ادامه
                    </button>

                    <button
                      onClick={() => setStep((s) => s - 1)}
                      className="px-8 py-3 rounded-full text-sm font-medium border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                    >
                      مرحله قبل
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── مرحله ۴: اطلاعات تکمیلی ── */}
          {step === 3 && (
            <div className="space-y-10">
              <h3 className="text-center font-semibold text-gray-800">اطلاعات تکمیلی</h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div>
                  <label className="text-xs text-gray-500 mb-2 block">نام و نام خانوادگی</label>
                  <input
                    defaultValue="سنا رابطاط"
                    readOnly
                    className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm bg-gray-50"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-500 mb-2 block">شماره بیمه‌نامه</label>
                  <input
                    placeholder="مثال: ۱۲۳۴۵۶"
                    className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-500 mb-2 block">تاریخ صدور</label>
                  <input
                    placeholder="۱۴۰۳/۰۱/۰۱"
                    className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm bg-gray-50"
                    readOnly
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div>
                  <label className="text-xs text-gray-500 mb-2 block">شرکت بیمه</label>
                  <input
                    defaultValue="بیمه ما"
                    readOnly
                    className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm bg-gray-50"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-500 mb-2 block">روش پرداخت</label>
                  <select className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm bg-white">
                    <option>آنلاین</option>
                    <option>کارت به کارت</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-gray-500 mb-2 block">کد معرف</label>
                  <input
                    placeholder="کد معرف"
                    className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-500 mb-2 block">توضیحات تکمیلی</label>
                <textarea
                  value={form.address}
                  onChange={(e) => setField('address', e.target.value)}
                  rows={3}
                  placeholder="در صورت نیاز توضیح دهید"
                  className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm resize-none"
                />
              </div>

              <div className="rounded-lg p-3 text-sm" style={{ backgroundColor: '#eef2ff', color: '#1e3a8a' }}>
                پس از ثبت، اطلاعات نهايي توسط تیم پشتیبانی بررسی می‌شود و در صورت نیاز با شما تماس گرفته خواهد شد.
              </div>

              <div className="max-w-2xl mx-auto flex items-center justify-center gap-6 mt-4">
                <button
                  onClick={handleSubmit}
                  className="px-10 py-3 rounded-full text-sm font-semibold text-white shadow-md"
                  style={{ backgroundColor: '#111827' }}
                >
                  ثبت نهایی
                </button>

                <button
                  onClick={() => setStep((s) => s - 1)}
                  className="px-8 py-3 rounded-full text-sm font-medium border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                >
                  قبلی
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  )
}

export default function Insurance() {
  return (
    <div dir="rtl" className="min-h-screen flex justify-center" style={{ backgroundColor: '#f4f5f7', fontFamily: "'Vazirmatn', sans-serif" }}>
      <div className="w-[90vw]">
        <Outlet />
      </div>
    </div>
  )
}
