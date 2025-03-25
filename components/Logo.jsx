import Image from "next/image";
import Link from "next/link";

function Logo({ path }) {
  return (
    <Link href={path ? path : "/"}>
      <Image src="/logo.svg" width={200} height={58} alt="Logo" />
    </Link>
  );
}

export default Logo;
