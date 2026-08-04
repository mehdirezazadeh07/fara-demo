# React 19 + MUI 9 + RTL + Global Header

Starter ساده با:

- React 19
- TypeScript
- Vite
- MUI 9
- React Router 7
- RTL
- Emotion RTL
- IranSans
- Header سراسری

## نصب

```bash
npm install
```

## اجرا

```bash
npm run dev
```

## Routeها

تمام Routeها در یک فایل هستند:

```text
src/routes.tsx
```

برای اضافه کردن صفحه:

```tsx
import Settings from "./pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);
```

## Header سراسری

Header در:

```text
src/components/Header/Header.tsx
```

قرار دارد و در `App.tsx` بالای `<Outlet />` رندر می‌شود.

بنابراین Header در تمام Routeهای زیر App قابل مشاهده است.

## Navigation

داخل هر کامپوننت:

```tsx
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

navigate("/profile");
```

مثلاً:

```tsx
<Button onClick={() => navigate("/profile")}>
  پروفایل
</Button>
```

## فونت

فایل:

```text
IranSans.woff2
```

را در:

```text
public/fonts/IranSans.woff2
```

قرار دهید.
