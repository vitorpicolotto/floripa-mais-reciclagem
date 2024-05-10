import { styled } from "@mui/material";

export const PageTitle = styled("h1")({
    fontSize: "2.5rem",
    display: "flex",
    justifyContent: "center",
    color: "#f6fff8"
})

export const FormComponent = styled("form")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "1rem",
    gap: "1rem",
    color: "#252323",
    fontSize: "1.4rem"
})

export const InputWrapper = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column"
})