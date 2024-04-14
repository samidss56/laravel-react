import Navbar from "@/Components/Navbar";
import { useDarkMode } from "@/Contexts/DarkMode";
import { Head } from "@inertiajs/react";
import React from "react";

const SearchResults = ({ results, auth, title, description }) => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    return (
        <div className={`${darkMode && "dark"}`}>
            <Navbar
                user={auth.user}
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />
            <Head title={title} />
            <div className=" bg-gray-100 dark:bg-light-gray min-h-screen p-10 gap-8">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-8">
                    {description}
                </h1>
                <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
                    {results.length > 0 ? (
                        results.map((result, index) => (
                            <div
                                key={index}
                                className="card w-full h-full bg-white dark:bg-dark-gray shadow-xl hover:scale-[1.05] transition-all duration-300 cursor-pointer flex flex-col justify-between"
                            >
                                <figure>
                                    <img
                                        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                        alt="Shoes"
                                    />
                                </figure>
                                <div className="card-body flex flex-col justify-between">
                                    <div className="flex flex-col gap-4">
                                        <h2 className="card-title text-gray-800 dark:text-white">
                                            {result.title}
                                            <div className="badge badge-secondary">
                                                NEW
                                            </div>
                                        </h2>
                                        <p className="text-gray-800 dark:text-white">
                                            {result.description}
                                        </p>
                                        <p className="font-medium text-gray-800 dark:text-white">
                                            {result.category}
                                        </p>
                                    </div>
                                    <div className="card-actions justify-end mt-3">
                                        <div className="badge badge-outline p-4 font-semibold text-gray-800 dark:text-white">
                                            {result.author}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                            No results found.
                        </h1>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchResults;
