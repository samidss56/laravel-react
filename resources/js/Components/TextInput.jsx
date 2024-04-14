import { useDarkMode } from "@/Contexts/DarkMode";
import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    { type = "text", className = "", isFocused = false, ...props },
    ref
) {
    const { darkMode } = useDarkMode();

    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={`border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-lg mb-2 ${
                darkMode &&
                "dark:bg-light-gray dark:text-gray-100 dark:border-gray-600"
            } ${className}`}
            ref={input}
        />
    );
});
