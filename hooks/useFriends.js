import { useState, useEffect, useRef } from "react";

const pageSize = 10;

const useFriends = () => {
  const [filters, setFilters] = useState([]);
  const [friends, setFriends] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const lastItemRef = useRef();

  useEffect(() => {
    const getFriends = async () => {
      const res = await fetch(
        `/api/friends?limit=${pageSize}&page=${currentPage}`
      );
      const resJson = await res.json();
      setFriends((friends) => [...friends, ...resJson]);
    };

    getFriends();
  }, [currentPage]);

  useEffect(() => {
    const options = {
      root: null, // which el to check intersection with, if null it's viewport
      rootMargin: "0px", // grows or shrinks root el's bounding box before calculating intersection
      threshold: 1.0, //percent of target el visible to trigger callback
    };

    // callback fires when intersection occurs
    const callback = () => setCurrentPage((currentPage) => currentPage + 1);

    // create new observer
    let observer = new IntersectionObserver(callback, options);

    if (!lastItemRef.current) return;

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
  };
};

export default useFriends;
