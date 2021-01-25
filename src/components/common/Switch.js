import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

export const Switch = (props) => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const ThemeSwitcher = () => {
          setIsDarkMode(!isDarkMode);
          props.clicked(!isDarkMode);
    }
    return (
        <DarkModeToggle
      onChange={ThemeSwitcher}
      checked={isDarkMode}
      size={60}
    />
    );
}