"use client";

import * as RadixSlider from "@radix-ui/react-slider";
import { useState } from "react";

type SliderProps = {
  value?: number;
  onChange?: (value: number) => void;
};

const Slider = ({ value = 1, onChange }: SliderProps) => {
  const [thumbActive, setThumbActive] = useState(false);
  const [thumbFocused, setThumbFocused] = useState(false);
  const handleMouseDown = () => {
    setThumbActive(true);
  };
  const handleMouseUp = () => {
    setThumbActive(false);
  };

  const handleChange = (newValue: number[]) => {
    onChange?.(newValue[0]);
  };

  return (
    <RadixSlider.Root
      className="relative flex items-center select-none w-full touch-none h-10"
      defaultValue={[1]}
      value={[value]}
      onValueChange={handleChange}
      max={1}
      step={0.1}
      aria-label="Volume"
    >
      <RadixSlider.Track
        className="
        bg-neutral-600
        relative
        grow
        rounded-full
        h-[3px]
        cursor-pointer
        "
      >
        <RadixSlider.Range
          className="
            absolute
            bg-white
            rounded-full
            h-full
            "
        />
      </RadixSlider.Track>
      <RadixSlider.Thumb
        onPointerDown={handleMouseDown}
        onPointerUp={handleMouseUp}
        className={`block w-3 h-3 bg-white  rounded-full  hover:cursor-pointer ${
          thumbActive ? "scale-125" : ""
        } transition`}
        aria-label="Volume"
      />
    </RadixSlider.Root>
  );
};

export default Slider;
