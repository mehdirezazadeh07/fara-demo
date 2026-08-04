import { useState } from "react"

type View = 'landing' | 'history' | 'form' | 'farabima' | 'karegozari'
type KSection = 'home' | 'ipo' | 'deposit' | 'withdraw'

export default function Broker() {
  const [section, setSection] = useState<KSection>('home')
  const [ipoStep, setIpoStep] = useState(0)
  const [depositStep, setDepositStep] = useState(0)
  const [withdrawStep, setWithdrawStep] = useState(0)
  const [withdrawType, setWithdrawType] = useState<'all' | 'custom' | null>(null)
  const [depositAmount, setDepositAmount] = useState('')
  const [withdrawAmount, setWithdrawAmount] = useState('')
  const [ipoShares, setIpoShares] = useState('')
  const [ipoStock, setIpoStock] = useState('')
  const [withdrawDate, setWithdrawDate] = useState('')
  const [withdrawError, setWithdrawError] = useState(false)

  const reset = (s: KSection) => {
    setSection(s)
    setIpoStep(0); setDepositStep(0); setWithdrawStep(0)
    setWithdrawType(null); setWithdrawError(false)
  }

  const KHero = ({ title }: { title: string }) => (
    <div style={{ background: 'linear-gradient(135deg, #E8A020 0%, #C8880A 100%)' }} className="w-full relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 py-7 flex items-center justify-between">
        <div className="text-white z-10">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-orange-100 text-sm mt-1">خدمات کارگزاری ملت</p>
        </div>
        <div className="hidden sm:block text-6xl opacity-80" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }}>📈</div>
      </div>
      <div className="absolute -left-6 -top-6 w-28 h-28 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }} />
    </div>
  )

  const Card = ({ children }: { children: React.ReactNode }) => (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="bg-white rounded-xl shadow-sm p-6">{children}</div>
    </div>
  )

  const NavRow = ({ label, onBack }: { label: string; onBack: () => void }) => (
    <div className="flex items-center gap-2 mb-5">
      <button onClick={onBack} className="text-gray-400 hover:text-gray-600 text-xl leading-none">←</button>
      <span className="font-bold text-gray-800">{label}</span>
    </div>
  )

  const Btn = ({ children, onClick, variant = 'primary', disabled = false }: {
    children: React.ReactNode; onClick: () => void; variant?: 'primary' | 'dark' | 'outline'; disabled?: boolean
  }) => {
    const bg = variant === 'primary' ? 'var(--primary)' : variant === 'dark' ? '#1a1a1a' : 'transparent'
    const border = variant === 'outline' ? '1px solid #d1d5db' : 'none'
    const color = variant === 'outline' ? '#374151' : '#fff'
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        style={{ backgroundColor: disabled ? '#d1d5db' : bg, border, color }}
        className="w-full py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90"
      >
        {children}
      </button>
    )
  }

  const InputField = ({ label, value, onChange, placeholder, type = 'text' }: {
    label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string
  }) => (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none"
        onFocus={(e) => (e.target.style.borderColor = 'var(--primary)')}
        onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
      />
    </div>
  )

  /* ── HOME ── */
  if (section === 'home') return (
    <>
      <KHero title="کارگزاری ملت" />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: '🏢', title: 'عرضه اولیه', desc: 'ثبت درخواست خرید سهام عرضه اولیه', action: () => reset('ipo') },
            { icon: '💰', title: 'واریز وجه', desc: 'واریز وجه به کیف پول کارگزاری', action: () => reset('deposit') },
            { icon: '💳', title: 'برداشت وجه', desc: 'برداشت وجه از کیف پول کارگزاری', action: () => reset('withdraw') },
          ].map((c) => (
            <button
              key={c.title}
              onClick={c.action}
              className="bg-white rounded-xl shadow-sm p-6 text-right hover:shadow-md transition-shadow flex flex-col gap-3 group"
            >
              <span className="text-4xl">{c.icon}</span>
              <div>
                <p className="font-bold text-gray-800 text-base group-hover:text-orange-500 transition-colors">{c.title}</p>
                <p className="text-gray-500 text-xs mt-1 leading-6">{c.desc}</p>
              </div>
              <div style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary-dark)' }} className="self-start px-3 py-1 rounded-full text-xs font-medium">
                ورود
              </div>
            </button>
          ))}
        </div>

        {/* Wallet summary */}
        <div className="mt-6 bg-white rounded-xl shadow-sm p-6">
          <h2 className="font-bold text-gray-800 mb-4">وضعیت کیف پول</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'موجودی نقدی', value: '۴٬۵۲۰٬۰۰۰', unit: 'ریال', color: '#16a34a' },
              { label: 'ارزش پرتفو', value: '۱۲٬۸۰۰٬۰۰۰', unit: 'ریال', color: 'var(--primary-dark)' },
              { label: 'سود/زیان امروز', value: '+۲۳۴٬۰۰۰', unit: 'ریال', color: '#16a34a' },
              { label: 'تعداد معاملات', value: '۱۴', unit: 'این ماه', color: '#6b7280' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-1 p-3 rounded-lg" style={{ backgroundColor: '#f9fafb' }}>
                <span className="text-xs text-gray-500">{s.label}</span>
                <span className="font-bold text-base" style={{ color: s.color }}>{s.value}</span>
                <span className="text-xs text-gray-400">{s.unit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )

  /* ── عرضه اولیه ── */
  if (section === 'ipo') {
    const ipoSteps = ['اطلاعات عرضه', 'انتخاب سهم', 'تأیید هویت', 'نتیجه']
    const StepBar = () => (
      <div className="flex items-center justify-center gap-0 mb-6">
        {ipoSteps.map((label, i) => (
          <div key={label} className="flex items-center">
            <div className="flex flex-col items-center">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ backgroundColor: i <= ipoStep ? 'var(--primary)' : '#e5e7eb', color: i <= ipoStep ? '#fff' : '#9ca3af' }}>
                {i < ipoStep ? '✓' : i + 1}
              </div>
              <span className="text-xs mt-1 whitespace-nowrap" style={{ color: i === ipoStep ? 'var(--primary-dark)' : '#9ca3af', fontWeight: i === ipoStep ? 600 : 400 }}>{label}</span>
            </div>
            {i < ipoSteps.length - 1 && <div className="h-0.5 w-10 sm:w-16 mb-4" style={{ backgroundColor: i < ipoStep ? 'var(--primary)' : '#e5e7eb' }} />}
          </div>
        ))}
      </div>
    )

    return (
      <>
        <KHero title="عرضه اولیه" />
        <Card>
          <NavRow label="ثبت درخواست عرضه اولیه" onBack={() => setSection('home')} />
          <StepBar />

          {ipoStep === 0 && (
            <div className="space-y-4">
              <div className="rounded-xl p-4 space-y-2 text-sm leading-8 text-gray-600" style={{ backgroundColor: 'var(--primary-light)' }}>
                <p className="font-bold text-gray-800">اطلاعات عرضه اولیه</p>
                <p>نماد: <strong>فولاد</strong> — شرکت فولاد مبارکه اصفهان</p>
                <p>تاریخ عرضه: <strong>۱۴۰۳/۰۲/۱۵</strong></p>
                <p>قیمت پایه: <strong>۴٬۵۰۰ ریال</strong> هر سهم</p>
                <p>حداکثر سهام قابل خرید: <strong>۵۰۰ سهم</strong></p>
              </div>
              <div className="text-sm text-gray-600 leading-8">
                <p>لطفاً پیش از ثبت درخواست، از کافی‌بودن موجودی کیف پول خود اطمینان حاصل فرمایید. در صورت کمبود موجودی، درخواست شما لغو خواهد شد.</p>
              </div>
              <Btn onClick={() => setIpoStep(1)}>ادامه</Btn>
            </div>
          )}

          {ipoStep === 1 && (
            <div className="space-y-4">
              <InputField label="نماد سهم" value={ipoStock} onChange={setIpoStock} placeholder="مثال: فولاد" />
              <InputField label="تعداد سهام درخواستی" value={ipoShares} onChange={setIpoShares} placeholder="حداکثر ۵۰۰" type="number" />
              <div className="flex items-center justify-between text-sm p-3 rounded-lg" style={{ backgroundColor: '#f9fafb' }}>
                <span className="text-gray-500">مبلغ تقریبی</span>
                <span className="font-bold text-gray-800">{ipoShares ? `${(Number(ipoShares) * 4500).toLocaleString('fa-IR')} ریال` : '—'}</span>
              </div>
              <div className="flex gap-3">
                <Btn onClick={() => setIpoStep(0)} variant="outline">قبلی</Btn>
                <Btn onClick={() => setIpoStep(2)} disabled={!ipoStock || !ipoShares}>بعدی</Btn>
              </div>
            </div>
          )}

          {ipoStep === 2 && (
            <div className="space-y-4">
              <p className="text-sm font-semibold text-gray-700">تأیید هویت</p>
              <p className="text-sm text-gray-500 leading-7">برای نهایی‌کردن درخواست، لطفاً رمز پویا یا کد تأیید ارسال‌شده به شماره همراه خود را وارد کنید.</p>
              <InputField label="کد تأیید (OTP)" value="" onChange={() => {}} placeholder="۶ رقم" />
              <div className="flex items-center gap-2 text-xs text-orange-500 cursor-pointer hover:underline">
                <span>ارسال مجدد کد</span>
              </div>
              <div className="flex gap-3">
                <Btn onClick={() => setIpoStep(1)} variant="outline">قبلی</Btn>
                <Btn onClick={() => setIpoStep(3)}>تأیید و ثبت</Btn>
              </div>
            </div>
          )}

          {ipoStep === 3 && (
            <div className="flex flex-col items-center gap-4 py-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl" style={{ backgroundColor: '#dcfce7' }}>✅</div>
              <p className="font-bold text-gray-800 text-lg">درخواست با موفقیت ثبت شد</p>
              <p className="text-sm text-gray-500 text-center leading-7">درخواست خرید {ipoShares} سهم {ipoStock || 'فولاد'} ثبت شد. نتیجه پس از پایان عرضه از طریق پیامک اطلاع‌رسانی می‌شود.</p>
              <div className="w-full rounded-xl divide-y divide-gray-100 border border-gray-100 overflow-hidden text-sm">
                {[['نماد', ipoStock || 'فولاد'], ['تعداد سهام', ipoShares || '۲۰۰'], ['قیمت هر سهم', '۴٬۵۰۰ ریال'], ['مبلغ کل', `${(Number(ipoShares || 200) * 4500).toLocaleString()} ریال`]].map(([k, v]) => (
                  <div key={k} className="flex justify-between px-4 py-2.5">
                    <span className="text-gray-500">{k}</span>
                    <span className="font-medium text-gray-800">{v}</span>
                  </div>
                ))}
              </div>
              <Btn onClick={() => setSection('home')} variant="dark">بازگشت به خانه</Btn>
            </div>
          )}
        </Card>
      </>
    )
  }

  /* ── واریز وجه ── */
  if (section === 'deposit') return (
    <>
      <KHero title="واریز وجه" />
      <Card>
        <NavRow label="واریز وجه به کیف پول کارگزاری" onBack={() => setSection('home')} />

        {depositStep === 0 && (
          <div className="space-y-4">
            <div className="rounded-xl p-4 text-sm" style={{ backgroundColor: 'var(--primary-light)' }}>
              <p className="text-gray-600 leading-7">موجودی فعلی کیف پول: <strong style={{ color: 'var(--primary-dark)' }}>۴٬۵۲۰٬۰۰۰ ریال</strong></p>
            </div>
            <InputField label="مبلغ واریز (ریال)" value={depositAmount} onChange={setDepositAmount} placeholder="مثال: ۵٬۰۰۰٬۰۰۰" type="number" />
            <div className="grid grid-cols-3 gap-2">
              {['۱٬۰۰۰٬۰۰۰', '۵٬۰۰۰٬۰۰۰', '۱۰٬۰۰۰٬۰۰۰'].map((amt) => (
                <button key={amt} onClick={() => setDepositAmount(amt.replace(/٬/g, ''))}
                  className="border border-gray-200 rounded-lg py-2 text-xs text-gray-600 hover:border-orange-400 hover:text-orange-500 transition-colors">
                  {amt}
                </button>
              ))}
            </div>
            <InputField label="شماره حساب مبدأ" value="" onChange={() => {}} placeholder="شماره حساب بانک ملت" />
            <Btn onClick={() => setDepositStep(1)} disabled={!depositAmount}>ادامه</Btn>
          </div>
        )}

        {depositStep === 1 && (
          <div className="space-y-4">
            <p className="font-semibold text-gray-800 text-sm">تأیید واریز</p>
            <div className="rounded-xl border border-gray-100 divide-y divide-gray-100 overflow-hidden text-sm">
              {[['مبلغ واریز', `${Number(depositAmount).toLocaleString()} ریال`], ['از حساب', '۶۱۰۴۳۳۸۸-۱۲۳۴'], ['به کیف پول', 'کارگزاری ملت'], ['کارمزد', '۰ ریال']].map(([k, v]) => (
                <div key={k} className="flex justify-between px-4 py-2.5">
                  <span className="text-gray-500">{k}</span>
                  <span className="font-medium text-gray-800">{v}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <Btn onClick={() => setDepositStep(0)} variant="outline">قبلی</Btn>
              <Btn onClick={() => { alert('واریز با موفقیت انجام شد!'); reset('home') }} variant="dark">تأیید و واریز</Btn>
            </div>
          </div>
        )}
      </Card>
    </>
  )

  /* ── برداشت وجه ── */
  if (section === 'withdraw') return (
    <>
      <KHero title="برداشت وجه" />
      <Card>
        <NavRow label="برداشت وجه از کیف پول کارگزاری" onBack={() => { if (withdrawStep === 0) setSection('home'); else { setWithdrawStep(0); setWithdrawType(null); setWithdrawError(false) } }} />

        {withdrawStep === 0 && (
          <div className="space-y-4">
            <div className="rounded-xl p-4 text-sm" style={{ backgroundColor: 'var(--primary-light)' }}>
              <p className="text-gray-600">موجودی قابل برداشت: <strong style={{ color: 'var(--primary-dark)' }}>۴٬۵۲۰٬۰۰۰ ریال</strong></p>
              <p className="text-gray-500 text-xs mt-1">سقف روزانه برداشت: ۳٬۰۰۰٬۰۰۰ ریال</p>
            </div>
            <p className="text-sm font-semibold text-gray-700">نوع برداشت را انتخاب کنید:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: 'برداشت تمام موجودی', icon: '💸', type: 'all' as const },
                { label: 'مبلغ دلخواه', icon: '✏️', type: 'custom' as const },
              ].map((opt) => (
                <button key={opt.type} onClick={() => { setWithdrawType(opt.type); setWithdrawStep(1) }}
                  className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:border-orange-400 hover:bg-orange-50 transition-colors text-right">
                  <span className="text-2xl">{opt.icon}</span>
                  <span className="font-medium text-gray-700 text-sm">{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {withdrawStep === 1 && withdrawType === 'all' && (
          <div className="space-y-4">
            <div className="rounded-xl p-4 text-sm space-y-2" style={{ backgroundColor: '#fff7ed' }}>
              <p className="font-semibold text-orange-700">⚠️ توجه</p>
              <p className="text-gray-600 leading-7">با تأیید این عملیات، کل موجودی نقدی ۴٬۵۲۰٬۰۰۰ ریال به حساب بانکی ثبت‌شده واریز خواهد شد. این عملیات قابل بازگشت نیست.</p>
            </div>
            <InputField label="تاریخ واریز" value={withdrawDate} onChange={setWithdrawDate} placeholder="۱۴۰۳/۰۲/۱۵" />
            <div className="flex gap-3">
              <Btn onClick={() => setWithdrawStep(0)} variant="outline">قبلی</Btn>
              <Btn onClick={() => { alert('برداشت با موفقیت انجام شد!'); reset('home') }} variant="dark">تأیید برداشت</Btn>
            </div>
          </div>
        )}

        {withdrawStep === 1 && withdrawType === 'custom' && !withdrawError && (
          <div className="space-y-4">
            <InputField label="مبلغ برداشت (ریال)" value={withdrawAmount} onChange={setWithdrawAmount} placeholder="حداکثر ۳٬۰۰۰٬۰۰۰ ریال" type="number" />
            {withdrawAmount && Number(withdrawAmount) > 3000000 && (
              <div className="rounded-xl p-3 text-sm" style={{ backgroundColor: '#fee2e2', color: '#dc2626' }}>
                مبلغ وارد‌شده از سقف روزانه برداشت (۳٬۰۰۰٬۰۰۰ ریال) بیشتر است.
              </div>
            )}
            <div className="flex gap-3">
              <Btn onClick={() => setWithdrawStep(0)} variant="outline">قبلی</Btn>
              <Btn
                onClick={() => {
                  if (Number(withdrawAmount) > 3000000) { setWithdrawError(true) }
                  else { setWithdrawStep(2) }
                }}
                disabled={!withdrawAmount}
              >
                ادامه
              </Btn>
            </div>
          </div>
        )}

        {withdrawStep === 1 && withdrawType === 'custom' && withdrawError && (
          <div className="space-y-4">
            <div className="flex flex-col items-center gap-3 py-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl" style={{ backgroundColor: '#fee2e2' }}>❌</div>
              <p className="font-bold text-gray-800">خطا در سقف برداشت</p>
              <p className="text-sm text-gray-500 text-center leading-7">مبلغ درخواستی از سقف روزانه برداشت شما بیشتر است. حداکثر مبلغ قابل برداشت در روز ۳٬۰۰۰٬۰۰۰ ریال می‌باشد.</p>
            </div>
            <Btn onClick={() => { setWithdrawError(false); setWithdrawAmount('') }} variant="outline">اصلاح مبلغ</Btn>
            <Btn onClick={() => { setWithdrawStep(2) }} variant="dark">انتخاب تاریخ برداشت آینده</Btn>
          </div>
        )}

        {withdrawStep === 2 && (
          <div className="space-y-4">
            <p className="text-sm font-semibold text-gray-700">انتخاب تاریخ برداشت</p>
            <p className="text-xs text-gray-500 leading-6">در صورت تجاوز از سقف روزانه، می‌توانید تاریخ مشخصی برای واریز انتخاب کنید.</p>
            <InputField label="تاریخ برداشت" value={withdrawDate} onChange={setWithdrawDate} placeholder="مثال: ۱۴۰۳/۰۲/۲۰" />
            <div className="grid grid-cols-3 gap-2">
              {['فردا', 'پس‌فردا', 'هفته آینده'].map((d) => (
                <button key={d} onClick={() => setWithdrawDate(d)}
                  className="border border-gray-200 rounded-lg py-2 text-xs hover:border-orange-400 hover:text-orange-500 transition-colors">
                  {d}
                </button>
              ))}
            </div>
            <div className="rounded-xl border border-gray-100 divide-y divide-gray-100 overflow-hidden text-sm">
              {[['مبلغ', `${Number(withdrawAmount || 0).toLocaleString()} ریال`], ['تاریخ واریز', withdrawDate || '—'], ['حساب مقصد', '۶۱۰۴۳۳۸۸-۱۲۳۴']].map(([k, v]) => (
                <div key={k} className="flex justify-between px-4 py-2.5">
                  <span className="text-gray-500">{k}</span>
                  <span className="font-medium text-gray-800">{v}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <Btn onClick={() => { setWithdrawStep(withdrawError ? 1 : 1); setWithdrawError(false) }} variant="outline">قبلی</Btn>
              <Btn onClick={() => { alert('درخواست برداشت ثبت شد!'); reset('home') }} disabled={!withdrawDate} variant="dark">ثبت درخواست</Btn>
            </div>
          </div>
        )}
      </Card>
      <div className="pb-8" />
    </>
  )

  return null
}