import React from "react";

function Footer({ github }) {
  return (
    <div className="text-center w-full mt-16">
      <p className="text-gray-600 mb-4">
        @Created by Yash Garg (
        <a
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
          href="https://drive.google.com/file/d/1YEUQJ7kX3o62xhcsU5_55PzFNeUmlsGM/view?usp=share_link"
          target="_blank"
        >
          Resume
        </a>
        )
      </p>
      {/* <GitHubButton
        href={github + "/react-tailwind-portfolio"}
        data-color-scheme="no-preference: light; light: light; dark: light;"
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
        aria-label="Star ntkme/github-buttons on GitHub"
      >
        Star
      </GitHubButton>
      &nbsp;&nbsp;
      <GitHubButton
        href={github + "/react-tailwind-portfolio/fork"}
        data-color-scheme="no-preference: light; light: light; dark: light;"
        data-icon="octicon-repo-forked"
        data-size="large"
        data-show-count="true"
        aria-label="Fork ntkme/github-buttons on GitHub"
      >
        Fork
      </GitHubButton> */}
    </div>
  );
}

export default Footer;
