import React from "react";
import useIPFS from "../hooks/useIPFS";

const IPFSDownload = ({ hash, filename }) => {
  //const file = useIPFS(hash, filename);

  const file =
    "https://cloudflare-ipfs.com/ipfs/QmeoCXKCbhs8PhaEVERtePvWUmpExVDmdmB6MhEjfW3zuz";

  return (
    <div>
      <div className="download-component">
        <a className="download-button" href={file} download>
          Download Demo
        </a>
      </div>
    </div>
  );
};

export default IPFSDownload;
