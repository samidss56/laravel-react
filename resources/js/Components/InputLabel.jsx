import { useDarkMode } from "@/Contexts/DarkMode";

export default function InputLabel({
    value,
    className = "",
    children,
    ...props
}) {
    const { darkMode } = useDarkMode();

    return (
        <div className={`${darkMode && "dark"}`}>
            <label
                {...props}
                className={
                    `block font-medium text-sm text-gray-700 dark:text-white mb-2` +
                    className
                }
            >
                {value ? value : children}
            </label>
        </div>
    );
}
