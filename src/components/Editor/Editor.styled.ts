import { styled } from "@stitches/react";

export const Button = styled("button", {
  all: "unset",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  width: "3rem",
  height: "3rem",
  marginRight: "0.5rem",
  borderRadius: "0.5rem",
  color: "#2e2e2e",
  transition: "color ease-out 0.1s",
  fontSize: "1.6rem",

  svg: {
    width: "60%",
    fill: "#2e2e2e",
  },

  "&:hover": {
    boxShadow: "inset 0 0 1rem 10.5rem rgba(0,0,0,0.05)",
    transition: "box-shadow ease-out 0.1s",
  },

  "&:active": {
    boxShadow: "inset 0 0 1rem 0 rgba(0,0,0,0.1)",
  },

  "&:last-child": {
    marginRight: "0",
  },

  variants: {
    bold: {
      true: {
        fontWeight: "bold",
      },
    },
    italic: {
      true: {
        fontStyle: "italic",
      },
    },
    underline: {
      true: {
        textDecoration: "underline",
      },
    },
    active: {
      true: {
        color: "#63dab3",

        line: {
          stroke: "#63dab3",
        },
      },
    },
  },
});

export const EditorWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "2rem",
  margin: "2rem auto",
  padding: "2rem",
  borderRadius: "0.5rem",
  maxWidth: "50rem",
});

export const Panel = styled("div", {
  display: "flex",
  boxShadow: "0 0.5rem 2rem 0 rgba(0,0,0,0.1)",
  borderRadius: "0.5rem",
  padding: "0.5rem 0",
  overflow: "hidden"
});

export const PanelSection = styled("div", {
  display: "flex",
  borderRight: "0.1rem solid #eeeeee",
  padding: "0 0.5rem",
});

export const EditorContent = styled("div", {
  minHeight: "10rem",
  outline: "none",
  fontSize: "1.6rem",
  lineHeight: "1.6",

  variants: {
    bold: {
      true: {
        fontWeight: "bold",
      },
    },
    italic: {
      true: {
        fontStyle: "italic",
      },
    },
    underline: {
      true: {
        textDecoration: "underline",
      },
    },
    align: {
      left: {
        textAlign: "left",
      },
      center: {
        textAlign: "center",
      },
      right: {
        textAlign: "right",
      },
    },
  },
});
