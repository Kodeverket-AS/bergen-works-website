"use client";
import React, { useState } from "react";
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
import InfoIcon from '@mui/icons-material/Info';
import { useForm } from 'react-hook-form';

const KontaktForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
    const [checked, setChecked] = useState({
        "Åpen plass": false,
        "Fast plass": false,
        Annet: false,
    });

    const handleCheckboxChange = (event) => {
        setChecked({
            ...checked,
            [event.target.name]: event.target.checked,
        });
    };

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...data, checked }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Noe gikk galt');
            }

            setSnackbar({
                open: true,
                message: 'Takk for din henvendelse! Vi vil kontakte deg snart.',
                severity: 'success'
            });
            reset();
            setChecked({
                "Åpen plass": false,
                "Fast plass": false,
                Annet: false,
            });
        } catch (err) {
            setSnackbar({
                open: true,
                message: err.message || 'Kunne ikke sende meldingen. Vennligst prøv igjen senere.',
                severity: 'error'
            });
        } finally {
            setLoading(false);
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    return (
        <div
            id='contact-form'
            className='flex justify-center items-center px-4 py-10 bg-white text-black'
        >
            <div className='flex flex-col lg:flex-row w-full max-w-4xl gap-x-6'>
                <div className='flex-1 space-y-6'>
                    <Card className='py-6 bg-white rounded-3xl shadow-lg'>
                        <CardContent>
                            <Typography variant='h5' gutterBottom>
                                Kom i gang
                            </Typography>
                            <Typography variant='body1' className='text-lg'>
                                Er du interessert i å bli en del av fellesskapet
                                eller har du noen spørsmål? Fyll ut
                                kontaktskjemaet, så kontakter vi deg forløpende.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card className='py-6 bg-white rounded-3xl shadow-lg'>
                        <CardContent>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <TextField
                                    label='Navn'
                                    type='text'
                                    fullWidth
                                    required
                                    margin='normal'
                                    disabled={loading}
                                    placeholder="Skriv inn ditt navn"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 2
                                        }
                                    }}
                                    {...register('name', { 
                                        required: 'Navn er påkrevd',
                                        minLength: {
                                            value: 2,
                                            message: 'Navn må være minst 2 tegn'
                                        }
                                    })}
                                    error={!!errors.name}
                                    helperText={errors.name?.message}
                                />
                                <TextField
                                    label='E-post'
                                    type='email'
                                    fullWidth
                                    required
                                    margin='normal'
                                    disabled={loading}
                                    placeholder="din.epost@eksempel.no"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 2
                                        }
                                    }}
                                    {...register('email', {
                                        required: 'E-post er påkrevd',
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: 'Ugyldig e-postadresse'
                                        }
                                    })}
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
                                />
                                <TextField
                                    label='Melding'
                                    multiline
                                    rows={4}
                                    fullWidth
                                    required
                                    margin='normal'
                                    disabled={loading}
                                    placeholder="Skriv din melding her..."
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 2
                                        }
                                    }}
                                    {...register('message', {
                                        required: 'Melding er påkrevd',
                                        minLength: {
                                            value: 10,
                                            message: 'Meldingen må være minst 10 tegn'
                                        }
                                    })}
                                    error={!!errors.message}
                                    helperText={errors.message?.message}
                                />
                                <div className="mt-4 mb-2">
                                    <Typography variant="subtitle1" className="flex items-center gap-2">
                                        Kategori
                                        <Tooltip title="Velg alle alternativer som passer for deg">
                                            <InfoIcon fontSize="small" color="action" />
                                        </Tooltip>
                                    </Typography>
                                </div>
                                <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={checked["Åpen plass"]}
                                                onChange={handleCheckboxChange}
                                                name='Åpen plass'
                                                disabled={loading}
                                            />
                                        }
                                        label='Åpen plass'
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={checked["Fast plass"]}
                                                onChange={handleCheckboxChange}
                                                name='Fast plass'
                                                disabled={loading}
                                            />
                                        }
                                        label='Fast plass'
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={checked["Annet"]}
                                                onChange={handleCheckboxChange}
                                                name='Annet'
                                                disabled={loading}
                                            />
                                        }
                                        label='Annet'
                                    />
                                </div>
                                <Button
                                    type='submit'
                                    variant='contained'
                                    color='primary'
                                    disabled={loading}
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
                                    {loading ? (
                                        <CircularProgress size={24} color="inherit" />
                                    ) : (
                                        "Send Melding"
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert 
                    onClose={handleCloseSnackbar} 
                    severity={snackbar.severity}
                    sx={{ width: '100%' }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default KontaktForm;
