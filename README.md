# collab-demo

一个用于练习 **Git / GitHub / Pull Request / 多人协作** 的演示项目。

## 这个项目是什么

模拟企业里常见的协作流程：

- 在 `main` 分支保持可发布的稳定代码
- 每个人在自己的功能分支上开发
- 通过 Pull Request（PR）做代码评审，再合并

## 怎么运行

需要已安装 [Node.js](https://nodejs.org/)（建议 18+）。

```bash
node src/index.js
```

预期输出：

```text
Hello from collab-demo!
Team: A + B practice repo
```

## 分支约定（企业常用）

| 分支名 | 用途 |
|--------|------|
| `main` | 主分支，只通过 PR 合并 |
| `feature/xxx` | 新功能 |
| `fix/xxx` | 修 bug |
| `docs/xxx` | 只改文档 |

## 参与方式（练习时）

1. Fork 或被加为 Collaborator
2. `git clone` 仓库到本地
3. 从最新 `main` 拉出功能分支
4. 提交代码并推送
5. 在 GitHub 上创建 Pull Request，请同事评审

## 文档

- 协作说明见后续练习中的 `CONTRIBUTING.md`（下一步会加）
