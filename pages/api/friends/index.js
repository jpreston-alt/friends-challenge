import { friendsData } from "@mocks/friends-data";

const handler = (req, res) => {
  const { limit, page } = req.query;

  if (!page || !limit) return res.status(200).json({ data: friendsData });

  const startIndex = Number(page) * Number(limit) - 10;
  let endIndex = startIndex + Number(limit);
  let isLastPage = false;

  if (endIndex > friendsData.length - 1) {
    endIndex = friendsData.length - 1;
    isLastPage = true;
  }
  const friendsPaginated = friendsData.slice(startIndex, endIndex);

  setTimeout(() => {
    return res.status(200).json({ data: friendsPaginated, isLastPage });
  }, "1000");
};

export default handler;