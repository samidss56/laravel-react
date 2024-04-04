import NewsList from "@/Components/Homepage/NewsList";
import Pagination from "@/Components/Homepage/Pagination";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

export default function Homepage(props) {
    console.log(props.news.data);
    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-center items-center min-h-screen bg-slate-700 p-10 gap-8">
                <Head title={props.title} />
                <h1 className="text-3xl font-bold text-white">
                    {props.description}
                </h1>
                <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
                    <NewsList news={props.news.data} />
                </div>
                <div>
                    <Pagination meta={props.news.meta} />
                </div>
            </div>
        </>
    );
}
