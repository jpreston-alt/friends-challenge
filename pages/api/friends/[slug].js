import { friendsData } from "@mocks/friends-data";

const handler = (req, res) => {
  const { slug: friendId } = req.query;
  const data = friendsData.find((f) => f.id === friendId);
  return res.status(200).json({ data });
};

export default handler;
