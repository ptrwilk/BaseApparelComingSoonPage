import { Box, Button, InputAdornment, styled } from "@mui/material";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { ReactComponent as IconArrow } from "../assets/icon-arrow.svg";
import { ReactComponent as IconError } from "../assets/icon-error.svg";

const color = "hsl(0, 36%, 70%)";

const TextFieldStyled = styled(TextField)<TextFieldProps>(({ error }) => ({
  width: "100%",
  ".MuiOutlinedInput-root": {
    color: color,
    "&.Mui-focused fieldset": {
      borderColor: color,
    },
    "&.Mui-error fieldset": {
      borderColor: "hsl(0, 93%, 68%)",
    },
    "&:hover fieldset": {
      borderColor: color,
    },
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: "hsl(0, 36%, 85%)",
      borderWidth: 1.5,
      borderRadius: "2rem",
    },
    ".MuiOutlinedInput-input": {
      padding: `0.8rem ${error ? "0" : "1.5rem"}`,
    },
  },
}));

interface IButtonTextField {
  error?: boolean;
  errorMessage?: string;
  className?: string;
  text?: string;
  onTextChange?: (text: string) => void;
  onClick?: () => void;
}

const ButtonTextField = ({
  error,
  errorMessage,
  className,
  text,
  onTextChange,
  onClick,
}: IButtonTextField) => {
  return (
    <Box
      className={className}
      sx={{ position: "relative", width: "max-content" }}
    >
      <TextFieldStyled
        value={text ?? ""}
        onChange={(e) => onTextChange?.(e.target.value)}
        helperText={error ? errorMessage : undefined}
        error={error}
        placeholder="Email Address"
        InputProps={{
          startAdornment: !error ? undefined : (
            <InputAdornment position="start">
              <IconError />
            </InputAdornment>
          ),
        }}
      />
      <Button
        onClick={onClick}
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          padding: ".85rem 2rem",
          borderRadius: "2rem",
          background:
            "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))",
          boxShadow: "0px 5px 15px hsl(0, 74%, 74%, 0.5)",

          "&:hover": {
            boxShadow: "0px 5px 15px hsl(0, 74%, 74%, 0.9)",
          },
        }}
        variant="contained"
      >
        <IconArrow />
      </Button>
    </Box>
  );
};

export default ButtonTextField;
