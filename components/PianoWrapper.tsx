"use client";
import { useState } from "react";
import Piano, { availableNotes } from "./Piano";
import { Switch } from "./ui/switch";
import {
  SelectContent,
  SelectItem,
  Select,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import useMouse from "@/hooks/useMouse";

function PianoWrapper() {
  const [showLetterNames, setShowLetterNames] = useState(false);
  const [range, setRange] = useState(["C4", "C6"]);

  const { x, y } = useMouse();

  return (
    <section className="w-full h-full flex items-center justify-center flex-col gap-4 cursor-none">
      <div
        className="bg-piano bg-cover h-8 w-8 fixed left-0 top-0 z-50 pointer-events-none transition-all"
        style={{
          transform: `translate(${x - 16}px, ${y - 16}px)`,
        }}
      />
      <h1 className="text-4xl">Interactive Piano</h1>
      <div className="grid grid-cols-3 item-center justify-center gap-8 text-center">
        <div className="grid justify-center gap-4">
          <p>Letter Names</p>

          <Switch
            checked={showLetterNames}
            onCheckedChange={setShowLetterNames}
            className="ml-auto mr-auto"
          />
        </div>{" "}
        <div className="grid items-center gap-4">
          <p>Bottom Note</p>
          <Select onValueChange={(val) => setRange([val, range[1]])}>
            <SelectTrigger>
              <SelectValue placeholder={range[0]} />
            </SelectTrigger>
            <SelectContent>
              {availableNotes.map((note) => {
                return (
                  <SelectItem key={note} value={note}>
                    {note}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        <div className="grid items-center gap-4">
          <p>Top Note</p>
          <Select onValueChange={(val) => setRange([range[0], val])}>
            <SelectTrigger>
              <SelectValue placeholder={range[1]} />
            </SelectTrigger>
            <SelectContent>
              {availableNotes.map((note) => {
                return (
                  <SelectItem key={note} value={note}>
                    {note}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col bg-[#555555] p-5 rounded-2xl  justify-center items-center w-full">
        <Piano
          options={{ showLetters: showLetterNames, roundedKeys: true }}
          range={range}
        />
      </div>
    </section>
  );
}

export default PianoWrapper;
