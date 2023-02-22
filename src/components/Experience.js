import React from "react";

function Experience({ title, companies }) {
  return (
    <div className="max-w-4xl mx-auto mt-16">
      <p className="text-2xl md:text-4xl font-bold text-center">{title}</p>
      <p className="text-base text-left md:text-center text-gray-600 leading-relaxed mt-4">
        {companies.map((company, index) => {
          return (
            <div key={index}>
              <a
                href={company.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="text-xl font-bold  text-black">
                  {company.name}
                </h1>
              </a>

              <p> {company.tenure}</p>
              <p> {company.description}</p>
            </div>
          );
        })}
      </p>
    </div>
  );
}

export default Experience;
