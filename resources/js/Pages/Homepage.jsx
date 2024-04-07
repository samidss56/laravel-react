import NewsList from "@/Components/Homepage/NewsList";
import Pagination from "@/Components/Homepage/Pagination";
import Navbar from "@/Components/Navbar";
import { useDarkMode } from "@/Contexts/DarkMode";
import { Head } from "@inertiajs/react";

export default function Homepage(props) {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <div className={`${darkMode && "dark"}`}>
            <Navbar
                user={props.auth.user}
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />
            <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 dark:bg-light-gray p-10 gap-8">
                <Head title={props.title} />
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                    {props.description}
                </h1>
                <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
                    <NewsList news={props.news.data} darkMode={darkMode} />
                </div>
                <div>
                    <Pagination meta={props.news.meta} darkMode={darkMode} />
                </div>
            </div>
        </div>
    );
}
