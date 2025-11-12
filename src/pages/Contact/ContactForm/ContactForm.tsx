import { useId, useMemo, useState, type FormEvent } from "react";
import styles from "./ContactForm.module.scss";
import { getRecaptchaToken } from "@/services/recaptcha";
import { submitContactRequest } from "@/services/contactApi";

type NeedValue = "audit" | "dev" | "maintenance" | "seo";

export type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  need: NeedValue;
  message: string;
  rgpd: boolean;
};

type ContactFormProps = {
  id?: string;
  textUnderForm: string;
  onSubmit?: (data: ContactFormData) => Promise<void> | void;
  labels?: Partial<{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    needTitle: string;
    needs: Record<NeedValue, string>;
    message: string;
    rgpd: string;
    submit: string;
  }>;
};

const DEFAULT_LABELS: Required<ContactFormProps>["labels"] = {
  firstName: "Nom",
  lastName: "Prénom",
  email: "E-mail",
  phone: "Téléphone",
  needTitle: "De quoi avez-vous besoin",
  needs: {
    audit: "Audit site",
    dev: "Développement web / Application",
    maintenance: "Maintenance",
    seo: "SEO",
  },
  message: "Votre message",
  rgpd: "J’accepte que mes informations soient collectées et utilisées conformément à la politique de confidentialité.",
  submit: "Envoyer",
};

