import React from "react";

const isNews = (news) => {
    return news.map((data, index) => {
        return (
                <div
                    key={index}
                    className="card w-full bg-base-100 shadow-xl hover:scale-[1.05] transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                    <figure>
                        <img
                            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body flex flex-col justify-between">
                        <div className="flex flex-col gap-4">
                            <h2 className="card-title">
                                {data.title}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>{data.description}</p>
                            <p>{data.category}</p>
                        </div>
                        <div className="place-items-end">
                            <p className="text-slate-100 font-semibold place-items-end">
                                {data.author}
                            </p>
                        </div>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
        );
    });
};

const noNews = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <h1 className="text-3xl font-bold text-slate-100">
                There is no news at this time.
            </h1>
        </div>
    );
};

const NewsList = ({ news }) => {
    return !news ? noNews() : isNews(news);
};

export default NewsList;
