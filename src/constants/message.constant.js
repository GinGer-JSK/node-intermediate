export const MESSAGES = {
  AUTH: {
    COMMON: {
      EMAIL: {
        REQUIRED: "email 을 입력해 주세요.",
        INVALID_FORMAT: "이메일 형식이 올바르지 않습니다.",
        DUPLICATED: "이미 가입 된 사용자입니다.",
        EMPTY: "email 은 비어있으면 안됩니다.",
      },
      PASSWORD: {
        REQUIRED: "password 를 입력해 주세요.",
        MIN_LENGTH: `비밀번호는 6자리 이상이어야 합니다.`,
      },
      PASSWORDRE: {
        REQUIRED: "password 확인을 입력해 주세요.",
        NOT_MATCHED_WITH_PASSWORD: "입력 한 두 비밀번호가 일치하지 않습니다.",
      },
      NAME: {
        REQUIRED: "name 을 입력해 주세요.",
      },
    },
    SIGN_UP: {
      SUCCEED: "회원가입에 성공했습니다",
    },
  },
};
