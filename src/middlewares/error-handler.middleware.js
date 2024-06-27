export const errorHandler = (err, req, res, next) => {
  console.error(err);
  // console.log(err.name);
  // console.log(err.name === "ValidationError");
  // joi���� �߻��� ���� ó��
  if (err.name === "ValidationError") {
    return res.status(400).json({
      status: 400,
      message: err.message,
    });
  }

  // �� ���� ����ġ ���� ���� ó��
  return res.status(500).json({
    status: 500,
    message: "����ġ ���� ������ �߻��߽��ϴ�. �����ڿ��� ������ �ּ���.",
  });
};
