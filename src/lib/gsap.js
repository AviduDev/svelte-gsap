import { gsap } from 'gsap/dist/gsap';
import { Flip } from 'gsap/dist/Flip'


if (typeof window !== "undefined") {
  gsap.registerPlugin(Flip);
}

export * from "gsap";
export { Flip };