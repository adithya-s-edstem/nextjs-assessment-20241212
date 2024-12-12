"use client"

import Button from "@/app/components/button";
import GithubLogo from '@/public/github-mark.svg'

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Button
        onClick={() => { }}
        label="Sign in with GitHub"
        icon={GithubLogo}
      />
    </div>
  )
}