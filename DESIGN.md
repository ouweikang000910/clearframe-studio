# ClearFrame · 复古未来风格改版

日期：2026-10-24。用户确认预览后实施。暗红 #9e200e、墨绿 #071d13、奶油黄 #f5e4a3、橙色 #ff591e。大字使用本地 Archivo Black，正文使用系统中文字体。

## 素材

- `assets/portrait-demo.png`：内置 image_gen 生成，示例照片，用户上传的素材不会经过此图的滤镜或叠加处理。
- `assets/archivo-black.ttf`：Google Fonts 官方开源字体；授权见 `assets/OFL-ArchivoBlack.txt`。
- Sites 版本的素材在 `dist/assets/` 下；GitHub Pages 版本在根目录 `assets/` 下。

图像生成提示：Create a single original landscape 1600x1000 cinematic editorial portrait for a web-editor demo. Adult woman in left-facing profile, dark bob haircut, amber sunglasses, brass over-ear headphones and dark green jacket, hand near chin. Amber rim light, crimson backlight, deep green shadows, blurred vertical orange lights, subtle analog grain. Reserve a simple dark green bottom-right area for a later canvas-added SAMPLE label. No UI, words, logos or watermark in the image. Use the user-approved mockup as scene and palette reference.

## 验证范围

保留原有区域修补、模糊、裁剪和导出逻辑。默认示例加载使用序号校验，避免异步加载覆盖后来上传的素材。显示字体本地加载；大标题为可访问 SVG 文本，中文辅助标题供读屏使用。手机下编辑器与设置面板改为上下排列。
