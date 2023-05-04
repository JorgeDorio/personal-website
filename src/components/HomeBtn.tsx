import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function HomeBtn() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Link
      className={`font-bold p-2 tracking-widest ${
        theme == "dark" ? "bg-white text-black" : "bg-black text-white"
      }`}
      href="/"
    >
      DORIO
    </Link>
  );
}
