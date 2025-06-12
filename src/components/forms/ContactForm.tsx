// Global
import { useFormStatus } from "react-dom";
import { ChangeEvent, FormEvent, useState } from "react";

// Email validation and handler
import { handleContactFormSignup } from "@/lib/brevo/contact/handler";
import {
  type ContactFormKeys,
  type ContactFormSchema,
  contactFormSchema,
  contactFormSchemaInitial,
  ContactFormSchemaSubjects,
  contactFormValidateField,
} from "@/schema/brevo";

// User interface
import {
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  CircularProgress,
  Alert,
  Tooltip,
  Snackbar,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Link from "next/link";

export function ContactForm() {
  // Form states
  const [formData, setFormData] = useState<Required<ContactFormSchema>>(contactFormSchemaInitial);
  const [errors, setErrors] = useState<Partial<Record<ContactFormKeys, string | undefined>>>({});
  const [success, setSuccess] = useState<boolean>(false);

  // MUI toast notification
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: "success" | "error" }>({
    open: false,
    message: "",
    severity: "success",
  });

  // Helper function for checking progress status
  const { pending } = useFormStatus();

  // Helper function for quickly validating formData, returns true or false
  const isFormValid = () => contactFormSchema.safeParse(formData).success;

  // Helper function for validating formData when user is typing
  function handleValidate(field: ContactFormKeys, value: string | boolean) {
    const validate = contactFormValidateField(field, value);
    if (validate) setErrors((prev) => ({ ...prev, [validate.field]: validate.error ? validate.error : undefined }));
  }

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, type } = e.target;
    const value = type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;

    // Special rule for handling subject checkboxes with data attributes
    const category = e.target.dataset.category as ContactFormSchemaSubjects;

    // Update formdata and handle early validation for input feedback
    setFormData((prev) => ({ ...prev, [name]: name === "category" ? category : value }));
    handleValidate(name as ContactFormKeys, name === "category" ? category : value);
  }

  // Extends handleChange by also running validation when input field looses focus
  function handleBlur(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name } = e.target;
    handleValidate(name as ContactFormKeys, formData[name as ContactFormKeys]);
  }

  // Handles form submission by running validation, on success will call email handler.
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Start final validation
    const validation = contactFormSchema.safeParse(formData);
    if (!validation.success) {
      // Schema validation during form submit handling failed
      setErrors({ message: "Sjekk at alle felt er fylt ut riktig" });
      return;
    }

    if (validation.success) {
      try {
        const res = await handleContactFormSignup(validation.data);
        if (res?.code === 200) {
          setFormData(contactFormSchemaInitial);
          setSuccess(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <div id="contact-form" className="flex justify-center items-center px-4 py-10 bg-white text-black">
      <div className="flex flex-col lg:flex-row w-full max-w-4xl gap-x-6">
        <div className="flex-1 space-y-6">
          <Card className="py-6 bg-white rounded-3xl shadow-lg">
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Kom i gang
              </Typography>
              <Typography variant="body1" className="text-lg">
                Er du interessert i å bli en del av fellesskapet eller har du noen spørsmål? Fyll ut kontaktskjemaet, så
                kontakter vi deg forløpende.
              </Typography>
            </CardContent>
          </Card>
          <Card className="py-6 bg-white rounded-3xl shadow-lg">
            <CardContent>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Navn"
                  name="name"
                  type="text"
                  fullWidth
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  margin="normal"
                  placeholder="Skriv inn ditt navn"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                  error={!!errors.name}
                  helperText={errors.name}
                />
                <TextField
                  label="E-post"
                  name="email"
                  type="email"
                  fullWidth
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  margin="normal"
                  placeholder="din.epost@eksempel.no"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                  error={!!errors.email}
                  helperText={errors.email}
                />
                <TextField
                  label="Telefonnummer"
                  name="phone"
                  type="tel"
                  fullWidth
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  margin="normal"
                  placeholder="Skriv inn ditt telefonnummer"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                  error={!!errors.phone}
                  helperText={errors.phone}
                />
                <TextField
                  label="Melding"
                  name="message"
                  multiline
                  rows={4}
                  fullWidth
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  margin="normal"
                  placeholder="Skriv din melding her..."
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                  error={!!errors.message}
                  helperText={errors.message}
                />
                <div className="flex flex-col gap-4 my-4 p-4 border rounded-lg border-gray-300">
                  <Typography variant="subtitle1" className="flex items-center gap-2">
                    Kategori
                    <Tooltip title="Velg alle alternativer som passer for deg">
                      <InfoIcon fontSize="small" color="action" />
                    </Tooltip>
                  </Typography>
                  <span className="flex flex-wrap gap-5">
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.category === "åpen plass"}
                          onChange={handleChange}
                          name="category"
                          slotProps={{
                            input: {
                              "data-category": "åpen plass",
                            } as React.InputHTMLAttributes<HTMLInputElement>,
                          }}
                        />
                      }
                      label="Åpen plass"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.category === "fast plass"}
                          onChange={handleChange}
                          name="category"
                          slotProps={{
                            input: {
                              "data-category": "fast plass",
                            } as React.InputHTMLAttributes<HTMLInputElement>,
                          }}
                        />
                      }
                      label="Fast plass"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.category === "annet"}
                          onChange={handleChange}
                          name="category"
                          slotProps={{
                            input: {
                              "data-category": "annet",
                            } as React.InputHTMLAttributes<HTMLInputElement>,
                          }}
                        />
                      }
                      label="Annet"
                    />
                  </span>
                </div>
                <div
                  className={`flex flex-col gap-4 my-4 p-4 border rounded-lg border-gray-300 ${errors.consent ? "border-red-500" : ""}`}
                >
                  <h3>Samtykke til lagring av data</h3>
                  <FormControlLabel
                    control={
                      <Checkbox id="consent" name="consent" checked={formData.consent} onChange={handleChange} />
                    }
                    label="Jeg gir samtykke til min kontakt informasjon blir lagret for å kunne kontakte meg. Du kan trekke dette samtykket tilbake når som helst."
                  />
                  <Link href={"/personvern"} className="text-sm text-blue-700">
                    Les vår personvernerklæring
                  </Link>
                </div>
                {errors.consent && (
                  <p className="pl-2 text-sm text-red-400">
                    Du må godta vår personvernærklaring for lagring av e-post før du bruker kontakt oss skjema
                  </p>
                )}
                {success ? (
                  <p className="text-center py-4">Takk for din hendvendelse, vi tar kontakt så fort som mulig!</p>
                ) : (
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={!isFormValid() || success}
                    sx={{
                      marginTop: "16px",
                      width: "auto",
                      padding: "10px 20px",
                      textAlign: "center",
                      backgroundColor: "rgb(37, 58, 26)",
                      "&:hover": {
                        backgroundColor: "rgb(28, 43, 20)",
                      },
                      borderRadius: 2,
                    }}
                  >
                    {pending ? <CircularProgress size={24} color="inherit" /> : "Send Melding"}
                  </Button>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => {
          setSnackbar({ ...snackbar, open: false });
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => {
            setSnackbar({ ...snackbar, open: false });
          }}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
