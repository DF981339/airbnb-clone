import { stays_data } from "../../data/stays_data";

export default function handler(req, res) {
  res.status(200).json(stays_data);
}
