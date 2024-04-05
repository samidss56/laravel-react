import React from "react";
import { Link } from "@inertiajs/react";

const Navbar = ({ user, darkMode, toggleDarkMode }) => {
    return (
        <div className={`${darkMode && "dark"}`}>
            <div className="navbar bg-white dark:bg-dark-gray sticky top-0 z-50 shadow-lg">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl text-gray-800 dark:text-white">
                        News Portal
                    </a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control ">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered w-32 focus:border-light-gray text-gray-800 border-light-gray md:w-auto bg-white rounded-full dark:bg-transparent dark:border-white dark:text-white dark:focus:border-white"
                        />
                    </div>
                    <label className="swap swap-rotate">
                        <button
                            className="theme-controller"
                            onClick={toggleDarkMode}
                        />
                        {darkMode ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="main-grid-item-icon"
                                fill="white"
                                stroke="white"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            >
                                <circle cx="12" cy="12" r="5" />
                                <line x1="12" x2="12" y1="1" y2="3" />
                                <line x1="12" x2="12" y1="21" y2="23" />
                                <line x1="4.22" x2="5.64" y1="4.22" y2="5.64" />
                                <line
                                    x1="18.36"
                                    x2="19.78"
                                    y1="18.36"
                                    y2="19.78"
                                />
                                <line x1="1" x2="3" y1="12" y2="12" />
                                <line x1="21" x2="23" y1="12" y2="12" />
                                <line
                                    x1="4.22"
                                    x2="5.64"
                                    y1="19.78"
                                    y2="18.36"
                                />
                                <line
                                    x1="18.36"
                                    x2="19.78"
                                    y1="5.64"
                                    y2="4.22"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="main-grid-item-icon"
                                fill="black"
                                stroke="black"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            >
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        )}
                    </label>

                    <div className="dropdown dropdown-end ">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content rounded-box w-52 bg-white text-gray-800 dark:bg-base-100 dark:text-white"
                        >
                            {!user ? (
                                <>
                                    <li>
                                        <Link href={route("login")} as="button">
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={route("register")}
                                            as="button"
                                        >
                                            Register
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <Link
                                            href={route("dashboard")}
                                            as="button"
                                            className="justify-between"
                                        >
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link as="button">Profile</Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Logout
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
