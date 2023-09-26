import React from "react";
import judith from "../../Assets/judith.png";
import wissam from "../../Assets/wissam.png";

function Quote() {
  return (
    <>
      <div className="grid grid-cols-8 gap-5 w-[90%] mx-auto xl:h-[320px] lg:h-[320px] md:h-[320px] sm:h-full xs:h-full items-center">
        <div className="xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-3 xs:col-span-8">
          <img
            src={wissam}
            width={350}
            alt="Team Member"
            className="rounded-lg shadow-lg max-h-[300px] min-h-[300px]"
          />
        </div>

        <figure class="xl:col-span-5 lg:col-span-5 md:col-span-5 sm:col-span-5 xs:col-span-8">
          <svg
            class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p class="font-medium italic xl:text-lg lg:text-lg md:text-md sm:text-sm xs:text-[14px] text-gray-700">
              "At Hedone Access, we specialize in crafting extraordinary moments
              that transcend dreams into reality. Our vision is to redefine
              luxury with seamless, personalized experiences."
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
            <div class="flex items-center divide-x-2 divide-gray-500">
              <cite class="pr-3 text-sm text-gray-900">
                Wissam Serdoun
              </cite>
              <cite class="pl-3 text-sm text-gray-500">
                Co Founder - Hedone Access
              </cite>
            </div>
          </figcaption>
        </figure>
      </div>
      <div className="grid grid-cols-8 gap-5 w-[90%] mx-auto xl:h-[320px] lg:h-[320px] md:h-[320px] sm:h-full xs:h-full items-center xs:mt-3">
        <figure class="xl:col-span-5 lg:col-span-5 md:col-span-5 sm:col-span-5 xs:col-span-8">
          <svg
            class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
          <p class="font-medium italic xl:text-lg lg:text-lg md:text-md sm:text-sm xs:text-[14px] text-gray-700">
              "We excel in shaping dreams into reality, elevating life's finest
              moments. Our vision redefines luxury: personalized, seamless, and
              extraordinary. Step into a world where desires know no bounds."
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
            <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite class="pr-3 text-sm text-gray-900">
                Judith Marcou
              </cite>
              <cite class="pl-3 text-sm text-gray-500 dark:text-gray-400">
                Co Founder - Hedone Access
              </cite>
            </div>
          </figcaption>
        </figure>
        <div className="xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-3 xs:col-span-8">
          <img
            src={judith}
            width={350}
            alt="Team Member"
            className="rounded-lg shadow-lg max-h-[300px] min-h-[300px]"
          />
        </div>
      </div>
    </>
  );
}

export default Quote;
