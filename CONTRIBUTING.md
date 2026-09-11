# Contributing

感谢参与 `collab-demo`。请按下面流程协作（与常见企业习惯一致）。

## 分支

- `main`：稳定代码，只通过 Pull Request 合并
- `feature/xxx`：新功能
- `fix/xxx`：修 bug
- `docs/xxx`：只改文档

## 开发步骤

1. 从最新 `main` 拉取并更新
2. 创建自己的功能分支（不要直接在 `main` 上改）
3. 修改代码并提交（建议前缀：`feat:` / `fix:` / `docs:`）
4. 推送分支到 GitHub
5. 创建 Pull Request（base = `main`）
6. 评审通过后合并；合并后可删除功能分支

## Pull Request 说明

请在 PR 里写清：

- 改了什么（Summary）
- 怎么验证（Test plan）

## 本地运行

```bash
node src/index.js