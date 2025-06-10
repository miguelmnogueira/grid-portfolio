import React from "react";

const Ten = () => {
    return (
        <div className="style-block py-0 flex items-center animate-fade-in-down row-span-2">
            <div className="w-full max-w-md space-y-4">
                <LanguageProgress
                    language="PT-BR"
                    progress={100}
                    color="white"
                />
                <LanguageProgress
                    language="ENG"
                    progress={85}
                    color="from-blue-400 to-blue-600"
                />
                <LanguageProgress
                    language="FRA"
                    progress={30}
                    color="from-purple-400 to-purple-600"
                />
            </div>
        </div>
    );
};

const LanguageProgress = ({ language, progress, color }) => {
    return (
        <div className="space-y-1 flex items-center justify-between">
            <div className="flex justify-between text-sm font-medium">
                <span>{language}</span>
            </div>
            <div className="h-3 w-[80%] bg-[#4e4e4e3d] rounded-full overflow-hidden">
                <div
                    className={`h-full rounded-full bg-gradient-to-r bg-[#ffffffbb]`}
                    style={{
                        width: `${progress}%`,
                        transition: "width 1s ease-in-out",
                    }}
                />
            </div>
        </div>
    );
};

export default Ten;
