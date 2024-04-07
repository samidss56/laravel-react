import { Link } from "@inertiajs/react";
import React, { useState } from "react";

const MyNews = ({ myNews }) => {
    const [isDelete, setIsDelete] = useState(false);

    const handleDelete = () => {
        setIsDelete(
            true,
            setTimeout(() => setIsDelete(false), 5000)
        );
    };

    return (
        <>
            {isDelete && (
                <div role="alert" className="alert alert-success my-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current shrink-0 h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span className="text-white">{props.flash.message}</span>
                </div>
            )}
            <div className="grid md:grid-cols-2 xs:grid-cols-1 mt-5 gap-4">
                {myNews && myNews.length > 0 ? (
                    myNews.map((news, index) => {
                        return (
                            <div
                                key={index}
                                className="card w-full bg-white dark:bg-dark-gray shadow-xl flex flex-col justify-between"
                            >
                                <div className="card-body flex flex-col justify-between">
                                    <div className="flex flex-col gap-4">
                                        <h2 className="card-title text-gray-800 dark:text-white">
                                            {news.title}
                                            <div className="badge badge-secondary">
                                                NEW
                                            </div>
                                        </h2>
                                        <p className="text-gray-800 dark:text-white">
                                            {news.description}
                                        </p>
                                    </div>
                                    <div className="card-actions flex justify-between">
                                        <div className="badge badge-outline p-4 font-semibold text-gray-800 dark:text-white">
                                            {news.category}
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="h-[34px] w-[80px] rounded-full bg-yellow-400 font-semibold p-1 text-white text-center">
                                                <Link
                                                    href={route("edit.news")}
                                                    method="get"
                                                    data={{
                                                        id: news.id,
                                                    }}
                                                    as="button"
                                                >
                                                    Edit
                                                </Link>
                                            </div>
                                            <div className="h-[34px] w-[80px] rounded-full bg-red-700 font-semibold p-1 text-white text-center">
                                                <Link
                                                    href={route("delete.news")}
                                                    method="post"
                                                    data={{
                                                        id: news.id,
                                                    }}
                                                    as="button"
                                                    onClick={() =>
                                                        handleDelete()
                                                    }
                                                >
                                                    Delete
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p>You don't have any posted news</p>
                )}
            </div>
        </>
    );
};

export default MyNews;