function isEmailValid(value: string): boolean {
  // Regex volontairement raisonnable
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function isPhoneValid(value: string): boolean {
  if (!value) return true;
  return /^[+\d][\d\s.-]{5,}$/.test(value.trim());
}

export default function ContactForm({
  id,
  textUnderForm,
  onSubmit,
  labels,
}: ContactFormProps) {
  const formIdPrefix = useId();
  const formId = id ?? `contact-form-${formIdPrefix}`;
  const L = useMemo(() => ({ ...DEFAULT_LABELS, ...(labels ?? {}) }), [labels]);

  const [data, setData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    need: "audit",
    message: "",
    rgpd: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [globalError, setGlobalError] = useState<string | null>(null);

  function validate(current: ContactFormData) {
    const nextErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (current.firstName.trim().length < 2) nextErrors.firstName = "Nom trop court.";
    if (current.lastName.trim().length < 2) nextErrors.lastName = "Prénom trop court.";
    if (!isEmailValid(current.email)) nextErrors.email = "Adresse e-mail invalide.";
    if (!isPhoneValid(current.phone ?? "")) nextErrors.phone = "Numéro invalide.";
    if (current.message.trim().length < 20) nextErrors.message = "Message trop court (20 caractères min).";
    if (!current.rgpd) nextErrors.rgpd = "Veuillez accepter le traitement des données.";
    return nextErrors;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setGlobalError(null);

    const nextErrors = validate(data);
    setErrors(nextErrors);

    const firstErrorKey = Object.keys(nextErrors)[0] as keyof ContactFormData | undefined;
    if (firstErrorKey) {
      const el = document.getElementById(`${formId}-${String(firstErrorKey)}`);
      el?.focus();
      return;
    }

    try {
      setStatus("submitting");
      if (onSubmit) {
        await onSubmit(data);
      } else {
        const token = await getRecaptchaToken("contact_form");
        await submitContactRequest(data, token);
      }
      setStatus("success");
      // Reset simple (on garde le besoin sélectionné)
      setData((prev) => ({ ...prev, firstName: "", lastName: "", email: "", phone: "", message: "", rgpd: false }));
      const successEl = document.getElementById(`${formId}-success`);
      successEl?.focus();
    } catch (err) {
      setStatus("error");
      setGlobalError(err instanceof Error ? err.message : "Une erreur est survenue.");
      const errorEl = document.getElementById(`${formId}-global-error`);
      errorEl?.focus();
    } finally {
      setStatus("idle");
    }
  }

  return (
    <form id={formId} className={styles.form} onSubmit={handleSubmit} noValidate>
      {globalError && (
        <div
          id={`${formId}-global-error`}
          className={styles.globalError}
          role="alert"
          tabIndex={-1}
        >
          {globalError}
        </div>
      )}
      {status === "success" && (
        <div
          id={`${formId}-success`}
          className={styles.success}
          role="status"
          tabIndex={-1}
        >
          Votre message a bien été envoyé.
        </div>
      )}

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor={`${formId}-firstName`} className={styles.label}>{L.firstName}</label>
          <input
            id={`${formId}-firstName`}
            className={styles.input}
            placeholder={L.firstName}
            name="firstName"
            type="text"
            autoComplete="family-name"
            required
            aria-invalid={!!errors.firstName || undefined}
            aria-describedby={errors.firstName ? `${formId}-firstName-error` : undefined}
            value={data.firstName}
            onChange={(e) => setData((p) => ({ ...p, firstName: e.target.value }))}
          />
          {errors.firstName && (
            <p id={`${formId}-firstName-error`} className={styles.error} role="alert">
              {errors.firstName}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor={`${formId}-lastName`} className={styles.label}>{L.lastName}</label>
          <input
            id={`${formId}-lastName`}
            className={styles.input}
            placeholder={L.lastName}
            name="lastName"
            type="text"
            autoComplete="given-name"
            required
            aria-invalid={!!errors.lastName || undefined}
            aria-describedby={errors.lastName ? `${formId}-lastName-error` : undefined}
            value={data.lastName}
            onChange={(e) => setData((p) => ({ ...p, lastName: e.target.value }))}
          />
          {errors.lastName && (
            <p id={`${formId}-lastName-error`} className={styles.error} role="alert">
              {errors.lastName}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor={`${formId}-email`} className={styles.label}>{L.email}</label>
          <input
            id={`${formId}-email`}
            className={styles.input}
            placeholder={L.email}
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={!!errors.email || undefined}
            aria-describedby={errors.email ? `${formId}-email-error` : undefined}
            value={data.email}
            onChange={(e) => setData((p) => ({ ...p, email: e.target.value }))}
          />
          {errors.email && (
            <p id={`${formId}-email-error`} className={styles.error} role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor={`${formId}-phone`} className={styles.label}>{L.phone}</label>
          <input
            id={`${formId}-phone`}
            className={styles.input}
            placeholder={L.phone}
            name="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={!!errors.phone || undefined}
            aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
            value={data.phone}
            onChange={(e) => setData((p) => ({ ...p, phone: e.target.value }))}
          />
          {errors.phone && (
            <p id={`${formId}-phone-error`} className={styles.error} role="alert">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <fieldset className={styles.fieldset} aria-describedby={`${formId}-need-desc`}>
        <legend className={styles.legend}>{L.needTitle}</legend>
        {/*<div id={`${formId}-need-desc`} className="sr-only">Choix unique</div>*/}
        <div className={styles.radios} role="radiogroup" aria-label={L.needTitle}>
          {(["audit", "dev", "maintenance", "seo"] as NeedValue[]).map((value) => (
            <label key={value} className={styles.radio}>
              <input
                type="radio"
                name="need"
                value={value}
                checked={data.need === value}
                onChange={() => setData((p) => ({ ...p, need: value }))}
              />
              <span>{L.needs?.[value] ?? value}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className={styles.field}>
        <label htmlFor={`${formId}-message`} className={styles.label}>{L.message}</label>
        <textarea
          id={`${formId}-message`}
          className={styles.textarea}
          placeholder={L.message}
          name="message"
          rows={6}
          required
          aria-invalid={!!errors.message || undefined}
          aria-describedby={errors.message ? `${formId}-message-error` : undefined}
          value={data.message}
          onChange={(e) => setData((p) => ({ ...p, message: e.target.value }))}
        />
        {errors.message && (
          <p id={`${formId}-message-error`} className={styles.error} role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <div className={styles.consent}>
        <label className={styles.checkboxLabel}>
          <input
            id={`${formId}-rgpd`}
            type="checkbox"
            checked={data.rgpd}
            onChange={(e) => setData((p) => ({ ...p, rgpd: e.target.checked }))}
            aria-invalid={!!errors.rgpd || undefined}
            aria-describedby={errors.rgpd ? `${formId}-rgpd-error` : undefined}
          />
          <span>{L.rgpd}</span>
        </label>
        {errors.rgpd && (
          <p id={`${formId}-rgpd-error`} className={styles.error} role="alert">
            {errors.rgpd}
          </p>
        )}
      </div>

      <div className={styles.actions}>
        <button
          type="submit"
          className={styles.submit}
          disabled={status === "submitting"}
          aria-busy={status === "submitting" || undefined}
        >
          {L.submit}
        </button>
      </div>

      <p className={styles.note}>{textUnderForm} <a href="/mentions-legales#confidential">Politique de Confidentialité</a></p>
    </form>
  );
}
