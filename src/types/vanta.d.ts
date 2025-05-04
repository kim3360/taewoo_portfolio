declare module 'vanta/dist/vanta.fog.min' {
  type VantaEffect = {
    destroy: () => void;
  };

  const VANTA: (options: {
    el: HTMLElement;
    THREE: any;
    highlightColor?: number;
    midtoneColor?: number;
    lowlightColor?: number;
    baseColor?: number;
    blurFactor?: number;
    speed?: number;
    zoom?: number;
  }) => VantaEffect;

  export default VANTA;
}
