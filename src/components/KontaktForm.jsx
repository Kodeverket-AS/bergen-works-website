"use client"; 
import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  FormControlLabel,
} from "@mui/material";


const KontaktForm= () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
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

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!name || !email || !message) {
      setError("Please fill in all fields");
      return;
    }

    console.log("Form Submitted:", { name, email, message, checked });
 
    setName("");
    setEmail("");
    setMessage("");
    setChecked({
      "Åpen plass": false,
      "Fast plass": false,
      Annet: false,
    });
    setError("");
  };
  return (
    <div className="flex flex-col gap-3 p-10 m-3 lg:flex-row bg-white text-black">
      <div className="flex w-full max-w-7xl gap-x-6 flex-col lg:flex-row">
        
        <div className="flex-1 space-y-6">
    
          <Card className="p-6 bg-white rounded-3xl shadow-lg">
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Kom i gang
              </Typography>
              <Typography variant="body1" className="text-lg">
                Er du interessert i å bli en del av fellesskapet eller har du
                noen spørsmål? Fyll ut kontaktskjemaet, så kontakter vi deg
                forløpende.
              </Typography>
            </CardContent>
          </Card>
          {/* Card for Form */}
          <Card className="p-6 bg-white rounded-3xl shadow-lg">
            <CardContent>
              {/* Error message */}
              {error && (
                <Typography
                  variant="body2"
                  color="error"
                  align="center"
                  sx={{ marginBottom: "16px" }}
                >
                  {error}
                </Typography>
              )}
              <form onSubmit={handleSubmit}>
                {/* Navn Field */}
                <TextField
                  label="Navn" // Changed label to Navn
                  type="text"
                  value={name} // Renamed from email to name
                  onChange={(e) => setName(e.target.value)} // Set name
                  fullWidth
                  required
                  margin="normal"
                />
                {/* E-post Field */}
                <TextField
                  label="E-post" // Changed label to E-post
                  type="email"
                  value={email} // Renamed from phone to email
                  onChange={(e) => setEmail(e.target.value)} // Set email
                  fullWidth
                  required
                  margin="normal"
                />
                {/* Melding Field */}
                <TextField
                  label="Melding" // Changed label to Melding
                  multiline
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  fullWidth
                  required
                  margin="normal"
                />
                {/* Checkboxes in Columns */}
                <div style={{ display: "flex", gap: "20px" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked["Åpen plass"]}
                        onChange={handleCheckboxChange}
                        name="Åpen plass"
                      />
                    }
                    label="Åpen plass"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked["Fast plass"]}
                        onChange={handleCheckboxChange}
                        name="Fast plass"
                      />
                    }
                    label="Fast plass"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked["Annet"]}
                        onChange={handleCheckboxChange}
                        name="Annet"
                      />
                    }
                    label="Annet"
                  />
                </div>
                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{
                    marginTop: "16px",
                    width: "auto",
                    padding: "10px 20px",
                    textAlign: "center",
                    backgroundColor: "rgb(37, 58, 26)",
                    "&:hover": {
                      backgroundColor: "rgb(28, 43, 20)",
                    },
                  }}
                >
                  Send Melding
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      
      </div>
    </div>
  );
};
export default KontaktForm;
