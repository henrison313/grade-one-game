/**
 * 资源路径配置
 * 用于处理 GitHub Pages 子路径部署
 */

/**
 * 获取资源路径
 * 自动处理基础路径（如 /grade-one-game/）
 *
 * @param path - 相对路径，如 '/assets/character/xxx.png'
 * @returns 完整路径，如 '/grade-one-game/assets/character/xxx.png'
 */
export const getAssetPath = (path: string): string => {
  const base = import.meta.env.BASE_URL;
  // 移除开头的斜杠，避免双斜杠
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
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
