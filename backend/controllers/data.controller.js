import Data from "../model/data.model.js";

export const getDataController = async (req, res) => {
  try {
    const data = await Data.find();
    const sortedDatabydate = data.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    return res.status(200).json({ data: data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message, error });
  }
};

export const createDataController = async (req, res) => {
  const { date, age, gender, minAge, maxAge, A, B, C, D, E, F } = req.body;
  try {
    const newData = new Data({
      date,
      age,
      gender,
      minAge,
      maxAge,
      A,
      B,
      C,
      D,
      E,
      F,
    });
    await newData.save();
    return res
      .status(200)
      .json({ message: "Task created successfully", data: newData });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message, error });
  }
};
