import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { router } from "@inertiajs/react";

export default function Dashboard(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [isNotif, setisNotif] = useState(false);
    const [isDelete, setIsDelete] = useState(false);

    const handleSubmit = () => {
        const data = {
            title,
            description,
            category,
        };
        router.post("/news", data);
        setisNotif(
            true,
            setTimeout(() => setisNotif(false), 5000)
        );
        setTitle("");
        setDescription("");
        setCategory("");
    };

    const handleDelete = () => {
        setIsDelete(
            true,
            setTimeout(() => setIsDelete(false), 5000)
        );
    };

    useEffect(() => {
        if (!props.myNews) {
            router.get("/news");
        }
        return;
    }, []);

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    My News
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 xs:px-4">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 flex flex-col gap-4">
                            <h1 className="text-2xl font-semibold text-gray-800">Add News</h1>
                            {isNotif && (
                                <div
                                    role="alert"
                                    className="alert alert-success transition-all duration-300"
                                >
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
                                    <span className="text-white">
                                        {props.flash.message}
                                    </span>
                                </div>
                            )}
                            <InputLabel htmlFor="title" value="News Title" />
                            <TextInput
                                id="title"
                                className="mt-1 block w-full"
                                placeholder="Insert News Title"
                                onChange={(title) =>
                                    setTitle(title.target.value)
                                }
                                value={title}
                                required
                                isFocused
                                autoComplete="title"
                            />
                            <InputLabel
                                htmlFor="description"
                                value="News Description"
                            />
                            <TextInput
                                id="description"
                                className="mt-1 block w-full"
                                placeholder="Insert News description"
                                onChange={(description) =>
                                    setDescription(description.target.value)
                                }
                                value={description}
                                required
                                autoComplete="description"
                            />
                            <InputLabel
                                htmlFor="category"
                                value="News Category"
                            />
                            <TextInput
                                id="category"
                                className="mt-1 block w-full"
                                placeholder="Insert News Category"
                                onChange={(category) =>
                                    setCategory(category.target.value)
                                }
                                value={category}
                                autoComplete="category"
                            />
                            <button
                                onClick={() => handleSubmit()}
                                type="submit"
                                className="btn w-28 text-slate-100"
                            >
                                Post News
                            </button>
                        </div>
                    </div>
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
                            <span className="text-white">
                                {props.flash.message}
                            </span>
                        </div>
                    )}
                    <div className="grid md:grid-cols-2 xs:grid-cols-1 mt-5 gap-4">
                        {props.myNews && props.myNews.length > 0 ? (
                            props.myNews.map((news, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="card w-full bg-white shadow-xl flex flex-col justify-between"
                                    >
                                        <div className="card-body flex flex-col justify-between">
                                            <div className="flex flex-col gap-4">
                                                <h2 className="card-title text-gray-800">
                                                    {news.title}
                                                    <div className="badge badge-secondary">
                                                        NEW
                                                    </div>
                                                </h2>
                                                <p className="text-gray-800">{news.description}</p>
                                            </div>
                                            <div className="card-actions flex justify-between">
                                                <div className="badge badge-outline p-4 font-semibold text-gray-800">
                                                    {news.category}
                                                </div>
                                                <div className="flex gap-2">
                                                    <div className="h-[34px] w-[80px] rounded-full bg-yellow-400 font-semibold p-1 text-white text-center">
                                                        <Link
                                                            href={route(
                                                                "edit.news"
                                                            )}
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
                                                            href={route(
                                                                "delete.news"
                                                            )}
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
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
