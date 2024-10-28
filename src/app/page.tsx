'use client'
import { Button } from "@/components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import Confetti from "react-confetti"; // Add confetti effect

export default function Home() {
  const { data: session, status } = useSession();
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSignIn = () => {
    signIn();
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000); // Confetti for 2 seconds
  };

   const handleSignOut = () => {
    signOut();
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000); 
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-yellow-300 via-pink-300 to-purple-300 flex flex-col justify-center items-center overflow-hidden">
      {showConfetti && <Confetti numberOfPieces={300} recycle={false} />}
      
      <header className="absolute top-4 left-4">
        <Image
          src="/logo.svg" 
          alt="Kanban Logo"
          width={80}
          height={80}
          className="rounded-full animate-spin-slow" // Add a slow spin to the logo for fun
        />
      </header>

      <main className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-6 animate-bounce">
          Welcome to Kanban Flow 🎉
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Organize your tasks with fun and ease!
        </p>

        {status === "authenticated" ? (
          <div className="flex flex-col items-center">
            <p className="mb-4 text-lg text-gray-700">
              Hey {session?.user?.name}, ready to conquer your tasks? 🚀
            </p>
            <Button 
              className="mb-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transform transition hover:scale-110"
              onClick={() => window.location.href = "/board"}
            >
              Go to your Board 🛠️
            </Button>
            <Button 
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full transform transition hover:scale-110"
              onClick={handleSignOut}
            >
              Sign out ✌️
            </Button>
          </div>
        ) : (
          <Button 
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full transform transition hover:scale-110"
            onClick={handleSignIn}
          >
            Get Started 🚀
          </Button>
        )}
      </main>

      <footer className="absolute bottom-4 text-gray-600">
        © {new Date().getFullYear()} Kanban Flow - Let’s make productivity fun! 🎨
      </footer>
    </div>
  );
}
