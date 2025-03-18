import ThemeSwitcher from "@/components/ThemeSwitcher";
import clsx from "clsx";
import LoadingIcon from "@/components/Base/LoadingIcon";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { getTokenAPI } from "@/services/authService";

function Main() {

  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(()=>{
   let code = searchParams.get('code')
   if(code){   
        getTokenAPI(code).then((res)=>{
            window.location.href = '/'
        }).catch(err=>{
            window.location.href = '/login'
        })
   }else{
    window.location.href = '/login'
   } 
  })

  return (
    <>
      <div
        className={clsx([
          "p-3 sm:px-8 relative h-screen lg:overflow-hidden bg-primary xl:bg-white dark:bg-darkmode-800 xl:dark:bg-darkmode-600",
          "before:hidden before:xl:block before:content-[''] before:w-[57%] before:-mt-[28%] before:-mb-[16%] before:-ml-[13%] before:absolute before:inset-y-0 before:left-0 before:transform before:rotate-[-4.5deg] before:bg-primary/20 before:rounded-[100%] before:dark:bg-darkmode-400",
          "after:hidden after:xl:block after:content-[''] after:w-[57%] after:-mt-[20%] after:-mb-[13%] after:-ml-[13%] after:absolute after:inset-y-0 after:left-0 after:transform after:rotate-[-4.5deg] after:bg-primary after:rounded-[100%] after:dark:bg-darkmode-700",
        ])}
      >
        <ThemeSwitcher />
        <div className="container relative z-10 sm:px-10 mt-36">
            <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
            <LoadingIcon icon="tail-spin" className="w-8 h-8" />
            <div className="mt-2 text-xs text-center">please wait</div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Main;
