import data from "data.js";

export default (req, res) => {
  const { mechanisms } = data
  res.statusCode = 200
  res.json(mechanisms)
}
