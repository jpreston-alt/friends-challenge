import { friendsData } from "@mocks/friends-data";

export default function handler(req, res) {
  setTimeout(() => {
    res.status(200).json(friendsData);
  }, "1000");
}
