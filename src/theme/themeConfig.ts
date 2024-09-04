// theme/themeConfig.ts
import { notoSans } from "@/config/fonts";
import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    fontFamily: notoSans.style.fontFamily,
    fontSize: 16,
    colorPrimary: "#3C6CE7",
  },
  components: {
    Button: {
      fontFamily: notoSans.style.fontFamily,
      colorPrimary: "#3C6CE7",
    },
    Input: {
      fontFamily: notoSans.style.fontFamily,
      colorPrimary: "#3C6CE7",
    },
  },
};

export default theme;
