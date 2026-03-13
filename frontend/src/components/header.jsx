import { authService } from "../services/auth";
import { LogOut, User } from "lucide-react";

export default function Header({ title }) {
    return (
        <header className="w-full bg-white shadow-md py-4 px-6">
            <div className="flex justify-between items-center w-full">

                <div>
                    <a href="/home">
                        Team Surrey Lacrosse
                    </a>
                </div>

                {title && (
                    <div className="h1">
                        {title}
                    </div>
                )}

                <div className="flex items-center gap-6 text-2xl">
                    <a href="/account"><User /></a>

                    <button onClick={authService.logout} className="hover:text-red-600 transition">
                        <LogOut />
                    </button>
                </div>
            </div>
        </header>
    );
}