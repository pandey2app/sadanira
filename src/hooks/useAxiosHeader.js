import { useState } from "react";

const useAxiosHeader = ()=>{
    const [progress, setProgress] = useState(null)

    let multipartWithProgress = {
        headers: {
            'Content-Type': 'multipart/form-data',  // Important to set content-type
        },
        onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            console.log(`Upload progress: ${percentCompleted}%`);
            setProgress(percentCompleted) 
        },
        withCredentials: true
    }

    return [multipartWithProgress, progress, setProgress]
}

export default useAxiosHeader;