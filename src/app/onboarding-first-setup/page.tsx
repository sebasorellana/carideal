import type { Metadata } from "next";
import {
  mileageRange,
  monthlyPaymentRange,
  yearRange,
} from "@/components/filters/filterRanges";
import formStyles from "@/components/forms/form-controls.module.css";
import { FormField } from "@/components/forms/FormField";
import { LocationFields } from "@/components/forms/LocationFields";
import { RangeSlider } from "@/components/forms/RangeSlider";
import { SelectField } from "@/components/forms/SelectField";
import { SearchIcon } from "@/components/icons/SearchIcon";
import { ScreenIntro } from "@/components/layout/ScreenIntro";
import layoutStyles from "@/components/layout/screen-layout.module.css";
import { BorderedPanel } from "@/components/ui/BorderedPanel";
import styles from "./page.module.css";

const primaryColorSwatches: Record<string, string> = {
  Amarillo: "#F5C518",
  Azul: "#1E5AA8",
  Beige: "#E4D5B7",
  Blanco: "#FFFFFF",
  Dorado: "#C8A951",
  Gris: "#9B9B9B",
  Marrón: "#6B4226",
  Naranja: "#F2711C",
  Negro: "#111111",
  Plata: "#C7C9CB",
  Rojo: "#D0043B",
  Rosa: "#F2A3C4",
};

const primaryColors = Object.keys(primaryColorSwatches);

export const metadata: Metadata = {
  title: "Encontremos tu próximo auto",
  description:
    "Configura tus preferencias de modelo, año, kilometraje y mensualidad.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function OnboardingFirstSetupPage() {
  return (
    <main className={`${layoutStyles.page} ${styles.page}`}>
      <section
        className={layoutStyles.content}
        aria-labelledby="onboarding-title"
      >
        <ScreenIntro
          title={
            <>
              Encontremos
              <br />
              tu próximo auto
            </>
          }
          titleId="onboarding-title"
        />

        <form
          action="/car-list"
          aria-label="Preferencias del automóvil"
          className={styles.form}
          method="get"
        >
          <FormField
            autoComplete="off"
            hideLabel
            icon={<SearchIcon />}
            id="vehicle-search"
            label="Buscar"
            name="vehicleSearch"
            placeholder="Marca o modelo"
            size="compact"
            type="search"
          />

          <LocationFields />

          <BorderedPanel compact>
            <RangeSlider
              label="Rango de año del automóvil"
              maximum={yearRange.maximum}
              minimum={yearRange.minimum}
              name="year"
            />
          </BorderedPanel>

          <BorderedPanel compact>
            <RangeSlider
              format="kilometers"
              label="Kilometraje deseado"
              maximum={mileageRange.maximum}
              minimum={mileageRange.minimum}
              name="mileage"
              step={mileageRange.step}
            />
          </BorderedPanel>

          <BorderedPanel compact>
            <RangeSlider
              format="currency"
              label="Mensualidad deseada"
              maximum={monthlyPaymentRange.maximum}
              minimum={monthlyPaymentRange.minimum}
              name="monthlyPayment"
              step={monthlyPaymentRange.step}
            />
          </BorderedPanel>

          <SelectField
            id="primary-color"
            label="Color"
            name="primaryColor"
            openDirection="up"
            options={primaryColors}
            placeholder="Selecciona un color"
            required
            size="compact"
            swatches={primaryColorSwatches}
          />

          <div className={styles.submit}>
            <button
              className={`${formStyles.primaryButton} ${formStyles.pill}`}
              type="submit"
            >
              Buscar autos
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
