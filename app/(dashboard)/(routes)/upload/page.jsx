"use client";
import React, { useEffect, useState } from "react";
import UploadForm from "./_components/UploadForm";
import CompleteCheck from "./_components/CompleteCheck";
import { app } from "../../../../FirebaseConfig";

// import generateRandomString from "./_components/generateRandomString"
import generateRandomString from "../../../../public/generateRandomString"


import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useUser } from "@clerk/nextjs";

function Upload() {
  const { user } = useUser();
  const [progress, setProgress] = useState();

  const storage = getStorage(app);
  const db = getFirestore(app);

  const [uploadCompleted, setUpCompleted] = useState(false);

  const uploadFile = (file) => {
    const storageRef = ref(storage, "file-upload/" + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, file.type);
    uploadTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      setProgress(progress);
      progress == 100 &&
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          console.log(file,downloadURL);
          console.log("http://localhost:3000/" + generateRandomString())

          saveInfo(file, downloadURL);
        });
    });
  };

  const saveInfo = async (file, fileUrl) => {
    const docId = generateRandomString().toString();
    await setDoc(doc(db, "uploadFile", docId), {
      fileName: file?.name,
      fileSize: file?.size,
      fileType: file?.type,
      fileUrl: fileUrl,
      userEmail: user?.primaryEmailAddress.emailAddress,
      userName: user?.fullName,
      password: "",
      id: docId,
      shortUrl: "http://localhost:3000/" + docId,
      
    });
    
  };

  useEffect(() => {
    console.log("Trigger");
    progress == 100 &&
      setTimeout(() => {
        setUpCompleted(true);
      }, 2000);
  }, [progress == 100]);

  // useEffect(()=>{
  //   uploadCompleted&&
  //   setTimeout(()=>{
  //     setUpCompleted(false);
  //     window.location.reload();
  //   },2000)
  // },[uploadCompleted==true])

  return (
    

    <div className=" p-5 md:px-8">

      {!uploadCompleted ? (
        <div>
          <h2 className="text-[20px] text-center m-5">
            Start <strong className=" text-primary">Uploading</strong> File and{" "}
            <strong className=" text-primary">Share</strong> it
          </h2>
          <UploadForm
            uploadBtnClick={(File) => uploadFile(File)}
            progress={progress}
            
          />
        </div>
      ) : (
        <CompleteCheck />
      )}
    </div>
  );
}

export default Upload;
