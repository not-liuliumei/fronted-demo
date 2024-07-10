import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavbarLink = ({
  route,
  linkName,
}: {
  route: string;
  linkName: string;
}) => {
  const pathName = usePathname();
  const className = `navbar-link${
    pathName === route ? " navbar-link__active" : ""
  }`;

  return (
    <Link className={className} href={route}>
      {linkName}
    </Link>
  );
};
