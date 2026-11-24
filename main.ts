import { mkdirSync, writeFileSync } from "node:fs";

// Vultures for Hire — one sentence pitching a bizarre startup that turns
// out to be a real business: leased vultures clean up roadkill for counties.
// The sentence names the odd thing sold (vulture crews), who pays (counties,
// per carcass), and why it holds together (a bird does in under an hour what
// a truck crew costs a dispatch to do).
const SENTENCE =
  "We lease vultures to highway departments: one bird strips a deer carcass in under an hour, so counties pay per carcass instead of dispatching a truck crew.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
