/**
 * 资源路径配置
 * 用于处理 GitHub Pages 子路径部署
 */

/**
 * 获取资源路径
 * 使用相对路径，自动适配任何部署位置
 *
 * @param path - 相对路径，如 '/assets/character/xxx.png'
 * @returns 相对于当前页面的完整路径
 */
export const getAssetPath = (path: string): string => {
  // 使用相对路径，浏览器会自动基于当前 URL 解析
  // 例如在 https://xxx.github.io/grade-one-game/ 页面
  // ./assets/... 会解析为 https://xxx.github.io/grade-one-game/assets/...
  const cleanPath = path.startsWith('/') ? `.${path}` : `./${path}`;
  return cleanPath;
};

/**
 * 角色图片路径
 */
export const getCharacterImagePath = (filename: string): string => {
  return getAssetPath(`/assets/character/${filename}`);
};

/**
 * 武器图片路径
 */
export const getWeaponImagePath = (filename: string): string => {
  return getAssetPath(`/assets/weapons/${filename}`);
};

/**
 * 音频文件路径
 */
export const getAudioPath = (filename: string): string => {
  return getAssetPath(`/audio/${filename}`);
};
