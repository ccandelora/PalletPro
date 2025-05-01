import { Link } from "wouter";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center">
        <span className="text-3xl font-bold text-primary font-montserrat">
          BAY STATE <span className="text-secondary font-extrabold">PALLET</span>
        </span>
      </div>
    </Link>
  );
}
