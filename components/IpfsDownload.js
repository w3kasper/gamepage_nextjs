import React from "react";
import useIPFS from "../hooks/useIPFS";

const IPFSDownload = ({ hash, filename }) => {
  const file = useIPFS(hash, filename);

  return (
    <div>
      {file ? (
        <div className="download-component">
          <a
            className="download-button"
            href="QmWP9BMvEsP9wzabXVmUErkLysrorrgeF46ohhKJ3oQSLn"
            download="demo.txt"
          >
            Download bu
          </a>
        </div>
      ) : (
        <p>Downloading file...</p>
      )}
    </div>
  );
};

export default IPFSDownload;
