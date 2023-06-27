
import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title=`UToys-${title}`;
    },[title])
};

export default useTitle;