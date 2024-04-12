import InputLabel from "@/Components/InputLabel";
import Navbar from "@/Components/Navbar";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useDarkMode } from "@/Contexts/DarkMode";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";

export default function EditNews(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const { darkMode, toggleDarkMode } = useDarkMode();

    const handleSubmit = () => {
        const data = {
            id: props.myNews.id,
            title,
            description,
            category,
        };
        router.post("/news/update", data);
        setTitle("");
        setDescription("");
        setCategory("");
    };

    return (
        <div className={`${darkMode && "dark"}`}>
            <Head title="Edit News" />
            <Navbar
                user={props.auth.user}
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />
            <div className="min-h-screen p-6 bg-gray-100 dark:bg-light-gray">
                <div className="card w-full shadow-xl flex flex-col justify-between bg-white dark:bg-dark-gray">
                    <div className="px-7 pt-4">
                        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                            Edit News
                        </h1>
                    </div>
                    <div className="card-body flex flex-col justify-between">
                        <div className="flex flex-col gap-4">
                            <InputLabel htmlFor="title" value="News Title" />
                            <TextInput
                                id="title"
                                className="mt-1 block w-full"
                                onChange={(title) =>
                                    setTitle(title.target.value)
                                }
                                defaultValue={props.myNews.title}
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
                                onChange={(description) =>
                                    setDescription(description.target.value)
                                }
                                defaultValue={props.myNews.description}
                                required
                                isFocused
                                autoComplete="description"
                            />
                            <InputLabel
                                htmlFor="category"
                                value="News Category"
                            />
                            <TextInput
                                id="category"
                                className="mt-1 block w-full"
                                onChange={(category) =>
                                    setCategory(category.target.value)
                                }
                                defaultValue={props.myNews.category}
                                required
                                isFocused
                                autoComplete="category"
                            />
                            <PrimaryButton
                                onClick={() => handleSubmit()}
                                type="submit"
                                className="btn w-32 text-slate-100"
                            >
                                Update News
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
