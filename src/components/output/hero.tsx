import { Badge } from "../ui/badge";

export default function Hero() {
  <section>
    <h1 className="text-4xl text-[#f3e8dc]">OUTPUT</h1>
    {/* <h1 className="text-4xl text-[#f3e8dc]">NUMBER GO UP TECHNOLOGY</h1> */}
    <h2></h2>
    <div>
      <p>
        World’s first cross chain smart contracting solution. Get paid in
        Bitcoin (BTC). Compute on BSV.
      </p>
    </div>
    <div>
      <p>
        With Output you can create auto-enforceable agreements on-chain and
        issue tokens tied the the contract outout. The system comb
      </p>
    </div>
    <div className="flex gap-2">
      <Badge className="h-6 bg-primary/80">
        <span className="text-base">01. </span>
        <span className="mt-auto"> Mint token</span>
      </Badge>
      <Badge className="h-6 bg-primary/80">
        2. Create auto-enforceable on-chain agreements
      </Badge>
      <Badge className="h-6 bg-primary/80">3. Payout to token holders.</Badge>
    </div>
    <div className="flex gap-2">
      <div className="flex justify-between rounded-md border w-56 cursor-pointer border-primary bg-popover p-4 hover:bg-accent hover:text-accent-foreground ">
        <div className="text-green-400">+</div>
        <div className="flex flex-col items-center gap-1 text-2xl">
          <p>Output Token</p>
          <p className="text-muted-foreground text-lg">Buy</p>
        </div>
      </div>
      <div className="flex justify-between rounded-md border w-56 cursor-pointer border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
        <div className="text-green-400">+</div>
        <div className="flex flex-col items-center gap-1 text-2xl">
          <p>Test Prototype</p>
          <p className="text-muted-foreground text-lg">Request Access</p>
        </div>
      </div>
    </div>
  </section>;
}
