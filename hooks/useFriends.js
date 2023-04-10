import { useState, useEffect, useRef } from "react";

const pageSize = 10;

const useFriends = () => {
  const [filters, setFilters] = useState([]);
  const [friends, setFriends] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const lastItemRef = useRef();

  useEffect(() => {
    const getFriends = async () => {
      const res = await fetch(
        `/api/friends?limit=${pageSize}&page=${currentPage}`
      );
      const resJson = await res.json();
      setIsLastPage(resJson.isLastPage);
      setFriends((friends) => [...friends, ...resJson.data]);
    };

    getFriends();
  }, [currentPage]);

  useEffect(() => {
    if (!lastItemRef.current) return;

    const options = {
      root: null, // which el to check intersection with, if null it's viewport
      rootMargin: "0px", // grows or shrinks root el's bounding box before calculating intersection
      threshold: 0.1, //percent of target el visible to trigger callback
    };

    // callback fires when intersection occurs
    const callback = (entries) => {
      if (!entries[0].isIntersecting) return;
      setCurrentPage((currentPage) => currentPage + 1);
    };

    // create new observer
    let observer = new IntersectionObserver(callback, options);

    // target element to be observed
    observer.observe(lastItemRef.current);
  }, [lastItemRef]);

  const addFilters = (_filters) => setFilters(_filters);
  const clearFilters = () => setFilters([]);
  const disableClear = filters.length === 0;

  let friendsFiltered = [...friends];
  if (filters.length > 0)
    friendsFiltered = friends.filter((f) => filters.includes(f.friendLevel));

  return {
    filters,
    addFilters,
    clearFilters,
    disableClear,
    friends: friendsFiltered,
    pageSize,
    lastItemRef,
    isLastPage,
  };
};

export default useFriends;
