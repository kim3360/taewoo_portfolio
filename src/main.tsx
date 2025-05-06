import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AnimatedCursor from "react-animated-cursor";
import VantaBackground from './VantaBackground.tsx'
// import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <AnimatedCursor
  innerSize={8}
  outerSize={40}
  color="100, 149, 237" // cornflowerblue 느낌
  outerAlpha={0.3}
  innerScale={1}
  outerScale={2}
  // hasBlendMode={true}
  clickables={[
    'a',
    'button',
    'input',
    'textarea',
    'select',
    '.link',
  ]}
/>
    <VantaBackground/>
    
  </StrictMode>,
)
