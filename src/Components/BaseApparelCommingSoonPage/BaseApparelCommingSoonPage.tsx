import { Box, Typography, useMediaQuery } from "@mui/material";
import styles from "./styles.module.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import ButtonTextField from "../ButtonTextField";
import HeroDesktop from "../../assets/hero-desktop.jpg";
import HeroMobile from "../../assets/hero-mobile.jpg";
import { useState } from "react";

const BaseApparelCommingSoonPage = () => {
  const isMobile = useMediaQuery("(max-width : 1000px)");

  const [email, setEmail] = useState<string | undefined>();
  const [validation, setValidation] = useState<{
    error?: boolean;
    message?: string;
  }>({});

  const validateEmail = (value?: string) => {
    if (!value) return false;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value!);
  };

  const validateEmpty = (value?: string) => (value ? true : false);

  const handleBtnClick = () => {
    if (!validateEmpty(email)) {
      setValidation({ error: true, message: "Email can not be empty" });
    } else if (!validateEmail(email)) {
      setValidation({ error: true, message: "Please provide a valid email" });
    } else {
      setValidation({});
    }
  };

  return (
    <Box className={styles["container"]}>
      {isMobile && <HeaderLogo />}
      {isMobile && <img className={styles["img"]} src={HeroMobile} />}
      <Box className={styles["content"]}>
        {!isMobile && <HeaderLogo />}
        <Typography className={styles["title"]} variant="h1">
          We're
          <span>
            coming
            <br />
            soon
          </span>
        </Typography>
        <Typography className={styles["text"]}>
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </Typography>
        <ButtonTextField
          className={styles["btn-text-field"]}
          text={email}
          onTextChange={(text) => setEmail(text)}
          onClick={handleBtnClick}
          error={validation?.error}
          errorMessage={validation?.message}
        ></ButtonTextField>
      </Box>
      {!isMobile && <img className={styles["img"]} src={HeroDesktop} />}
    </Box>
  );
};

const HeaderLogo = () => (
  <Box className={styles["header"]}>
    <Logo />
  </Box>
);

export default BaseApparelCommingSoonPage;
