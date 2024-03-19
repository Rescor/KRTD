import { I18nextProvider } from "react-i18next";
import { RouterProvider } from "react-router-dom";
import { router } from "./utils/router";
import i18n from "./utils/i18n";

export default function App() {
  return <I18nextProvider i18n={i18n}>
    <RouterProvider router={router} />
  </I18nextProvider>
}
