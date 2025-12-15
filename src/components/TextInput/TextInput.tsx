import React from "react";
import type { TextInputProps } from "../../types";

import { TextField, colors } from "@mui/material";


export const TextInput: React.FC<TextInputProps> = ({
    onTextChange,
    placeholder = 'Start typing...',
    initialValue = ''
}) => {
    return (
        <>
            <TextField
                fullWidth
                label="Text Input"
                placeholder={placeholder}
                defaultValue={initialValue}
                multiline={true}
                rows={6}
                variant="outlined"
                color="primary"
                onChange={(e) => onTextChange(e.target.value)}
                slotProps={{ input: { style: { color: "white" } } }}
                sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: "white" }, '&:hover fieldset': { borderColor: "gray" }, '&.Mui-focused fieldset': { borderColor: colors.amber[900] }, }, '& .MuiInputLabel-root': { color: "white" }, '& .MuiInputLabel-root.Mui-focused': { color: colors.amber[900] }, '& .MuiInputBase-input::placeholder': { color: "white" } }}
            />
        </>
    );
};
export default TextInput;