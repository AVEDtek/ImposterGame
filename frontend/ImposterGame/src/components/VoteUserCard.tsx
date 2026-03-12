import { User } from "lucide-react";

type VoteUserCardProps = {
    username: string;
    votes: number;
    selected: boolean;
    disabled: boolean;
    handleCardClick: (username: string) => void;
}

export default function VoteUserCard({ username, votes, selected, disabled, handleCardClick }: VoteUserCardProps) {
    return (
        <>
            <button
                type="button"
                disabled={disabled}
                onClick={() => handleCardClick(username)}
                className={`flex w-full items-center text-left text-white mb-3 p-3 rounded-r-xl transition-colors duration-300 ${selected ? "bg-purple-700" : "bg-brand-gray-light"} ${selected && !disabled ? "hover:bg-purple-600" : ""} ${!selected && !disabled ? "hover:bg-purple-600" : ""} ${disabled ? "cursor-default" : "cursor-pointer"}`}
            >
                <User className="mr-3" />
                {username}

                <div className="ml-auto w-6 h-6 flex items-center justify-center rounded-full border-2 border-gray-200 text-xs">
                    {votes}
                </div>
            </button>
        </>
    );
}