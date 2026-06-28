"use client"
import { githubLogin } from "@/features/auth/actions/github-login";
import { FaGithub } from "react-icons/fa";

const GithubLoginButton = () => {
    return (
        <button onClick={async () => githubLogin("github")} 
        className="w-full flex items-center gap-x-2 text-center gap-2 bg-black text-white px-4 py-2 rounded-md cursor-pointer">
            <FaGithub className="text-2xl text-gray-800" />
            <span className="text-green-50">Sign in with Github</span>   
        </button>
    )
}

export { GithubLoginButton }