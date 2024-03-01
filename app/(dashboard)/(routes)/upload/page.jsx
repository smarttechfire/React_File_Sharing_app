"use client";
import React, { useEffect, useState } from "react";
import UploadForm from "./_components/UploadForm";
import CompleteCheck from "./_components/CompleteCheck";
import { app } from "../../../../FirebaseConfig";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";

function Upload() {
 
  const [progress,setProgress] = useState();

  const storage = getStorage(app);

  const [uploadCompleted,setUpCompleted] = useState(false);

  const uploadFile = (file) => {

    const storageRef =  ref(storage, "file-upload/" + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setProgress(progress);
        progress==100&&getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
          console.log('File available at',downloadURL)
        })
      },
    )
  };

  useEffect(()=>{
    console.log("Trigger")
    progress==100&& setTimeout(()=>{
      setUpCompleted(true);
    },2000)
  },[progress==100]);

  useEffect(()=>{
    uploadCompleted&&
    setTimeout(()=>{
      setUpCompleted(false);
      window.location.reload();
    },2000)
  },[uploadCompleted==true])

  return (
    <div className=" p-5 md:px-8">
      {!uploadCompleted? <div>
          <h2 className="text-[20px] text-center m-5">
          Start <strong className=" text-primary">Uploading</strong> File and{" "}
          <strong className=" text-primary">Share</strong> it
        </h2>
        <UploadForm uploadBtnClick={(File) =>uploadFile(File)} progress={progress} />
      </div>: <CompleteCheck />}
      
    </div>
  );
}

export default Upload;
