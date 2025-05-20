import { Button } from "@/components/ui/buttons/Button";

export default function NotFound() {
  return (
    <div className="h-screen mt-4">
      <div className="flex font-space-grotesk overflow-hidden">
        <h1 className="text-[clamp(10rem,30vw,30rem)] mr-2 h-[clamp(120px,22vw,350px)] flex items-center">
          4
        </h1>
        <div className="mx-6 w-[clamp(120px,22vw,350px)] h-[clamp(120px,22vw,350px)] flex items-center justify-center bg-black p-2 lg:p-4 rounded-2xl ">
          <div className="w-[90%] h-[90%] bg-white rounded "></div>
        </div>
        <h1 className="text-[clamp(10rem,30vw,30rem)] h-[clamp(120px,22vw,350px)] flex items-center  ml-2 ">
          4
        </h1>
      </div>
      <div className="flex flex-col items-center mt-10">
        <h2 className="font-space-grotesk text-lg lg:text-2xl">
          Beklager. Siden du ser etter eksisterer ikke.
        </h2>
        <div>
          <Button className="rounded-lg mt-6 px-6" href="/" variant={"primary"}>
            Hjem
          </Button>
        </div>
      </div>
    </div>
  );
}
