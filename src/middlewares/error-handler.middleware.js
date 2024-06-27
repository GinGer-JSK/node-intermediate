export const errorHandler = (err, req, res, next) => {
  console.error(err);

  // joi�뿉�꽌 諛쒖깮�븳 �뿉�윭 泥섎━
  if (err.name === "ValidationError") {
    return res.status(400).json({
      status: 400,
      message: err.message,
    });
  }

  // 洹� 諛뽰쓽 �삁�긽移� 紐삵븳 �뿉�윭 泥섎━
  return res.status(500).json({
    status: 500,
    message:
      "�삁�긽移� 紐삵븳 �뿉�윭媛� 諛쒖깮�뻽�뒿�땲�떎. 愿�由ъ옄�뿉寃� 臾몄쓽�빐 二쇱꽭�슂.",
  });
};
