import { useState, useEffect, useRef } from "react";

const pageSize = 10;

// hook to handle logic from /friends page
const useFriends = () => {
  const [filters, setFilters] = useState([]);
  const [friends, setFriends] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const [error, setError] = useState(null);
  const lastItemRef = useRef();

  useEffect(() => {
    const getFriends = async () => {
      try {
        const res = await fetch(
          `/api/friends?limit=${pageSize}&page=${currentPage}`
        );
        const resJson = await res.json();
        setIsLastPage(resJson.isLastPage);
        setFriends((friends) => [...friends, ...resJson.data]);
      } catch (e) {
        setError(e.message);
      }
    };

    getFriends();
  }, [currentPage]);

  useEffect(() => {
    if (!lastItemRef.current) return;

    const intersectionOptions = {
      root: null, // el to check intersection with, if null it's viewport
      rootMargin: "0px", // root el's bounding box before calculating intersection
      threshold: 0.5, // % of target el visible to trigger callback
    };

    // callback fires when intersection occurs
    const intersectionCallback = (entries) => {
      if (!entries[0].isIntersecting) return;
      setCurrentPage((currentPage) => currentPage + 1);
    };

    // create new observer
    const observer = new IntersectionObserver(
      intersectionCallback,
      intersectionOptions
    );

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
    error,
  };
};

export default useFriends;
