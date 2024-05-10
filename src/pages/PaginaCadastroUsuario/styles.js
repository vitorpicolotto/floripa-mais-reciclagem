import { styled } from "@mui/material";

export const PageTitle = styled("h1")({
    fontSize: "2.5rem",
    display: "flex",
    justifyContent: "center",
    marginBottom: "1.2rem",
    color: "#f6fff8"
})

export const FormComponent = styled("form")({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    fontSize: "1.5rem"
})

export const InputWrapper = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column"
})
