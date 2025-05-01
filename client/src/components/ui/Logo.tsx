import { Link } from "wouter";

export default function Logo() {
  return (
    <Link href="/">
      <a className="flex items-center">
        <span className="text-3xl font-bold text-primary font-montserrat">
          BAY STATE <span className="text-secondary">PALLET</span>
        </span>
      </a>
    </Link>
  );
}
