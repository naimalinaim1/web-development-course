import React from "react";

const SingleData = ({ tool, setUniqueId }) => {
  const { id, image, name, features, published_in } = tool;
  return (
    <div className="card border h-[530px]">
      <figure className="p-2">
        <img src={image} alt={`tool ${name}`} className="rounded-xl" />
      </figure>
      <div className="px-2.5 py-4">
        <h2 className="card-title mb-3">Features</h2>
        <div className="pl-2.5 space-y-1">
          {features.map((feature, index) => (
            <p key={index}>
              {++index}. {feature}
            </p>
          ))}
        </div>
        <hr className="my-4 border" />
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">{name}</h2>
            <span className="flex mt-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
              </span>
              <p>{published_in}</p>
            </span>
          </div>
          <label
            onClick={() => setUniqueId(id)}
            htmlFor="tools-info"
            className="cursor-pointer bg-orange-400/20 hover:bg-orange-400/30 p-3 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SingleData;
