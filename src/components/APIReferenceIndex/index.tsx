import React from "react";
import Layout from "@theme/Layout";
import Footer from "@theme/Footer";

interface Link {
  id: string;
  title: string;
  url: string;
  description?: string;
}

interface APIReferenceIndexProps {
  apiLinks: Link[];
}

const APIReferenceIndex: React.FC<APIReferenceIndexProps> = ({ apiLinks }) => {
  return (
    <Layout
      title={"Deno: the easiest, most secure JavaScript runtime"}
      description="Reference documentation for the Deno runtime and Deno Deploy"
    >
      <div className="w-full mt-8 h-screen max-w-screen-xl mx-auto">
        <div className="mt-24">
          <ul>
            {apiLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a
                    href={link.url}
                    className="text-inherit underline decoration-gray-300 dark:decoration-gray-600"
                    title={link.description}
                  >
                    {link.title}
                  </a>
                  <p className="text-gray-500 dark:text-gray-400">
                    {link.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <Footer />
    </Layout>
  );
};

export default APIReferenceIndex;
