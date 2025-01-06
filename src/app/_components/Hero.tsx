import Link from "@/components/link";
import { buttonVariants } from "@/components/ui/button";
import { Routes } from "@/constants/enums";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
    <section className="section-gap">
      <div className="container grid grid-cols-1 md:grid-cols-2">
        <div className="md:py-12">
          <h1 className="text-4xl font-semibold">Slice into happiness</h1>
          <p className="text-accent my-4">
            Craving pizza? We&apos;ve got you covered with fresh ingredients,
            endless flavors, and the fastest delivery. Your perfect slice is
            just a tap away!Order now
          </p>
          <div className="flex items-center gap-4">
            <Link
              href={`/${Routes.MENU}`}
              className={`${buttonVariants({
                size: "lg",
              })} space-x-2 !px-4 !rounded-full uppercase`}
            >
              Order Now
              <ArrowRightCircle className={`!w-5 !h-5 `} />
            </Link>
            <Link
              href={`/${Routes.ABOUT}`}
              className="flex gap-2 items-center text-black hover:text-primary duration-200 transition-colors font-semibold"
            >
              learnMore
              <ArrowRightCircle className={`!w-5 !h-5`} />
            </Link>
          </div>
        </div>

        <div className="relative hidden md:block">
          <Image
            src="/assets/images/pizza.png"
            alt="pizza"
            fill
            loading="eager"
            priority
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;