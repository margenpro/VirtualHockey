import React, { useState } from "react";
import { Layout } from "./layout";

export const Password = ({
  tag,
  passInputHandler,
  wrongPassword,
  textInput,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordHandler = (newValue) => {
    setShowPassword(newValue);
  };

  return (
    <Layout
      tag={tag}
      passInputHandler={passInputHandler}
      wrongPassword={wrongPassword}
      showPassword={showPassword}
      showPasswordHandler={showPasswordHandler}
      textInput={textInput}
    />
  );
};
