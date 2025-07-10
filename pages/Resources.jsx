import { FaFilePdf, FaDownload } from "react-icons/fa";

const resources = [
  {
    title: "BBYDI SAFERNET DIGITAL CHAMPION SAFELY GUIDEBOOK",
    desc: "A comprehensive guidebook to help digital champions promote safe internet practices. Learn essential tips and strategies for online safety.",
    file: "/documents/BBYDI1",
  },
];

const Resources = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Resources</h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
        {resources.map((res, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow p-5 flex flex-col items-center"
          >
            <FaFilePdf className="text-red-600 text-5xl mb-3" />
            <h2 className="text-lg font-semibold mb-2 text-center">{res.title}</h2>
            {res.desc && (
              <p className="text-gray-600 text-sm mb-4 text-center">{res.desc}</p>
            )}
            <a
              href={res.file}
              download
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              <FaDownload />
              Download PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;