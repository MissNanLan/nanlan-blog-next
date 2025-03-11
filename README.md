# 南蓝博客系统 (Nanlan Blog)

一个现代化的全栈博客系统，使用 Next.js 和 NestJS 构建。

## 项目概述

南蓝博客是一个基于 Monorepo 架构的全栈博客系统，前端使用 Next.js 构建，后端使用 NestJS 构建。项目采用 pnpm workspace 进行包管理，使用 Turborepo 进行构建优化。

## 技术栈

### 前端 (nanlan-blog-client-nextjs)

- **框架**: Next.js 15
- **UI 库**:
  - Radix UI
  - Tailwind CSS
- **状态管理**: Zustand
- **数据获取**: TanStack Query (React Query)
- **其他库**:
  - Axios
  - Day.js
  - Lucide React (图标)

### 后端 (nanlan-blog-server-nestjs)

- **框架**: NestJS
- **数据库**: Prisma ORM
- **API 文档**: Swagger
- **验证**: class-validator 和 class-transformer

### 工具链

- **包管理**: pnpm
- **Monorepo 工具**: Turborepo
- **代码规范**:
  - ESLint
  - Prettier
  - Husky (Git Hooks)
  - Commitlint
  - Commitizen

## 项目结构

```
nanlan-blog-next/
├── packages/
│   ├── nanlan-blog-client-nextjs/  # Next.js 前端项目
│   └── nanlan-blog-server-nestjs/  # NestJS 后端项目
├── scripts/                        # 工具脚本
├── .husky/                         # Git Hooks
├── .github/                        # GitHub 工作流配置
└── ...配置文件
```

## 安装与使用

### 前提条件

- Node.js 18+
- pnpm 10+

### 安装依赖

```bash
# 安装根目录依赖
pnpm install
```

### 开发模式

```bash
# 同时启动前端和后端
pnpm dev

# 仅启动前端
pnpm start:client

# 仅启动后端
pnpm start:server
```

### 构建项目

```bash
pnpm build
```

### 启动生产环境

```bash
pnpm start
```

## Git 提交规范

项目使用 Commitizen 和 Commitlint 来规范 Git 提交信息。

```bash
# 使用交互式提交
pnpm commit
```

提交类型包括:

- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码风格修改
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

## 开发指南

### 创建新页面 (前端)

```bash
cd packages/nanlan-blog-client-nextjs
pnpm create-page <page-name>
```

## 许可证

ISC
