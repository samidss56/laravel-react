import { Link, Head } from "@inertiajs/react";

export default function Homepage(props) {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-slate-500 p-10 gap-8">
            <Head title={props.title} />
            <h1 className="text-3xl font-bold text-white">
                {props.description}
            </h1>
            <div className="grid md:grid-cols-4 gap-8 xs:grid-cols-1">
                {props.news
                    ? props.news.map((data, index) => {
                          return (
                              <div
                                  key={index}
                                  className="bg-slate-300 rounded-lg p-4 flex flex-col justify-between shadow-lg hover:scale-[1.05] transition-all duration-300 cursor-pointer"
                              >
                                  <div className="flex flex-col gap-4">
                                      <h1 className=" font-sans text-2xl text-center text-white font-bold bg-slate-700 rounded-lg p-2 mb-2">
                                          {data.title}
                                      </h1>
                                      <p>{data.description}</p>
                                      <p className="font-medium">{data.category}</p>
                                  </div>
                                  <p className="text-sm font-semibold place-items-end mt-3 bg-slate-100 p-2 rounded-md">
                                      {data.author}
                                  </p>
                              </div>
                          );
                      })
                    : "News Not Found"}
            </div>
        </div>
    );
}
