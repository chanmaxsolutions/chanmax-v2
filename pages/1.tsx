import Link from "next/link";

export default function One() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div>
                <Link href="/2">
                    <a>Go to Recapcha</a>
                </Link>
            </div>
        </div>
    );
}
