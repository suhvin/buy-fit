import type { Config } from "tailwindcss";
const colors = {
  neutral100: "#2C2932",
  neutral80: "hsla(257, 4%, 34%, 1)",
  neutral60: "rgba(44, 41, 50, 0.60);",
  neutral30: "rgba(44, 41, 50, 0.30);",
  neutral20: "rgba(44, 41, 50, 0.20);",
  neutral10: "rgba(44, 41, 50, 0.10);",
  gray100: "#455268",
  gray80: "#718096",
  gray60: "#91A3BD",
  gray30: "#C9D8E9",
  gray20: "#DAE6F3",
  gray10: "#F4F9FF",
  primary100: "#8732F4",
  primary80: "#8A5BEF",
  primary60: "#AC8CF1",
  primary30: "#C0B7F5",
  primary20: "#DADAFF",
  primary10: "#E9E9FF",
  negative100: "#FF6C58",
  negative50: "#718096",
  negative10: "#FFF0EE",
  positive100: "#3366FF",
  positive50: "#99B2FF",
  positive10: "#EBF0FF",
  gradientleft: "hsla(338, 99%, 64%, 1)",
  gradientright: "hsla(266, 90%, 58%, 1)",
  white: "#FFFFFF",
  black: "hsla(0, 0%, 0%, 1)",
};

const spacing = {
  homeIndicator: "32px",
  gutter: "16px",
  sideMargin: "24px",
  tabBarSpacing: "38px",
  "1": "4px",
  "2": "8px",
  "3": "12px",
  "4": "16px",
  "5": "20px",
  "6": "24px",
  "7": "28px",
  "8": "32px",
};

const size = {
  ctaHeight: "52px",
  contentWidth: "312px",
  deviceWidth: "360px",
  tabBarHeight: "80px",
  statusBar: "44px",
  full: "100%",
  half: "50%",
};

const fontSize = {
  xxxl: "30px",
  xxl: "24px",
  xl: "20px",
  l: "18px",
  m: "16px",
  s: "14px",
  xs: "13px",
  xxs: "12px",
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors,
    borderRadius: {
      sm: "10px",
      md: "20px",
      lg: "28px",
      xl: "60px",
      full: "999px",
    },
    boxShadow: {
      default: `1px 1px 10px 1px hsla(264, 95%, 66%, 0.15)`,
      light: `0px 1px 8px 0px hsla(264, 95%, 66%, 0.25)`,
      dialog: `0px -8px 16px 0px hsla(0, 0%, 0%, 0.1)`,
      base: `0px 1px 2px 0px hsla(0, 0%, 0%, 0.06) , 0px 1px 3px 0px hsla(0, 0%, 0%, 0.1)`,
      card: `0px 4px 6px -2px hsla(0, 0%, 0%, 0.05) , 0px 10px 15px -3px hsla(0, 0%, 0%, 0.1)`,
      drop: `0px 0px 15px 0px hsla(218, 20%, 34%, 0.3)`,
      "drop-gray": `0px 0px 15px 0px hsla(218, 20%, 34%, 0.1)`,
      matching: `0px 0px 15px 0px rgba(69, 82, 104, 0.30)`,
    },
  },
  plugins: [],
};
export default config;
