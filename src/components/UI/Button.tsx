import { LoadingButton as MUIButton } from "@mui/lab";
import { FormEvent, ReactNode } from "react";

interface BUTTON_PROPS {
  txt: string;
  isLoading?: boolean;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  disabled?: boolean;
  endIcon?: ReactNode;
  fullWidth?: boolean;
  href?: string;
  size?: "small" | "medium" | "large";
  startIcon?: ReactNode;
  sx?: object;
  variant?: "contained" | "outlined" | "text";
  onClick?: (_e: FormEvent<HTMLButtonElement>) => void;
  type?: "button" | "reset" | "submit";
  loadingPos?: "start" | "end" | "center";
  loadingIndicator?: ReactNode;
}

const Button = (props: BUTTON_PROPS) => {
  const {
    txt = "Submit",
    isLoading = false,
    color = "primary",
    disabled = false,
    endIcon,
    fullWidth = false,
    href,
    onClick,
    size = "medium",
    startIcon,
    sx,
    type = "button",
    variant = "contained",
    loadingPos = "start",
    loadingIndicator
  } = props;
  return (
    <MUIButton
      variant={variant}
      color={color}
      disabled={disabled}
      endIcon={endIcon}
      fullWidth={fullWidth}
      href={href}
      onClick={onClick}
      size={size}
      startIcon={startIcon}
      sx={{ ...sx, borderRadius: "5px" }}
      type={type}
      loading={isLoading}
      loadingPosition={loadingPos}
      loadingIndicator={loadingIndicator}
    >
      {txt}
    </MUIButton>
  );
};

export default Button;
