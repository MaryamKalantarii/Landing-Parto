import { useState, type ReactNode } from "react";
import { Monitor, Smartphone } from "lucide-react";
import {
  heroAlt,
  heroAssets,
  heroScreenOptions,
  type HeroAssets,
} from "../config/heroConfig";

/* --------------------------------------------------------------------------
   ScreenImage — a replaceable image that lives INSIDE a device screen.
   The parent (.laptop__screen / .phone__screen) clips it to the exact screen
   shape; if the file is missing, a neutral placeholder is shown instead.
   -------------------------------------------------------------------------- */

interface ScreenImageProps {
  src: string;
  alt: string;
  fit: "cover" | "contain";
  position: string;
  placeholderLabel: string;
  icon: ReactNode;
}

function ScreenImage({ src, alt, fit, position, placeholderLabel, icon }: ScreenImageProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="screen-placeholder" role="img" aria-label={alt}>
        {icon}
        <span>{placeholderLabel}</span>
      </div>
    );
  }

  return (
    <img
      className="screen-img"
      src={src}
      alt={alt}
      decoding="async"
      draggable={false}
      style={{ objectFit: fit, objectPosition: position }}
      onError={() => setFailed(true)}
    />
  );
}

/* --------------------------------------------------------------------------
   DeviceShowcase — stone layer + laptop + phone.

   Layering (back → front):  hero stone background  →  laptop  →  phone
   (the full-bleed stone image now lives in Hero.tsx, behind the whole section).
   Position / scale are controlled by CSS variables in Hero.css
   (--laptop-scale, --phone-scale, --laptop-bottom, --phone-bottom, --phone-left).

   The elements carrying data-hero="…" are the ones GSAP animates; positioning
   lives on their parent wrappers so animation never fights layout transforms.
   -------------------------------------------------------------------------- */

interface DeviceShowcaseProps {
  assets?: HeroAssets;
}

export default function DeviceShowcase({ assets = heroAssets }: DeviceShowcaseProps) {
  return (
    <div className="showcase">
      {/* 1 — Laptop */}
      <div className="showcase__laptop">
        <div className="showcase__motion" data-hero="laptop">
          <div className="laptop">
            <div className="laptop__lid">
              <span className="laptop__camera" aria-hidden="true" />
              <div className="laptop__screen">
                <ScreenImage
                  key={assets.laptopScreen}
                  src={assets.laptopScreen}
                  alt={heroAlt.laptop}
                  fit={heroScreenOptions.laptop.fit}
                  position={heroScreenOptions.laptop.position}
                  placeholderLabel={heroAlt.laptopPlaceholder}
                  icon={<Monitor className="screen-placeholder__icon" strokeWidth={1.25} aria-hidden="true" />}
                />
              </div>
            </div>
            <div className="laptop__base" aria-hidden="true" />
            <div className="laptop__shadow" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* 2 — Phone */}
      <div className="showcase__phone">
        <div className="showcase__motion" data-hero="phone">
          <div className="phone">
            <span className="phone__btn phone__btn--action" aria-hidden="true" />
            <span className="phone__btn phone__btn--vol-up" aria-hidden="true" />
            <span className="phone__btn phone__btn--vol-down" aria-hidden="true" />
            <span className="phone__btn phone__btn--power" aria-hidden="true" />
            <div className="phone__body">
              <div className="phone__screen">
                <ScreenImage
                  key={assets.mobileScreen}
                  src={assets.mobileScreen}
                  alt={heroAlt.mobile}
                  fit={heroScreenOptions.mobile.fit}
                  position={heroScreenOptions.mobile.position}
                  placeholderLabel={heroAlt.mobilePlaceholder}
                  icon={<Smartphone className="screen-placeholder__icon" strokeWidth={1.25} aria-hidden="true" />}
                />
                <span className="phone__island" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
