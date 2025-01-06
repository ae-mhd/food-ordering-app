/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { formatCurrency } from "@/lib/formatters";

function AddToCartButton({ item }: { item: any }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          size="lg"
          className="mt-4 text-white rounded-full !px-8"
        >
          <span>Add To Cart</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[80vh] overflow-y-auto">
        <DialogHeader className="flex items-center">
          <Image src={item.image} alt={item.name} width={200} height={200} />
          <DialogTitle>{item.name}</DialogTitle>
          <DialogDescription className="text-center">
            {item.description}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-10">
          <div className="space-y-4 text-center">
            <Label htmlFor="pick-size">Pick your size</Label>
            {/* <PickSize
              sizes={item.sizes}
              item={item}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            /> */}
          </div>
          <div className="space-y-4 text-center">
            <Label htmlFor="add-extras">Any extras?</Label>
            {/* <Extras
              extras={item.extras}
              selectedExtras={selectedExtras}
              setSelectedExtras={setSelectedExtras}
            /> */}
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            // onClick={handleAddToCart}
            className="w-full h-10"
          >
            Add to cart {formatCurrency(68)}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddToCartButton;
