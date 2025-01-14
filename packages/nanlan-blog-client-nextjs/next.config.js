const fs = require("fs");
const path = require("path");

module.exports = (phase, { defaultConfig }) => {
  console.log("process.env.NODE_ENV", process.env.NODE_ENV);

  // 获取完整配置
  const fullConfig = {
    ...defaultConfig,
    rewrites: async () => [
      {
        source: "/api/:path*",
        destination: "http://127.0.0.1:3001/api/:path*",
      },
    ],
  };

  // 准备配置输出
  const configOutput = {
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    nextVersion: process.env.NEXT_VERSION,
    config: fullConfig,
  };

  // 确保输出目录存在
  const outputDir = path.join(__dirname, "config-output");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // 根据环境写入不同的配置文件
  const fileName =
    process.env.NODE_ENV === "production"
      ? "next.config.prod.json"
      : "next.config.dev.json";

  // 写入配置文件
  fs.writeFileSync(
    path.join(outputDir, fileName),
    JSON.stringify(configOutput, null, 2),
  );

  return fullConfig;
};
