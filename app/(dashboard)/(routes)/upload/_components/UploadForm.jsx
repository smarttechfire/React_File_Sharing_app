import React, { useState } from "react";
import AlertMsg from "./AlertMsg";
import FilePreview from "./FilePreview";

function UploadForm({uploadBtnClick}) {
  const [file, setFile] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const onFileSelect = (file) => {
    // console.log(file);
    if (file && file.size > 2000000) {
      console.log("Size is Greater than 2 MB");
      setErrorMsg("Maxmum File Upload Size is 2MB");
      return;
    }
    setErrorMsg(null);
    setFile(file);
  };
  return (
    <div className=" text-center">
      <div class="flex items-center justify-center w-full">
        <label
          for="dropzone-file"
          class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white-50 dark:hover:bg-bray-800 dark:bg-white-700 hover:bg-white-100 dark:border-white-600 dark:hover:border-gray-500 dark:hover:bg-white-600"
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              class="w-12 h-12 mb-4 text-purple-500 dark:text-purple-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p class="mb-2 text-lg md:text-2xl text-gray-500 dark:text-gray-400">
              <span class="font-semibold text-primary">Click to upload </span>
              or <strong className=" text-primary">drag</strong> and{" "}
              <strong className=" text-primary">drop</strong>
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX Size : 2MB)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            class="hidden"
            onChange={(event) => onFileSelect(event.target.files[0])}
          />
        </label>
      </div>
      {errorMsg ? <AlertMsg msg={errorMsg} /> : null}
      {file? <FilePreview file={file} removeFile={()=>setFile(null)} />:null}
      <button
      onClick={()=>uploadBtnClick(file)}
        disabled={!file}
        className=" p-2 bg-primary text-white w-[30%] rounded-full mt-5 disabled:bg-purple-500"
      >
        Upload
      </button>
    </div>
  );
}

export default UploadForm;
