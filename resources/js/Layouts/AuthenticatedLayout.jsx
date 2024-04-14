import { useDarkMode } from "@/Contexts/DarkMode";
import Navbar from "@/Components/Navbar";

export default function Authenticated({ user, header, children }) {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <div className={`${darkMode && "dark"}`}>
            <div className="min-h-screen bg-gray-100 dark:bg-light-gray">
                <Navbar
                    user={user}
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                />

                {header && (
                    <header className="bg-white shadow dark:bg-light-gray">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}

                <main>{children}</main>
            </div>
        </div>
    );
}
