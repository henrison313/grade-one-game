/**
 * 资源路径配置
 * 用于处理 GitHub Pages 子路径部署
 */

// Vite 的 base 配置值，如 '/grade-one-game/' 或 '/'
const BASE_PATH = import.meta.env.BASE_URL;

/**
 * 获取资源路径
 * 自动添加基础路径（如 /grade-one-game/）
 * @param path 以 / 开头的资源路径，如 '/audio/bg/menu-theme.mp3'
 */
export const getAssetPath = (path: string): string => {
  // 路径已经是完整 URL 时不处理
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  // 确保路径以 / 开头
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  // 拼接基础路径：BASE_PATH 以 / 结尾，normalizedPath 以 / 开头，去掉重复的 /
  return `${BASE_PATH}${normalizedPath.slice(1)}`;
};
