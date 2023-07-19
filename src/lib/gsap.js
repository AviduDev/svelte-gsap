import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin.js';


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

export * from "gsap";
export { MotionPathPlugin, ScrollTrigger };