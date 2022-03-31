import React, {useEffect} from "react";

export const InfiniteScroll = ({onPageScrolled, currentPage}) => {

    const handleScroll = () => {
        const currentWindowPos = window.innerHeight + document.documentElement.scrollTop;
        if (currentWindowPos !== document.documentElement.offsetHeight) return;  
        onPageScrolled()
      }
      
    useEffect(
        () => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [currentPage]);
      
      return <div className="infinite-scroll"></div>
}