import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { router } from "@inertiajs/react";
import MyNews from "@/Components/Dashboard/MyNews";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Dashboard(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [isNotif, setisNotif] = useState(false);

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
                <h2 className="font-semibold text-xl text-gray-800 dark:text-white leading-tight">
                    My News
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 xs:px-4">
                    <div className="bg-white dark:bg-dark-gray overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 flex flex-col gap-4">
                            <div>
                                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                                    Add News
                                </h1>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-200">
                                    Create your own News and publish it to the
                                    public
                                </p>
                            </div>
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
                            <div className="flex flex-col w-full">
                                <InputLabel
                                    htmlFor="title"
                                    value="News Title"
                                />
                                <TextInput
                                    id="title"
                                    placeholder="Insert News Title"
                                    className="block w-full"
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
                                    placeholder="Insert News description"
                                    className="block w-full"
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
                                    placeholder="Insert News Category"
                                    className="block w-full"
                                    onChange={(category) =>
                                        setCategory(category.target.value)
                                    }
                                    value={category}
                                    autoComplete="category"
                                />
                            </div>
                            <PrimaryButton
                                onClick={() => handleSubmit()}
                                type="submit"
                                className="btn w-28 text-slate-100"
                            >
                                Post News
                            </PrimaryButton>
                        </div>
                    </div>
                    <MyNews
                        myNews={props.myNews}
                        flashMessage={props.flash.message}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
