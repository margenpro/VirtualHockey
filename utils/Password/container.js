import React, { useRef, useState, useCallback } from "react";
import { Layout } from "./layout";
import { useFocusEffect } from "@react-navigation/native";

export const Password = ({
  tag,
  passInputHandler,
  wrongPassword,
  textInput,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const passInput = useRef();
  const showPasswordHandler = (newValue) => {
    setShowPassword(newValue);
  };

  useFocusEffect(
    useCallback(() => {
      passInput.current.clear();
    }, [])
  );

  return (
    <Layout
      tag={tag}
      passInputHandler={passInputHandler}
      wrongPassword={wrongPassword}
      showPassword={showPassword}
      showPasswordHandler={showPasswordHandler}
      passInput={passInput}
    />
  );
};
