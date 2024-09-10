import data  from "../pt.json";

export default function About() {
    return (
        <div className="text-white text-start bg-gray-800 bg-opacity-60  rounded-lg p-2">
            <div className="">
                <h1 className="text-4xl font-bold mb-4">{data.About.title}</h1>
                <p className="mb-2 text-lg">
                    {data.About.sobre}
                </p>
            </div>
        </div>
    );
}
