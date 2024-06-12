export default async function HeroButtonGroup() {
  return (
    <div className="flex gap-2">
      <div className="flex justify-between rounded-md border w-56 cursor-pointer border-primary bg-popover p-4 hover:bg-accent hover:text-accent-foreground ">
        <div className="text-green-400">+</div>
        <div className="flex flex-col items-center gap-1 text-2xl">
          <p>B.O.B Token</p>
          <p className="text-muted-foreground text-lg">Buy</p>
        </div>
      </div>
      <div className="flex justify-between rounded-md border w-56 cursor-pointer border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
        <div className="text-green-400">+</div>
        <div className="flex flex-col items-center gap-1 text-2xl">
          <p>Prototype</p>
          <p className="text-muted-foreground text-lg">Request Early Access</p>
        </div>
      </div>
    </div>
  );
}
