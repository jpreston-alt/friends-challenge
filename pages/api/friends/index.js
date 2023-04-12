import { friendsData } from "@mocks/friends-data";

const handler = async (req, res) => {
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

  const timeout = () => new Promise((resolve) => setTimeout(resolve, 1000));

  await timeout(1000);
  return res.status(200).json({ data: friendsPaginated, isLastPage });
};

export default handler;
