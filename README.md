# node-intermediate

```
.
├── node_modules // Git에는 올라가지 않습니다.
├── prisma
│   └── schema.prisma
├── src
│   ├── constants
│   │ ├── auth.constant.js
│   │   ├── env.constant.js
│   │   ├── resume.constant.js
│   │   └── user.constant.js
│   ├── middlewares
│   │   ├── error-handler.middleware.js
│   │   ├── require-access-token.middleware.js
│   │   ├── require-refresh-token.middleware.js
│   │   └── require-roles.middleware.js
│   ├── routers
│   │   ├── auth.router.js
│   │   ├── index.js
│   │   ├── resumes.router.js
│   │   └── users.router.js
│   ├── utils
│   │   └── prisma.util.js
│   └── app.js
├── .env // Git에는 올라가지 않습니다.
├── .env.example // Git에 올라갑니다. .env의 복사본으로 Key만 있고 Value는 삭제합니다.
├── .gitignore
├── .prettierrc
├── package.json
├── README.md
└── yarn.lock // npm을 사용하면 package-lock.json
```
