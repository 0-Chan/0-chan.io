
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-tsx": preferDefault(require("/Users/0-chan/workspace/personal/0-chan.io/src/pages/404.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/0-chan/workspace/personal/0-chan.io/src/pages/index.tsx"))
}

