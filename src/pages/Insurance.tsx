import { useState } from 'react'
import { Outlet, useNavigate } from "react-router-dom"

type View = 'landing' | 'history' | 'form' | 'farabima' | 'karegozari'

const historyData = [
  { id: 1, name: 'علی محمدی', type: 'بیمه عمر', start: '۱۴۰۲/۰۱/۰۱', end: '۱۴۰۳/۰۱/۰۱', amount: '۲,۵۰۰,۰۰۰', status: 'فعال' },
  { id: 2, name: 'فاطمه کریمی', type: 'بیمه درمان', start: '۱۴۰۲/۰۳/۱۵', end: '۱۴۰۳/۰۳/۱۵', amount: '۱,۸۰۰,۰۰۰', status: 'فعال' },
  { id: 3, name: 'رضا احمدی', type: 'بیمه خودرو', start: '۱۴۰۱/۰۶/۰۱', end: '۱۴۰۲/۰۶/۰۱', amount: '۳,۲۰۰,۰۰۰', status: 'منقضی' },
  { id: 4, name: 'مریم حسینی', type: 'بیمه آتش‌سوزی', start: '۱۴۰۲/۰۵/۲۰', end: '۱۴۰۳/۰۵/۲۰', amount: '۹۵۰,۰۰۰', status: 'فعال' },
  { id: 5, name: 'امیر صادقی', type: 'بیمه عمر', start: '۱۴۰۱/۱۱/۱۰', end: '۱۴۰۲/۱۱/۱۰', amount: '۴,۱۰۰,۰۰۰', status: 'منقضی' },
  { id: 6, name: 'زهرا موسوی', type: 'بیمه درمان', start: '۱۴۰۲/۰۸/۰۱', end: '۱۴۰۳/۰۸/۰۱', amount: '۲,۰۰۰۰,۰۰۰', status: 'فعال' },
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
  hasDisease: '' | 'yes' | 'no'
  diseaseDesc: string
  hasSurgery: '' | 'yes' | 'no'
  surgeryDesc: string
  hasSmoke: '' | 'yes' | 'no'
  address: string
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

function Navbar({ setView }: { view: View; setView: (v: View) => void }) {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white font-bold text-sm">
            ما
          </div>
          <span className="font-bold text-gray-800 text-sm">بیمه ما</span>
        </div>

        <div className="flex items-center gap-2 mx-auto">
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
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                it.key === 'farabima'
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                  : 'bg-white text-gray-600 border border-gray-100 hover:bg-gray-50'
              }`}
            >
              {it.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-100">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <div className="w-9 h-9 rounded-full bg-gray-200 border border-gray-200 overflow-hidden flex items-center justify-center text-gray-600 font-bold text-sm">
            کاربر
          </div>
        </div>
      </div>
    </nav>
  )
}

function StepIndicator({ current }: { current: number }) {
  const sublabels = ['طرح فرابیمه', 'بیمه‌گذار / بیمه شده', 'بیمه‌نامه', 'اطلاعات تکمیلی']
  const progressWidth = current === 0 ? 0 : (current / (formSteps.length - 1)) * 100

  return (
    <div className="w-full mb-10">
      <div className="max-w-3xl mx-auto px-4" dir="rtl">
        <div className="relative py-4">
          <div className="absolute" style={{ right: '12.5%', width: '75%', top: '2.2rem', zIndex: 0 }}>
            <div className="absolute inset-x-0 h-0.5 bg-gray-200" />
            <div className="absolute right-0 h-0.5 bg-gray-900 transition-all duration-300" style={{ width: `${progressWidth}%` }} />
          </div>
          <div className="grid grid-cols-4 gap-0 relative">
            {formSteps.map((label, i) => {
              const isActive = i === current
              const isCompleted = i < current
              return (
                <div key={label} className="flex flex-col items-center text-center">
                  <div className="relative z-10">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                        isCompleted
                          ? 'bg-gray-900 text-white'
                          : isActive
                          ? 'bg-gray-900 text-white ring-4 ring-gray-100'
                          : 'bg-white text-gray-400 border border-gray-200'
                      }`}
                    >
                      {isCompleted ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        i + 1
                      )}
                    </div>
                  </div>

                  <div className="mt-3">
                    <div className={`text-sm ${isActive || isCompleted ? 'font-bold text-gray-900' : 'font-medium text-gray-400'}`}>
                      {label}
                    </div>
                    <div className="text-[10px] text-gray-400 mt-0.5">{sublabels[i]}</div>
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
  const navigate = useNavigate()

  return (
    <>
      <div className="w-full bg-gradient-to-r from-amber-500 to-orange-500 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 py-10 flex items-center justify-between relative z-10">
          <div className="text-white flex-1">
            <button className="mb-4 border border-white/40 bg-white/10 text-white text-sm px-4 py-1.5 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm">
              دریافت فایل راهنما
            </button>
            <h1 className="text-3xl font-black mb-2 tracking-wide">فـرا بیمـه مـا</h1>
            <p className="text-orange-100 text-sm">صدور بیمه زندگی و مستمری از طریق اعطای تسهیلات بانکی</p>
          </div>
          <div className="hidden sm:flex items-center justify-center w-32 h-32 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
        </div>
      </div>

      <div className="max-w-8/12 mx-auto px-4 mt-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex border-b border-gray-100">
            <button
              onClick={() => setTab('info')}
              className={`flex-1 py-3.5 text-sm font-bold transition-colors ${
                tab === 'info' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              فرابیمه ما
            </button>
            <button
              onClick={() => setTab('history')}
              className={`flex-1 py-3.5 text-sm font-bold transition-colors ${
                tab === 'history' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              تاریخچه
            </button>
          </div>

          {tab === 'info' ? (
            <div className="p-8 space-y-6">
              <h2 className="text-base font-bold text-gray-800 text-center">ویژگی‌های طرح فرابیمه</h2>
              <div className="text-gray-900 text-bolder text-sm leading-7 text-right space-y-2 max-w-2xl mx-auto">
                <p>
                  عرضه محصول مشترک بانک ملت و بیمه «ما» برای اولین‌بار در صنعت بیمه، ارائه بیمه زندگی و مستمری از طریق تسهیلات ویژه بانک ملت به صورت دیجیتال و آنلاین بدون نیاز به مراجعه حضوری؛
                </p>
                <p>دریافت تسهیلات ۲۳ درصدی بدون مسدودی و بازپرداخت طی ۳۶ ماه؛</p>
                <p>
                  واریز تسهیلات بانکی تا سقف ۲٬۰۰۰٬۰۰۰٬۰۰۰ ریال به حساب اندوخته بیمه‌ای سرمایه‌گذار نزد شرکت بیمه ما بدون نیاز به چک و بدون نیاز به ضامن حداکثر تا ۴۸ ساعت پس از صدور بیمه‌نامه به صورت حساب اندوخته‌ای بیمه‌ای سرمایه‌گذار نزد شرکت بیمه ما؛
                </p>
                <p>
                  ارائه پوشش‌های بیمه‌ای و سرمایه گذاری با قابلیت تبدیل شدن به مستمری در صورت درخواست بیمه‌گذار.
                </p>
                <div className="flex justify-end pt-4">
                <button onClick={() => navigate("/insurance/create")}
                  className="px-12 py-3 rounded-xl bg-gray-900 text-white font-bold text-sm hover:bg-gray-800 transition-colors shadow-md">
                  شروع
                </button>
              </div>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    {['شماره', 'نام بیمه‌گذار', 'نوع بیمه', 'تاریخ شروع', 'تاریخ پایان', 'مبلغ (ریال)', 'وضعیت'].map((col) => (
                      <th key={col} className="px-4 py-3 text-right font-semibold whitespace-nowrap">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {historyData.map((row, i) => (
                    <tr key={row.id} className={`border-b border-gray-50 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                      <td className="px-4 py-3 text-gray-500">{row.id}</td>
                      <td className="px-4 py-3 font-medium text-gray-800">{row.name}</td>
                      <td className="px-4 py-3 text-gray-600">{row.type}</td>
                      <td className="px-4 py-3 text-gray-600">{row.start}</td>
                      <td className="px-4 py-3 text-gray-600">{row.end}</td>
                      <td className="px-4 py-3 text-gray-600">{row.amount}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${row.status === 'فعال' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
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
    </>
  )
}

export function FormView() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<InsuranceForm>(initialInsuranceForm)
  const [insuredSameAsHolder, setInsuredSameAsHolder] = useState(true)

  const [familyMember, setFamilyMember] = useState({
    relation: '',
    nationalId: '',
    birthDate: '',
    name: '',
    lastName: '',
    gender: 'مرد',
    mobile: '',
    job: '',
    postalCode: '',
    address: '',
  })

  const setField = <K extends keyof InsuranceForm>(key: K, value: InsuranceForm[K]) =>
    setForm((f) => ({ ...f, [key]: value }))

  const handleSubmit = () => {
    alert('بیمه‌نامه شما با موفقیت ثبت شد!')
  }

  return (
    <div className="max-w-8/12 mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <StepIndicator current={step} />

        {/* ── مرحله ۱: شرایط طرح ── */}
        {step === 0 && (
          <div className="space-y-6" dir="rtl">
            <h3 className="font-bold max-w-2xl mx-auto text-red-600 text-right text-base">شرایط طرح فرابیمه</h3>

            <div className="max-w-2xl mx-auto max-w-2xl mx-auto my-auto text-gray-700 text-sm leading-7">
              <div className="h-full overflow-y-auto flex text-center py-2 rounded-xl">
                <ul className="space-y-3 text-gray-600">
                  {[
                    'داشتن حساب فعال نزد بانک ملت.',
                    'تطابق مالکیت شماره تلفن همراه بیمه‌گذار با شماره همراه ثبت‌شده در حساب بانک ملت.',
                    'عدم وجود چک برگشتی و بدهی معوقه به شبکه بانکی.',
                    'کارت معافیت دائم یا پایان خدمت برای آقایان.',
                    ' عقد قرارداد درخواست وام به همراه امضای دیجیتال؛ ( لینک دانلود نرم افزار امضای دیجیتال برای اندروید و لینک دانلود نرم افزار امضای دیجیتال برای آی او اس) ',
                    ' واریز تسهیلات بانکی تا سقف 2,000,000,000 ریال به حساب اندوخته بیمه‌ای سرمایه‌گذار نزد شرکت بیمه ما بدون نیاز به چک و بدون نیاز به ضامن حداکثر تا 48 ساعت پس از صدور بیمه نامه به صورت حساب اندوخته‌ای بیمه‌ای سرمایه‌گذار نزد شرکت بیمه ما؛',
                    'پرداخت منظم اقساط.'
                  ].map((it, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-right">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-800 mt-2 shrink-0" />
                      <span className="text-bold text-gray-800">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="max-w-2xl mx-auto mt-5">
              <div className="rounded-xl p-3.5 flex items-center gap-3 bg-amber-50 border border-amber-200 text-amber-800">
                <svg className="w-5 h-5 text-amber-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="text-sm font-medium">ادامه به منزله پذیرش شرایط فرابیمه است</span>
              </div>
            </div>

            <div className="max-w-2xl mx-auto text-right">
              <label className="flex items-center gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={form.accepted}
                  onChange={(e) => setField('accepted', e.target.checked)}
                  className="w-4 h-4 rounded text-orange-500 focus:ring-orange-500 border-gray-300"
                />
                <span className="text-sm font-semibold text-gray-700">شرایط و قوانین را خوانده‌ام و قبول می‌کنم</span>
              </label>
            </div>

            <div className="max-w-2xl mx-auto flex items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setStep((s) => s + 1)}
                disabled={!form.accepted}
                className={`px-10 py-2.5 rounded-xl text-sm font-bold text-white transition-all shadow-md ${
                  form.accepted ? 'bg-gray-900 hover:bg-gray-800' : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                ادامه
              </button>
              <button className="px-8 py-2.5 rounded-xl text-sm font-semibold border border-gray-200 bg-white text-gray-600 hover:bg-gray-50">
                انصراف
              </button>
            </div>
          </div>
        )}

        {/* ── مرحله ۲: مشخصات بیمه‌گذار / بیمه‌شده ── */}
        {step === 1 && (
          <div className="space-y-6" dir="rtl">
            <div className="text-sm font-bold text-gray-800 mb-2">اطلاعات بیمه‌گذار</div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label className="text-sm text-gray-500 mb-1.5 block">نام و نام خانوادگی</label>
                <input
                  value="سنا رابطاط"
                  readOnly
                  disabled
                  className="w-full border border-gray-200 rounded-xl bg-gray-50 px-3.5 py-2.5 text-sm text-center text-gray-500 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500 mb-1.5 block">کد ملی</label>
                <input
                  value="۰۰۷۸۵۴۳۲۱"
                  disabled
                  className="w-full border border-gray-200 rounded-xl bg-gray-50 px-3.5 py-2.5 text-sm text-center  text-gray-500 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500 mb-1.5 block">تاریخ تولد</label>
                <input
                  value="۱۳۶۵/۰۵/۱۵"
                  disabled
                  className="w-full border border-gray-200 rounded-xl bg-gray-50 px-3.5 py-2.5 text-sm text-center text-gray-500 cursor-not-allowed"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label className="text-sm text-gray-500 mb-1.5 block">شماره تلفن همراه</label>
                <input
                  value={form.mobile}
                  onChange={(e) => setField('mobile', e.target.value)}
                  placeholder="09120000000"
                  className="w-full border border-gray-200 rounded-xl bg-white px-3.5 py-2.5 text-sm text-center focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500 mb-1.5 block">شغل</label>
                <select
                  className="w-full border border-gray-200 rounded-xl bg-white px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                >
                  <option value="">انتخاب کنید</option>
                  <option value="کارمند">کارمند</option>
                  <option value="آزاد">آزاد</option>
                  <option value="بازنشسته">بازنشسته</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-500 mb-1.5 block">کد پستی</label>
                <input
                  placeholder="کد پستی"
                  className="w-full border border-gray-200 rounded-xl bg-white px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-500 mb-1.5 block">آدرس</label>
              <textarea
                value={form.address}
                onChange={(e) => setField('address', e.target.value)}
                rows={2}
                placeholder="آدرس دقیق منزل یا محل کار"
                className="w-full border border-gray-200 rounded-xl bg-white px-3.5 py-2.5 text-sm resize-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
              />
            </div>

            <div className="pt-4 border-t border-gray-100">
              <div className="text-sm font-bold text-red-600 mb-3">بیمه‌نامه زندگی و مستمری را برای چه کسی می‌خواهید؟</div>
              <div className="inline-flex rounded-xl bg-gray-100 p-1 border border-gray-200">
                <button
                  type="button"
                  onClick={() => setInsuredSameAsHolder(true)}
                  className={`px-5 py-1.5 rounded-lg text-sm font-bold transition-all ${
                    insuredSameAsHolder ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
                  }`}
                >
                  خودم
                </button>
                <button
                  type="button"
                  onClick={() => setInsuredSameAsHolder(false)}
                  className={`px-5 py-1.5 rounded-lg text-sm font-bold transition-all ${
                    !insuredSameAsHolder ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
                  }`}
                >
                  اعضای خانواده
                </button>
              </div>
            </div>

            {!insuredSameAsHolder && (
              <div className="space-y-4 pt-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <select
                      value={familyMember.relation}
                      onChange={(e) => setFamilyMember((p) => ({ ...p, relation: e.target.value }))}
                      className="w-full border border-gray-200 rounded-2xl bg-white px-4 py-3 text-sm text-gray-700 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none appearance-none"
                    >
                      <option value="" disabled hidden>نسبت با بیمه‌گذار</option>
                      <option value="فرزند">فرزند</option>
                      <option value="همسر">همسر</option>
                      <option value="پدر">پدر</option>
                      <option value="مادر">مادر</option>
                      <option value="برادر">برادر</option>
                      <option value="خواهر">خواهر</option>
                    </select>
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      value={familyMember.name}
                      onChange={(e) => setFamilyMember((p) => ({ ...p, name: e.target.value }))}
                      placeholder="نام"
                      className="w-full border border-gray-200 rounded-2xl bg-white px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      value={familyMember.lastName}
                      onChange={(e) => setFamilyMember((p) => ({ ...p, lastName: e.target.value }))}
                      placeholder="نام خانوادگی"
                      className="w-full border border-gray-200 rounded-2xl bg-white px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <input
                      type="text"
                      value={familyMember.nationalId}
                      onChange={(e) => setFamilyMember((p) => ({ ...p, nationalId: e.target.value }))}
                      placeholder="کدملی"
                      className="w-full border border-gray-200 rounded-2xl bg-white px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      value={familyMember.birthDate}
                      onChange={(e) => setFamilyMember((p) => ({ ...p, birthDate: e.target.value }))}
                      placeholder="تاریخ تولد"
                      className="w-full border border-gray-200 rounded-2xl bg-white pr-10 pl-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                    />
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      value={familyMember.mobile}
                      onChange={(e) => setFamilyMember((p) => ({ ...p, mobile: e.target.value }))}
                      placeholder="شماره تلفن همراه"
                      className="w-full border border-gray-200 rounded-2xl bg-white pr-10 pl-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                    />
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <select
                      value={familyMember.job}
                      onChange={(e) => setFamilyMember((p) => ({ ...p, job: e.target.value }))}
                      className="w-full border border-gray-200 rounded-2xl bg-white px-4 py-3 text-sm text-gray-700 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none appearance-none"
                    >
                      <option value="" disabled hidden>شغل</option>
                      <option value="کارمند">کارمند</option>
                      <option value="آزاد">آزاد</option>
                      <option value="خانه دار">خانه‌دار</option>
                      <option value="محصل">محصل/دانشجو</option>
                    </select>
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      value={familyMember.postalCode}
                      onChange={(e) => setFamilyMember((p) => ({ ...p, postalCode: e.target.value }))}
                      placeholder="کدپستی"
                      className="w-full border border-gray-200 rounded-2xl bg-white px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    value={familyMember.address}
                    onChange={(e) => setFamilyMember((p) => ({ ...p, address: e.target.value }))}
                    placeholder="آدرس"
                    className="w-full border border-gray-200 rounded-2xl bg-white px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                  />
                </div>
              </div>
            )}

            <div className="flex items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setStep((s) => s + 1)}
                className="px-10 py-2.5 rounded-xl text-sm font-bold text-white bg-gray-900 hover:bg-gray-800 transition-colors shadow-md"
              >
                ادامه
              </button>
              <button
                onClick={() => setStep((s) => s - 1)}
                className="px-8 py-2.5 rounded-xl text-sm font-semibold border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
              >
                مرحله قبل
              </button>
            </div>
          </div>
        )}

        {/* ── مرحله ۳: اطلاعات سرمایه‌گذاری ── */}
        {step === 2 && (
          <div className="space-y-6" dir="rtl">
            <div className="text-sm font-bold text-gray-800">
              {insuredSameAsHolder ? 'سنا رابطاط' : `${familyMember.name || 'بیمه‌شده'} ${familyMember.lastName}`} عزیز
            </div>

            <div className="rounded-2xl p-4 bg-indigo-50/60 border border-indigo-100 text-indigo-900 text-sm flex items-start gap-3">
              <svg className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>مبلغ تسهیلاتی که برای صدور بیمه نامه زندگی و مستمری درخواست دارید را اعلام فرمایید تا تعهدات طرح فرابیمه نمایش داده شود.</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label className="text-sm text-gray-500 mb-1.5 block">مبلغ تسهیلاتی درخواستی (ریال)</label>
                <input
                  placeholder="۲,۰۰۰,۰۰۰,۰۰۰"
                  className="w-full border border-gray-200 rounded-xl bg-white px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                />
                <span className="text-[10px] text-gray-400 mt-1 block">حداکثر مبلغ دو میلیارد ریال می‌باشد</span>
              </div>

              <div>
                <label className="text-sm text-gray-500 mb-1.5 block">مدت بیمه‌نامه</label>
                <input
                  defaultValue="۳۶"
                  className="w-full border border-gray-200 rounded-xl bg-white px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500 mb-1.5 block">مدت بازپرداخت</label>
                <select className="w-full border border-gray-200 rounded-xl bg-white px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none">
                  <option>۳۶ ماه</option>
                  <option>۶۰ ماه</option>
                </select>
              </div>
            </div>

            <div className="rounded-2xl p-4 bg-emerald-50/60 border border-emerald-100 text-emerald-900 text-sm flex items-center gap-3">
              <svg className="w-5 h-5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">اقساط قابل پرداخت ماهانه : ۹,۸۰۰,۰۰۰ ریال معادل ۹۸۰ هزار تومان</span>
            </div>

            {/* بخش جدول پوشش‌ها بدون بوردر باکس‌ها */}
            <div className="space-y-4 pt-2">
              <h4 className="text-sm font-bold text-gray-900">جدول پوشش ها و اندوخته بیمه نامه</h4>

              {/* انتقال اطلاعات سال بیمه‌ای و سن بیمه‌شده به زیر جدول */}
              <div className="flex items-center justify-start gap-3 pt-3 border-t border-gray-100">
                <span className="bg-gray-100 text-gray-700 text-sm px-3.5 py-1.5 rounded-full font-medium">
                  سال بیمه‌ای: <strong className="text-gray-900">۱۴۰۵</strong>
                </span>
                <span className="bg-gray-100 text-gray-700 text-sm px-3.5 py-1.5 rounded-full font-medium">
                  سن بیمه‌شده: <strong className="text-gray-900">۶۵ سال</strong>
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* ستون اول: پوشش‌های فوت و حادثه */}
                <div className="space-y-3.5">
                  <div className="flex items-center gap-1.5 pb-2 border-b border-gray-100">
                    <span className="w-1.5 h-4 bg-sky-500 rounded-full"></span>
                    <span className="font-bold text-sm text-gray-800">پوشش‌های فوت و حادثه</span>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center py-1">
                      <span className="text-gray-600">سرمایه فوت به هر علت</span>
                      <span className="font-bold text-gray-900">۱,۰۰۰,۰۰۰,۰۰۰ <span className="text-[10px] text-gray-500 font-normal">ریال</span></span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-gray-600">سرمایه فوت در اثر حادثه</span>
                      <span className="font-bold text-gray-900">۱,۰۰۰,۰۰۰,۰۰۰ <span className="text-[10px] text-gray-500 font-normal">ریال</span></span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-gray-600">سرمایه نقص عضو</span>
                      <span className="font-bold text-gray-900">۱,۰۰۰,۰۰۰,۰۰۰ <span className="text-[10px] text-gray-500 font-normal">ریال</span></span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-gray-600">سرمایه هزینه‌های پزشکی حادثه</span>
                      <span className="font-bold text-gray-900">۱,۰۰۰,۰۰۰,۰۰۰ <span className="text-[10px] text-gray-500 font-normal">ریال</span></span>
                    </div>
                  </div>
                </div>

                {/* ستون دوم: وضعیت اندوخته‌ها */}
                <div className="space-y-3.5">
                  <div className="flex items-center gap-1.5 pb-2 border-b border-gray-100">
                    <span className="w-1.5 h-4 bg-amber-500 rounded-full"></span>
                    <span className="font-bold text-sm text-gray-800">وضعیت اندوخته‌ها</span>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center py-1">
                      <span className="text-gray-600">اندوخته با سود علی‌الحساب ۱۰-۱۳-۱۶٪</span>
                      <span className="font-bold text-sky-600">۱,۰۰۰,۰۰۰,۰۰۰ <span className="text-[10px] text-sky-600 font-normal">ریال</span></span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-gray-600">اندوخته با سود پیش‌بینی ۲۵٪</span>
                      <span className="font-bold text-sky-600">۱,۰۰۰,۰۰۰,۰۰۰ <span className="text-[10px] text-sky-600 font-normal">ریال</span></span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-gray-600">اندوخته با سود پیش‌بینی ۲۲٪</span>
                      <span className="font-bold text-sky-600">۱,۰۰۰,۰۰۰,۰۰۰ <span className="text-[10px] text-sky-600 font-normal">ریال</span></span>
                    </div>
                  </div>
                </div>

                {/* ستون سوم: پوشش امراض خاص */}
                <div className="space-y-3.5">
                  <div className="flex items-center gap-1.5 pb-2 border-b border-gray-100">
                    <span className="w-1.5 h-4 bg-emerald-500 rounded-full"></span>
                    <span className="font-bold text-sm text-gray-800">پوشش امراض خاص</span>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center py-1">
                      <span className="text-gray-600">سرمایه امراض خاص</span>
                      <span className="font-bold text-gray-900">۱,۰۰۰,۰۰۰,۰۰۰ <span className="text-[10px] text-gray-500 font-normal">ریال</span></span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-gray-600">سرمایه امراض خاص تکمیلی</span>
                      <span className="font-bold text-gray-900">۱,۰۰۰,۰۰۰,۰۰۰ <span className="text-[10px] text-gray-500 font-normal">ریال</span></span>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>

            <div className="flex items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setStep((s) => s + 1)}
                className="px-10 py-2.5 rounded-xl text-sm font-bold text-white bg-gray-900 hover:bg-gray-800 transition-colors shadow-md"
              >
                ادامه
              </button>
              <button
                onClick={() => setStep((s) => s - 1)}
                className="px-8 py-2.5 rounded-xl text-sm font-semibold border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
              >
                مرحله قبل
              </button>
            </div>
          </div>
        )}

        {/* ── مرحله ۴: اطلاعات تکمیلی ── */}
        {step === 3 && (
          <div className="space-y-6" dir="rtl">
            <h3 className="text-center font-bold text-gray-800 text-sm">اطلاعات تکمیلی</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label className="text-sm text-gray-500 mb-1.5 block">نام و نام خانوادگی بیمه‌گذار</label>
                <input
                  defaultValue="سنا رابطاط"
                  readOnly
                  className="w-full border border-gray-200 rounded-xl bg-gray-50 px-3.5 py-2.5 text-sm text-gray-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500 mb-1.5 block">کد معرف</label>
                <input
                  placeholder="کد معرف (اختیاری)"
                  className="w-full border border-gray-200 rounded-xl bg-white px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500 mb-1.5 block">روش پرداخت</label>
                <select className="w-full border border-gray-200 rounded-xl bg-white px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none">
                  <option>کسر از درگاه تسهیلات</option>
                  <option>پرداخت آنلاین</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-500 mb-1.5 block">توضیحات تکمیلی</label>
              <textarea
                rows={3}
                placeholder="در صورت وجود توضیح اضافی وارد نمایید"
                className="w-full border border-gray-200 rounded-xl bg-white px-3.5 py-2.5 text-sm resize-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none"
              />
            </div>

            <div className="flex items-center justify-center gap-4 pt-4">
              <button
                onClick={handleSubmit}
                className="px-10 py-2.5 rounded-xl text-sm font-bold text-white bg-gray-900 hover:bg-gray-800 transition-colors shadow-md"
              >
                ثبت نهایی
              </button>
              <button
                onClick={() => setStep((s) => s - 1)}
                className="px-8 py-2.5 rounded-xl text-sm font-semibold border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
              >
                قبلی
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Insurance() {
  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 text-gray-900">
      <div className="pb-12">
        <Outlet />
      </div>
    </div>
  )
}