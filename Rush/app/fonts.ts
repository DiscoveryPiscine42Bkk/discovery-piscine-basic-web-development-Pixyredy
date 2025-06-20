import localFont from "next/font/local"

// Define the Anuphan font with multiple weights
export const anuphan = localFont({
  src: [
    {
      path: "../public/fonts/Anuphan-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Anuphan-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Anuphan-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-anuphan",
  display: "swap",
})
