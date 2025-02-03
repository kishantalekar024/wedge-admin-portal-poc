import { CardContent, CircularProgress, styled } from "@mui/material";
import React from "react";
import {
  LoginFormClasses,
  Button,
  useLogin,
  useNotify,
  useTranslate,
  LoginFormProps,
  Form,
} from "react-admin";

export default function Loginpage(props: LoginFormProps) {
  const { redirectTo, className } = props;
  const [loading, setLoading] = React.useState(false);
  const login = useLogin();
  const translate = useTranslate();
  const notify = useNotify();

  const submit = (values: FormData) => {
    setLoading(true);
    login(values, redirectTo)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        notify(
          typeof error === "string"
            ? error
            : typeof error === "undefined" || !error.message
              ? "ra.auth.sign_in_error"
              : error.message,
          {
            type: "error",
            messageArgs: {
              _:
                typeof error === "string"
                  ? error
                  : error && error.message
                    ? error.message
                    : undefined,
            },
          },
        );
      });
  };
  return (
    <StyledForm
      onSubmit={submit}
      mode="onChange"
      noValidate
      className={className}
      sx={{
        display: "flex",
        flex: 1,
        height: "100vh",

        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardContent className={LoginFormClasses.content}>
        <Button
          variant="contained"
          type="submit"
          color="primary"
          disabled={loading}
          fullWidth
          className={LoginFormClasses.button}
        >
          {loading ? (
            <CircularProgress
              className={LoginFormClasses.icon}
              size={19}
              thickness={3}
            />
          ) : (
            <div>{translate("ra.auth.sign_in")}</div>
          )}
        </Button>
      </CardContent>
    </StyledForm>
  );
}

const PREFIX = "RaLoginForm";
const StyledForm = styled(Form, {
  name: PREFIX,
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  [`& .${LoginFormClasses.content}`]: {
    width: 300,
  },
  [`& .${LoginFormClasses.button}`]: {
    marginTop: theme.spacing(2),
  },
  [`& .${LoginFormClasses.icon}`]: {
    margin: theme.spacing(0.3),
  },
}));
